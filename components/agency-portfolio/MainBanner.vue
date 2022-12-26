<template>
    <div class="agency-portfolio-home-slides owl-carousel owl-theme">
        <carousel
            :autoplay = "true" 
            :paginationEnabled = "false"
            :perPage="1"
            :navigationEnabled = "true"
            navigationNextLabel="<i class='bx bx-chevron-right'></i>"
            navigationPrevLabel="<i class='bx bx-chevron-left'></i>"
            :loop = "true"
            :smartSpeed = "1000"
            :autoplayTimeout = "5000"
            :perPageCustom = "[[0, 1]]"
        >
            <slide>
                <div class="agency-portfolio-main-banner portfolio-banner-bg1">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                <div class="portfolio-banner-content">
                                    <span class="sub-title">We are Creative</span>
                                    <h1>Digital Agency</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <a href="#" class="btn btn-secondary">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>

            <slide>
                <div class="agency-portfolio-main-banner portfolio-banner-bg2">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                <div class="portfolio-banner-content">
                                    <span class="sub-title">We are Digital</span>
                                    <h1>UX/UI Design</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <a href="#" class="btn btn-secondary">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>

            <slide>
                <div class="agency-portfolio-main-banner portfolio-banner-bg3">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                <div class="portfolio-banner-content">
                                    <span class="sub-title">We are Agency</span>
                                    <h1>Digital Marketing</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <a href="#" class="btn btn-secondary">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>