<template>
  <Layout>
    <section
      class="bg-cover bg-center text-white py-32 px-6"
      style="background-image: url('/src/assets/Images/OfficeWoman.jpg')"
    >
      <div class="bg-black bg-opacity-60 p-8 rounded-xl max-w-3xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">Experience True Financial Freedom</h1>
        <p class="text-lg mb-6">
          Start tracking your finances, budgeting smartly, and building a secure future — all in one
          place.
        </p>
        <div class="flex justify-center space-x-4">
          <RouterLink to="/register">
            <button class="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md transition">
              Get Started
            </button>
          </RouterLink>
          <RouterLink to="/login">
            <button
              class="bg-white text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-md transition"
            >
              I Already Have an Account
            </button>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 px-4">
      <h2 class="text-3xl font-bold text-center text-blue-700 mb-12">What Our Users Say</h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-lg shadow">
          <p class="text-gray-700 italic">
            “I used to live paycheck to paycheck. This app gave me the control I needed to finally
            start saving.”
          </p>
          <p class="mt-4 text-sm text-right text-blue-600 font-semibold">– David, Freelancer</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <p class="text-gray-700 italic">
            “I love how simple and clean it is. Tracking my expenses has never been this easy or
            motivating.”
          </p>
          <p class="mt-4 text-sm text-right text-blue-600 font-semibold">– Mary, Student</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <p class="text-gray-700 italic">
            “Setting budgets and seeing my progress visually has made a huge difference in my
            financial habits.”
          </p>
          <p class="mt-4 text-sm text-right text-blue-600 font-semibold">– James, Father of Two</p>
        </div>
      </div>
    </section>

    <div class="text-center mt-20">
      <h1 class="text-4xl font-bold text-blue-700 mb-4">Take Control of Your Finances</h1>
      <p class="text-gray-600 text-lg mb-6">
        Track income, manage expenses, and set monthly budgets — all in one place.
      </p>
      <div class="flex justify-center space-x-4 mb-10">
        <RouterLink to="/login">
          <button class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </RouterLink>
        <RouterLink to="/register">
          <button
            class="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition"
          >
            Register
          </button>
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold text-blue-600 mb-2">Track Every Transaction</h3>
          <p class="text-gray-600">
            Record your income and expenses by category, date, and amount.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold text-blue-600 mb-2">Set & Monitor Budgets</h3>
          <p class="text-gray-600">
            Create custom budgets and get alerts when you’re nearing your limit.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold text-blue-600 mb-2">Visualize with Charts</h3>
          <p class="text-gray-600">
            View beautiful graphs that show your spending trends over time.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold text-blue-600 mb-2">Secure & Private</h3>
          <p class="text-gray-600">Your data stays private and secure — no ads, no tracking.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../components/Lay_out.vue'
</script>
