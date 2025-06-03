<template>
  <Layout>
    <div class="max-w-md mx-auto mt-20 p-8 bg-white border rounded-xl shadow-lg">
      <h2 class="text-3xl font-bold text-center text-green-600 mb-2">Create an Account</h2>
      <p class="text-gray-500 text-center mb-6">Join and take control of your personal finances</p>

      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Name</label>
          <input
            v-model="name"
            type="text"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="John Doe"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="you@example.com"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="••••••••"
          />
        </div>

        <div v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</div>
        <div v-if="successMessage" class="text-green-500 text-sm mb-4">{{ successMessage }}</div>

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
import { ref } from 'vue'
import axios from 'axios'
import Layout from '../components/Lay_out.vue'

const name = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const handleRegister = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!name.value || !email.value || !password.value) {
    errorMessage.value = 'Please fill out all fields.'
    return
  }

  try {
    const res = await axios.post('http://localhost:3000/api/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value,
    })

    successMessage.value = 'Account created successfully!'
    name.value = ''
    email.value = ''
    password.value = ''
  } catch (err) {
    if (err.response?.status === 409) {
      errorMessage.value = 'Email already registered.'
    } else {
      errorMessage.value = 'An error occurred. Please try again.'
    }
  }
}
</script>
