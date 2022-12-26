<template>
    <div>
        <PageTitle pageTitle="Feedback or Testimonials" />
        <Feedback />
        <FeedbackOne />
        <FeedbackTwo />
        <FeedbackThree />
    </div>
</template>

<script>
import PageTitle from '../components/Common/PageTitle'
import Feedback from '../components/Common/Feedback'
import FeedbackOne from '../components/Feedback/FeedbackOne'
import FeedbackTwo from '../components/Feedback/FeedbackTwo'
import FeedbackThree from '../components/Feedback/FeedbackThree'

export default {
    components: {
        PageTitle,
        Feedback,
        FeedbackOne,
        FeedbackTwo,
        FeedbackThree,
    }
}
</script>