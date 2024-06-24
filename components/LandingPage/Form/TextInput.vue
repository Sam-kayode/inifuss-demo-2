<template>
    <div>
      <label class="block text-[24px] font-semibold text-burgundy font-body">{{ label }}</label>
      <input
        :type="type"
        :value="modelValue"
        @input="updateValue"
        :placeholder="placeholder"
        :class="[
          'mt-1 block w-full sm:text-sm border-gray-300 rounded-md shadow-sm border-[1px] border-[#C8C8C8] h-[56px]',
          customClass,
        ]"
      />
    </div>
  </template>
  
  <script setup lang="ts">  
  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
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
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
  };
  </script>
  
  <style scoped>
  </style>
  