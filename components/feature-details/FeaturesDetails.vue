<template>
    <div class="features-details-area ptb-80">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 features-details-image">
                    <img src="~/assets/img/features-details-image/1.png" class="wow fadeInUp" alt="image">
                </div>

                <div class="col-lg-6 features-details">
                    <div class="features-details-desc">
                        <h3>Information Retrieval</h3>
                        <p>Build integration aute irure design in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat design proident.</p>

                        <ul class="features-details-list">
                            <li>Life time supports</li>
                            <li>Exclusive design</li>
                            <li>Solve your problem with us</li>
                            <li>We Provide Awesome Services</li>
                            <li>Your business deserves best Software</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="separate"></div>

            <div class="row align-items-center">
                <div class="col-lg-6 features-details">
                    <div class="features-details-desc">
                        <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>

                        <div class="features-details-accordion">
                            <div role="tablist">
                                <accordion>
                                    <accordion-item>
                                        <template v-slot:accordion-trigger>
                                            <a class="accordion-button">How many time zones are there in all?</a>
                                        </template>
                                        <template v-slot:accordion-content>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </template>
                                    </accordion-item>
                                    <accordion-item>
                                        <template v-slot:accordion-trigger>
                                            <a class="accordion-button">Is Smart Lock required for instant apps?</a>
                                        </template>
                                        <template v-slot:accordion-content>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </template>
                                    </accordion-item>
                                    <accordion-item>
                                        <template v-slot:accordion-trigger>
                                            <a class="accordion-button">Can I have multiple activities in a single feature?</a>
                                        </template>
                                        <template v-slot:accordion-content>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </template>
                                    </accordion-item>
                                </accordion>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6 features-details-image">
                    <img src="~/assets/img/features-details-image/2.png" class="wow fadeInUp" alt="image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/accordion";
import AccordionItem from "../Common/accordion-item";

export default {
    name: 'FeaturesDetails',
    components: {
        Accordion,
        AccordionItem
    },
}
</script>