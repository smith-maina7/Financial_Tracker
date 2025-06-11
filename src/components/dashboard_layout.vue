<template>
  <div>
    <nav class="bg-green-600 text-white p-4 flex justify-between">
      <h1 class="font-bold text-xl">Dashboard</h1>
      <div class="space-x-4">
        <RouterLink to="/dashboard">Home</RouterLink>
        <RouterLink to="/income">Income</RouterLink>
        <RouterLink to="/addExpenses">Expenses</RouterLink>
        <button @click="logout" class="bg-red-500 px-2 py-1 rounded">Logout</button>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>
