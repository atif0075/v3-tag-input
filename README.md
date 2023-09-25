# V3TagInput

This is a simple input field for entering tags in an input. It is written in vue 3 and has no dependencies. It is totally unstyled and can be used in any project. It is highly customizable and can be used in any project.

## Installation

```bash
npm install v3-tag-input
```

## Import

```javascript
import v3TagInput from "v3-tag-input";
```

## Usage

```vue
<script setup>
import { ref } from "vue";
import v3TagInput from "v3-tag-input";
const tags = ref([]);
</script>

<template>
  <v3TagInput
    placeholder="Add Skills"
    :removeAble="true"
    :allowDuplicates="true"
    :allowEmpty="true"
    @onDuplicate="() => console.log('Duplicate!')"
    @onRemove="() => console.log('Removed!')"
    @getTags="($event) => (tags = $event)"
  />
</template>
```

## Props

| Name            | Type     | Default | Description                                                    |
| --------------- | -------- | ------- | -------------------------------------------------------------- |
| placeholder     | String   | ""      | Placeholder text                                               |
| removeAble      | Boolean  | false   | If true, tags can be removed by clicking on the x              |
| allowDuplicates | Boolean  | false   | If true, duplicate tags can be added                           |
| allowEmpty      | Boolean  | false   | If true, empty tags can be added                               |
| onDuplicate     | Function | null    | Callback function that is called when a duplicate tag is added |
| onRemove        | Function | null    | Callback function that is called when a tag is removed         |
| getTags         | Function | null    | Callback function that is called when tags are changed         |

## Events

| Name        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| onDuplicate | Callback function that is called when a duplicate tag is added |
| onRemove    | Callback function that is called when a tag is removed         |
| getTags     | Callback function that is called when tags are changed         |

## Styling

The component is totally unstyled. You can style it by using the following classes:

```css
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
```
