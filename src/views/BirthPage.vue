<template>
  <div
    class="font-sans text-gray-800 bg-linear-to-br from-blue-50 via-white to-blue-100 min-h-screen"
  >
    <section
      class="relative w-full min-h-[60vh] flex items-center justify-center text-center overflow-hidden"
    >
      <div class="absolute inset-0">
        <img
          src="../assets/images/home_image.png"
          alt="Nascimento"
          class="w-full h-full object-cover opacity-40 blur-sm scale-105"
        />
        <div
          class="absolute inset-0 bg-linear-to-br from-blue-900/80 via-blue-700/60 to-blue-400/40"
        ></div>
      </div>
      <div class="relative z-10 px-6 animate-fade-in">
        <h1 class="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-2xl mb-4">
          Registro de Nascimento
        </h1>
        <p class="text-xl text-white mt-2 max-w-3xl mx-auto font-light opacity-95">
          O primeiro e mais importante documento da vida.
        </p>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 py-16">
      <div
        class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-10 space-y-8 animate-fade-in"
      >
        <div class="flex items-center gap-4 mb-4">
          <PhBaby :size="56" weight="bold" class="text-blue-700 drop-shadow-lg" />
          <h2 class="text-3xl font-bold text-blue-900">Registro Gratuito</h2>
        </div>
        <p class="text-gray-700 leading-relaxed text-lg">
          O registro de nascimento é um direito garantido e deve ser realizado preferencialmente nos
          primeiros dias de vida.
        </p>

        <ul class="space-y-2 text-gray-700 text-base">
          <li class="pl-2">• Certidão de Nascido Vivo emitida pelo hospital</li>
          <li class="pl-2">• Documentos dos pais</li>
          <li class="pl-2">• Não é necessário agendamento</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PhBaby } from '@phosphor-icons/vue'
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
}
</style>
