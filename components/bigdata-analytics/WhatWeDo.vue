<template>
     <div class="features-area ptb-80 bg-f7fafd">
        <div class="container">
            <div class="section-title ptb-80">
                <h2>What we do</h2>
                <div class="bar"></div>
                <p>Our association is comprised of healthcare professionals from various fields, 
                    all working together to educate and empower individuals and communities to take charge of their health.
                    Here are some of the ways we do this:</p>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                        <div class="icon">
                            <feather type="grid"></feather>
                        </div>

                        <h3>Educational Events</h3>
                        <p>We organize regular seminars, workshops, and conferences to provide up-to-date information on the latest health issues.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                        <div class="icon">
                            <feather type="grid"></feather>
                        </div>

                        <h3>Community Outreach</h3>
                        <p>We partner with local organizations to provide health education and resources to underserved communities. </p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                        <div class="icon bg-c679e3">
                            <feather type="grid"></feather>
                        </div>

                        <h3>Advocacy</h3>
                        <p>We advocate for policies and initiatives that improve public health across the community.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                        <div class="icon bg-c679e3">
                            <feather type="grid"></feather>
                        </div>

                        <h3>Networking</h3>
                        <p>We provide opportunities for healthcare professionals to connect with one another to collaborate together. </p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                        <div class="icon bg-eb6b3d">
                            <feather type="grid"></feather>
                        </div>

                        <h3>Continuing Education</h3>
                        <p>We offer professional development opportunities to help our members stay current on the latest advances in their fields.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                        <div class="icon bg-eb6b3d">
                            <feather type="grid"></feather>
                        </div>

                        <h3>Health Tips</h3>
                        <p>Our experts prepare videos and articles containing lots of health tips and the general wellbeing of a person. </p>
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
	name: 'WhatWeDo',
	components: {
        Accordion,
        AccordionItem
    },
}
</script>