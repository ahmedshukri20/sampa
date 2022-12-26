<template>
    <div>
        <PageTitle pageTitle="Blog Details" />
        <BlogDetails />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import BlogDetails from '../components/blog-details/BlogDetails'

export default {
    components: {
        PageTitle,
        BlogDetails,
    }
}
</script>