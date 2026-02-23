import { useInView } from '../hooks/useInView'
import './AgitationSection.css'

const cards = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 4L4 12v16l16 8 16-8V12L20 4z" stroke="var(--accent-red)" strokeWidth="2" fill="none" />
                <path d="M14 16l12 8M26 16l-12 8" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'הברחת CAPEX לתוך ה-OPEX',
        body: 'החלפת מדחסי מיזוג, שיפוץ חזיתות, תיקוני גג — אלו חובת המשכיר. בפועל, הם מגולגלים לדמי הניהול שלכם.',
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M6 10l8 10-4 8 12-4 8 8" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="30" cy="32" r="3" stroke="var(--accent-red)" strokeWidth="2" fill="none" />
            </svg>
        ),
        title: 'רולטת "המדד הידוע"',
        body: 'כשהמדד יורד, חברות ניהול "שוכחות" את רצפת המדד שבחוזה וממשיכות לחייב לפי מקדם פיקטיבי.',
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M8 32L32 8" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 32l8-4M32 8l-4 8" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" />
                <rect x="12" y="16" width="16" height="16" stroke="var(--accent-red)" strokeWidth="2" fill="none" rx="2" />
            </svg>
        ),
        title: 'מלכודת גילום השטחים',
        body: 'הבניין חצי ריק? נוסחאות שטח מעוותות מאלצות אתכם לסבסד ארנונה וביטוח של משרדים ריקים.',
    },
]

export default function AgitationSection() {
    const { ref, isVisible } = useInView()

    return (
        <section className="agitation section" id="agitation" ref={ref}>
            <div className="container">
                <h2 className={`agitation__title fade-in-up ${isVisible ? 'visible' : ''}`}>
                    העיוורון המערכתי של חברות הניהול
                </h2>
                <p className={`agitation__intro text-secondary fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
                    רואה החשבון שלכם מוודא שהחשבונית תואמת לתשלום. הוא לא מנתח חוזה
                    בן 80 עמודים מ-<span className="font-mono">2021</span> מול תשומות הלמ&quot;ס ב-<span className="font-mono">2026</span>. חברות הניהול מנצלות
                    את הפער הזה:
                </p>

                <div className="agitation__grid">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`card agitation__card fade-in-up ${isVisible ? 'visible' : ''}`}
                            style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                        >
                            <div className="agitation__icon">{card.icon}</div>
                            <h3 className="agitation__card-title">{card.title}</h3>
                            <p className="agitation__card-body text-secondary">{card.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
