<template>
    <div>
        <MainBanner />
        <PartnerTwo />
        <IotServices />
        <IotCta />
        <Funfacts />
        <Features />
        <FeaturesTwo />
        <IotTeam />
        <Feedback />
        <WhyChooseUs />
        <Blog />
    </div>
</template>

<script>
import MainBanner from '../components/Iot/MainBanner'
import PartnerTwo from '../components/Common/PartnerTwo'
import IotServices from '../components/Iot/IotServices'
import IotCta from '../components/Iot/IotCta'
import Funfacts from '../components/Common/Funfacts'
import Features from '../components/Iot/Features'
import FeaturesTwo from '../components/Iot/FeaturesTwo'
import IotTeam from '../components/Iot/IotTeam'
import Feedback from '../components/Common/Feedback'
import WhyChooseUs from '../components/Iot/WhyChooseUs'
import Blog from '../components/Common/Blog'

export default {
    components: {
        MainBanner,
        PartnerTwo,
        IotServices,
        IotCta,
        Funfacts,
        Features,
        FeaturesTwo,
        IotTeam,
        Feedback,
        WhyChooseUs,
        Blog,
    }
}
</script>