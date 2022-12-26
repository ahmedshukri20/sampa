<template>
    <div>
        <MainBanner />
        <BoxesArea />
        <Services heading="Experience The Best Features Ever" />
        <ServicesArea heading="What Our Software Can Do For You" />
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
import MainBanner from '../components/Developer/MainBanner'
import BoxesArea from '../components/Developer/BoxesArea'
import Services from '../components/Common/Services'
import ServicesArea from '../components/Common/ServicesArea'
import OurServices from '../components/Developer/OurServices'
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