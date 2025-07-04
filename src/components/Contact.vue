<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle, Building2, Phone, Mail, Clock } from "lucide-vue-next";
import axios from 'axios';

interface ContactFormeProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormeProps>({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});

const invalidInputForm = ref<boolean>(false);
const isSubmitting = ref<boolean>(false);
const submitSuccess = ref<boolean>(false);

const handleSubmit = async () => {
  const { firstName, lastName, email, subject, message } = contactForm;
  console.log(contactForm);
  
  // ตรวจสอบข้อมูลก่อนส่ง
  if (!firstName || !lastName || !email || !message) {
    invalidInputForm.value = true;
    return;
  }
  
  invalidInputForm.value = false;
  isSubmitting.value = true;
  
  try {
    // ส่งข้อมูลไปยัง API
    const response = await axios.post('http://localhost:5000/api-portfolio', {
      firstName,
      lastName,
      email,
      subject,
      message
    }
  );
    
    console.log('ส่งข้อมูลสำเร็จ:', response.data);
    submitSuccess.value = true;
    
    // รีเซ็ตฟอร์ม
    contactForm.firstName = "";
    contactForm.lastName = "";
    contactForm.email = "";
    contactForm.subject = "";
    contactForm.message = "";

    
  } catch (error) {
    console.error('เกิดข้อผิดพลาด:', error);
    invalidInputForm.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section
    id="contact"
    class="container py-24 sm:py-32"
  >
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="mb-4">
          <h2 class="text-lg text-primary mb-2 tracking-wider">Contact</h2>

          <h2 class="text-3xl md:text-4xl font-bold">Contact Me</h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          If you are interested in working with me or have questions about my services, please contact me through the channels below or fill out the contact form.
        </p>

        <div class="flex flex-col gap-4">
          <div>
            <div class="flex gap-2 mb-1">
              <Building2 class="text-primary" />
              <div class="font-bold">Address</div>
            </div>

            <div>bangkok, thailand</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Phone class="text-primary" />
              <div class="font-bold">Phone</div>
            </div>

            <div>095-785-1892</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Mail class="text-primary" />
              <div class="font-bold">Email</div>
            </div>

            <div>noppasson.chan@gmail.com</div>
          </div>

          <div>
            <div class="flex gap-2">
              <Clock class="text-primary" />
              <div class="font-bold">Working Hours</div>
            </div>

            <div>
              <div>Monday - Friday</div>
              <div>9:00 - 18:00</div>
            </div>
          </div>
        </div>
      </div>

      <!-- form -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl"> </CardHeader>
        <CardContent>
          <form
            @submit.prevent="handleSubmit"
            class="grid gap-4"
          >
          <!-- {{ contactForm }} -->
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">First Name</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder=""
                  v-model="contactForm.firstName"
                />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">Last Name</Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder=""
                  v-model="contactForm.lastName"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder=""
                v-model="contactForm.email"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">Subject</Label>

              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Free Lancer Project">
                      Free Lancer Project
                    </SelectItem>
                    <SelectItem value="Consultation">Consultation</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                rows="5"
                v-model="contactForm.message"
              />
            </div>

            <Alert
              v-if="invalidInputForm"
              variant="destructive"
            >
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                There is an error in the form. Please check your input.
              </AlertDescription>
            </Alert>

            <Button class="mt-4">Send Message</Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
