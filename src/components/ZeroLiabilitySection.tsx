import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import './ZeroLiabilitySection.css'

const faqs = [
    {
        q: '"מה אם המשכיר יפעיל את הערבות הבנקאית?"',
        a: 'לא יקרה. דמי השכירות משולמים כסדרם. אנחנו תובעים החזר בנפרד — בעילת עשיית עושר. הערבות לא רלוונטית כל עוד אתם משלמים.',
    },
    {
        q: '"יש השלכות מס?"',
        a: 'אין. החזרים מוגדרים כפיצוי בגין הפרת חוזה — פטורים ממע"מ לפי הנחיות רשות המיסים. אין פתיחת שנות מס.',
    },
    {
        q: '"זה יהרוס את היחסים עם בעל הנכס?"',
        a: 'הידיים שלכם נקיות. התביעה מופנית לרשלנות חברת הניהול, לא למשכיר. ביטוח האחריות המקצועית (E&O) של חברת הניהול מכסה את ההחזר.',
    },
]

export default function ZeroLiabilitySection() {
    const { ref, isVisible } = useInView()
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <section className="zero section" id="zero-liability" ref={ref}>
            <div className="container">
                <h2 className={`zero__title fade-in-up ${isVisible ? 'visible' : ''}`}>
                    אפס חשיפה. אפס סיכון.
                </h2>

                <div className="zero__accordions">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`zero__item card fade-in-up ${isVisible ? 'visible' : ''} ${openIndex === i ? 'zero__item--open' : ''}`}
                            style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                        >
                            <button className="zero__question" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                                <span>{faq.q}</span>
                                <svg className="zero__chevron" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="zero__answer-wrap">
                                <div className="zero__answer text-secondary">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
