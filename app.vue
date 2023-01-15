<template>
  <div>
   Hello world
   <button>test</button>
  </div>
</template>
<script setup lang="ts">

const {sendLog} = useLogging()
const  getUsers = async() => {
  try {
    const req = await fetch(`xxx`)
    const res = await req.json()
    console.log(res)
  } catch (error) {
    console.error(error)
    const message = `error on home page: function getUsers, errorText: cannot parse json`
    sendLog(message)
  }
}

onMounted(() => {
  getUsers()
})
</script>
