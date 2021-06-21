<template>
  <button class="buttons__btn" @click="$emit('to-kebab-case')">
    kebab-case
  </button>
</template>

<script>
export default {
  emits: ['to-kebab-case']
}
</script>

<style>
</style>
