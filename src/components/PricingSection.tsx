import { useInView } from '../hooks/useInView'
import './PricingSection.css'

export default function PricingSection() {
    const { ref, isVisible } = useInView()

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
                    מצאנו את הכסף. איך תרצו לגבות אותו?
                </h2>

                <div className="pricing__grid">
                    {/* DIY Card */}
                    <div className={`card pricing__card fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
                        <h3 className="pricing__card-name">המסלול העצמאי</h3>
                        <div className="pricing__card-price font-mono">
                            ₪1,500 <span className="pricing__card-vat">+ מע&quot;מ</span>
                        </div>
                        <ul className="pricing__features">
                            <li><span className="pricing__check">✅</span> דוח ביקורת מלא</li>
                            <li><span className="pricing__check">✅</span> חבילת ראיות <span className="font-latin">Excel</span></li>
                            <li><span className="pricing__check">✅</span> קישורים קריפטוגרפיים למקור</li>
                            <li><span className="pricing__check">✅</span> תבנית מכתב דרישה</li>
                        </ul>
                        <button className="btn btn-navy pricing__btn">
                            הפק דוח עכשיו →
                        </button>
                    </div>

                    {/* Legal Strike Card */}
                    <div className={`card pricing__card pricing__card--recommended fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                        <div className="pricing__badge">מומלץ</div>
                        <h3 className="pricing__card-name">תקיפה משפטית</h3>
                        <div className="pricing__card-price font-mono">
                            ₪2,500 <span className="pricing__card-vat">+ מע&quot;מ</span>
                        </div>
                        <ul className="pricing__features">
                            <li><span className="pricing__check">✅</span> הכל מהמסלול העצמאי</li>
                            <li><span className="pricing__check">✅</span> מכתב התראה משפטי</li>
                            <li><span className="pricing__check">✅</span> הצעת פשרה (זיכוי שכר עתידי)</li>
                            <li><span className="pricing__check">✅</span> סירוב אישור השתק</li>
                            <li><span className="pricing__check">✅</span> ליווי מלא עד לגבייה</li>
                        </ul>
                        <button className="btn btn-green pricing__btn">
                            הפעל פרוטוקול תקיפה →
                        </button>
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
