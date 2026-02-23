import { useIsMobile } from '../hooks/useIsMobile'
import { useState } from 'react'
import EmailModal from './EmailModal'
import './FinalCtaSection.css'

export default function FinalCtaSection() {
    const isMobile = useIsMobile()
    const [showModal, setShowModal] = useState(false)

    const handleDesktopCta = () => {
        // On desktop, scroll up to Hero to start the flow
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="final-cta section" id="final-cta">
            <div className="final-cta__border" />
            <div className="container final-cta__content">
                <h2 className="final-cta__title">
                    כל חודש שעובר — אתם מפסידים עוד כסף.
                </h2>

                <button
                    className="btn btn-primary final-cta__btn"
                    onClick={isMobile ? () => setShowModal(true) : handleDesktopCta}
                >
                    {isMobile ? 'שלחו לי לינק העלאה למייל המשרדי ←' : 'התחילו ביקורת עכשיו ←'}
                </button>

                {isMobile && (
                    <button className="btn btn-navy final-cta__btn" onClick={() => setShowModal(true)} style={{ marginBlockStart: '16px' }}>
                        שלחו לי לינק העלאה למייל המשרדי ←
                    </button>
                )}

                <p className="final-cta__contact text-muted">
                    audit@opexguard.co.il · העלאת מסמכים מאובטחת
                </p>
            </div>

            {showModal && <EmailModal onClose={() => setShowModal(false)} />}
        </section>
    )
}
