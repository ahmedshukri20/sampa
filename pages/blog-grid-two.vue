<template>
    <div>
        <PageTitle pageTitle="Blog Grid" />
        <BlogGridTwo />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import BlogGridTwo from '../components/blog-grid-two/BlogGridTwo'

export default {
    components: {
        PageTitle,
        BlogGridTwo,
    }
}
</script>