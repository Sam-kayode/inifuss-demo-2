<template>
    <div class="px-[22px] lg:px-[70px] md:mt-[70px] mt-[90px]">
        <div class="md:text-center">
            <h2 class="font-body text-[36px] md:text-[50px]  font-bold text-burgundy">Why you should Consider Working
                With us</h2>
            <p class="text-[#5E6282] font-inter text-[18px]  font-normal mt-2">We’re currently in three african
                countries
                and we are constantly expanding.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 place-content-evenly max-w-[1100px] mx-auto mt-12 gap-3">
            <LandingPageInfoCard v-for="(card, i) in cards" :index="i" :image="card.image" :title="card.title"
                :description="card.description" />
        </div>
    </div>

</template>

<script lang="ts" setup>
const cards = [
    { image: "/images/card-1.png", title: "Collaborate Internationally", description: "Connect and collaborate internationally with sites and teams in South Africa, Cameroon, and Nigeria" },
    { image: "/images/card-2.png", title: "Own your space", description: "Grow your skills with an intimate team where there is always room to participate and grow." },
    { image: "/images/card-3.png", title: "Make an impact", description: "At Infuisss, we are bringing rise to clinical research in Africa with over 5,000 recruited participants." }]

</script>