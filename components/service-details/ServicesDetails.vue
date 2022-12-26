<template>
    <div class="services-details-area ptb-80">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 services-details">
                    <div class="services-details-desc">
                        <h3>Incredible Infrastructure</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.</p>

                        <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
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
                        <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>

                        <div class="services-details-accordion">
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
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/accordion";
import AccordionItem from "../Common/accordion-item";

export default {
	name: 'ServicesDetails',
	components: {
        Accordion,
        AccordionItem
    },
}
</script>