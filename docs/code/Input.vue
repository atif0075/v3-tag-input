<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["upValue"]);
function onInput(e) {
  console.log(e.target.value);
  emit("upValue", e.target.value);
}
</script>
<template>
  <div>
    <label
      class="label-text ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      <input
        style="
          border: none;
          outline: none;
          margin-left: 10px;
          border-bottom: 1px solid #ccc;
          width: 3rem;
        "
        type="number"
        :value="modelValue"
        @input="onInput"
      />
      {{ label }}
    </label>
  </div>
</template>
<style scoped></style>
