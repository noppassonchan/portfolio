<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "PHP", level: 90 },
    ],
  },
  {
    title: "Framework & Library",
    skills: [
      { name: "Vue.js", level: 95 },
      { name: "Node.js", level: 60 },
      { name: "Nuxt.js", level: 80 },
      { name: "jQuery", level: 70 },
      { name: "Bootstrap", level: 70 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Next.js", level: 70 },
    ],
  },
  {
    title: "Tools & Technology",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 50 },
      { name: "RESTful API", level: 85 },
    ],
  },{
    title: "Database",
    skills: [
      { name: "Oracle", level: 90 },
      { name: "MySQL", level: 65 },
      { name: "SQL Server", level: 65 },
    ],
  }
];
</script>

<template>
  <section id="skills" class="container py-20">
    <div class="lg:max-w-screen-xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="index"
          class="border rounded-lg p-6 bg-card shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 class="text-xl font-semibold mb-4 text-center">{{ category.title }}</h3>
          
          <div class="space-y-6">
            <div 
              v-for="(skill, skillIndex) in category.skills" 
              :key="skillIndex"
              class="space-y-2"
            >
              <div class="flex justify-between items-center">
                <span>{{ skill.name }}</span>
                <Badge>{{ skill.level }}%</Badge>
              </div>
              <Progress :value="skill.level" class="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="col-span-2 md:col-span-4">
          <h3 class="text-xl font-semibold mb-4">Others</h3>
        </div>
        <div class="border rounded-lg p-4 text-center hover:border-primary transition-colors">
          <span>UI/UX Design</span>
        </div>
        <div class="border rounded-lg p-4 text-center hover:border-primary transition-colors">
          <span>Responsive Design</span>
        </div>
      
        <div class="border rounded-lg p-4 text-center hover:border-primary transition-colors">
          <span>Agile/Scrum</span>
        </div>
        <div class="border rounded-lg p-4 text-center hover:border-primary transition-colors">
          <span>Database Design</span>
        </div>
        <div class="border rounded-lg p-4 text-center hover:border-primary transition-colors">
          <span>Testing</span>
        </div>
        <div class="border rounded-lg p-4 text-center hover:border-primary transition-colors">
          <span>Performance Optimization</span>
        </div>
        <div class="border rounded-lg p-4 text-center hover:border-primary transition-colors">
          <span>Security Best Practices</span>
        </div>
      </div>
    </div>
  </section>
</template>
