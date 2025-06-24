<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Github, Linkedin } from "lucide-vue-next";
import GoogleIcon from "@/icons/GoogleIcon.vue";
import CommentIcon from "@/icons/CommentIcon.vue";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#contact",
    label: "contact",
  },
];
</script>

<template>
  <section class="container" id="profile">
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
      <div class="md:col-span-1 flex justify-center items-start">
        <div class="relative group">
          <!-- gradient shadow -->
          <div
            class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
          ></div>

          <img
            class="w-60 h-60 rounded-full object-cover border-4 border-primary img-border-animation"
            src="../assets/pro.png"
            alt="รูปโปรไฟล์"
          />
        </div>
      </div>

      <div class="md:col-span-2 space-y-6 text-left">
        <Badge
          variant="outline"
          class="text-sm py-2"
        >
          <span class="mr-2 text-primary">
            <Badge>Ready to work</Badge>
          </span>
          <span>Looking for new opportunities</span>
        </Badge>

        <div class="space-y-2">
          <h1 class="text-4xl md:text-5xl font-bold">
            Noppasson ChanponSaen
          </h1>
          <h2 class="text-2xl md:text-3xl font-semibold">
            <span
              class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >Front-End Developer
            </span>
          </h2>
        </div>

        <p class="text-lg text-muted-foreground">
          Experienced Front-End Developer with over 6 years of experience in developing web applications for national government agencies. Skilled in PHP, Vue.js, Nuxt.js, JavaScript, HTML/CSS, and connecting to RESTful API. Proficient in UX design for large-scale enterprise systems, focusing on writing high-quality code and using best practices.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div class="flex items-center gap-2">
            <Mail class="size-5 text-primary" />
            <a href="mailto:noppasson.chan@gmail.com" class="hover:text-primary">noppasson.chan@gmail.com</a>
          </div>
          <div class="flex items-center gap-2">
            <Phone class="size-5 text-primary" />
            <a href="tel:+66812345678" class="hover:text-primary">095-785-1892</a>
          </div>
          <div class="flex items-center gap-2">
            <MapPin class="size-5 text-primary" />
            <span>bangkok, thailand</span>
          </div>
          <div class="flex items-center gap-2">
            <Github class="size-5 text-primary" />
            <a href="https://github.com/noppassonchan" target="_blank" class="hover:text-primary">github.com/noppassonchan</a>
          </div>
        </div>

        <div class="pt-4 flex gap-4">
          <Button class="font-bold group/arrow">
            Download Resume
            <ArrowRight
              class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
            />
          </Button>

          
          <div class="flex flex-col gap-2">
            
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="font-bold group/arrow">
              
                <a
                  @click="isOpen = false"
                  :href="href"
                ><CommentIcon class="size-5 mr-2 group-hover/arrow:translate-x-1 transition-transform text-white" />
                  {{ label }}
                </a>
              </Button>
            </div>
          <!-- <Button
            variant="secondary"
            class="font-bold"
          >
            <a
              href="https://Line.com/in/noppassonchan"
              target="_blank"
              class="flex items-center"
            >
              <Linkedin class="size-5 mr-2" /> Contact
            </a>
          </Button> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
