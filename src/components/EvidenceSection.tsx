import { useInView } from '../hooks/useInView'
import { useIsMobile } from '../hooks/useIsMobile'
import './EvidenceSection.css'

const rows = [
    { label: 'דמי ניהול', charged: '₪14,500', actual: '₪12,100', diff: '+₪2,400' },
    { label: 'הצמדת מדד', charged: '₪8,200', actual: '₪7,650', diff: '+₪550' },
    { label: 'ביטוח מבנה', charged: '₪3,100', actual: '₪0', diff: '+₪3,100' },
]

export default function EvidenceSection() {
    const { ref, isVisible } = useInView()
    const isMobile = useIsMobile()

    return (
        <section className="evidence section" id="evidence" ref={ref}>
            <div className="container">
                <h2 className={`evidence__title fade-in-up ${isVisible ? 'visible' : ''}`}>
                    קביל בבית משפט. לא חוות דעת — ראיות.
                </h2>

                <div className="evidence__visual">
                    {/* Excel mockup */}
                    <div className={`evidence__excel ${isVisible ? 'evidence__excel--active' : ''}`}>
                        <div className="evidence__excel-header">
                            <div className="evidence__excel-dot" />
                            <div className="evidence__excel-dot evidence__excel-dot--yellow" />
                            <div className="evidence__excel-dot evidence__excel-dot--green" />
                            <span className="evidence__excel-title font-mono">audit_report.xlsx</span>
                        </div>
                        <table className="evidence__table">
                            <thead>
                                <tr>
                                    <th>סעיף</th>
                                    <th>גבייה</th>
                                    <th>בפועל</th>
                                    <th>חריגה</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr key={i} className={`evidence__row ${isVisible ? 'evidence__row--active' : ''}`}
                                        style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                                        <td>{row.label}</td>
                                        <td className="font-mono">{row.charged}</td>
                                        <td className="font-mono">{row.actual}</td>
                                        <td className="font-mono evidence__diff">{row.diff}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Trace line SVG */}
                    {!isMobile ? (
                        <svg className={`evidence__trace ${isVisible ? 'evidence__trace--active' : ''}`}
                            viewBox="0 0 120 200" preserveAspectRatio="none" aria-hidden="true">
                            <path d="M0,40 C40,40 80,100 120,100"
                                stroke="var(--accent-green)" strokeWidth="2" fill="none"
                                strokeDasharray="200" strokeDashoffset="200"
                                className="evidence__trace-path" />
                            <circle r="4" fill="var(--accent-green)" className="evidence__trace-dot">
                                <animateMotion dur="1s" begin="2.3s" fill="freeze" repeatCount="1">
                                    <mpath href="#evidenceTracePath" />
                                </animateMotion>
                            </circle>
                            <path id="evidenceTracePath" d="M0,40 C40,40 80,100 120,100" fill="none" />
                        </svg>
                    ) : (
                        <div className="evidence__arrow-down" aria-hidden="true">
                            <svg width="24" height="48" viewBox="0 0 24 48">
                                <path d="M12 0v40M6 34l6 8 6-8" stroke="var(--accent-green)" strokeWidth="2" fill="none" strokeLinecap="round" />
                            </svg>
                        </div>
                    )}

                    {/* PDF mockup */}
                    <div className={`evidence__pdf ${isVisible ? 'evidence__pdf--active' : ''}`}>
                        <div className="evidence__pdf-header">
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                                <path d="M2 0h12l6 6v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z" fill="#1E2D4A" />
                                <path d="M14 0v6h6" fill="#2a3f66" />
                                <text x="4" y="16" fontSize="6" fill="#64748B" fontFamily="var(--font-hebrew)">PDF</text>
                            </svg>
                            <span className="evidence__pdf-title font-mono">contract_2024.pdf</span>
                        </div>
                        <div className="evidence__pdf-body">
                            <div className="evidence__pdf-line" />
                            <div className="evidence__pdf-line evidence__pdf-line--short" />
                            <div className="evidence__pdf-line" />
                            <div className="evidence__pdf-highlight">
                                <div className="evidence__pdf-line evidence__pdf-line--highlight" />
                                <div className="evidence__pdf-line evidence__pdf-line--highlight evidence__pdf-line--short" />
                            </div>
                            <div className="evidence__pdf-line" />
                            <div className="evidence__pdf-line evidence__pdf-line--short" />
                        </div>
                    </div>
                </div>

                <p className={`evidence__copy text-secondary fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.6s' }}>
                    כל שקל בדוח מקושר ישירות לפסקה המדויקת בחוזה המקור.
                    <br />
                    רואה החשבון שלכם יכול לאמת כל ממצא בלחיצה.
                </p>
            </div>
        </section>
    )
}
