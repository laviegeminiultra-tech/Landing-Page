import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__logo-wrap">
                    <img src="/assets/logo-horizontal-dark.svg" alt="OpexGuard" className="footer__logo" />
                </div>
                <p className="footer__text text-muted">
                    © <span className="font-mono">2026</span> <span className="font-latin">OpexGuard Enterprise</span> · audit@opexguard.co.il · תנאי שימוש · מדיניות פרטיות
                </p>
            </div>
        </footer>
    )
}
