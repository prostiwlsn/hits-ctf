<script setup>

async function getUsers(){
    const data = await $fetch('/api/users')
    console.log(data)
}

onMounted(async () => {
})
</script>

<template>
    <div class="flex items-center justify-center flex-col w-full h-full">
        <h1>Login</h1>
        <button @click="getUsers">xdd</button>
    </div>
</template>