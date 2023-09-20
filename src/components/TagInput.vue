<script setup>
import { ref } from "vue";
import TagButton from "./TagButton.vue";
const props = defineProps({
  allowEmpty: {
    type: Boolean,
    default: false,
  },
  allowDuplicates: {
    type: Boolean,
    default: false,
  },
  onDuplicate: {
    type: Function,
    default: () => {},
  },
  removeAble: {
    type: Boolean,
    default: false,
  },
  onRemove: {
    type: Function,
    default: () => {},
  },
});
const tags = ref([]);
const currentInput = ref("");
const tagInput = ref(null);
function onDuplicate() {
  tagInput.value.classList.add("text-red-500");
}
const enterTag = () => {
  tagInput.value.classList.remove("text-red-500");
  if (currentInput.value === "") {
    if (props.allowEmpty) {
      tags.value.push(currentInput.value);
      currentInput.value = "";
    }
  } else {
    if (tags.value.includes(currentInput.value)) {
      if (props.allowDuplicates) {
        tags.value.push(currentInput.value);
        currentInput.value = "";
      } else {
        props.onDuplicate() ? props.onDuplicate() : onDuplicate();
      }
    } else {
      tags.value.push(currentInput.value);
      currentInput.value = "";
    }
  }
};
</script>
<template>
  <div @click="tagInput.focus()" class="tagInputContainer">
    <TagButton v-for="(item, index) in tags" :tag="item" :key="index" />
    <input
      type="text"
      ref="tagInput"
      v-model="currentInput"
      @keyup.enter="enterTag"
      class="tagInput"
    />
  </div>
</template>
<style>

</style>
