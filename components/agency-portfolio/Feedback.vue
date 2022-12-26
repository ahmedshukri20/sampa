<template>
    <div class="agency-portfolio-feedback-area ptb-80">
        <div class="container">
            <div class="agency-portfolio-feedback-slides owl-carousel owl-theme">
                <carousel
                    :autoplay = "true" 
                    :paginationEnabled = "true"
                    :perPage="1"
                    :loop = "true"
                    :smartSpeed = "1000"
                    :autoplayTimeout = "5000"
                    :perPageCustom = "[[0, 1]]"
                >
                    <slide>
                        <div class="agency-portfolio-feedback-item">
                            <img src="~/assets/img/client-image/1.jpg" alt="image">
                            <p>Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.</p>
                        </div>
                    </slide>

                    <slide>
                        <div class="agency-portfolio-feedback-item">
                            <img src="~/assets/img/client-image/2.jpg" alt="image">
                            <p>Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.</p>
                        </div>
                    </slide>

                    <slide>
                        <div class="agency-portfolio-feedback-item">
                            <img src="~/assets/img/client-image/3.jpg" alt="image">
                            <p>Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.</p>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feedback'
}
</script>