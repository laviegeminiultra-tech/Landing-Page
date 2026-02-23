import { useScrollPosition } from '../hooks/useScrollPosition'
import './Navbar.css'

export default function Navbar() {
    const scrollY = useScrollPosition()
    const isScrolled = scrollY > 100

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--glass' : ''}`}>
            <div className="navbar__inner container">
                <div className="navbar__logo">
                    <span className="navbar__logo-text">OpexGuard</span>
                </div>
                <div className="navbar__links">
                    <button className="navbar__link" onClick={() => scrollTo('engine')}>
                        איך זה עובד
                    </button>
                    <button className="navbar__link" onClick={() => scrollTo('evidence')}>
                        ראיות
                    </button>
                    <button className="navbar__link" onClick={() => scrollTo('pricing')}>
                        תמחור
                    </button>
                    <button className="btn btn-primary btn-sm navbar__cta" onClick={() => scrollTo('final-cta')}>
                        התחילו ←
                    </button>
                </div>
            </div>
        </nav>
    )
}
