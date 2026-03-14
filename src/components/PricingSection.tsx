import { useInView } from '../hooks/useInView'
import './PricingSection.css'

/* Animated SVG Checkmark (Round 22) */
function AnimatedCheck({ delay, isVisible }: { delay: number; isVisible: boolean }) {
    return (
        <svg
            className={`pricing__check-svg ${isVisible ? 'pricing__check-svg--active' : ''}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ animationDelay: `${delay}s` }}
        >
            <circle cx="10" cy="10" r="9" stroke="var(--accent-green)" strokeWidth="1.5" fill="rgba(16, 185, 129, 0.1)" />
            <path
                d="M6 10l3 3 5-6"
                stroke="var(--accent-green)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="20"
                strokeDashoffset={isVisible ? '0' : '20'}
                className="pricing__check-path"
                style={{ transitionDelay: `${delay}s` }}
            />
        </svg>
    )
}

export default function PricingSection() {
    const { ref, isVisible } = useInView()

    const diyFeatures = [
        'דוח ביקורת מלא',
        <>חבילת ראיות <span className="font-latin">Excel</span></>,
        'קישורים קריפטוגרפיים למקור',
        'תבנית מכתב דרישה',
    ]

    const legalFeatures = [
        'הכל מהמסלול העצמאי',
        'מכתב התראה משפטי',
        'הצעת פשרה (זיכוי שכר עתידי)',
        'סירוב אישור השתק',
        'ליווי מלא עד לגבייה',
    ]

    return (
        <section className="pricing section" id="pricing" ref={ref}>
            <div className="container">
                {/* ROI Bar */}
                <div className={`pricing__roi fade-in-up ${isVisible ? 'visible' : ''}`}>
                    <span>ממוצע חיוב יתר: <span className="font-mono pricing__roi-num">₪45,000+</span></span>
                    <span className="pricing__roi-arrow">←</span>
                    <span>עלות ביקורת: <span className="font-mono pricing__roi-num">₪1,500</span></span>
                    <span className="pricing__roi-arrow">←</span>
                    <span><span className="font-latin">ROI</span>: <span className={`font-mono pricing__roi-highlight ${isVisible ? 'pricing__roi-highlight--pulse' : ''}`}>פי 30</span></span>
                </div>

                <h2 className={`pricing__title fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
                    הכסף שלכם מחכה. בחרו מסלול גבייה.
                </h2>

                <div className="pricing__grid">
                    {/* DIY Card */}
                    <div className={`card pricing__card fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                        <h3 className="pricing__card-name">המסלול העצמאי</h3>
                        <div className="pricing__card-price font-mono">
                            ₪1,500 <span className="pricing__card-vat">+ מע&quot;מ</span>
                        </div>
                        <ul className="pricing__features">
                            {diyFeatures.map((feature, i) => (
                                <li
                                    key={i}
                                    className={`pricing__feature-item ${isVisible ? 'pricing__feature-item--active' : ''}`}
                                    style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                                >
                                    <AnimatedCheck delay={0.7 + i * 0.15} isVisible={isVisible} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="https://app.opexguard.co.il" className="btn btn-navy pricing__btn" target="_blank" rel="noopener noreferrer">
                            הפק דוח עכשיו →
                        </a>
                    </div>

                    {/* Legal Strike Card */}
                    <div className={`card pricing__card pricing__card--recommended fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                        <div className="pricing__badge">מומלץ</div>
                        <h3 className="pricing__card-name">תקיפה משפטית</h3>
                        <div className="pricing__card-price font-mono">
                            ₪2,500 <span className="pricing__card-vat">+ מע&quot;מ</span>
                        </div>
                        <ul className="pricing__features">
                            {legalFeatures.map((feature, i) => (
                                <li
                                    key={i}
                                    className={`pricing__feature-item ${isVisible ? 'pricing__feature-item--active' : ''}`}
                                    style={{ animationDelay: `${0.7 + i * 0.1}s` }}
                                >
                                    <AnimatedCheck delay={0.8 + i * 0.15} isVisible={isVisible} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="https://app.opexguard.co.il" className="btn btn-green pricing__btn" target="_blank" rel="noopener noreferrer">
                            הפעל פרוטוקול תקיפה →
                        </a>
                    </div>
                </div>

                <p className={`pricing__footer text-secondary fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.5s' }}>
                    💳 תשלום בהעברה בנקאית
                    <br />
                    הסריקה הראשונית חינם — תשלום רק אם נמצא כסף.
                </p>
            </div>
        </section>
    )
}
