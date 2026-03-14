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

                <a
                    href="https://app.opexguard.co.il"
                    className={`btn btn-primary final-cta__btn fade-in-up ${isVisible ? 'visible' : ''}`}
                    style={{ animationDelay: '0.2s' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    התחילו ביקורת עכשיו ←
                </a>

                <p className={`final-cta__contact text-muted fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
                    audit@opexguard.co.il · העלאת מסמכים מאובטחת
                </p>
            </div>

            {showModal && <EmailModal onClose={() => setShowModal(false)} />}
        </section>
    )
}
