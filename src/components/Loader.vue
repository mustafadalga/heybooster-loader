<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
})
</script>


<template>
  <div :class="$style.loader">

    <div :class="$style.animation">

      <img :src="props.icon" :class="$style.icon" alt="Loader" title="Loader">
      <div v-for="index in 12"
           :key="index"
           :class="[$style.circle,`${$style[`circle-${index}`]}`]"></div>

    </div>

    <div :class="$style.description" v-if="$slots.description">
      <slot name="description"/>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "loader";
</style>