<script setup>
</script>

<template>
  <main class="relative min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white overflow-hidden flex flex-col items-center justify-center p-6">

    <!-- Stars background -->
    <div class="absolute inset-0">
      <div class="absolute w-full h-full animate-starfield bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </div>

    <!-- Game Card -->
    <div class="relative z-10 bg-gradient-to-r from-indigo-900 via-purple-800 to-black p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-6">

      <h1 class="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400">
        Game ID: 123-abc
      </h1>

      <div class="text-lg text-gray-300">
        Players: <span class="text-pink-400 font-semibold">Azamat</span> vs <span class="text-purple-400 font-semibold">Elderbew</span>
      </div>

      <!-- Tic-Tac-Toe Board -->
      <div class="grid grid-cols-3 gap-4 mt-4">
        <button class="w-20 h-20 bg-gray-800 border border-gray-600 rounded shadow-lg text-3xl font-bold hover:bg-gray-700 transition"></button>
        <button class="w-20 h-20 bg-gray-800 border border-gray-600 rounded shadow-lg text-3xl font-bold hover:bg-gray-700 transition"></button>
        <button class="w-20 h-20 bg-gray-800 border border-gray-600 rounded shadow-lg text-3xl font-bold hover:bg-gray-700 transition"></button>

        <button class="w-20 h-20 bg-gray-800 border border-gray-600 rounded shadow-lg text-3xl font-bold hover:bg-gray-700 transition"></button>
        <button class="w-20 h-20 bg-gray-800 border border-gray-600 rounded shadow-lg text-3xl font-bold hover:bg-gray-700 transition"></button>
        <button class="w-20 h-20 bg-gray-800 border border-gray-600 rounded shadow-lg text-3xl font-bold hover:bg-gray-700 transition"></button>

        <button class="w-20 h-20 bg-gray-800 border border-gray-600 rounded shadow-lg text-3xl font-bold hover:bg-gray-700 transition"></button>
        <button class="w-20 h-20 bg-gray-800 border border-gray-600 rounded shadow-lg text-3xl font-bold hover:bg-gray-700 transition"></button>
        <button class="w-20 h-20 bg-gray-800 border border-gray-600 rounded shadow-lg text-3xl font-bold hover:bg-gray-700 transition"></button>
      </div>

    </div>

  </main>
</template>

<style>
@keyframes starfield {
  0% { background-position: 0 0; }
  100% { background-position: -1000px 1000px; }
}

.animate-starfield {
  animation: starfield 200s linear infinite;
}

@keyframes glow {
  0% { text-shadow: 0 0 10px #ff79c6, 0 0 20px #bd93f9, 0 0 30px #8be9fd; }
  100% { text-shadow: 0 0 20px #ff79c6, 0 0 40px #bd93f9, 0 0 60px #8be9fd; }
}
</style>
