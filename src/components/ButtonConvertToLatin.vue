<template>
  <button class="buttons__btn" @click="$emit('to-latin')">
    Конвертировать в латиницу
  </button>
</template>

<script>
export default {
  emits: ['to-latin']
}
</script>

<style>
</style>
