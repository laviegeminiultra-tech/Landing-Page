import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AgitationSection from '../components/AgitationSection'
import EngineSection from '../components/EngineSection'
import EvidenceSection from '../components/EvidenceSection'
import BlindTeaserSection from '../components/BlindTeaserSection'
import ZeroLiabilitySection from '../components/ZeroLiabilitySection'
import PricingSection from '../components/PricingSection'
import FinalCtaSection from '../components/FinalCtaSection'
import Footer from '../components/Footer'
import StickyMobileCta from '../components/StickyMobileCta'
import InteractiveBackground from '../components/InteractiveBackground'

export default function LandingPage() {
    return (
        <>
            <InteractiveBackground />
            <Navbar />
            <main>
                <HeroSection />
                <AgitationSection />
                <EngineSection />
                <EvidenceSection />
                <BlindTeaserSection />
                <ZeroLiabilitySection />
                <PricingSection />
                <FinalCtaSection />
            </main>
            <Footer />
            <StickyMobileCta />
        </>
    )
}
