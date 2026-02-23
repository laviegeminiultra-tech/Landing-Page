import { useIsMobile } from '../hooks/useIsMobile'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'
import EmailModal from './EmailModal'
import './FinalCtaSection.css'

export default function FinalCtaSection() {
    const isMobile = useIsMobile()
    const { ref, isVisible } = useInView()
    const [showModal, setShowModal] = useState(false)

    const handleDesktopCta = () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="final-cta section" id="final-cta" ref={ref}>
            <div className="final-cta__border" />
            <div className="container final-cta__content">
                <h2 className={`final-cta__title fade-in-up ${isVisible ? 'visible' : ''}`}>
                    כל חודש שעובר — אתם מפסידים עוד כסף.
                </h2>

                <button
                    className={`btn btn-primary final-cta__btn fade-in-up ${isVisible ? 'visible' : ''}`}
                    style={{ animationDelay: '0.2s' }}
                    onClick={isMobile ? () => setShowModal(true) : handleDesktopCta}
                >
                    {isMobile ? 'שלחו לי לינק העלאה למייל המשרדי ←' : 'התחילו ביקורת עכשיו ←'}
                </button>

                {isMobile && (
                    <button className={`btn btn-navy final-cta__btn fade-in-up ${isVisible ? 'visible' : ''}`} onClick={() => setShowModal(true)} style={{ marginBlockStart: '16px', animationDelay: '0.3s' }}>
                        שלחו לי לינק העלאה למייל המשרדי ←
                    </button>
                )}

                <p className={`final-cta__contact text-muted fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                    audit@opexguard.co.il · העלאת מסמכים מאובטחת
                </p>
            </div>

            {showModal && <EmailModal onClose={() => setShowModal(false)} />}
        </section>
    )
}
