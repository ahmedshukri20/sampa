<template>
    <!-- Start Navbar Area -->
    <header id="header" :class="['header-five headroom navbar-color-white', {'is-sticky': isSticky}]">
        <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <NuxtLink class="navbar-brand" to="/">
                        <img src="~/assets/img/logo.png" alt="logo" width="150px"/>
                    </NuxtLink>

                    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav nav ml-auto">
                            <li class="nav-item">
                                <a href="/" class="nav-link">
                                    Home 
                                </a>
                            </li>

                            <!-- <li class="nav-item"><a href="/about-style-one" class="nav-link">About us</a></li> -->
                            <li class="nav-item">
                                <a href="#" class="nav-link">About us<feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item"><a href="/about-style-one" class="nav-link">Who we are </a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">What we do </a></li>
                                </ul>
                            </li>
                            <!-- <li class="nav-item"><a href="/service-style-one" class="nav-link">Services</a></li>
                            <li class="nav-item"><a href="/project-style-one" class="nav-link">Projects</a></li> -->
                            <li class="nav-item">
                                <a href="#" class="nav-link">Membership<feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item"><a href="#" class="nav-link">Registration</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Benefits </a></li>
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <a href="#" class="nav-link">Upcoming Events <feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item"><a href="#" class="nav-link">CME Programmes </a></li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="/faq" class="nav-link">FAQ</a></li>
                            
                            <!-- <li class="nav-item">
                                <a href="#" class="nav-link">Services <feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item"><a href="#" class="nav-link">Features <feather type="chevron-down"></feather></a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/features" class="nav-link">Features</NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/feature-details" class="nav-link">Features Details</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item"><a href="#" class="nav-link">Services <feather type="chevron-down"></feather></a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/service-style-one" class="nav-link">Services Style 1</NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/service-style-two" class="nav-link">Services Style 2</NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/service-style-three" class="nav-link">Services Style 3</NuxtLink>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <NuxtLink to="/service-style-four" class="nav-link">Services Style 4</NuxtLink>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <NuxtLink to="/service-style-five" class="nav-link">Services Style 5</NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/service-details" class="nav-link">Services Details</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/feedback" class="nav-link">Feedback</router-link>
                                    </li>
                                    
                                    <li class="nav-item"><a href="#" class="nav-link">Project <feather type="chevron-down"></feather></a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/project-style-one" class="nav-link">Project Style 1</NuxtLink>
                                            </li>

                                            <li class="nav-item">
                                                <NuxtLink to="/project-style-two" class="nav-link">Project Style 2</NuxtLink>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <NuxtLink to="/project-details" class="nav-link">Project Details</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/team" class="nav-link">Team</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <NuxtLink to="/faq" class="nav-link">FAQ</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/coming-soon" class="nav-link">Coming Soon</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        
                            <li class="nav-item"><a href="#" class="nav-link">Blog <feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/blog-grid" class="nav-link">Blog Grid</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/blog-right-sidebar" class="nav-link">Blog Right Sidebar</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/blog-grid-two" class="nav-link">Blog Grid 2</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/blog-right-sidebar-two" class="nav-link">Blog Right Sidebar 2</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/blog-grid-three" class="nav-link">Blog Grid 3</NuxtLink>
                                    </li>

                                    <li class="nav-item">
                                        <NuxtLink to="/blog-right-sidebar-three" class="nav-link">Blog Right Sidebar 3</NuxtLink>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <NuxtLink to="/blog-details" class="nav-link">Blog Details</NuxtLink>
                                    </li>
                                </ul>
                            </li> -->

                            <!-- <li class="nav-item">
                                <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
                            </li> -->
                        </ul>
                    </b-collapse>

                    <div class="others-option">
                        <!-- <NuxtLink to="/cart" class="cart-wrapper-btn">
                            <feather type="shopping-cart"></feather>
                            <span>{{cart.length}}</span>
                        </NuxtLink> -->
                        <a href="/contact" class="btn btn-secondary">Contact us</a>
                    </div>
                </nav>
            </div> 
        </div>
    </header>
    <!-- End Navbar Area -->
</template>

<script>
export default {
    name: 'HeaderTwo',
    data(){
        return {
            isSticky: false
        }
    },

    mounted() {
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            // eslint-disable-next-line no-console
            if(scrollPos >= 300){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    },

    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
}
</script>