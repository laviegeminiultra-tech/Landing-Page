import { useEffect, useState, useRef, useCallback } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import './HeroSection.css'

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        let cancelled = false
        let rafId = 0

        const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

        const timeout = setTimeout(() => {
            const startTime = performance.now()

            const animate = (now: number) => {
                if (cancelled) return
                const elapsed = now - startTime
                const progress = Math.min(elapsed / duration, 1)
                const easedProgress = easeOutQuart(progress)
                const current = Math.round(easedProgress * target)
                setDisplay(current)

                if (progress < 1) {
                    rafId = requestAnimationFrame(animate)
                }
            }

            rafId = requestAnimationFrame(animate)
        }, 800)

        return () => {
            cancelled = true
            clearTimeout(timeout)
            cancelAnimationFrame(rafId)
            setDisplay(0)
        }
    }, [target, duration])

    return <span>{display.toLocaleString()}</span>
}

/* Money Drain Counter - Round 1 */
function MoneyDrain() {
    const [amount, setAmount] = useState(0)
    const startTimeRef = useRef(Date.now())
    const ratePerMs = 45000 / 365 / 24 / 60 / 60 / 1000 // ~₪1.43/sec

    useEffect(() => {
        const tick = () => {
            const elapsed = Date.now() - startTimeRef.current
            setAmount(elapsed * ratePerMs)
            rafRef.current = requestAnimationFrame(tick)
        }
        const rafRef = { current: requestAnimationFrame(tick) }
        return () => cancelAnimationFrame(rafRef.current)
    }, [])

    // Glow intensity increases over time (caps at 30s)
    const glowIntensity = Math.min(amount / 50, 1)

    return (
        <div className="hero__drain" aria-live="polite" aria-atomic="true">
            <span className="hero__drain-label">₪</span>
            <span
                className="hero__drain-amount font-mono"
                style={{
                    textShadow: `0 0 ${10 + glowIntensity * 20}px rgba(239, 68, 68, ${0.3 + glowIntensity * 0.4})`,
                }}
            >
                {amount.toFixed(2)}
            </span>
            <span className="hero__drain-label"> שנשרפו מאז שנכנסתם לדף הזה</span>
        </div>
    )
}

/* Number Rain - Round 7 */
function NumberRain() {
    const columns = 12
    const amounts = ['₪2,400', '₪5,700', '₪800', '₪14,200', '₪3,100', '₪9,800', '₪45,000', '₪1,500', '₪22,500', '₪7,650', '₪4,200', '₪12,900']

    return (
        <div className="hero__rain" aria-hidden="true">
            {Array.from({ length: columns }).map((_, i) => (
                <div
                    key={i}
                    className="hero__rain-col"
                    style={{
                        animationDelay: `${-Math.random() * 20}s`,
                        animationDuration: `${15 + Math.random() * 15}s`,
                        left: `${(i / columns) * 100}%`,
                        opacity: 0.03 + Math.random() * 0.03,
                    }}
                >
                    {Array.from({ length: 8 }).map((_, j) => (
                        <span key={j} className="font-mono">{amounts[(i + j) % amounts.length]}</span>
                    ))}
                </div>
            ))}
        </div>
    )
}

/* Trust Bar - Round 19 */
function TrustBar() {
    return (
        <div className="hero__trust-bar fade-in-up visible delay-4">
            <div className="hero__trust-item">
                <span className="hero__trust-check">✓</span>
                <span>מחובר ללמ&quot;ס</span>
            </div>
            <div className="hero__trust-sep">·</div>
            <div className="hero__trust-item">
                <span className="hero__trust-check">✓</span>
                <span>מחובר לבנק ישראל</span>
            </div>
            <div className="hero__trust-sep">·</div>
            <div className="hero__trust-item">
                <span className="hero__trust-check">✓</span>
                <span>הצפנת <span className="font-latin">AES-256</span></span>
            </div>
            <div className="hero__trust-sep">·</div>
            <div className="hero__trust-item">
                <span className="hero__trust-check">✓</span>
                <span className="font-latin">GDPR Compliant</span>
            </div>
        </div>
    )
}

export default function HeroSection() {
    const isMobile = useIsMobile()
    const heroRef = useRef<HTMLElement>(null)
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (isMobile) return
        const rect = heroRef.current?.getBoundingClientRect()
        if (!rect) return
        setMousePos({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
        })
    }, [isMobile])

    const scrollToFinalCta = () => {
        document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero section" id="hero" ref={heroRef} onMouseMove={handleMouseMove}>
            {/* Number Rain - desktop only */}
            {!isMobile && <NumberRain />}

            {/* Interactive mouse glow - desktop only */}
            {!isMobile && (
                <div
                    className="hero__glow"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(59, 130, 246, 0.08), transparent 60%)`,
                    }}
                    aria-hidden="true"
                />
            )}

            {/* Background number grid - desktop only */}
            {!isMobile && (
                <div className="hero__grid" aria-hidden="true">
                    <div className="hero__grid-col">
                        <span>₪14,200</span><span>+₪3,800</span><span>מדד: 104.5</span>
                        <span>₪8,700</span><span>+₪2,100</span><span>מדד: 102.3</span>
                        <span>₪22,500</span><span>+₪5,400</span><span>מדד: 106.1</span>
                        <span>₪14,200</span><span>+₪3,800</span><span>מדד: 104.5</span>
                    </div>
                    <div className="hero__grid-col hero__grid-col--offset">
                        <span>+₪5,400</span><span>מדד: 106.1</span><span>₪22,500</span>
                        <span>+₪1,200</span><span>מדד: 99.8</span><span>₪31,000</span>
                        <span>+₪7,800</span><span>מדד: 103.7</span><span>₪18,400</span>
                        <span>+₪5,400</span><span>מדד: 106.1</span><span>₪22,500</span>
                    </div>
                    <div className="hero__grid-col hero__grid-col--offset2">
                        <span>₪31,000</span><span>+₪7,800</span><span>מדד: 103.7</span>
                        <span>₪18,400</span><span>+₪2,900</span><span>מדד: 101.2</span>
                        <span>₪45,000</span><span>+₪9,200</span><span>מדד: 105.8</span>
                        <span>₪31,000</span><span>+₪7,800</span><span>מדד: 103.7</span>
                    </div>
                </div>
            )}

            <div className="hero__content container">
                <h1 className="hero__title fade-in-up visible">
                    המשכיר שלכם גובה יותר מדי.
                </h1>

                <p className="hero__subtitle fade-in-up visible delay-1">
                    <span className="font-latin">OpexGuard</span> מצליב את חוזה השכירות והחשבוניות שלכם מול נתוני הלמ&quot;ס
                    ובנק ישראל — ומאתר חיובי <span className="font-latin">CAPEX</span> בלתי חוקיים, פערי מדד, וגילום
                    שטחים שגוי. אוטומטית.
                </p>

                <div className="hero__money fade-in-up visible delay-2">
                    <span className="font-mono hero__money-text">
                        בממוצע ₪<CountUp target={45000} duration={2000} />+  בחיובי יתר לכל חוזה, בכל שנה.
                    </span>
                </div>

                {/* Money Drain Counter - Round 1 */}
                <MoneyDrain />

                {/* Client Count - Round 20 */}
                <div className="hero__clients fade-in-up visible delay-3">
                    <span className="font-mono hero__clients-num">
                        מעל <CountUp target={2400} duration={2500} /> חוזים נבדקו
                    </span>
                </div>

                <div className="hero__cta-wrap fade-in-up visible delay-3">
                    <button className="btn btn-primary hero__cta" id="hero-cta" onClick={scrollToFinalCta}>
                        גלו כמה אתם מפסידים ←
                    </button>
                    <p className="hero__trust text-muted">
                        מחובר בזמן אמת ללמ&quot;ס ובנק ישראל · ללא התחייבות · אבטחת מידע מלאה
                    </p>
                </div>
            </div>

            {/* Trust Bar - Round 19 */}
            <TrustBar />
        </section>
    )
}
