<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-vue-next";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "ระบบจัดการร้านอาหาร",
    description: "แอปพลิเคชันเว็บสำหรับจัดการร้านอาหาร รองรับการจองโต๊ะ สั่งอาหาร และระบบจัดการสต็อกวัตถุดิบ",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Docker"],
    liveUrl: "https://restaurant-app.example.com",
    githubUrl: "https://github.com/somchai/restaurant-management"
  },
  {
    title: "แอปพลิเคชันจัดการงาน",
    description: "แอปพลิเคชันจัดการงานและโปรเจคแบบ Kanban board ที่ช่วยให้ทีมสามารถติดตามความคืบหน้าของงานได้อย่างมีประสิทธิภาพ",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1976&auto=format&fit=crop",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    liveUrl: "https://task-manager.example.com",
    githubUrl: "https://github.com/somchai/task-manager"
  },
  {
    title: "เว็บไซต์ส่วนตัว",
    description: "เว็บไซต์ส่วนตัวที่แสดงผลงานและประสบการณ์ พัฒนาด้วย Vue.js และ Tailwind CSS",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Vue.js", "Tailwind CSS", "Vite"],
    liveUrl: "https://somchai.dev",
    githubUrl: "https://github.com/somchai/portfolio"
  },
  {
    title: "แอปพลิเคชันแชท",
    description: "แอปพลิเคชันแชทแบบเรียลไทม์ที่รองรับการส่งข้อความ รูปภาพ และไฟล์ พัฒนาด้วย Socket.io และ React",
    image: "https://images.unsplash.com/photo-1611746869696-d09bce200020?q=80&w=2070&auto=format&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/somchai/chat-app"
  }
];
</script>

<template>
  <section id="projects" class="container py-20 bg-muted/30">
    <div class="lg:max-w-screen-xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">ผลงานและโปรเจค</h2>
        <div class="w-20 h-1 bg-primary mx-auto mb-4"></div>
        <p class="text-muted-foreground max-w-2xl mx-auto">
          นี่คือตัวอย่างผลงานและโปรเจคที่ฉันได้พัฒนา ซึ่งแสดงถึงทักษะและความสามารถในการพัฒนาซอฟต์แวร์
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card 
          v-for="(project, index) in projects" 
          :key="index"
          class="overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div class="h-48 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle>{{ project.title }}</CardTitle>
            <CardDescription>
              {{ project.description }}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge 
                v-for="(tech, techIndex) in project.technologies" 
                :key="techIndex"
                variant="outline"
                class="bg-primary/10"
              >
                {{ tech }}
              </Badge>
            </div>
          </CardContent>
          <CardFooter class="flex justify-between">
            <Button v-if="project.githubUrl" variant="outline" size="sm" asChild>
              <a :href="project.githubUrl" target="_blank" class="flex items-center gap-2">
                <Github class="size-4" />
                โค้ด
              </a>
            </Button>
            <Button v-if="project.liveUrl" variant="default" size="sm" asChild>
              <a :href="project.liveUrl" target="_blank" class="flex items-center gap-2">
                <ExternalLink class="size-4" />
                ดูเว็บไซต์
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
