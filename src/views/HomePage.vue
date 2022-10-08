<script setup>
import { login } from '@/api/api'
import { useUserStore } from '@/stores/modules/user'
const handleClick = () => {
  ElMessage.info('1')
}
const appStore = useUserStore()
onMounted(() => {
  _login()
  appStore.setToken('abc')
})

async function _login() {
  const { data } = await login({
    loginType: 'PASSWORD',
    email: 'rsl140@qq.com',
    param: '123456'
  })
  console.log(data)
}

const token = computed(() => {
  return appStore.token
})
</script>
<template>
  <el-button @click="handleClick">Default</el-button>
  {{ token }}
  <!-- 这里 -->
  <HelloWorld />
</template>
<style scoped lang="scss"></style>
