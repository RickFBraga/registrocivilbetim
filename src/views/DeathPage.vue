<template>
  <div class="font-sans text-gray-800">
    <section
      class="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden"
      data-aos="fade"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 text-white px-6">
        <h1 class="text-5xl font-extrabold drop-shadow-lg">Registro de Óbito</h1>
        <p class="text-lg mt-4 max-w-3xl mx-auto">
          Orientação humanizada para famílias em um momento delicado.
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
      <div data-aos="fade-right" class="space-y-6">
        <div class="flex items-center gap-4">
          <PhCross :size="48" weight="bold" />
          <h2 class="text-3xl font-bold">Documentos Necessários</h2>
        </div>

        <ul class="space-y-2 text-gray-700 text-lg leading-relaxed">
          <li>• Declaração de óbito emitida pelo hospital</li>
          <li>• Documentos pessoais do falecido</li>
          <li>• Documentos do familiar responsável</li>
        </ul>

        <p class="text-gray-700 text-lg">
          O registro deve ser realizado com prioridade para garantia dos direitos civis.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PhCross } from '@phosphor-icons/vue'
</script>
