<template>
    <div>
        <PageTitle pageTitle="Project Details" />
        <ProjectDetails />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import ProjectDetails from '../components/project-details/ProjectDetails'

export default {
    components: {
        PageTitle,
        ProjectDetails,
    }
}
</script>