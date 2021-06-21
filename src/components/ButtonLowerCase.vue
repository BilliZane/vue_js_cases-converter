<template>
  <button class="buttons__btn" @click="$emit('to-lower-case')">
    Нижний регистр
  </button>
</template>

<script>
export default {
  emits: ['to-lower-case']
}
</script>

<style>
</style>
