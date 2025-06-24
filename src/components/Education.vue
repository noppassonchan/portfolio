<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, GraduationCap, Award } from "lucide-vue-next";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

const educations: Education[] = [
  {
    degree: "The requirements for the bachelor of science (computer science) faculty of science",
    institution: "Buriram rajabaht university",
    period: "2015 - 2019",
    description: "Learn about software development, data structures, database systems, and web application design.",
    achievements: [
      "Received an award in the National Software Development Contest (NSC) 2019",
      "Project: Development of online blood supply management system with blood collection device for blood collection using internet technology. Case study of Phutthaisong Hospital Mafuang Township Phutthaisong Amphoe Buriram Province."
    ]
  }
];
</script>

<template>
  <section id="education" class="container py-20">
    <div class="lg:max-w-screen-xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Study</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div class="space-y-8">
        <Card 
          v-for="(edu, index) in educations" 
          :key="index"
          class="hover:shadow-md transition-shadow"
        >
          <CardHeader>
            <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <CardTitle class="text-xl md:text-2xl flex items-center gap-2">
                  <GraduationCap class="size-6 text-primary" />
                  {{ edu.degree }}
                </CardTitle>
                <CardDescription class="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2">
                  <span class="font-medium text-foreground">{{ edu.institution }}</span>
                  <div class="flex items-center gap-1">
                    <CalendarDays class="size-4 text-primary" />
                    <span>{{ edu.period }}</span>
                  </div>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="mb-4">{{ edu.description }}</p>
            
            <div v-if="edu.achievements && edu.achievements.length > 0" class="mt-4">
              <h4 class="text-md font-semibold mb-2 flex items-center gap-2">
                <Award class="size-5 text-primary" />
                Success
              </h4>
              <ul class="list-disc pl-5 space-y-1">
                <li v-for="(achievement, achieveIndex) in edu.achievements" :key="achieveIndex">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
