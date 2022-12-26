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
import MainBanner from '../components/static-image-three/MainBanner'
import BoxesArea from '../components/static-image-three/BoxesArea'
import DomainSearch from '../components/static-image-three/DomainSearch'
import WhyChooseUs from '../components/static-image-three/WhyChooseUs'
import PricingPlans from '../components/static-image-three/PricingPlans'
import Feedback from '../components/static-image-three/Feedback'
import ReadyToTalk from '../components/Common/ReadyToTalk'
import Partner from '../components/Common/Partner'
import HostingFeatures from '../components/static-image-three/HostingFeatures'
import Blog from '../components/Common/Blog'
import CTAArea from '../components/static-image-three/CTAArea'

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