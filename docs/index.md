---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "V3 Tag Input"
  text: "A Vue 3 component for inputting tags"
  tagline: "A Vue 3 component for inputting tags, totally rewritten from scratch, no dependencies, supports Vue 3 only"
---

<script setup>
  import TagInput from "../src/components/TagInput.vue"
  import Switch from "../docs/code/Switch.vue"
  import Input from "../docs/code/Input.vue"
  import {ref} from "vue"
  const maxTags =ref(null)
  const allowDuplicates = ref(false)
  function getValue(val){
    maxTags.value = val
  }
  function getSwitchValue(val){
    allowDuplicates.value = val
  }
</script>
<main id="tagInpWrapper">
<div class="vp-doc">

# Live Example

</div>
<div style="  width: 100%;
  max-width: 760px; margin-top:10px" class="switches">
<Switch label='Allow Duplicates' :checked='allowDuplicates' @upValue="getSwitchValue($event)" /> 
<Input label='Max Tags' :modelValue='maxTags' @upValue="getValue($event)" />
</div>  
<TagInput id="mainTagInpWrapper" :allowDuplicates='allowDuplicates' :maxTags='maxTags' />
<div class="vp-doc" style="width:100%;max-width: 760px;">

```vue
<script setup>
import v3TagInput from "v3-tag-input";
</script>

<template>
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
```

</div>

</main>
