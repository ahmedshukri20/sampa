<template>
    <div>
        <MainBanner />
        <OurLatestProjects />
        <About />
        <Feedback />
        <Partner />
        <OurRecentNews />
        <Creative />
    </div>
</template>

<script>
import MainBanner from '../components/agency-portfolio/MainBanner'
import OurLatestProjects from '../components/agency-portfolio/OurLatestProjects'
import About from '../components/agency-portfolio/About'
import Feedback from '../components/agency-portfolio/Feedback'
import Partner from '../components/agency-portfolio/Partner'
import OurRecentNews from '../components/agency-portfolio/OurRecentNews'
import Creative from '../components/agency-portfolio/Creative'

export default {
    components: {
        MainBanner,
        OurLatestProjects,
        About,
        Feedback,
        Partner,
        OurRecentNews,
        Creative,
    }
}
</script>