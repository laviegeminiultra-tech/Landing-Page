import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import HeroSection from '../components/HeroSection'
import SectionDivider from '../components/SectionDivider'
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
import SocialProofTicker from '../components/SocialProofTicker'
import ExitIntentPopup from '../components/ExitIntentPopup'

export default function LandingPage() {
    return (
        <>
            <InteractiveBackground />
            <ScrollProgress />
            <Navbar />
            <main>
                <HeroSection />
                <SectionDivider />
                <AgitationSection />
                <SectionDivider />
                <EngineSection />
                <SectionDivider />
                <EvidenceSection />
                <SectionDivider />
                <BlindTeaserSection />
                <SectionDivider />
                <ZeroLiabilitySection />
                <SectionDivider />
                <PricingSection />
                <SectionDivider />
                <FinalCtaSection />
            </main>
            <Footer />
            <StickyMobileCta />
            <SocialProofTicker />
            <ExitIntentPopup />
        </>
    )
}
