import { useInView } from '../hooks/useInView'
import './EngineSection.css'

const steps = [
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 8v16M16 20l8 4 8-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 28c0-2 1-3 3-3h26c2 0 3 1 3 3v8c0 2-1 3-3 3H11c-2 0-3-1-3-3v-8z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        label: 'סיווג והזנה',
        desc: 'העלאת חוזי שכירות, דוחות התחשבנות וכרטסות ספקים',
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M18 24c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M16 18l-4-4M32 18l4-4M16 30l-4 4M32 30l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        label: 'חילוץ משפטי',
        desc: 'ה-AI מחלץ חוקי הצמדה, החרגות CAPEX ויחסי ברוטו/נטו',
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="10" y="8" width="28" height="32" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M16 16h16M16 22h16M16 28h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 28l3 3 5-7" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        label: 'הצלבה רשמית',
        desc: 'משיכת מדד מחירים לצרכן בזמן אמת והרצת 9 בדיקות מתמטיות',
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M12 8h18l6 6v26a2 2 0 01-2 2H12a2 2 0 01-2-2V10a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M30 8v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 26l4 4 8-10" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        label: 'הפקת ראיות',
        desc: 'קובץ Excel עם קישורים קריפטוגרפיים למסמכי המקור',
    },
]

export default function EngineSection() {
    const { ref, isVisible } = useInView()

    return (
        <section className="engine section" id="engine" ref={ref}>
            <div className="container">
                <h2 className={`engine__title fade-in-up ${isVisible ? 'visible' : ''}`}>
                    מתמטיקה דטרמיניסטית. אפס ניחושים.
                </h2>

                <div className="engine__pipeline">
                    {/* SVG Pipeline line */}
                    <svg className={`engine__line engine__line--desktop ${isVisible ? 'engine__line--active' : ''}`} viewBox="0 0 1000 4" preserveAspectRatio="none" aria-hidden="true">
                        <line x1="0" y1="2" x2="1000" y2="2" stroke="var(--border-subtle)" strokeWidth="2" />
                        <line x1="0" y1="2" x2="1000" y2="2" stroke="var(--accent-blue)" strokeWidth="2"
                            strokeDasharray="1000" strokeDashoffset="1000" className="engine__line-fill" />
                    </svg>
                    <svg className={`engine__line engine__line--mobile ${isVisible ? 'engine__line--active' : ''}`} viewBox="0 0 4 600" preserveAspectRatio="none" aria-hidden="true">
                        <line x1="2" y1="0" x2="2" y2="600" stroke="var(--border-subtle)" strokeWidth="2" />
                        <line x1="2" y1="0" x2="2" y2="600" stroke="var(--accent-blue)" strokeWidth="2"
                            strokeDasharray="600" strokeDashoffset="600" className="engine__line-fill" />
                    </svg>

                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`engine__step ${isVisible ? 'engine__step--active' : ''}`}
                            style={{ animationDelay: `${0.5 + i * 0.5}s` }}
                        >
                            <div className="engine__icon">{step.icon}</div>
                            <div className="engine__label">{step.label}</div>
                            <div className="engine__desc text-secondary">{step.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
