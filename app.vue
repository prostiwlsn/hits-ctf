<script setup>
onMounted(() => {
  const isAuthorized = localStorage.getItem("isAuthorized")
  if (isAuthorized == null){
    localStorage.setItem("isAuthorized", "0")
  }
})
</script>

<template>
  <img src="./public/duck.png" class="absolute bottom-0 left-0 w-20 h-auto cursor-pointer hidden">
  <div>
    <NuxtPage class="h-screen"/>
  </div>
</template>

<style>
:root{
  @apply bg-ctfpalette-300 text-ctfpalette-50;
}
</style>