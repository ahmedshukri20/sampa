<template>
    <div class="faq-area ptb-80">
        <div class="container">
            <div class="faq-accordion">
                <accordion>
                    <accordion-item>
                        <template v-slot:accordion-trigger>
                            <a class="accordion-button">Who can join SOMPA?</a>
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
                            <a class="accordion-button">Who can i contact for more info?</a>
                        </template>
                        <template v-slot:accordion-content>
                            <p>For mor einfo please contact <a href="mailto:info@sampa.com"><b>info@sampa.com</b></a>. Thank you for your interest in SOMPA and your commitment to advancing the field of medicine and improving healthcare outcomes for patients around the world. We look forward to hearing from you soon.</p>
                        </template>
                    </accordion-item>
                </accordion>
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