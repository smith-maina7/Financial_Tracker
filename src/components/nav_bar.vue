<script setup></script>

<template>
  <nav class="bg-white shadow-md px-6 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold text-blue-600">Finance Tracker</h1>
    <ul class="flex space-x-4">
      <li><router-link to="/" class="hover:text-blue-500">Home</router-link></li>
      <li><router-link to="/login" class="hover:text-blue-500">Login</router-link></li>
      <li><router-link to="/about" class="hover:text-blue-500">About Us</router-link></li>
    </ul>
  </nav>
</template>
