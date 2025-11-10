<template>
  <div class="font-sans text-gray-800">
    <section
      class="relative w-full h-[60vh] flex items-center justify-center text-center bg-gray-900 overflow-hidden"
      data-aos="zoom-out"
    >
      <div class="absolute inset-0 bg-black/40"></div>

      <div class="relative z-10 px-6">
        <h1 class="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-2xl">
          2ª Via de Certidão
        </h1>
        <p class="text-lg sm:text-xl text-white max-w-3xl mx-auto mt-4 drop-shadow">
          Solicite sua certidão de nascimento, casamento ou óbito de forma rápida e segura.
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
      <div data-aos="fade-right" class="space-y-6">
        <h2 class="text-3xl font-bold">Como solicitar?</h2>
        <p class="text-gray-700 leading-relaxed text-lg">
          A emissão de 2ª via pode ser solicitada online pelo sistema nacional de registros civis.
        </p>

        <div class="flex items-center gap-4 bg-blue-50 border border-blue-200 p-4 rounded-xl">
          <PhFileText :size="48" weight="bold" />
          <p class="text-gray-700">
            Tenha em mãos nome completo, data aproximada e local do registro.
          </p>
        </div>

        <RouterLink
          to="https://registrocivil.org.br/"
          target="_blank"
          class="inline-block bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-xl text-lg font-semibold"
        >
          Acessar Sistema Nacional
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { PhFileText } from '@phosphor-icons/vue'
</script>
