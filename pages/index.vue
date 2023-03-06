<template>
    <div>
        <MainBanner />
        <features/>
        <Discover />
        <RecentVideos />
        <FunFacts />
        
        <!-- <WhatWeDo /> -->
        <!-- <Services /> -->
        <!-- <Team /> -->
        <!-- <Feedback /> -->
        <!-- <StartYourFreeTrial /> -->
    </div>
</template>

<script>
import MainBanner from '../components/bigdata-analytics/MainBanner'
import Features from '../components/Index/Features'
import WhatWeDo from '../components/bigdata-analytics/WhatWeDo'
import Discover from '../components/bigdata-analytics/Discover'
import Services from '../components/bigdata-analytics/Services'
import Team from '../components/bigdata-analytics/Team'
import FunFacts from '../components/bigdata-analytics/FunFacts'
import Feedback from '../components/bigdata-analytics/Feedback'
import Industries from '../components/bigdata-analytics/Industries'
import OurRecentStory from '../components/bigdata-analytics/OurRecentStory'
import RecentVideos from '../components/bigdata-analytics/RecentVideos'
import StartYourFreeTrial from '../components/bigdata-analytics/StartYourFreeTrial'

export default {
    components: {
        MainBanner,
        WhatWeDo,
        Features,
        Discover,
        Services,
        Team,
        FunFacts,
        Feedback,
        Industries,
        RecentVideos,
        OurRecentStory,
        StartYourFreeTrial,
    }
}
</script>