<template>
    <button :class="[
        'inline-flex items-center px-4 py-2 border border-transparent text-[21px] font-medium rounded-[6px] font-inter',
        buttonClass,
        {
          'bg-[#F59E0B] text-[#ffffff] hover:bg-[#f9b746]': variant === 'primary',
          'cursor-not-allowed opacity-50': disabled
        }
      ]"
      :disabled="disabled"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    buttonClass: {
      type: String,
      default: ''
    }
  });
  
  const emit = defineEmits(['click']);
  
  const handleClick = (event: Event) => {
    if (!props.disabled) {
      emit('click', event);
    }
  };
  </script>
  