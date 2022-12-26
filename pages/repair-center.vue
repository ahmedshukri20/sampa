<template>
    <div>
        <MainBanner />
        <PartnerTwo />
        <About />
        <RepairServices />
        <Cta />
        <Funfacts />
        <RepairTeam />
        <Feedback />
        <WhyChooseUs />
        <Blog />
    </div>
</template>

<script>
import MainBanner from '../components/repair-center/MainBanner'
import PartnerTwo from '../components/Common/PartnerTwo'
import About from '../components/repair-center/About'
import RepairServices from '../components/repair-center/RepairServices'
import Cta from '../components/repair-center/Cta'
import Funfacts from '../components/Common/Funfacts'
import RepairTeam from '../components/repair-center/RepairTeam'
import Feedback from '../components/repair-center/Feedback'
import WhyChooseUs from '../components/repair-center/WhyChooseUs'
import Blog from '../components/Common/Blog'

export default {
    components: {
        MainBanner,
        PartnerTwo,
        About,
        RepairServices,
        Cta,
        Funfacts,
        RepairTeam,
        Feedback,
        WhyChooseUs,
        Blog,
    }
}
</script>