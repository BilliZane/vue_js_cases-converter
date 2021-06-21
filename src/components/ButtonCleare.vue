<template>
  <button class="buttons__btn buttons__last-btn" @click="$emit('clear-input')">
    Очистить поле ввода
  </button>
</template>

<script>
export default {
  emits: ['clear-input']
}
</script>

<style>
</style>
