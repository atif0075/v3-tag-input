<script setup>
const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["upValue"]);
function onChange(e) {
  emit("upValue", !props.checked);
}
</script>
<template>
  <label class="label-container">
    <input
      type="checkbox"
      :checked="checked"
      @change="onChange"
      class="sr-only peer"
    />
    <div
      class="checkbox peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
    >
      <span class="checkmark"></span>
    </div>
    <span
      class="label-text ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {{ label }}
    </span>
  </label>
</template>
<style scoped></style>
