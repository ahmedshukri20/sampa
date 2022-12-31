<template>
    <div class="what-we-do-area ptb-80">
			<div class="container">
				<div class="section-title">
					<h2>What We Do</h2>
					<div class="bar"></div>
					<p>Our practitioners perform a wide variety of activities, but some common activities include</p>
				</div>

				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="single-what-we-do-box">
							<div class="icon">
                                <i class="flaticon-monitor"></i>
                            </div>
                            <h3><NuxtLink to="/service-details">Events</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <NuxtLink to="/service-details" class="link">Organize events</NuxtLink>
                            <NuxtLink to="/service-details" class="link">Invite health professionals</NuxtLink>
                            <NuxtLink to="/service-details" class="read-more-btn">
                                    <feather type="arrow-right"></feather>Read More</NuxtLink>
						</div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 col-sm-6">
						<div class="single-what-we-do-box">
							<div class="icon">
                                <i class="flaticon-idea"></i>
                            </div>
                            <h3><NuxtLink to="/service-details">Education Seminars</NuxtLink></h3>
                            <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <NuxtLink to="/service-details" class="link">Hold speaking seminars</NuxtLink>
                            <NuxtLink to="/service-details" class="link">Prepare speaking topics</NuxtLink>
                            <NuxtLink to="/service-details" class="read-more-btn"><feather type="arrow-right"></feather>Read More</NuxtLink>
						</div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
						<div class="single-what-we-do-box">
							<div class="icon">
                                <i class="flaticon-software"></i>
                            </div>
                            <h3><NuxtLink to="/service-details">Coordinating Care</NuxtLink></h3>
                            <p>ften work with other healthcare professionals to ensure that patients receive the most appropriate.</p>
                            <NuxtLink to="/service-details" class="link">Work with other healthcare Institutes</NuxtLink>
                            <NuxtLink to="/service-details" class="link">Consult with Patients</NuxtLink>
                            <NuxtLink to="/service-details" class="read-more-btn"><feather type="arrow-right"></feather>Read More</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
    name: 'WhatWeDo'
}
</script>