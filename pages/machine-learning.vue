<template>
    <div>
        <MainBanner />
        <PartnerTwo class="bg-white p-0" />
        <Solutions />
        <About />
        <Services />
        <Funfacts />
        <Projects />
        <MachinePricing />
        <Feedback />
        <Blog />
        <Trial />
    </div>
</template>

<script>
import MainBanner from '../components/machine-learning/MainBanner'
import PartnerTwo from '../components/Common/PartnerTwo'
import Solutions from '../components/Common/Solutions'
import About from '../components/Common/About'
import Services from '../components/Common/Services'
import Funfacts from '../components/Common/Funfacts'
import Projects from '../components/Common/Projects'
import MachinePricing from '../components/Common/MachinePricing'
import Feedback from '../components/Common/Feedback'
import Blog from '../components/Common/Blog'
import Trial from '../components/Common/Trial'

export default {
    components: {
        MainBanner,
        PartnerTwo,
        Solutions,
        About,
        Services,
        Funfacts,
        Projects,
        MachinePricing,
        Feedback,
        Blog,
        Trial,
    }
}
</script>