import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
    return (
        <div className="not-found">
            <h1 className="not-found__code font-mono">404</h1>
            <p className="not-found__text">
                הדף הזה לא נמצא.
                <br />
                בדומה לכסף שהמשכיר שלכם גובה ביתר.
            </p>
            <Link to="/" className="btn btn-primary not-found__btn">
                חזרו לדף הבית ←
            </Link>
        </div>
    )
}
