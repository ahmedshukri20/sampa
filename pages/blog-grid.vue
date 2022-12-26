<template>
    <div>
        <PageTitle pageTitle="Blog Grid" />
        <BlogGrid />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import BlogGrid from '../components/blog-grid/BlogGrid'

export default {
    components: {
        PageTitle,
        BlogGrid,
    }
}
</script>