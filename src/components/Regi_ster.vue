<template>
  <Layout>
    <div class="max-w-md mx-auto mt-20 p-8 bg-white border rounded-xl shadow-lg">
      <h2 class="text-3xl font-bold text-center text-green-600 mb-2">Create an Account</h2>
      <p class="text-gray-500 text-center mb-6">Join and take control of your personal finances</p>

      <form>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="John Doe"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="you@example.com"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="••••••••"
          />
        </div>

        <div class="flex justify-between items-center space-x-2">
          <button
            type="submit"
            class="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
          >
            Register
          </button>

          <RouterLink
            to="/login"
            class="flex-1 text-center bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition"
          >
            Login
          </RouterLink>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../components/Lay_out.vue'
</script>
