<template>
    <div>
        <MainBanner />
        <BoxesArea />
        <DomainSearch />
        <WhyChooseUs />
        <PricingPlans />
        <Feedback />
        <ReadyToTalk />
        <Partner />
        <HostingFeatures />
        <Blog />
        <CTAArea />
    </div>
</template>

<script>
import MainBanner from '../components/web-hosting/MainBanner'
import BoxesArea from '../components/web-hosting/BoxesArea'
import DomainSearch from '../components/web-hosting/DomainSearch'
import WhyChooseUs from '../components/web-hosting/WhyChooseUs'
import PricingPlans from '../components/web-hosting/PricingPlans'
import Feedback from '../components/web-hosting/Feedback'
import ReadyToTalk from '../components/Common/ReadyToTalk'
import Partner from '../components/Common/Partner'
import HostingFeatures from '../components/web-hosting/HostingFeatures'
import Blog from '../components/Common/Blog'
import CTAArea from '../components/web-hosting/CTAArea'

export default {
    components: {
        MainBanner,
        BoxesArea,
        DomainSearch,
        WhyChooseUs,
        PricingPlans,
        Feedback,
        ReadyToTalk,
        Partner,
        HostingFeatures,
        Blog,
        CTAArea,
    }
}
</script>