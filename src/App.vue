<script setup>
import icon from './assets/icons/icon.svg'
</script>

<template>
  <div>
    <Loader :icon="icon">
      <template #description>
        Please Wait...
      </template>
    </Loader>
  </div>
</template>
