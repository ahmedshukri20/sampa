<template>
    <div>
        <MainBanner />
        <BoxesArea />
        <Services heading="Cloud Hosting Services" />
        <ServicesArea heading="Design & Development" />
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
import MainBanner from '../components/Index/MainBanner'
import BoxesArea from '../components/Index/BoxesArea'
import Services from '../components/Common/Services'
import ServicesArea from '../components/Common/ServicesArea'
import Features from '../components/Index/Features'
import Team from '../components/Common/Team'
import Funfacts from '../components/Common/Funfacts'
import Works from '../components/Index/Works'
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