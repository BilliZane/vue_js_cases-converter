<template>
  <button class="buttons__btn" @click="$emit('to-camel-case')">
    CamelСase
  </button>
</template>

<script>
export default {
  emits: ['to-camel-case']
}
</script>

  <style>
</style>
