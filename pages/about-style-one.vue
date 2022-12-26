<template>
    <div>
        <PageTitle pageTitle="About Us" />
        <About />
        <Team />
        <ReadyToTalk />
        <Partner />
        <Funfacts />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import About from '../components/about-style-one/About'
import Team from '../components/Common/Team'
import ReadyToTalk from '../components/Common/ReadyToTalk'
import Partner from '../components/Common/Partner'
import Funfacts from '../components/Common/Funfacts'

export default {
    components: {
        PageTitle,
        About,
        Team,
        ReadyToTalk,
        Partner,
        Funfacts,
    }
}
</script>