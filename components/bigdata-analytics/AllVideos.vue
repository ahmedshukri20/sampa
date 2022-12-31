<template>
    <div class="blog-area ptb-80">
			<div class="container">
                <div class="section-title">
                    <h2>Our Videos</h2>
                    <div class="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
                <div class="row justify-content-md-center">
                  
                    <div v-for="video in videos" :key="video.vid_id" class="col-lg-4 col-md-6">
                        <div class="">
                            <div class="single-blog-post-box bg-f4faff">
                                <div class="entry-thumbnail">
                                    <a  class="" @click="changeVideoUrl(video.vid_src)"><img :src="require(`~/assets/img/doctors/${video.vid_image}`)" alt="image" ><feather type="play-circle"></feather></a>
                                </div>

                                <div class="entry-post-content">
                                    <div class="entry-meta">
                                        <ul>
                                            <li><a @click="changeVideoUrl(video.vid_src)">Admin</a></li>
                                            <li>August 15, 2019</li>
                                        </ul>
                                    </div>

                                    <h3><a @click="changeVideoUrl(video.vid_src)">Making Peace With The Feast Or Famine Of Freelancing</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    
                                    <div>
                                        <a class="learn-more-btn" @click="changeVideoUrl(video.vid_src)" variant="primary">Watch video <feather type="plus"></feather></a>
                                        
                                        <b-modal id="modal-1"  v-model="show" centered header-bg-variant="info" size="lg" title="video">
                                            <video  fluid alt="Fluid image" controls muted style="width:100%">
                                                <source :src="videoUrl"  type="video/mp4" />
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
    name: 'AllVideos',
    data() {
      return {
        show: false,
        videoUrl: '',
        videos: [
            {
                vid_id: "1",
                vid_image: "dr1.png",
                vid_src: "doctor_01.mp4"
            },
            {
                vid_id: "2",
                vid_image: "dr2.png",
                vid_src: "doctor_02.mp4"
            },
            {
                vid_id: "3",
                vid_image: "dr3.png",
                vid_src: "doctor_03.mp4"
            },
            {
                vid_id: "4",
                vid_image: "dr4.png",
                vid_src: "doctor_04.mp4"
            },
            {
                vid_id: "5",
                vid_image: "dr5.png",
                vid_src: "doctor_05.mp4"
            },
            {
                vid_id: "6",
                vid_image: "dr1.png",
                vid_src: "doctor_01.mp4"
            },
        ]
      }
    },
    methods: {
        changeVideoUrl(new_url) {
            this.show = true
            this.videoUrl = require('~/assets/videos/'+new_url)
        }
    }
}
</script>