<template>
    <div>
        <PageTitle />
        <!-- <ContactInfo /> -->
        <ContactArea />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactArea from '../components/Contact/ContactArea'

export default {
    components: {
        PageTitle,
        ContactInfo,
        ContactArea
    }
}
</script>