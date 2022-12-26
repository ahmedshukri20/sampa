<template>
    <div>
        <PageTitle pageTitle="Blog Right Sidebar" />
        <BlogRightSidebar />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import BlogRightSidebar from '../components/blog-right-sidebar/BlogRightSidebar'

export default {
    components: {
        PageTitle,
        BlogRightSidebar,
    }
}
</script>