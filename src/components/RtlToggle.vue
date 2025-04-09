<!-- components/RtlToggle.vue -->
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ref, onMounted } from 'vue'

const isRTL = ref(false)

const toggleRTL = () => {
    isRTL.value = !isRTL.value
    document.documentElement.dir = isRTL.value ? 'rtl' : 'ltr'
    localStorage.setItem('rtl', isRTL.value.toString())
}

onMounted(() => {
    const savedRTL = localStorage.getItem('rtl')
    isRTL.value = savedRTL === 'true'
    document.documentElement.dir = isRTL.value ? 'rtl' : 'ltr'
})
</script>

<template>
    <Button variant="outline" size="sm" class="h-9 w-9 rounded-lg" @click="toggleRTL">
        <span class="text-lg">⇄</span>
        <span class="sr-only">Toggle direction</span>
    </Button>
</template>