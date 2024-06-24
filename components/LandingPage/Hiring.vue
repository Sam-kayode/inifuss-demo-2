<template>
    <div class="px-[24px] md:px-[60px] mt-16 lg:mt-[90px]">
        <div class="grid grid-cols-1 md:grid-cols-2 p-8 bg-burgundy rounded-[15px] justify-between">
            <div
                class="text-[#ffffff] flex flex-col place-items-center place-content-center order-2 md:order-1 mt-9 md:mt-0">
                <h2 class="font-inter font-[900] text-[24px] lg:text-[40px]">We are currently not hiring but are always
                    looking for the best
                    talent!</h2>
                <p class="font-[18px] pr-[50px]">We refuse to miss out on the best of the best. We’re open to
                    suggestions about why you’ll be a great addition to our team. </p>
            </div>
            <div class="order-1">
                <img src="/images/hiring-img.png" class="ml-auto" alt="">
            </div>
        </div>
        <form class="mt-12 md:px-16">
            <LandingPageFormTextInput label="Name" />
            <LandingPageFormTextInput label="Email" class="mt-12" />
            <div class="md:flex text-burgundy">
                <div class="pr-14" v-for="(check, i) in checks" :key="i">
                    <p class="font-semibold text-[18px] md:text-[24px] mb-8 font-body mt-9">{{ check.title }}</p>
                    <div class="mb-4 text-[16px] md:text-[18px] flex font-inter" v-for="(item, i) in check.list" :key="i">
                        <LandingPageFormCheckBox class="mr-3" />{{ item }}
                    </div>
                </div>
            </div>
            <p class="text-burgundy font-semibold text-[18px] md:text-[24px] mb-4 font-body mt-9">Show us what you got. Tell us why
                you'll be a great addition to our team. </p>
            <LandingPageFormTextArea custom-class="min-h-[175px]" />
            <LandingPageFormButton class="px-14 mt-10">Send</LandingPageFormButton>
        </form>

    </div>

</template>

<script lang="ts" setup>
const checks = ref([
    {
        title: "Is your feedback a...",
        list: [
            "New role suggestion for you",
            "A must have that we don’t have",
            "Other",
        ]
    },
    {
        title: "Is your feedback based on a position for…",
        list: [
            "Full-time ",
            "Part-time ",
            "Internship",
        ]
    }
])

</script>