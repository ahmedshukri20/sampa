<template>
    <div class="services-details-area ptb-80">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 services-details">
                    <div class="services-details-desc">
                        <h3>Become a member</h3>
                        <p>Users who are interested in healthcare and medicine can become members of SOMPA and receive some benefits. In addition to medical professionals, SOMPA welcomes individuals who are interested in supporting the organization's mission and contributing to its efforts to improve healthcare outcomes.</p>

                        <p>If you are interested in becoming a member of SOMPA, please send an email to <a href="mailto:info@sampa.com"><b>info@sampa.com</b></a> with your full name, contact information, and a brief description of your professional background or interest in healthcare and medicine. A SOMPA representative will review your application and respond to you with further instructions on how to complete the registration process.</p>
                    </div>
                </div>

                <div class="col-lg-6 services-details-image">
                    <img src="~/assets/img/services-details-image/3.png" class="wow fadeInUp" v-wow alt="image">
                </div>
            </div>

            <div class="separate"></div>

            <div class="row align-items-center">
                <div class="col-lg-6 services-details-image">
                    <img src="~/assets/img/services-details-image/5.png" class="wow fadeInUp" v-wow alt="image">
                </div>

                <div class="col-lg-6 services-details">
                    <div class="services-details-desc">
                        <h3>Member benefits</h3>
                        <p>By becoming a SOMPA member, normal users can support the organization's mission and contribute to its efforts to improve healthcare outcomes for patients around the world.</p>
                        <p>Benefits for normal users who become SOMPA members include:</p>

                        <div class="services-details-accordion">
                            <accordion>
                                <accordion-item>
                                    <template v-slot:accordion-trigger>
                                        <a class="accordion-button">Access to educational resources</a>
                                    </template>
                                    <template v-slot:accordion-content>
                                        <p>SOMPA provides its members with access to a range of educational resources, including publications, online databases, and other resources related to healthcare and medicine. Normal users who become members can benefit from these resources and learn more about important health issues and medical developments.</p>    
                                    </template>
                                </accordion-item>
                                <accordion-item>
                                    <template v-slot:accordion-trigger>
                                        <a class="accordion-button">Networking opportunities</a>
                                    </template>
                                    <template v-slot:accordion-content>
                                        <p>SOMPA offers opportunities for members to network with other healthcare professionals and industry leaders. Normal users who become members can connect with like-minded individuals who share their interest in healthcare and medicine and gain insights into the latest trends and developments in the field.</p>    
                                    </template>
                                </accordion-item>
                                <accordion-item>
                                    <template v-slot:accordion-trigger>
                                        <a class="accordion-button">Advocacy opportunities</a>
                                    </template>
                                    <template v-slot:accordion-content>
                                        <p>SOMPA advocates for the interests of medical professionals and patients at the local, national, and international levels. Normal users who become members can contribute to these efforts by sharing their perspectives and raising awareness about important healthcare issues in their communities.</p>
                                    </template>
                                </accordion-item>
                                <accordion-item>
                                    <template v-slot:accordion-trigger>
                                        <a class="accordion-button">Access to discounted services</a>
                                    </template>
                                    <template v-slot:accordion-content>
                                        <p>SOMPA members are eligible for discounts on a range of healthcare-related services, including professional development programs, healthcare products, and other resources. Normal users who become members can benefit from these discounts and save money on important healthcare services and products.</p>    
                                    </template>
                                </accordion-item>
                            </accordion>
                        </div>
                    </div>
                </div>
            </div>

            <div class="faq-contact">
                <h3>Join Us</h3>
                <form action="https://submit-form.com/0ZML7QND">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <input type="text" placeholder="Name" class="form-control">
                            </div>
                        </div>
                        
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <input type="email" placeholder="Email" class="form-control">
                            </div>
                        </div>
                        
                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <input type="text" placeholder="Subject" class="form-control">
                            </div>
                        </div>
                        
                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <textarea name="message" cols="30" rows="6" placeholder="Message" class="form-control"></textarea>
                            </div>
                        </div>
                        
                        <div class="col-lg-12 col-md-12">
                            <button class="btn btn-primary" type="submit">Become a Member!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/accordion";
import AccordionItem from "../Common/accordion-item";

export default {
	name: 'Membership',
	components: {
        Accordion,
        AccordionItem
    },
}
</script>