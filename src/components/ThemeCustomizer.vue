<!-- components/ThemeCustomizer.vue -->
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'

type Color = 'zinc' | 'slate' | 'stone' | 'gray' | 'neutral' | 'red' | 'rose' | 'orange' | 'green' | 'blue' | 'yellow' | 'violet'
const colors = ['zinc', 'slate', 'stone', 'gray', 'neutral', 'red', 'rose', 'orange', 'green', 'blue', 'yellow', 'violet'] as const

type Radius = '0' | '0.25' | '0.5' | '0.75' | '1'
const radiuses = ['0', '0.25', '0.5', '0.75', '1'] as const

const theme = ref<'light' | 'dark'>('light')
const selectedColor = ref<Color>('zinc')
const selectedRadius = ref<Radius>('0.5')
const isRTL = ref(false)

// Load settings from localStorage
const loadSettings = () => {
    const savedTheme = localStorage.getItem('theme')
    const savedColor = localStorage.getItem('color')
    const savedRadius = localStorage.getItem('radius')
    const savedRTL = localStorage.getItem('rtl')

    if (savedTheme) theme.value = savedTheme as 'light' | 'dark'
    if (savedColor) selectedColor.value = savedColor as Color
    if (savedRadius) selectedRadius.value = savedRadius as Radius
    if (savedRTL) isRTL.value = savedRTL === 'true'
}

// Update all theme settings
const updateTheme = () => {
    const root = document.documentElement

    root.classList.toggle('dark', theme.value === 'dark')
    root.style.setProperty('--primary', `hsl(var(--${selectedColor.value}-primary))`)
    root.style.setProperty('--primary-foreground', `hsl(var(--${selectedColor.value}-primary-foreground))`)
    root.style.setProperty('--radius', `${selectedRadius.value}rem`)
    root.dir = isRTL.value ? 'rtl' : 'ltr'

    localStorage.setItem('theme', theme.value)
    localStorage.setItem('color', selectedColor.value)
    localStorage.setItem('radius', selectedRadius.value)
    localStorage.setItem('rtl', isRTL.value.toString())
}

const setColor = (color: Color) => {
    selectedColor.value = color
    updateTheme()
}

const setRadius = (radius: Radius) => {
    selectedRadius.value = radius
    updateTheme()
}

const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    updateTheme()
}

const toggleRTL = () => {
    isRTL.value = !isRTL.value
    updateTheme()
}

onMounted(() => {
    loadSettings()
    updateTheme()
})
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="outline" size="sm" class="h-9 w-9 rounded-lg transition-all hover:scale-105">
                <Icon icon="lucide:paintbrush" class="h-4 w-4" />
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent class="w-[260px] p-4" :align="isRTL ? 'start' : 'end'">
            <div class="space-y-4">
                <!-- Color Selection -->
                <div>
                    <h3 class="text-sm font-medium mb-2 flex items-center gap-2">
                        <Icon icon="lucide:palette" class="h-4 w-4" /> Color
                    </h3>
                    <div class="grid grid-cols-6 gap-2">
                        <Button 
                            v-for="color in colors" 
                            :key="color" 
                            variant="outline" 
                            size="sm"
                            class="h-8 w-8 p-0 rounded-full border-2 transition-all cursor-pointer hover:scale-110"
                            :style="{ 
                                backgroundColor: `hsl(var(--${color}-primary))`,
                                borderColor: `hsl(var(--${color}-primary))`
                            }"
                            :class="[
                                selectedColor === color 
                                    ? 'ring-2 ring-primary ring-offset-2 ring-opacity-80'
                                    : 'hover:ring-2 hover:ring-primary/30'
                            ]"
                            @click="setColor(color)"
                        />
                    </div>
                </div>

                <!-- Radius Selection -->
                <div>
                    <h3 class="text-sm font-medium mb-2 flex items-center gap-2">
                        <Icon icon="lucide:circle-dot" class="h-4 w-4" /> Radius
                    </h3>
                    <div class="grid grid-cols-5 gap-2">
                        <Button
                            v-for="radius in radiuses"
                            :key="radius"
                            variant="outline"
                            size="sm"
                            class="h-8 transition-all cursor-pointer hover:scale-105"
                            :class="[
                                selectedRadius === radius 
                                    ? 'ring-2 ring-primary bg-accent text-accent-foreground'
                                    : 'hover:bg-accent/20'
                            ]"
                            @click="setRadius(radius)"
                        >
                            {{ radius }}
                        </Button>
                    </div>
                </div>

                <!-- Theme & Direction -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-sm font-medium mb-2 flex items-center gap-2">
                            <Icon icon="lucide:monitor" class="h-4 w-4" /> Theme
                        </h3>
                        <div class="grid grid-cols-2 gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                class="h-8 gap-2 transition-all cursor-pointer hover:scale-105"
                                :class="[
                                    theme === 'light' 
                                        ? 'ring-2 ring-primary bg-accent text-accent-foreground'
                                        : 'hover:bg-accent/20'
                                ]"
                                @click="toggleTheme"
                            >
                                <Icon icon="lucide:sun" class="h-4 w-4 text-yellow-500" />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                class="h-8 gap-2 transition-all cursor-pointer hover:scale-105"
                                :class="[
                                    theme === 'dark' 
                                        ? 'ring-2 ring-primary bg-accent text-accent-foreground'
                                        : 'hover:bg-accent/20'
                                ]"
                                @click="toggleTheme"
                            >
                                <Icon icon="lucide:moon" class="h-4 w-4 text-indigo-400" />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-sm font-medium mb-2 flex items-center gap-2">
                            <Icon icon="lucide:arrow-left-right" class="h-4 w-4" /> Direction
                        </h3>
                        <div class="grid grid-cols-2 gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                class="h-8 gap-2 transition-all cursor-pointer hover:scale-105"
                                :class="[
                                    !isRTL 
                                        ? 'ring-2 ring-primary bg-accent text-accent-foreground'
                                        : 'hover:bg-accent/20'
                                ]"
                                @click="toggleRTL"
                            >
                                <Icon icon="lucide:arrow-left-right" class="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                class="h-8 gap-2 transition-all cursor-pointer hover:scale-105"
                                :class="[
                                    isRTL 
                                        ? 'ring-2 ring-primary bg-accent text-accent-foreground'
                                        : 'hover:bg-accent/20'
                                ]"
                                @click="toggleRTL"
                            >
                                <Icon icon="lucide:arrow-right-left" class="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
</template>