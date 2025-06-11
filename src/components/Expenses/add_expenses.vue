<template>
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4 text-center">Add New Expense</h2>
    <form @submit.prevent="submitExpense">
      <!-- Category Selection -->
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Category</label>
        <select
          v-model="form.category"
          @change="updateSubcategories"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option disabled value="">Select Category</option>
          <option value="Necessity">Necessity</option>
          <option value="Luxury">Luxury</option>
          <option value="Transport">Transport</option>
        </select>
      </div>

      <!-- Subcategory Selection -->
      <div v-if="subcategories.length" class="mb-4">
        <label class="block text-sm font-medium mb-1">Subcategory</label>
        <select
          v-model="form.subcategory"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option disabled value="">Select Subcategory</option>
          <option v-for="sub in subcategories" :key="sub" :value="sub">{{ sub }}</option>
        </select>
      </div>

      <!-- Amount Input -->
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Amount (Ksh)</label>
        <input
          type="number"
          v-model="form.amount"
          placeholder="Enter amount"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
      >
        Add Expense
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  category: '',
  subcategory: '',
  amount: '',
})

const subcategories = ref([])

const categories = {
  Necessity: ['Rent', 'Food', 'School Fees'],
  Luxury: ['Dining Out', 'Gadgets', 'Vacations'],
  Transport: ['Fuel', 'Public Transport', 'Car Maintenance'],
}

const updateSubcategories = () => {
  subcategories.value = categories[form.value.category] || []
}

const submitExpense = async () => {
  try {
    const token = localStorage.getItem('token')
    await axios.post('http://localhost:3000/api/expenses/add', form.value, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`, // this is required by your backend middleware!
      },
    })
    alert('Expense added successfully!')
    // Reset form
    form.value = { category: '', subcategory: '', amount: '' }
    subcategories.value = []
  } catch (error) {
    console.error('Error adding expense:', error)
    alert('Failed to add expense')
  }
}
</script>
