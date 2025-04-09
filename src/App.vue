<script setup lang="ts">
import { Button } from './components/ui/button'
import { useTheme } from '@/composables/useTheme'
import Layout from '@/components/Layout.vue'

const { isDark } = useTheme()


</script>

<template>
  <Layout>
    <!-- Your page content -->
    <div class="rounded-lg border bg-card p-6">
      <h1 class="text-2xl font-semibold">Welcome to My App</h1>
      <p class="text-muted-foreground">Current theme: {{ isDark ? 'Dark' : 'Light' }}</p>
    </div>
  </Layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
