<template>
    <div>
        <PageTitle />
        <AllVideos />
        <StartYourFreeTrial />
    </div>
</template>

<script>
import AllVideos from '../components/bigdata-analytics/AllVideos'
import WhatWeDo from '../components/bigdata-analytics/WhatWeDo'
import Discover from '../components/bigdata-analytics/Discover'
import Services from '../components/bigdata-analytics/Services'
import Team from '../components/bigdata-analytics/Team'
import FunFacts from '../components/bigdata-analytics/FunFacts'
import Feedback from '../components/bigdata-analytics/Feedback'
import Industries from '../components/bigdata-analytics/Industries'
import OurRecentStory from '../components/bigdata-analytics/OurRecentStory'
import StartYourFreeTrial from '../components/bigdata-analytics/StartYourFreeTrial'
import PageTitle from '../components/Common/PageTitle'

export default {
    components: {
        PageTitle,
        AllVideos,
        WhatWeDo,
        Discover,
        Services,
        Team,
        FunFacts,
        Feedback,
        Industries,
        OurRecentStory,
        StartYourFreeTrial,
    }
}
</script>