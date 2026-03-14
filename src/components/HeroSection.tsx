import { useEffect, useState } from 'react'
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

/* Trust Bar */
function TrustBar() {
    const isMobile = useIsMobile()

    return (
        <div className="hero__trust-bar fade-in-up visible delay-4">
            <div className="hero__trust-item">
                <span className="hero__trust-check">✓</span>
                <span>מחובר ללמ&quot;ס</span>
            </div>
            {!isMobile && <div className="hero__trust-sep">·</div>}
            <div className="hero__trust-item">
                <span className="hero__trust-check">✓</span>
                <span>בנק ישראל</span>
            </div>
            {!isMobile && <div className="hero__trust-sep">·</div>}
            <div className="hero__trust-item">
                <span className="hero__trust-check">✓</span>
                <span className="font-latin">AES-256</span>
            </div>
            {!isMobile && <div className="hero__trust-sep">·</div>}
            <div className="hero__trust-item">
                <span className="hero__trust-check">✓</span>
                <span className="font-latin">GDPR</span>
            </div>
        </div>
    )
}

export default function HeroSection() {
    return (
        <section className="hero section" id="hero">
            <div className="hero__content container">
                {/* Context badge */}
                <div className="hero__badge fade-in-up visible">
                    <span className="hero__badge-icon">🔍</span>
                    <span>ביקורת חוזה שכירות מסחרית</span>
                </div>

                <h1 className="hero__title fade-in-up visible delay-1">
                    המשכיר שלכם
                    <br />
                    <span className="hero__title-accent">גובה יותר מדי.</span>
                </h1>

                <p className="hero__subtitle fade-in-up visible delay-2">
                    <span className="font-latin">OpexGuard</span> מצליב חוזה שכירות וחשבוניות מול נתוני הלמ&quot;ס
                    ובנק ישראל — ומאתר חיובי <span className="font-latin">CAPEX</span> בלתי חוקיים,
                    פערי מדד וגילום שטחים. אוטומטית.
                </p>

                {/* Money highlight card */}
                <div className="hero__money-card fade-in-up visible delay-3">
                    <span className="font-mono hero__money-text">
                        ₪<CountUp target={45000} duration={2000} />+
                    </span>
                    <span className="hero__money-label">חיוב יתר ממוצע לחוזה בשנה</span>
                </div>

                <div className="hero__cta-wrap fade-in-up visible delay-3">
                    <a href="https://app.opexguard.co.il" className="btn btn-primary hero__cta" id="hero-cta" target="_blank" rel="noopener noreferrer">
                        גלו כמה אתם מפסידים ←
                    </a>
                </div>
            </div>

            {/* Trust Bar */}
            <TrustBar />

            {/* Scroll indicator */}
            <div className="hero__scroll-hint">
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                    <path d="M1 1L10 9L19 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
        </section>
    )
}
