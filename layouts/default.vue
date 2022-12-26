<template>
    <div>
        <Nuxt />
        <HeaderTwo v-if="currentUrl == '/web-hosting'"></HeaderTwo>
        <HeaderTwo v-else-if="currentUrl == '/static-image-three'"></HeaderTwo>
        <HeaderThree v-else-if="currentUrl == '/machine-learning'"></HeaderThree>
        <HeaderThree v-else-if="currentUrl == '/agency-portfolio'"></HeaderThree>
        <HeaderFour v-else-if="currentUrl == '/digital-agency'"></HeaderFour>
        <HeaderFive v-else-if="currentUrl == '/bigdata-analytics'"></HeaderFive>
        <HeaderFive v-else-if="currentUrl == '/contact'"></HeaderFive>
        <HeaderFive v-else-if="currentUrl == '/about-style-one'"></HeaderFive>
        <div v-else-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
        <HeaderFive v-else></HeaderFive>
        <PreLoader />
        <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
        <Footer v-else></Footer>
    </div>
</template>

<script>
import Header from './Header';
import HeaderTwo from './HeaderTwo';
import HeaderThree from './HeaderThree';
import HeaderFour from './HeaderFour';
import HeaderFive from './HeaderFive';
import Footer from './Footer';
import PreLoader from './PreLoader';

export default {
    name: 'app',
    components: {
        Header, HeaderTwo, HeaderThree, HeaderFour, HeaderFive, Footer, 
        PreLoader
    },
    data() {
        return {
            currentUrl: ''
        }
    },
    watch: {
        '$route'(pathUrl){
            this.currentUrl = pathUrl.path;
        }
    },
    mounted() {
        this.currentUrl = window.location.pathname;
    }
}
</script>