<script setup>
let message = ""

async function encodeAndCopy(){
    const body = {message: message}

    const data = await $fetch('/api/aesEncode',{
        method: "POST",
        body: body}
    )

    console.log(data)
}

onMounted(async () => {
    //const textEncoder = new TextEncoder();
    //const uint8Array = textEncoder.encode("rayofsunshinexdd");
    //console.log(uint8Array, "rayofsunshinexdd".length)
})
</script>

<template>
    <div class="flex items-center justify-center flex-col w-full h-full">
        <div class="text-4xl font-semibold">Encoder</div>
        <!--rayofsunshinexdd cbc-->
        <input v-model="message" placeholder="message" class="mt-2 bg-ctfpalette-200 text-ctfpalette-300 focus:outline-none focus:bg-ctfpalette-50 px-3 rounded-3xl placeholder:text-ctfpalette-100"/>
        <button @click="encodeAndCopy()" class="mt-2 bg-ctfpalette-100 text-ctfpalette-300 hover:bg-ctfpalette-50 px-3 rounded-3xl text-xl transition-all">Encode</button>
    </div>
</template>