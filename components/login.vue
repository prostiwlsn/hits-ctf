<script setup>

async function getUsers(){
    const data = await $fetch('/api/users')
    console.log(data)
}

onMounted(async () => {
    if(isAuthorized == null){
    await navigateTo('/')
  }
})
</script>

<template>
    <div class="flex items-center justify-center flex-col w-full h-full">
        <div class="text-3xl">Login</div>
        <button @click="getUsers">xdd</button>
    </div>
</template>