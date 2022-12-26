<template>
    <div class="agency-portfolio-partner-area ptb-80">
            <div class="container">
                <div class="agency-portfolio-partner-slides owl-carousel owl-theme">
                    <carousel
                        :autoplay = "true" 
                        :paginationEnabled = "false"
                        :perPage="1"
                        :loop = "true"
                        :smartSpeed = "1000"
                        :autoplayTimeout = "5000"
                        :perPageCustom = "[[0, 1], [576, 2], [768, 4], [992, 6]]"
                    >
                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img1.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img2.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img2.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img4.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img5.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img6.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img1.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img2.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img2.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img4.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img5.png" alt="image">
                                </a>
                            </div>
                        </slide>

                        <slide>
                            <div class="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="~/assets/img/agency-portfolio-partner-image/img6.png" alt="image">
                                </a>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Partner'
}
</script>