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
                <a href="#hero" className="navbar__logo" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
                    <img src="/assets/logo-horizontal-dark.svg" alt="OpexGuard" className="navbar__logo-img" />
                </a>
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
                    <a href="https://app.opexguard.co.il" className="btn btn-primary btn-sm navbar__cta" target="_blank" rel="noopener noreferrer">
                        התחילו ←
                    </a>
                </div>
            </div>
        </nav>
    )
}
