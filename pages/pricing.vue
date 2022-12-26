<template>
    <div>
        <PageTitle pageTitle="Team" />
        <Pricing />
        <PricingTwo />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import Pricing from '../components/Common/Pricing'
import PricingTwo from '../components/Pricing/PricingTwo'

export default {
    components: {
        PageTitle,
        Pricing,
        PricingTwo,
    }
}
</script>