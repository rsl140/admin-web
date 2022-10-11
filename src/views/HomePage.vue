<template>
  <el-button @click="login">login</el-button>
  <el-button @click="getInfo">getInfo</el-button>
  {{ token }}
  <!-- 这里 -->
  <!-- <HelloWorld /> -->
</template>
<script setup>
import { useUserStore } from '@/stores/modules/user'
const appStore = useUserStore()
const login = async () => {
  // ElMessage.info('1')
  await _login()
}

const getInfo = async () => {
  appStore.getInfo()
}
onMounted(() => {
  // _login()
})

async function _login() {
  const obj = {
    loginType: 'PASSWORD',
    account: 'admin',
    param: '123456'
  }
  await appStore.Login(obj)
}

const token = computed(() => {
  return appStore.token
})
</script>
<style scoped lang="scss"></style>
