<template>
    <div>
        <PageTitle pageTitle="About Us" />
        <AboutTwo />
        <Team />
        <Feedback />
        <Funfacts class="pb-0" />
        <PartnerTwo class="bg-white" />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import AboutTwo from '../components/about-style-two/AboutTwo'
import Team from '../components/Common/Team'
import Feedback from '../components/about-style-two/Feedback'
import Funfacts from '../components/Common/Funfacts'
import PartnerTwo from '../components/Common/PartnerTwo'

export default {
    components: {
        PageTitle,
        AboutTwo,
        Team,
        Feedback,
        Funfacts,
        PartnerTwo,
    }
}
</script>