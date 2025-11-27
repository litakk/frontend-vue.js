<script setup>
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-black">
    <div class="bg-gray-900 p-8 rounded-3xl shadow-2xl w-full max-w-sm text-white">
      <h2 class="text-3xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400">
        Login
      </h2>

      <input type="text" placeholder="Username"
        class="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" />
      <input type="password" placeholder="Password"
        class="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" />

      <button class="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 py-2 rounded-full font-semibold mb-2 hover:scale-105 transform transition">
        Login
      </button>
      <RouterLink to="/register" class="w-full block text-center text-blue-400 hover:underline">
        Register
      </RouterLink>
    </div>
  </div>
</template>
