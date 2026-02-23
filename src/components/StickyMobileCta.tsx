import { useState, useEffect } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useIsMobile } from '../hooks/useIsMobile'
import EmailModal from './EmailModal'
import './StickyMobileCta.css'

export default function StickyMobileCta() {
    const scrollY = useScrollPosition()
    const isMobile = useIsMobile()
    const [showModal, setShowModal] = useState(false)
    const [footerVisible, setFooterVisible] = useState(false)

    useEffect(() => {
        const footer = document.getElementById('footer')
        if (!footer) return

        const observer = new IntersectionObserver(([entry]) => {
            setFooterVisible(entry.isIntersecting)
        }, { threshold: 0 })

        observer.observe(footer)
        return () => observer.disconnect()
    }, [])

    if (!isMobile) return null

    const heroHeight = window.innerHeight || 800
    const isVisible = scrollY > heroHeight && !footerVisible

    return (
        <>
            <div className={`sticky-cta ${isVisible ? 'sticky-cta--visible' : ''}`}>
                <button className="btn btn-green sticky-cta__btn" onClick={() => setShowModal(true)}>
                    גלו כמה אתם מפסידים ←
                </button>
            </div>
            {showModal && <EmailModal onClose={() => setShowModal(false)} />}
        </>
    )
}
