<template>
    <div class="services-details-area ptb-80">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 services-details">
                    <div class="services-details-desc">
                        <h3>Who we are</h3>
                        <p>SOMPA was founded in 2018 by a group of healthcare professionals who recognized the need for a coordinated effort to improve health outcomes across the Kenya. Since then, we have grown to become a leading voice in health education, advocacy, and community outreach, with a membership of over 50 healthcare professionals from across the Kenya.</p>
                        
                        <p>The Somali Medical Practitioners Association (SOMPA) is an organization dedicated to improving the health and well-being of individuals and communities across Kenya. 
                            </p>
                            </div>
                </div>

                <div class="col-lg-6 services-details-image">
                    <img src="~/assets/img/services-details-image/1.png" class="wow fadeInUp" v-wow alt="image">
                </div>
            </div>

            <div class="separate"></div>

            <div class="row align-items-center">
                <div class="col-lg-6 services-details-image">
                    <img src="~/assets/img/services-details-image/2.png" class="wow fadeInUp" v-wow alt="image">
                </div>

                <div class="col-lg-6 services-details">
                    <div class="services-details-desc">
                        <p>Our association is comprised of healthcare professionals from a variety of disciplines, including doctors, nurses, pharmacists, and researchers, all working together to promote health education, advocacy, and community outreach.</p>
                    
                        <div class="services-details-accordion">
                            <accordion>
                                <accordion-item>
                                    <template v-slot:accordion-trigger>
                                        <a class="accordion-button">Our Mission</a>
                                    </template>
                                    <template v-slot:accordion-content>
                                        <p>Our mission is to improve the health and well-being of Kenyan communities through education, advocacy, and community outreach. We believe that everyone should have access to quality healthcare, regardless of their socioeconomic status, and we work tirelessly to promote this ideal across Kenya.</p>
                                    </template>
                                </accordion-item>
                                <accordion-item>
                                    <template v-slot:accordion-trigger>
                                        <a class="accordion-button">Our Vision</a>
                                    </template>
                                    <template v-slot:accordion-content>
                                        <p>Our vision is to create a healthier and more equitable Africa, where all individuals have access to quality healthcare and the opportunity to live full and productive lives.</p>
                                    </template>
                                </accordion-item>
                                <accordion-item>
                                    <template v-slot:accordion-trigger>
                                        <a class="accordion-button">Our Goals</a>
                                    </template>
                                    <template v-slot:accordion-content>
                                        <p>To promote health education and awareness, To advocate for policies and initiatives that improve public health, To provide professional development opportunities to our members, and to support the growth and development of healthcare professionals across Kenya.</p>
                                    </template>
                                </accordion-item>
                              
                            </accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/accordion";
import AccordionItem from "../Common/accordion-item";

export default {
	name: 'WhoWeAre',
	components: {
        Accordion,
        AccordionItem
    },
}
</script>