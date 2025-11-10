<template>
  <div class="font-sans bg-gray-100 text-gray-800">
    <section class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">Informações do Cartório</h2>

        <div class="flex items-start gap-4">
          <PhMapPin size="32" />
          <p class="text-gray-700 leading-relaxed">
            Avenida Juscelino Kubitschek, 315<br />
            Centro, Betim / MG
          </p>
        </div>

        <div class="flex items-start gap-4">
          <PhPhone size="32" />
          <p class="text-gray-700 leading-relaxed">(31) 3511-0826</p>
        </div>

        <div class="flex items-start gap-4">
          <PhEnvelope size="32" />
          <p class="text-gray-700 leading-relaxed break-all">registrocivilbetim@gmail.com</p>
        </div>

        <div class="flex items-start gap-4">
          <PhClock size="32" />
          <p class="text-gray-700 leading-relaxed">
            Segunda a Sexta: 9h às 17h<br />
            Sábado: 9h às 12h
          </p>
        </div>

        <a
          href="https://wa.me/553135110826"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200"
        >
          <PhWhatsappLogo size="28" />
          Falar pelo WhatsApp
        </a>
      </div>

      <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          title="address_map"
          width="100%"
          height="100%"
          class="min-h-[350px]"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps?q=Avenida%20Juscelino%20Kubitschek%20315%20Betim%20MG&output=embed"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PhMapPin, PhPhone, PhEnvelope, PhClock, PhWhatsappLogo } from '@phosphor-icons/vue'
</script>

<style>
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
