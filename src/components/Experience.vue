<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Building2, MapPin } from "lucide-vue-next";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer Junior (2 year) - Senior (3 ปี)",
    company: "Bizpotential Co., Ltd.",
    location: "Bangkok",
    period: "2018 – Present (6 years)",
    description: [
      "Role: Develop and design UI for web applications for government agencies",
      "1. NSW Single Sign On – Department of Agricultural Extension",
      "Centralized login system for managing permits and licenses",
      "Developed UI with Bootstrap and connected to database with SQL server",
      "2. DBD HR – Department of International Trade  HR system covering personnel data, performance evaluation, etc.",
      "3. Treasury Access – Treasury Department  system for managing ancient currency data with secure access",
      "4. PAR ERP – Office of the Secretariat of the House of Representatives",
      "System for managing salary, benefits, and approval processes for parliamentary personnel",
      "5. SWU HR – Srinakharinwirot University",
      "Developed \"Recruitment and Appointment\" and \"Career Advancement\" systems and maintained front-end and UI/UX systems using Nuxt.js and Vue.js for the university's HR department"

    ],
    skills: ["JavaScript", "PHP", "HTML", "CSS", "Vue.js",  "Nuxt.js", "Node.js", "jQuery", "Bootstrap",]
  }
];
</script>

<template>
  <section id="experience" class="container py-20 bg-muted/30">
    <div class="lg:max-w-screen-xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Work experience</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div class="space-y-8">
        <Card 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="border-l-4 border-l-primary hover:shadow-md transition-shadow"
        >
          <CardHeader>
            <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <CardTitle class="text-xl md:text-2xl">{{ exp.title }}</CardTitle>
                <CardDescription class="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2">
                  <div class="flex items-center gap-1">
                    <Building2 class="size-4 text-primary" />
                    <span>{{ exp.company }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <MapPin class="size-4 text-primary" />
                    <span>{{ exp.location }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <CalendarDays class="size-4 text-primary" />
                    <span>{{ exp.period }}</span>
                  </div>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="list-disc pl-5 space-y-1 mb-4">
              <li v-for="(item, itemIndex) in exp.description" :key="itemIndex">
                {{ item }}
              </li>
            </ul>
            <div class="flex flex-wrap gap-2 mt-4">
              <Badge 
                v-for="(skill, skillIndex) in exp.skills" 
                :key="skillIndex"
                variant="secondary"
                class="bg-primary/10"
              >
                {{ skill }}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
