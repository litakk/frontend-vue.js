<script setup>
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-black">
    <div class="bg-gray-900 p-8 rounded-3xl shadow-2xl w-full max-w-sm text-white">
      
      <h2 class="text-3xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-teal-400">
        Register
      </h2>

      <input type="text" placeholder="Username"
        class="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-white" />

      <input type="password" placeholder="Password"
        class="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-white" />

      <input type="password" placeholder="Confirm Password"
        class="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-white" />

      <button class="w-full bg-gradient-to-r from-green-500 via-green-600 to-teal-500 py-2 rounded-full font-semibold mb-2 hover:scale-105 transform transition">
        Register
      </button>

      <RouterLink to="/login" class="w-full block text-center text-green-400 hover:underline">
        Back to Login
      </RouterLink>

    </div>
  </div>
</template>

<style>
.animate-text-glow {
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  0% { text-shadow: 0 0 10px #50fa7b, 0 0 20px #8be9fd, 0 0 30px #bd93f9; }
  100% { text-shadow: 0 0 20px #50fa7b, 0 0 40px #8be9fd, 0 0 60px #bd93f9; }
}
</style>
