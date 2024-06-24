<template>
    <div class="flex lg:flex-row flex-col justify-between px-16 lg:pl-[58px] w-screen py-9 lg:py-0 text-center md:text-left items-center mt-16 md:mt-[120px]">
        <img src="/images/infiuss-logo.svg" alt="" class="-ml-3 w-[209px]">
        <nav class="flex items-center md:ml-9">
            <ul class="list-none flex items-center md:flex-row flex-col">
                <li v-for="(route, i) in routes" :key="i" class="my-4 md:my-0 md:mr-8 flex items-center h-10 cursor-pointer"><a class="font-inter text-[18px] text-[#4F5059]">{{
                            route.name }}</a></li>
                <li class="text-[16px] lg:ml-8 text-[#4F5059] flex items-center">© 2022 Infiuss Health, All Rights Reserved</li>
            </ul> 
        </nav>
    </div>
</template>

<script lang="ts" setup>
const routes = ref([
    { name: "Support", route: " " },
    { name: "Privacy Policy", route: " " },
    { name: "Terms and Conditions", route: " " }
])
</script>