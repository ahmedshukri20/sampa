<template>
    <div>
        <PageTitle pageTitle="Services Details" />
        <ServicesDetails />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import ServicesDetails from '../components/service-details/ServicesDetails'

export default {
    components: {
        PageTitle,
        ServicesDetails,
    }
}
</script>