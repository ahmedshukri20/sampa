<template>
    <div class="faq-area ptb-80">
        <div class="container">
            <div class="faq-accordion">
                <accordion>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <a class="accordion-button">Who can join the African Medical Association?</a>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Any healthcare professional, including doctors, nurses, pharmacists, and researchers, can join our association. We welcome members from across the nation and beyond.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <a class="accordion-button">What are the benefits of membership?</a>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Members have access to educational events and resources, opportunities to network with other healthcare professionals, discounts on admission to events and conferences, access to an exclusive online forum for members only, opportunities for professional development and continuing education, and the chance to make a difference in the health and well-being of African communities.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <a class="accordion-button">How can I get involved in community outreach programs?</a>
                        </template>
                        <template v-slot:accordion-content>
                            <p>If you're interested in volunteering for community outreach programs, please contact us at <b>info@sompa.org</b>. We can provide you with information on upcoming events and opportunities to get involved.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <a class="accordion-button">What are the membership fees?</a>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Membership fees vary depending on your profession and location. Please contact us through the contact us page on our website for more information on membership fees.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <a class="accordion-button">How can I contribute to the Somali Practitioners Association's advocacy efforts?</a>
                        </template>
                        <template v-slot:accordion-content>
                            <p>If you're interested in contributing to our advocacy efforts, please consider becoming a member and getting involved in our policy and advocacy committees. You can also follow us on social media to stay up-to-date on our advocacy efforts and share our messages with your own network.</p>
                        </template>
                    </accordion-item>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <a class="accordion-button">Can I share resources between features?</a>
                        </template>
                        <template v-slot:accordion-content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
                        </template>
                    </accordion-item>
                </accordion>
            </div>

            <div class="faq-contact">
                <h3>Ask Your Question</h3>
                <form>
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
                            <button class="btn btn-primary" type="submit">Submit Now!</button>
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
    name: 'FaqArea',
    components: {
        Accordion,
        AccordionItem
    }
}
</script>