<template>
    <div class="blog-area ptb-80">
			<div class="container">
				<div class="section-title">
					<h2>Our Recent Videos</h2>
					<div class="bar"></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
                <div class="row justify-content-md-center text-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post-box bg-f4faff">
                            <div class="entry-thumbnail">
                                <a  class="" @click="show=true"><img src="~/assets/img/blog-image/1.jpg" alt="image" ><feather type="play-circle"></feather></a>
                            </div>

                            <div class="entry-post-content">
                                <div class="entry-meta">
                                    <ul>
                                        <li><a @click="show=true">Admin</a></li>
                                        <li>August 15, 2019</li>
                                    </ul>
                                </div>

                                <h3><a @click="show=true">Making Peace With The Feast Or Famine Of Freelancing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                <!-- <a href="#" class="learn-more-btn">Read Story <feather type="plus"></feather></a> -->
                                <div>
                                    <!-- <a @click="show=true"  v-b-modal.modal-1>Watch video</a> -->

                                    <a class="learn-more-btn" @click="show=true" variant="primary">Watch video <feather type="plus"></feather></a>
                                    
                                    <b-modal id="modal-1"  v-model="show" centered header-bg-variant="info" size="lg" title="video">
                                        <video fluid alt="Fluid image" loop controls muted style="width:100%">
                                            <source src="~/assets/videos/doctor_01.mp4" type="video/mp4" />
                                        </video>
                                        <template #modal-footer>
                                            <div class="w-100">
                                            <!-- <p class="float-left">Modal Footer Content</p> -->
                                           
                                            </div>
                                        </template>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post-box bg-f4faff">
                            <div class="entry-thumbnail">
                                <a  class="" @click="show=true"><img src="~/assets/img/blog-image/1.jpg" alt="image" ><feather type="play-circle"></feather></a>
                            </div>

                            <div class="entry-post-content">
                                <div class="entry-meta">
                                    <ul>
                                        <li><a @click="show=true">Admin</a></li>
                                        <li>August 15, 2019</li>
                                    </ul>
                                </div>

                                <h3><a @click="show=true">Making Peace With The Feast Or Famine Of Freelancing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                <!-- <a href="#" class="learn-more-btn">Read Story <feather type="plus"></feather></a> -->
                                <div>
                                    <!-- <a @click="show=true"  v-b-modal.modal-1>Watch video</a> -->

                                    <a class="learn-more-btn" @click="show=true" variant="primary">Watch video <feather type="plus"></feather></a>
                                    
                                    <b-modal id="modal-1"  v-model="show" centered header-bg-variant="info" size="lg" title="video">
                                        <video fluid alt="Fluid image" loop controls muted style="width:100%">
                                            <source src="~/assets/videos/doctor_01.mp4" type="video/mp4" />
                                        </video>
                                        <template #modal-footer>
                                            <div class="w-100">
                                            <!-- <p class="float-left">Modal Footer Content</p> -->
                                           
                                            </div>
                                        </template>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div class="single-blog-post-box bg-f4faff">
                            <div class="entry-thumbnail video-link">
                                <a  class="" @click="show=true"><img src="~/assets/img/blog-image/1.jpg" alt="image" ><feather type="play-circle"></feather></a>
                            </div>

                            <div class="entry-post-content">
                                <div class="entry-meta">
                                    <ul>
                                        <li><a @click="show=true">Admin</a></li>
                                        <li>August 15, 2019</li>
                                    </ul>
                                </div>

                                <h3><a @click="show=true">Making Peace With The Feast Or Famine Of Freelancing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                <!-- <a href="#" class="learn-more-btn">Read Story <feather type="plus"></feather></a> -->
                                <div>
                                    <!-- <a @click="show=true"  v-b-modal.modal-1>Watch video</a> -->

                                    <a class="learn-more-btn" @click="show=true" variant="primary">Watch video <feather type="plus"></feather></a>
                                    
                                    <b-modal id="modal-1"  v-model="show" centered header-bg-variant="info" size="lg" title="video">
                                        <video fluid alt="Fluid image" loop controls muted style="width:100%">
                                            <source src="~/assets/videos/doctor_01.mp4" type="video/mp4" />
                                        </video>
                                        <template #modal-footer>
                                            <div class="w-100">
                                            <!-- <p class="float-left">Modal Footer Content</p> -->
                                           
                                            </div>
                                        </template>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 ">
                        <NuxtLink to="/videos" class="read-more-btn font-weight-bold">
                            See all videos <feather type="arrow-right"></feather>
                        </NuxtLink>
                        <!-- <a href="/contact" class="btn btn-primary">See all videos</a> -->
                    </div>
                </div>
			</div>

			<div class="shape1"><img src="~/assets/img/shape1.png" alt="shape"></div>
			<div class="shape2 rotateme"><img src="~/assets/img/shape2.svg" alt="shape"></div>
			<div class="shape3"><img src="~/assets/img/shape3.svg" alt="shape"></div>
			<div class="shape4"><img src="~/assets/img/shape4.svg" alt="shape"></div>
			<div class="shape6 rotateme"><img src="~/assets/img/shape4.svg" alt="shape"></div>
			<div class="shape7"><img src="~/assets/img/shape4.svg" alt="shape"></div>
			<div class="shape8 rotateme"><img src="~/assets/img/shape2.svg" alt="shape"></div>
        </div>
</template>

<script>
export default {
    name: 'OurRecentStory',
    data() {
      return {
        show: false,
      }
    }
}
</script>