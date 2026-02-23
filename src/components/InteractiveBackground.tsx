import { useRef, useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import './InteractiveBackground.css'

export default function InteractiveBackground() {
    const isMobile = useIsMobile()
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: 0, y: 0, active: false })
    const animFrameRef = useRef<number>(0)
    const particlesRef = useRef<{ x: number; y: number; opacity: number; scale: number; born: number }[]>([])

    useEffect(() => {
        if (isMobile) return

        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize, { passive: true })

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY, active: true }

            // Spawn subtle particles
            if (Math.random() > 0.65) {
                particlesRef.current.push({
                    x: e.clientX + (Math.random() - 0.5) * 50,
                    y: e.clientY + (Math.random() - 0.5) * 50,
                    opacity: 0.12 + Math.random() * 0.08,
                    scale: 0.5 + Math.random() * 1.5,
                    born: Date.now(),
                })
            }
            if (particlesRef.current.length > 25) {
                particlesRef.current = particlesRef.current.slice(-18)
            }
        }

        document.addEventListener('mousemove', handleMouseMove, { passive: true })

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const now = Date.now()

            // Mouse glow
            if (mouseRef.current.active) {
                const { x, y } = mouseRef.current
                const g = ctx.createRadialGradient(x, y, 0, x, y, 250)
                g.addColorStop(0, 'rgba(59, 130, 246, 0.06)')
                g.addColorStop(0.5, 'rgba(59, 130, 246, 0.02)')
                g.addColorStop(1, 'transparent')
                ctx.fillStyle = g
                ctx.beginPath()
                ctx.arc(x, y, 250, 0, Math.PI * 2)
                ctx.fill()
            }

            // Particles
            for (let i = particlesRef.current.length - 1; i >= 0; i--) {
                const p = particlesRef.current[i]
                const age = (now - p.born) / 2500
                if (age > 1) {
                    particlesRef.current.splice(i, 1)
                    continue
                }
                const a = p.opacity * (1 - age * age)
                ctx.beginPath()
                ctx.arc(p.x, p.y, 1.5 * p.scale, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(59, 130, 246, ${a})`
                ctx.fill()
            }

            animFrameRef.current = requestAnimationFrame(draw)
        }

        animFrameRef.current = requestAnimationFrame(draw)

        return () => {
            cancelAnimationFrame(animFrameRef.current)
            document.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', resize)
        }
    }, [isMobile])

    if (isMobile) return null

    return (
        <canvas
            ref={canvasRef}
            className="interactive-bg"
            aria-hidden="true"
        />
    )
}
