<template>
  <div class="font-sans text-gray-800">
    <section
      class="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden"
    >
      <img
        src="../assets/images/home_image.png"
        alt="Casamento"
        class="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 px-6 max-w-3xl">
        <h1 class="text-4xl sm:text-5xl text-white font-bold drop-shadow-lg" data-aos="fade-up">
          Casamento Civil
        </h1>
        <p class="mt-4 text-lg text-white drop-shadow-md" data-aos="fade-up" data-aos-delay="150">
          Informações, orientações e agendamentos para cerimônias de casamento civil.
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-16 space-y-14">
      <div data-aos="fade-right" class="text-center">
        <h2 class="text-3xl font-bold">Como funciona</h2>
        <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
          O casal deve comparecer ao cartório com os documentos necessários para iniciar o processo
          de habilitação. Após a análise, a data da cerimônia será marcada conforme disponibilidade.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 items-start">
        <div class="space-y-6" data-aos="fade-up">
          <h3 class="text-2xl font-semibold">Documentos Necessários</h3>

          <ul class="space-y-4 text-gray-700">
            <li class="flex gap-2">
              <span class="text-blue-700 font-bold">•</span> RG e CPF dos noivos
            </li>
            <li class="flex gap-2">
              <span class="text-blue-700 font-bold">•</span> Certidão de Nascimento atualizada
            </li>
            <li class="flex gap-2">
              <span class="text-blue-700 font-bold">•</span> Comprovante de residência
            </li>
            <li class="flex gap-2">
              <span class="text-blue-700 font-bold">•</span> Dados de duas testemunhas maiores de 18
              anos
            </li>
          </ul>

          <p class="text-sm text-gray-600">
            Em caso de noivos divorciados, viúvos ou estrangeiros, pode haver documentos adicionais.
          </p>
        </div>

        <div class="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg" data-aos="zoom-in">
          <h3 class="text-xl font-semibold mb-6 text-center">Agendar atendimento</h3>

          <div class="space-y-5">
            <input
              type="text"
              placeholder="Nome completo"
              class="w-full border rounded-lg px-4 py-2 focus:outline-blue-700"
            />
            <input
              type="text"
              placeholder="Telefone (WhatsApp)"
              class="w-full border rounded-lg px-4 py-2 focus:outline-blue-700"
            />
            <input
              type="email"
              placeholder="E-mail"
              class="w-full border rounded-lg px-4 py-2 focus:outline-blue-700"
            />
          </div>

          <button
            class="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Solicitar Agendamento
          </button>
        </div>
      </div>

      <div data-aos="fade-up" class="text-center pt-10">
        <p class="text-gray-700 text-lg">Dúvidas pelo WhatsApp</p>
        <RouterLink
          to="#"
          class="mt-3 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Falar com atendimento
        </RouterLink>
      </div>
    </section>

    <WhatsAppComponent />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import WhatsAppComponent from '@/components/WhatsAppComponent.vue'
</script>
