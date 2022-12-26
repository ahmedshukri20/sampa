<template>
    <div>
        <MainBanner />
        <Solutions />
        <About />
        <Services />
        <Funfacts />
        <Projects />
        <Pricing />
        <Feedback />
        <Blog />
        <CtaArea />
    </div>
</template>

<script>
import MainBanner from '../components/digital-agency/MainBanner'
import Solutions from '../components/digital-agency/Solutions'
import About from '../components/digital-agency/About'
import Services from '../components/digital-agency/Services'
import Funfacts from '../components/Common/Funfacts'
import Projects from '../components/Common/Projects'
import Pricing from '../components/digital-agency/Pricing'
import Feedback from '../components/digital-agency/Feedback'
import Blog from '../components/digital-agency/Blog'
import CtaArea from '../components/digital-agency/CtaArea'

export default {
    components: {
        MainBanner,
        Solutions,
        About,
        Services,
        Funfacts,
        Projects,
        Pricing,
        Feedback,
        Blog,
        CtaArea,
    }
}
</script>