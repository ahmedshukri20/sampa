<template>
    <div class="blog-area ptb-80">
        <div class="container">
            <div class="section-title style-two">
                <h2>Our Recent <span>News</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="blog-slides owl-carousel owl-theme">
                <carousel
                    :autoplay = "true" 
                    :paginationEnabled = "false"
                    :perPage="1"
                    :loop = "true"
                    :smartSpeed = "1000"
                    :autoplayTimeout = "5000"
                    :perPageCustom = "[[0, 1], [768, 2], [992, 3]]"
                >
                    <slide>
                        <div class="single-blog-item">
                            <div class="post-image">
                                <a href="#"><img src="~/assets/img/blog-image/1.jpg" alt="image"></a>
                            </div>

                            <div class="post-content">
                                <ul class="post-meta">
                                    <li>By <a href="#">Admin</a></li>
                                    <li>20 February 2022</li>
                                </ul>
                                <h3><a href="#">The security risks of changing package owners</a></h3>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-blog-item">
                            <div class="post-image">
                                <a href="#"><img src="~/assets/img/blog-image/2.jpg" alt="image"></a>
                            </div>

                            <div class="post-content">
                                <ul class="post-meta">
                                    <li>By <a href="#">Admin</a></li>
                                    <li>21 February 2022</li>
                                </ul>
                                <h3><a href="#">Tips to Protecting Your Business and Family</a></h3>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-blog-item">
                            <div class="post-image">
                                <a href="#"><img src="~/assets/img/blog-image/3.jpg" alt="image"></a>
                            </div>

                            <div class="post-content">
                                <ul class="post-meta">
                                    <li>By <a href="#">Admin</a></li>
                                    <li>22 February 2022</li>
                                </ul>
                                <h3><a href="#">Protect Your Workplace from Cyber Attacks</a></h3>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-blog-item">
                            <div class="post-image">
                                <a href="#"><img src="~/assets/img/blog-image/4.jpg" alt="image"></a>
                            </div>

                            <div class="post-content">
                                <ul class="post-meta">
                                    <li>By <a href="#">Admin</a></li>
                                    <li>22 February 2022</li>
                                </ul>
                                <h3><a href="#">Four New WordPress.com Color Schemes</a></h3>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'OurRecentNews'
}
</script>