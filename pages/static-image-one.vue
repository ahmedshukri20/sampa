<template>
    <div>
        <MainBanner />
        <BoxesArea />
        <Services />
        <ServicesArea />
        <Features />
        <Team />
        <Funfacts />
        <Works />
        <Pricing />
        <Feedback />
        <ReadyToTalk />
        <Partner />
        <Blog />
    </div>
</template>

<script>
import MainBanner from '../components/static-image-one/MainBanner'
import BoxesArea from '../components/static-image-one/BoxesArea'
import Services from '../components/static-image-one/Services'
import ServicesArea from '../components/static-image-one/ServicesArea'
import Features from '../components/static-image-one/Features'
import Team from '../components/Common/Team'
import Funfacts from '../components/Common/Funfacts'
import Works from '../components/static-image-one/Works'
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
        Features,
        Team,
        Funfacts,
        Works,
        Pricing,
        Feedback,
        ReadyToTalk,
        Partner,
        Blog,
    }
}
</script>