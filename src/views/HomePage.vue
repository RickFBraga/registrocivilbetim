<template>
  <div class="font-sans text-gray-800">
    <section
      class="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      data-aos="zoom-out"
    >
      <img
        src="../assets/images/home_image.png"
        alt="Registro Civil Betim"
        class="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

      <div class="relative z-10 px-6 max-w-3xl">
        <h1
          class="text-5xl sm:text-6xl font-extrabold text-white tracking-wide mb-4"
          data-aos="fade-up"
        >
          Registro Civil Betim
        </h1>

        <p
          class="text-lg sm:text-2xl text-white mb-6"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Certidões e registros com atendimento humano, seguro e responsável.
        </p>

        <p
          class="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Da chegada de uma nova vida até os compromissos e mudanças importantes: estamos ao seu lado em cada etapa.
        </p>

        <RouterLink
          to="/contato"
          class="inline-block bg-white text-blue-700 font-semibold px-7 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          Fale Conosco
        </RouterLink>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-20 space-y-14">
      <div class="text-center" data-aos="fade-right">
        <h2 class="text-3xl font-bold">Serviços Disponíveis</h2>
        <p class="mt-3 text-gray-600 text-lg">Escolha o serviço desejado para mais detalhes.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          class="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          data-aos="zoom-in"
        >
          <PhHeartStraight :size="60" weight="duotone" class="mx-auto text-blue-700 mb-4" />
          <h3 class="text-xl font-semibold">Casamento</h3>
          <p class="mt-2 text-gray-600">Orientações, documentos e agendamento.</p>
          <RouterLink
            to="/casamento"
            class="mt-5 inline-block text-blue-700 font-semibold hover:underline text-sm"
          >
            Acessar
          </RouterLink>
        </div>

        <div
          class="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <PhFileText :size="60" weight="duotone" class="mx-auto text-blue-700 mb-4" />
          <h3 class="text-xl font-semibold">2ª Via de Certidão</h3>
          <p class="mt-2 text-gray-600">Solicitação rápida e prática.</p>
          <RouterLink
            to="/segunda-via"
            class="mt-5 inline-block text-blue-700 font-semibold hover:underline text-sm"
          >
            Acessar
          </RouterLink>
        </div>

        <div
          class="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <PhBaby :size="60" weight="duotone" class="mx-auto text-blue-700 mb-4" />
          <h3 class="text-xl font-semibold">Nascimento</h3>
          <p class="mt-2 text-gray-600">Registro gratuito para recém-nascidos.</p>
          <RouterLink
            to="/nascimento"
            class="mt-5 inline-block text-blue-700 font-semibold hover:underline text-sm"
          >
            Acessar
          </RouterLink>
        </div>

        <div
          class="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <PhCross :size="60" weight="duotone" class="mx-auto text-blue-700 mb-4" />
          <h3 class="text-xl font-semibold">Óbito</h3>
          <p class="mt-2 text-gray-600">Registro e orientações para as famílias.</p>
          <RouterLink
            to="/obito"
            class="mt-5 inline-block text-blue-700 font-semibold hover:underline text-sm"
          >
            Acessar
          </RouterLink>
        </div>

        <div
          class="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <PhSealCheck :size="60" weight="duotone" class="mx-auto text-blue-700 mb-4" />
          <h3 class="text-xl font-semibold">Averbações</h3>
          <p class="mt-2 text-gray-600">Alterações em registros (nome, divórcio e outros).</p>
          <RouterLink
            to="/"
            class="mt-5 inline-block text-blue-700 font-semibold hover:underline text-sm"
          >
            Saber mais
          </RouterLink>
        </div>

        <div
          class="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <PhChatCenteredDots :size="60" weight="duotone" class="mx-auto text-blue-700 mb-4" />
          <h3 class="text-xl font-semibold">Atendimento e Dúvidas</h3>
          <p class="mt-2 text-gray-600">Suporte online e presencial.</p>
          <RouterLink
            to="/"
            class="mt-5 inline-block text-blue-700 font-semibold hover:underline text-sm"
          >
            Ver contato
          </RouterLink>
        </div>
      </div>
    </section>

    <WhatsAppComponent />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import WhatsAppComponent from "@/components/WhatsAppComponent.vue"
import { PhHeartStraight, PhFileText, PhBaby, PhCross, PhSealCheck, PhChatCenteredDots } from "@phosphor-icons/vue"
</script>
