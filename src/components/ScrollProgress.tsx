import { useEffect, useState } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)
    const [isGreen, setIsGreen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY / scrollHeight
            setProgress(Math.min(scrolled * 100, 100))

            // Turn green when pricing section is reached
            const pricingEl = document.getElementById('pricing')
            if (pricingEl) {
                const rect = pricingEl.getBoundingClientRect()
                setIsGreen(rect.top < window.innerHeight * 0.5)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={`scroll-progress ${isGreen ? 'scroll-progress--green' : ''}`}
            style={{ width: `${progress}%` }}
            aria-hidden="true"
        />
    )
}
