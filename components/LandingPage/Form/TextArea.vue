<template>
    <div>
        <textarea :value="modelValue" @input="updateValue" :placeholder="placeholder" :class="['mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-[1px] border-[#C8C8C8] ',
            customClass
        ]" rows="4"></textarea>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    customClass: {
        type: String,
        default: ''
    },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    emit('update:modelValue', target.value);
};
</script>