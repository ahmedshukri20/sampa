<template>
    <div>
        <PageTitle pageTitle="Cart" />
        <Cart />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import Cart from '../components/Cart/Cart'

export default {
    components: {
        PageTitle,
        Cart,
    }
}
</script>