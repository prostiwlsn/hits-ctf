<script setup>

let loginInput = ""
let passwordInput = ""

async function getUsers(){
  const data = await $fetch('/api/users')
  console.log(data)
}

async function login(){
  const body = {query: "SELECT * FROM users WHERE login='"+loginInput+"' AND password='"+passwordInput+"'"}
  console.log(body)

  const data = await $fetch('/api/login',{
    method: "POST",
    body: body}
  )

  if (data){
    localStorage.setItem("isAuthorized", "1")
    await navigateTo('/encoder')
  }
}

onMounted(async () => {
  const isAuthorized = localStorage.getItem("isAuthorized")
  if(isAuthorized == "1"){
    await navigateTo('/encoder')
  }
})
</script>

<template>
  <div class="flex items-center justify-center flex-col w-full h-full">
    <div class="text-4xl font-semibold">Login</div>
    <input v-model="loginInput" placeholder="login" class="mt-2 bg-ctfpalette-200 text-ctfpalette-300 focus:outline-none focus:bg-ctfpalette-50 px-3 rounded-3xl placeholder:text-ctfpalette-100"/>
    <input v-model="passwordInput" placeholder="password" class="mt-2 bg-ctfpalette-200 text-ctfpalette-300 focus:outline-none focus:bg-ctfpalette-50 px-3 rounded-3xl placeholder:text-ctfpalette-100"/>
    <button @click="login()" class="mt-2 bg-ctfpalette-100 text-ctfpalette-300 hover:bg-ctfpalette-50 px-3 rounded-3xl text-xl transition-all">Login</button>
  </div>
</template>
