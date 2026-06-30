import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { SubNav } from "@/components/SubNav";
import { HeroSection } from "@/components/HeroSection";
import { CarePathSection } from "@/components/CarePathSection";
import { WhatsIncludedSection } from "@/components/WhatsIncludedSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ProviderReviewSection } from "@/components/ProviderReviewSection";
import { RealProvidersSection } from "@/components/RealProvidersSection";
import { FaqSection } from "@/components/FaqSection";
import { RightForYouSection } from "@/components/RightForYouSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TrustpilotBadge } from "@/components/TrustpilotBadge";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F6]">
      {/* Fixed top chrome: announcement + header + breadcrumb */}
      <div className="fixed top-0 inset-x-0 z-[70]">
        <AnnouncementBar />
        <Header />
        <SubNav />
      </div>

      <main>
        <HeroSection />
        <Reveal>
          <CarePathSection />
        </Reveal>
        <Reveal>
          <WhatsIncludedSection />
        </Reveal>
        <Reveal>
          <ComparisonSection />
        </Reveal>
        <Reveal>
          <ProviderReviewSection />
        </Reveal>
        <Reveal>
          <RealProvidersSection />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
        <Reveal>
          <RightForYouSection />
        </Reveal>
        <Reveal>
          <CtaSection />
        </Reveal>
      </main>

      <Footer />
      <ScrollToTop />
      <TrustpilotBadge />
    </div>
  );
}
