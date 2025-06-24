<script setup lang="ts">
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-vue-next";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <footer id="footer" class="bg-muted/40">
    <div
      class="container flex flex-col gap-8 py-8 md:flex-row md:py-12 lg:py-16 justify-between"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <h3 class="text-xl font-bold">Noppasson Chanponsaen</h3>
          <p class="text-muted-foreground">
            Web Developer (Front-End Developer) with over 6 years of experience in developing Web Applications for national government agencies. Expert in using PHP, Vue.js, Nuxt.js, JavaScript, HTML/CSS and connecting RESTful APIs with a true understanding of UX in large enterprise systems. Focuses on writing quality code and usability that meets the needs.
          </p>
        </div>

        <div class="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a
              href="https://github.com/noppassonchan"
              target="_blank"
              aria-label="Github"
            >
              <Github />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a
              href="https://linkedin.com/in/somchai"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a
              href="mailto:somchai@example.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a
              href="tel:+66957851892"
              aria-label="Phone"
            >
              <Phone />
            </a>
          </Button>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-8 md:gap-16">
        <div class="flex flex-col gap-2">
          <h4 class="font-bold">Menu</h4>
          <Button
            variant="link"
            class="w-fit p-0 text-muted-foreground"
            asChild
          >
            <a href="#skills">Skills</a>
          </Button>
          <Button
            variant="link"
            class="w-fit p-0 text-muted-foreground"
            asChild
          >
            <a href="#experience">Experience</a>
          </Button>
          <Button
            variant="link"
            class="w-fit p-0 text-muted-foreground"
            asChild
          >
            <a href="#education">Education</a>
          </Button>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="font-bold">Portfolio</h4>
          <Button
            variant="link"
            class="w-fit p-0 text-muted-foreground"
            asChild
          >
            <a href="#projects">Projects</a>
          </Button>
          <Button
            variant="link"
            class="w-fit p-0 text-muted-foreground"
            asChild
          >
            <a href="https://github.com/somchai" target="_blank">Github</a>
          </Button>
          <Button
            variant="link"
            class="w-fit p-0 text-muted-foreground"
            asChild
          >
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </div>

    <Separator />

    <div
      class="container flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between"
    >
      <p class="text-xs text-muted-foreground">
        © {{ new Date().getFullYear() }} Noppasson Chanponsaen. All rights reserved.
      </p>

      <div class="flex gap-4">
        <Button
          variant="outline"
          size="icon"
          @click="scrollToTop"
          class="rounded-full"
          title="Back to top"
        >
          <ArrowUp class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </footer>
</template>
