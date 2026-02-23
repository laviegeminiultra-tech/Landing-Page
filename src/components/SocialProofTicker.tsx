import { useState, useEffect, useCallback } from 'react'
import './SocialProofTicker.css'

const notifications = [
    'חברת טכנולוגיה מחיפה הפעילה ביקורת לפני 3 דקות',
    'סטארטאפ מהרצליה חסך ₪67,000 בביקורת',
    'חברת SaaS מתל אביב הזמינה ביקורת לפני 7 דקות',
    'חברת לוגיסטיקה מבאר שבע חשפה ₪42,000 חיובי יתר',
    'חברת פינטק מרמת גן הפעילה ביקורת לפני 12 דקות',
    'משרד עורכי דין מירושלים הזמין ביקורת לפני 15 דקות',
]

export default function SocialProofTicker() {
    const [visible, setVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const showNext = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % notifications.length)
        setVisible(true)
        setTimeout(() => setVisible(false), 4000)
    }, [])

    useEffect(() => {
        // First notification after 8 seconds
        const initialTimeout = setTimeout(showNext, 8000)

        // Then every 15 seconds
        const interval = setInterval(showNext, 15000)

        return () => {
            clearTimeout(initialTimeout)
            clearInterval(interval)
        }
    }, [showNext])

    return (
        <div className={`social-proof ${visible ? 'social-proof--visible' : ''}`} aria-hidden="true">
            <div className="social-proof__content">
                <span className="social-proof__icon">🔔</span>
                <span className="social-proof__text">{notifications[currentIndex]}</span>
            </div>
        </div>
    )
}
