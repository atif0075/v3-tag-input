<script setup>
import { ref } from "vue";
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
  placeholder: {
    type: String,
    default: "Add tag",
  },
  maxTags: {
    type: Number,
    default: 0,
  },
  onMaxTags: {
    type: Function,
    default: () => {},
  },
});
const emit = defineEmits(["getTags"]);
const tags = ref([]);
const currentInput = ref("");
const tagInput = ref(null);
function onDuplicate() {
  tagInput.value.classList.add("tagInputError");
}
const enterTag = () => {
  tagInput.value.classList.remove("tagInputError");
  if (props.maxTags > 0) {
    if (tags.value.length >= props.maxTags) {
      props.onMaxTags() ? props.onMaxTags() : null;
      tagInput.value.classList.add("tagInputError");
      return;
    }
  }
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
  console.log(tags.value);
  // 
  emit("getTags", tags.value);
};
const removeTag = (index) => {
  console.log(index);
  tags.value.splice(index, 1);
  props.onRemove() ? props.onRemove() : null;
};
</script>
<template>
  <div @click="tagInput.focus()" class="tagInputContainer">
    <span v-for="(item, index) in tags" :key="index" class="tags">
      {{ item }}
      <button type="button" @click="removeTag(index)" class="tagRemoveIconWrap">
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
    <input
      type="text"
      ref="tagInput"
      v-model.trim="currentInput"
      @keyup.enter="enterTag"
      :placeholder="placeholder"
      @keypress="
        tagInput.classList.contains('tagInputError')
          ? tagInput.classList.remove('tagInputError')
          : null
      "
      class="tagInput"
    />
  </div>
</template>
<style>
.tagInputError {
  color: red;
}
</style>
