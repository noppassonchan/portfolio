<script lang="ts" setup>
import { ref } from "vue";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ChevronsDown, Menu } from "lucide-vue-next";
import { StoreIcon } from "lucide-vue-next";
import GoogleIcon from "@/icons/GoogleIcon.vue";
// import ShopIcon from "@/icons/ShopIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";
import PrinterIcon from "@/icons/PrinterIcon.vue";
import ToggleTheme from "./ToggleTheme.vue";
import CodeIcon from "@/icons/CodeIcon.vue";


interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#skills",
    label: "skills",
  },
  {
    href: "#experience",
    label: "experience",
  },
  {
    href: "#education",
    label: "education",
  },
  {
    href: "#projects",
    label: "projects",
  },
  {
    href: "#contact",
    label: "contact",
  },
];

const isOpen = ref<boolean>(false);
</script>
<style>
.vi-primary {
  fill: #ffb400;
}

.vi-primary, .vi-accent {
  fill-rule: evenodd;
}

.vi-accent {
  fill: #070c2b;
}
</style>
<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md': true,
    }"
  >
    <a
      href="/"
      class="font-bold text-lg flex items-center"
    >
    <CodeIcon
      class="vi-primary rounded-lg mr-2 size-20"
    />
      <!-- <ShopIcon
        class="vi-accent vi-primary rounded-lg mr-2"
      /> -->
     Portfolio
     
    </a>
    <!-- Mobile -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu
            @click="isOpen = true"
            class="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <a
                  href="/"
                  class="flex items-center"
                >
                  <StoreIcon
                    class="bg-gradient-to-tr from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white"
                  />
                  Portfolio
                </a>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base"
              >
                <a
                  @click="isOpen = false"
                  :href="href"
                >
                  {{ label }}
                </a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />

            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-card text-base">
            Menu
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="p-4 w-[200px]">
              <ul class="flex flex-col gap-2">
                <li
                  v-for="{ href, label } in routeList"
                  :key="label"
                  class="rounded-md p-3 text-sm hover:bg-muted"
                >
                  <a :href="href" class="font-semibold leading-none text-foreground">
                    {{ label }}
                  </a>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button
              v-for="{ href, label } in routeList"
              :key="label"
              as-child
              variant="ghost"
              class="justify-start text-base"
            >
              <a :href="href">
                {{ label }}
              </a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="hidden lg:flex">
      <ToggleTheme />

      <Button
        as-child
        size="sm"
        variant="ghost"
        aria-label="View on GitHub"
      >
        <a
          aria-label="View on GitHub"
          href="https://github.com/noppassonchan"
          target="_blank"
        >
          <!-- <GithubIcon class="size-5" /> -->
          <GithubIcon class="size-5" />
        </a>
      </Button>
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
