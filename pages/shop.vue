<template>
    <div>
        <PageTitle pageTitle="Products" />
        <Shop />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import Shop from '../components/Shop/Shop'

export default {
    components: {
        PageTitle,
        Shop,
    }
}
</script>