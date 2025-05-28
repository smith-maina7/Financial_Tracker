<script setup>
import NavBar from './nav_bar.vue'
import Footer from './foo_ter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
