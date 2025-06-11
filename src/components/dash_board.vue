<template>
  <dashboard_layout>
    <div class="min-h-screen bg-gray-100 p-6">
      <h1 class="text-3xl font-bold mb-2">Welcome, {{ userName }}</h1>
      <p class="text-gray-500 mb-6">Here's a quick overview of your finances:</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div class="bg-white rounded-xl shadow p-6 text-center">
          <h2 class="text-xl font-semibold text-gray-700">Total Income</h2>
          <p class="text-2xl font-bold text-green-500 mt-2">Ksh 0.00</p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 text-center">
          <h2 class="text-xl font-semibold text-gray-700">Total Expenses</h2>
          <p class="text-2xl font-bold text-red-500 mt-2">Ksh 0.00</p>
        </div>
        <div class="bg-white rounded-xl shadow p-6 text-center">
          <h2 class="text-xl font-semibold text-gray-700">Current Balance</h2>
          <p class="text-2xl font-bold text-blue-500 mt-2">Ksh 0.00</p>
        </div>
      </div>

      <!-- Placeholder for recent transactions -->
      <div class="bg-white rounded-xl shadow p-6">
        <h2 class="text-2xl font-semibold mb-4">Recent Transactions</h2>
        <p class="text-gray-500">No transactions yet.</p>
      </div>
    </div>
  </dashboard_layout>
</template>

<script setup>
import dashboard_layout from './dashboard_layout.vue'
import { ref, onMounted } from 'vue'
import { jwtDecode } from 'jwt-decode'

const userName = ref('')

onMounted(() => {
  const token = localStorage.getItem('token')
  if (token) {
    try {
      const decoded = jwtDecode(token)
      console.log('Decoded token:', decoded)

      userName.value = decoded.name || 'User'
    } catch (err) {
      console.log('Invalid token:', err)
      userName.value = ''
    }
  } else {
    userName.value = 'User'
  }
})
</script>
