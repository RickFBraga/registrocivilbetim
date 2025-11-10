<script setup lang="ts">
import { useRoute } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

const route = useRoute()
</script>

<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent v-if="!route.meta.hideFooter" />
</template>
