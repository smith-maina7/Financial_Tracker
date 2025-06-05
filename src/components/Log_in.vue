<template>
  <Layout>
    <div class="max-w-md mx-auto mt-20 p-8 bg-white border rounded-xl shadow-lg">
      <h2 class="text-3xl font-bold text-center text-green-600 mb-4">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block mb-1 text-sm font-medium">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block mb-1 text-sm font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
        >
          Login
        </button>

        <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
      </form>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import Layout from '../components/Lay_out.vue'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', {
      email: email.value,
      password: password.value,
    })

    // Store JWT token (you can also use Pinia or Vuex)
    localStorage.setItem('token', response.data.token)

    // Redirect to dashboard or homepage
    router.push('/dashboard')
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed'
  }
}
</script>
