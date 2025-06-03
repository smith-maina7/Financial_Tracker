<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl font-bold mb-6">Your Dashboard</h1>
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

    <!-- Placeholders for graphs, recent transactions, etc -->
    <div class="bg-white rounded-xl shadow p-6">
      <h2 class="text-2xl font-semibold mb-4">Recent Transactions</h2>
      <p class="text-gray-500">No transactions yet.</p>
    </div>
  </div>
</template>

<script setup>
// Future: Fetch data with Axios after login
</script>
