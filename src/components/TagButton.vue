<script setup>
defineProps({
  tag: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <span
    class="tags"
  >
    {{ tag }}
    <button
      type="button"
      class="tagRemoveIconWrap"
    >
      <svg class="tagRemoveIcon" fill="none" viewBox="0 0 14 14">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  </span>
</template>
<style scoped></style>
