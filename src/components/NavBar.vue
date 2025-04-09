<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'
import { useTheme } from '@/composables/useTheme'
import { useDirection } from '@/composables/useDirection'
import ThemeCustomizer from './ThemeCustomizer.vue'

const { theme, setTheme } = useTheme()
const { direction } = useDirection()
</script>

<template>
  <nav
    class="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur shadow-sm">
    <div class="container flex h-16 items-center px-4 sm:px-6" :data-rtl="direction === 'rtl'">
      <!-- Logo -->
      <div class="me-4 flex items-center">
        <span class="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          VueApp
        </span>
      </div>

      <!-- Navigation -->
      <div class="flex flex-1 items-center justify-end gap-4">
        <nav class="hidden items-center gap-6 sm:flex">
          <a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
          <a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Support
          </a>
        </nav>

        <!-- Controls -->
        <div class="flex items-center gap-2">
          <ThemeCustomizer></ThemeCustomizer>
          <!-- Theme Toggle -->
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="outline" size="icon" class="h-9 w-9 rounded-lg">
                  <Icon :icon="theme === 'dark' ? 'lucide:moon' : 'lucide:sun'" class="h-[1.2rem] w-[1.2rem]" />
                  <span class="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent :align="direction === 'rtl' ? 'start' : 'end'"
                class="rounded-lg border bg-background">
                <DropdownMenuItem @select="() => setTheme('light')" class="cursor-pointer gap-2">
                  <Icon icon="lucide:sun" class="h-4 w-4 text-yellow-500" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem @select="() => setTheme('dark')" class="cursor-pointer gap-2">
                  <Icon icon="lucide:moon" class="h-4 w-4 text-indigo-400" />
                  <span>Dark</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </div>
  </nav>
</template>