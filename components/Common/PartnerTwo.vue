<template>
    <!-- Start Repair Partner Area -->
    <div class="repair-partner-area bg-f9fafb">
        <div class="container">
            <div class="partner-slides">
                <carousel
                    :autoplay = "true" 
                    :paginationEnabled = "false"
                    :loop = "true"
                    :smartSpeed = "1000"
                    :autoplayTimeout = "5000"
                    :perPageCustom = "[[0, 2],[576, 4],[768, 4], [1200, 6]]"
                >
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="~/assets/img/partner-img/partner-1.png" alt="image">
                                <img src="~/assets/img/partner-img/partner-hover1.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="~/assets/img/partner-img/partner-2.png" alt="image">
                                <img src="~/assets/img/partner-img/partner-hover2.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="~/assets/img/partner-img/partner-3.png" alt="image">
                                <img src="~/assets/img/partner-img/partner-hover3.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="~/assets/img/partner-img/partner-10.png" alt="image">
                                <img src="~/assets/img/partner-img/partner-hover10.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="~/assets/img/partner-img/partner-5.png" alt="image">
                                <img src="~/assets/img/partner-img/partner-hover5.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="~/assets/img/partner-img/partner-6.png" alt="image">
                                <img src="~/assets/img/partner-img/partner-hover6.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="~/assets/img/partner-img/partner-7.png" alt="image">
                                <img src="~/assets/img/partner-img/partner-hover7.png" alt="image">
                            </a>
                        </div>
                    </slide>
                
                </carousel>
            </div>
        </div>
    </div>
    <!-- End Repair Partner Area -->
</template>

<script>
export default {
    name: 'PartnerTwo'
}
</script>