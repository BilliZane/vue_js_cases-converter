<template>
  <button class="buttons__btn" @click="$emit('to-upper-case-snake')">
    Upper case & Snake
  </button>
</template>

<script>
export default {
  emits: ['to-upper-case-snake']
}
</script>

<style>
</style>
