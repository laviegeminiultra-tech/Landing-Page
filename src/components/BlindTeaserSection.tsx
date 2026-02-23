import { useInView } from '../hooks/useInView'
import './BlindTeaserSection.css'

const blurredCards = [
    { type: 'חריגת מדד', desc: 'הצמדת מדד שגויה — שימוש במדד בסיס לא נכון', amount: '₪2,800', severity: 'גבוהה' },
    { type: 'גילום שטח', desc: 'חישוב שטח משותף כולל שטחים שאינם בשימוש', amount: '₪5,700', severity: 'גבוהה' },
    { type: 'כפל חיוב ביטוחי', desc: 'פוליסת ביטוח מבנה משולמת על ידי בעל הנכס ומחויבת בנפרד', amount: '₪15,700', severity: 'קריטית' },
    { type: 'דמי ניהול מופרזים', desc: 'תעריף דמי ניהול חורג מהמקובל בשוק', amount: '₪12,900', severity: 'קריטית' },
]

const blurLevels = [3, 6, 10, 14]

export default function BlindTeaserSection() {
    const { ref, isVisible } = useInView()

    return (
        <section className="teaser section" id="teaser" ref={ref}>
            <div className="container">
                <h2 className={`teaser__title fade-in-up ${isVisible ? 'visible' : ''}`}>
                    ממצא לדוגמה מביקורת אמיתית
                </h2>

                {/* Visible finding card */}
                <div className={`teaser__visible-card card fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                    <div className="teaser__card-badge teaser__card-badge--free">🔓 ממצא חינם</div>
                    <div className="teaser__card-divider" />
                    <div className="teaser__card-row">
                        <span className="teaser__card-label">סוג:</span>
                        <span>הוצאה הונית שחויבה לשוכר</span>
                    </div>
                    <div className="teaser__card-row">
                        <span className="teaser__card-label">תיאור:</span>
                        <span>החלפת מדחס מיזוג מרכזי — בניין 7</span>
                    </div>
                    <div className="teaser__card-row">
                        <span className="teaser__card-label">סכום צפוי:</span>
                        <span className="font-mono">₪0</span>
                        <span className="teaser__card-separator">|</span>
                        <span className="teaser__card-label">חויב בפועל:</span>
                        <span className="font-mono" style={{ color: 'var(--accent-red)' }}>₪4,200</span>
                    </div>
                    <div className="teaser__card-row">
                        <span className="teaser__card-label">חריגה:</span>
                        <span className="font-mono" style={{ color: 'var(--accent-red)', fontWeight: 600 }}>+₪4,200</span>
                    </div>
                    <div className="teaser__card-row">
                        <span className="teaser__card-label">חומרה:</span>
                        <span style={{ color: 'var(--accent-gold)' }}>בינונית</span>
                    </div>
                </div>

                {/* Blurred cards */}
                <div className="teaser__blurred-wrap">
                    <div className="teaser__blurred-grid">
                        {blurredCards.map((card, i) => (
                            <div
                                key={i}
                                className={`teaser__blurred-card card fade-in-up ${isVisible ? 'visible' : ''}`}
                                style={{
                                    animationDelay: `${0.5 + i * 0.2}s`,
                                    filter: `blur(${blurLevels[i]}px)`,
                                }}
                            >
                                <div className="teaser__card-row">
                                    <span className="teaser__card-label">סוג:</span>
                                    <span>{card.type}</span>
                                </div>
                                <div className="teaser__card-row">
                                    <span className="teaser__card-label">תיאור:</span>
                                    <span>{card.desc}</span>
                                </div>
                                <div className="teaser__card-row">
                                    <span className="teaser__card-label">חריגה:</span>
                                    <span className="font-mono" style={{ color: 'var(--accent-red)' }}>{card.amount}</span>
                                </div>
                                <div className="teaser__card-row">
                                    <span className="teaser__card-label">חומרה:</span>
                                    <span>{card.severity}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Overlay */}
                    <div className="teaser__overlay">
                        <div className="teaser__overlay-content">
                            <span className="teaser__lock-icon">🔒</span>
                            <p className="teaser__overlay-text">
                                <span className="font-mono" style={{ display: 'inline' }}>4</span> ממצאים נוספים בשווי{' '}
                                <span className="font-mono teaser__overlay-amount">₪41,300</span>
                            </p>
                            <button className="btn btn-primary teaser__overlay-cta">
                                העלו את החוזה שלכם לצפייה בכל הממצאים ←
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
