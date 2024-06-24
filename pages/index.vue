<template>
    <div>
        <LandingPageNavBar />
        <LandingPageHeroSection />
        <LandingPageOfferToClient />
        <LandingPageWorkingWithUs />
        <LandingPageHiring />
        <LandingPageFooter />
        <LandingPageModal :is-open="showModal" @close-modal="showModal = false">
            <LandingPageWelcomeForm />
        </LandingPageModal>
    </div>
</template>
<script lang="ts" setup>

const showModal = ref(true)

</script>