export default function SectionDivider() {
    return (
        <div className="section-divider" aria-hidden="true">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
                <path
                    d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
                    fill="rgba(30, 45, 74, 0.15)"
                />
                <path
                    d="M0,40 C360,10 720,55 1080,25 C1260,12 1380,35 1440,40 L1440,60 L0,60 Z"
                    fill="rgba(59, 130, 246, 0.04)"
                />
            </svg>
        </div>
    )
}
