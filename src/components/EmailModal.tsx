import { useState } from 'react'
import './EmailModal.css'

interface EmailModalProps {
    onClose: () => void
}

export default function EmailModal({ onClose }: EmailModalProps) {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email.trim()) {
            setSubmitted(true)
            setTimeout(onClose, 2000)
        }
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal__close" onClick={onClose} aria-label="סגירה">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                {submitted ? (
                    <div className="modal__success">
                        <span className="modal__success-icon">✅</span>
                        <p>קישור העלאה נשלח למייל שלכם</p>
                    </div>
                ) : (
                    <>
                        <h3 className="modal__title">קבלו לינק העלאה למייל המשרדי</h3>
                        <p className="modal__desc text-secondary">
                            נשלח לכם קישור מאובטח להעלאת מסמכים ישירות ממחשב העבודה.
                        </p>
                        <form onSubmit={handleSubmit} className="modal__form">
                            <input
                                type="email"
                                className="modal__input"
                                placeholder="your@company.co.il"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                dir="ltr"
                                autoFocus
                            />
                            <button type="submit" className="btn btn-primary modal__submit">
                                שלחו לי ←
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}
