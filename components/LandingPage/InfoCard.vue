<template>
    <div class="relative w-fit mx-auto mb-12 px-6">
        <div
            class="max-w-[315px] rounded-[24px]  text-[#5E6282] shadow-[0_20px_20px_-10px_rgb(0,0,0,0.06)] font-inter relative z-20 bg-[#ffffff] h-[100%]">
            <img :src="props.image" class="w-[100%] h-[270px] md:h-[320px]" alt="">
            <div class="body px-6">
                <p class="title text-[15px] md:text-[20px] font-medium py-4">{{ props.title }}</p>
                <div class="flex">
                    <img src="/images/slant-arrow.svg" class="mr-3 h-4 mt-2" alt="">
                    <p class=" text-[14px] md:text-[18px] pb-7">{{ props.description }}
                    </p>
                </div>
            </div>
        </div>
        <img src="/images/spring.svg" alt="" class="absolute -right-[20px] bottom-[100px] z-10 w-[70px]"
            v-if="props.index === 2">
    </div>

</template>

<script lang="ts" setup>
const props = defineProps(["image", "title", "description", "index"])

</script>