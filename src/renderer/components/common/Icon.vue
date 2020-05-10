<template>
  <span
    class="material-icons"
    :style="style">
    {{ name }}
  </span>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    pointer: {
      default: false,
      type: Boolean
    },
    size: {
      type: [String, Number]
    }
  },

  computed: {
    style () {
      return {
        ...(this.pointer) ? { cursor: 'pointer' } : null,
        ...(this.size) ? { fontSize: this.size } : null
      }
    }
  }
}
</script>