<template>
  <button class="buttons__btn" @click="$emit('to-snake-case')">
    snake_case
  </button>
</template>

<script>
export default {
  emits: ['to-snake-case']
}
</script>

<style>
</style>
