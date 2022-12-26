<template>
    <div>
        <MainBanner />
        <BoxesArea />
        <Services />
        <ServicesArea />
        <OurServices />
        <Team />
        <Funfacts />
        <Pricing />
        <Feedback />
        <ReadyToTalk />
        <Partner />
        <Blog />
    </div>
</template>

<script>
import MainBanner from '../components/static-image-two/MainBanner'
import BoxesArea from '../components/static-image-two/BoxesArea'
import Services from '../components/static-image-two/Services'
import ServicesArea from '../components/static-image-two/ServicesArea'
import OurServices from '../components/static-image-two/OurServices'
import Team from '../components/Common/Team'
import Funfacts from '../components/Common/Funfacts'
import Pricing from '../components/Common/Pricing'
import Feedback from '../components/Common/Feedback'
import ReadyToTalk from '../components/Common/ReadyToTalk'
import Partner from '../components/Common/Partner'
import Blog from '../components/Common/Blog'

export default {
    components: {
        MainBanner,
        BoxesArea,
        Services,
        ServicesArea,
        OurServices,
        Team,
        Funfacts,
        Pricing,
        Feedback,
        ReadyToTalk,
        Partner,
        Blog,
    }
}
</script>