<template>
    <div>
        <PageTitle pageTitle="Features" />
        <FeaturesArea />
        <Services heading="Experience The Best Features Ever" />
        <ServicesArea heading="What Our Software Can Do For You" />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import FeaturesArea from '../components/Features/FeaturesArea'
import Services from '../components/Common/Services'
import ServicesArea from '../components/Common/ServicesArea'

export default {
    components: {
        PageTitle,
        FeaturesArea,
        Services,
        ServicesArea,
    }
}
</script>