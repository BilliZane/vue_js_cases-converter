<template>
  <button class="buttons__btn" @click="$emit('to-upper-case')">
    Верхний регистр
  </button>
</template>

<script>
export default {
  emits: ['to-upper-case']
}
</script>

<style>
</style>
