<script setup lang="ts">
import NavBar from './NavBar.vue'
</script>

<template>
    <div class="min-h-screen bg-background text-foreground transition-colors duration-300">
        <NavBar />
        <main class="container mx-auto px-4 sm:px-6 py-8">
            <div class="mx-auto max-w-5xl">
                <div class="space-y-8">
                    <div class="space-y-4">
                        <h1
                            class="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            Welcome to VueApp
                        </h1>
                        <p class="text-lg text-muted-foreground">
                            A beautifully crafted template with dark/light mode and modern design
                        </p>
                    </div>

                    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div v-for="n in 3" :key="n"
                            class="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
                            <div class="relative">
                                <div
                                    class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Icon icon="lucide:rocket" class="h-6 w-6" />
                                </div>
                                <h3 class="text-lg font-semibold">Feature {{ n }}</h3>
                                <p class="mt-2 text-sm text-muted-foreground">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-xl border bg-card p-6 shadow-sm">
                        <div class="prose prose-gray dark:prose-invert max-w-none">
                            <h2>Modern Design System</h2>
                            <p>Experience a beautifully crafted interface with:</p>
                            <ul>
                                <li>Smooth animations and transitions</li>
                                <li>Responsive layout that works on all devices</li>
                                <li>Accessible components with proper contrast</li>
                                <li>Customizable color schemes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>