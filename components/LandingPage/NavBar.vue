<template>
    <div class="flex absolute justify-between md:justify-start px-4 lg:pl-[58px] w-screen py-9 lg:py-6">
        <img src="/images/infiuss-logo.svg" alt="" class="-ml-3">
        <nav class="flex items-center ml-9">
            <ul class="list-none hidden md:flex">
                <li v-for="(route, i) in routes" :key="i" class="mr-8 flex items-center h-10"><a to="/about"
                        class="font-inter text-[18px] text-[#1B1B1BB2]" :class="i==0?'text-[#F59E0B]':''">{{
                            route.name }}</a></li>
            </ul> 
        </nav>
        <img src="/images/hamburger.svg" class="md:hidden" alt="">
    </div>
</template>

<script lang="ts" setup>
const routes = ref([
    { name: "Home", route: " " },
    { name: "Why Us?", route: " " },
    { name: "Why You?", route: " " }
])
</script>