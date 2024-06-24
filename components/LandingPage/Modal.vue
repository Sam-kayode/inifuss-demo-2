<template>
    <div v-if="isOpen" @click="handleOverlayClick" class="fixed inset-0 flex items-center justify-center z-50 px-4 bg-[#0000007d]">
      <div @click.stop class="rounded-lg shadow-lg w-fit">
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue';
  
  defineProps({
    isOpen: {
      type: Boolean,
      required: true
    }
  });

  const emit = defineEmits(['closeModal']);

  const handleOverlayClick = () => {
  emit('closeModal');
};
  </script>
  
  <style scoped>

  </style>
  