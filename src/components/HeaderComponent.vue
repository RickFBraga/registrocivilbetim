<template>
  <header class="w-full bg-[#0A1A3F] text-white shadow-lg">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
      <RouterLink to="/home" class="flex items-center gap-3 cursor-pointer">
        <PhFileText :size="36" weight="duotone" />
        <h1 class="text-lg sm:text-xl font-semibold tracking-wide">Registro Civil Betim</h1>
      </RouterLink>

      <nav class="hidden md:flex gap-8 text-sm font-medium">
        <RouterLink to="/" :class="linkClass('/')">Home</RouterLink>
        <RouterLink to="/segunda-via" :class="linkClass('/segunda-via')"
          >2ª Via Certidão</RouterLink
        >
        <RouterLink to="/nascimento" :class="linkClass('/nascimento')">Nascimento</RouterLink>
        <RouterLink to="/casamento" :class="linkClass('/casamento')">Casamento</RouterLink>
        <RouterLink to="/obito" :class="linkClass('/obito')">Óbito</RouterLink>
        <RouterLink to="/contato" :class="linkClass('/contato')">Contato</RouterLink>
      </nav>

      <button class="md:hidden text-white hover:text-[#7FB7FF] transition">
        <PhList :size="32" weight="bold" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { PhFileText, PhList } from '@phosphor-icons/vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const linkClass = (path: string) => {
  return route.path === path
    ? 'text-[#7FB7FF] font-semibold border-b-2 border-[#7FB7FF] pb-1'
    : 'text-slate-200 hover:text-[#7FB7FF] transition'
}
</script>
