<script setup>
import { ref } from "vue";
import v3TagInput from "./components/TagInput.vue";
const tags = ref([]);
</script>
<template>
  <!-- <v3TagInput placeholder="Add a tag" :removeAble="true" /> -->
  {{ tags }}
  <v3TagInput
    placeholder="Add Skills"
    :removeAble="true"
    :allowDuplicates="true"
    :allowEmpty="true"
    :maxTags="5"
    @onDuplicate="() => console.log('Duplicate!')"
    @onRemove="() => console.log('Removed!')"
    @getTags="($event) => (tags = $event)"
  />
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
/* .tagInputContainer */
.tagInputContainer {
  padding: 1rem 1rem;
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

/* .tags */
.tags {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
  background-color: #f3f4f6;
  border-radius: 9999px;
}

/* .tagRemoveIconWrap */
.tagRemoveIconWrap {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #718096;
  background-color: transparent;
  border-radius: 9999px;
  transition: background-color 0.2s, color 0.2s;
  border: none;
}

.tagRemoveIconWrap:hover {
  background-color: #e2e8f0;
  color: #1a202c;
}

/* .tagRemoveIcon */
.tagRemoveIcon {
  width: 0.5rem;
  height: 0.5rem;
}

/* .tagInput */
.tagInput {
  outline: none;
  height: 100%;
  width: auto;
  border: none;
}
</style>
