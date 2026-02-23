import { useState, useEffect, useCallback } from 'react'
import './ExitIntentPopup.css'

export default function ExitIntentPopup() {
    const [visible, setVisible] = useState(false)
    const [dismissed, setDismissed] = useState(false)

    const handleMouseLeave = useCallback((e: MouseEvent) => {
        if (e.clientY <= 5 && !dismissed) {
            setVisible(true)
        }
    }, [dismissed])

    useEffect(() => {
        // Only on desktop
        if (window.innerWidth < 768) return

        document.addEventListener('mouseleave', handleMouseLeave)
        return () => document.removeEventListener('mouseleave', handleMouseLeave)
    }, [handleMouseLeave])

    const handleClose = () => {
        setVisible(false)
        setDismissed(true)
    }

    const handleCta = () => {
        handleClose()
        document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })
    }

    if (!visible) return null

    return (
        <div className="exit-popup-overlay" onClick={handleClose}>
            <div className="exit-popup" onClick={(e) => e.stopPropagation()}>
                <button className="exit-popup__close" onClick={handleClose} aria-label="סגירה">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <div className="exit-popup__icon">⚠️</div>
                <h3 className="exit-popup__title">רגע — לפני שאתם עוזבים</h3>
                <p className="exit-popup__amount font-mono">₪45,000 בממוצע</p>
                <p className="exit-popup__desc text-secondary">
                    בדיקה ראשונית חינם. מה יש לכם להפסיד?
                </p>
                <button className="btn btn-primary exit-popup__cta" onClick={handleCta}>
                    בדקו את החוזה שלכם ←
                </button>
            </div>
        </div>
    )
}
