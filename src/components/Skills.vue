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
    title: "Programming Languages & Database",
    skills: [
      { name: "JavaScript", level: 'bg-orange-700/30' },
      { name: "HTML/CSS", level: 'bg-red-700/30' },
      { name: "PHP", level: 'bg-green-700/30' },
      { name: "Oracle", level: 'bg-blue-700/30' },
      { name: "MySQL", level: 'bg-green-700/30' },
      { name: "SQL Server", level: 'bg-red-700/30' },
    ],
  },
  {
    title: "Framework & Library",
    skills: [
      { name: "Vue.js", level: 'bg-orange-700/30' },
      { name: "Node.js", level: 'bg-red-700/30' },
      { name: "Nuxt.js", level: 'bg-blue-700/30' },
      { name: "jQuery", level: 'bg-purple-700/30' },
      { name: "Bootstrap", level: 'bg-indigo-700/30' },
      { name: "Tailwind CSS", level: 'bg-cyan-700/30' },
      { name: "Next.js", level: 'bg-yellow-700/30' },
    ],
  },
  {
    title: "Tools & Technology",
    skills: [
      { name: "Git", level: 'bg-green-700/30' },
      { name: "Docker", level: 'bg-red-700/30' },  
      { name: "RESTful API", level: 'bg-orange-700/30' },
    ],
  }
  // ,{
  //   title: "Database",
  //   skills: [
  //     { name: "Oracle", level: 'bg-blue-700/30' },
  //     { name: "MySQL", level: 'bg-green-700/30' },
  //     { name: "SQL Server", level: 'bg-red-700/30' },
  //   ],
  // }
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
          
          <CardContent>
            <div 
              class="space-y-2"
            >
                <CardContent>
                  <div class="flex flex-wrap gap-2">
                  <Badge 
                    v-for="(skill, skillIndex) in category.skills" 
                    :key="skillIndex"
                    variant="outline"
                    :class="`${skill.level}`"
                  >
                    {{ skill.name }}
                  </Badge>
                  </div>
              </CardContent>
            </div>
          </CardContent>
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
          <span>Database Design</span>
        </div>
        <div class="border rounded-lg p-4 text-center hover:border-primary transition-colors">
          <span>Testing</span>
        </div>
       
      </div>
    </div>
  </section>
</template>
