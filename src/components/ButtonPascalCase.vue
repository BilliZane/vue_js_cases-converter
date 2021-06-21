<template>
  <button class="buttons__btn" @click="$emit('to-pascal-case')">
    PascalCase
  </button>
</template>

<script>
export default {
  emits: ['to-pascal-case']
}
</script>

<style>
</style>
