<template>
    <div class="newsletter-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="newsletter-image">
                        <img src="~/assets/img/bigdata-analytics/newsletter.jpg" alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 p-0">
                    <div class="newsletter-content p-2">
                        <h2 class="text-dark">Subscribe to our newsletter</h2>
                        <form class="newsletter-form">
                            <input type="email" class="input-newsletter" placeholder="Email Address">
                            <button type="submit">Subscribe</button>
                        </form>
                        <!-- <p>Test out the Big Data Analytics features for 14 days, no credit card required.</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartYourFreeTrial'
}
</script>