<template>
    <div>
        <PageTitle pageTitle="About Us" />
        <AboutArea />
        <Team />
        <FeedbackTwo />
        <Funfacts class="pb-0" />
        <PartnerTwo class="bg-white" />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import AboutThree from '../components/about-style-three/AboutThree'
import Team from '../components/Common/Team'
import FeedbackTwo from '../components/about-style-three/FeedbackTwo'
import Funfacts from '../components/Common/Funfacts'
import PartnerTwo from '../components/Common/PartnerTwo'

export default {
    components: {
        PageTitle,
        AboutThree,
        Team,
        FeedbackTwo,
        Funfacts,
        PartnerTwo,
    }
}
</script>