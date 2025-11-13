<template>
  <div class="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Student Details</h2>

    <div v-if="student">
      <div class="mb-4">
        <label class="block text-gray-700 font-semibold mb-2">ID:</label>
        <p class="text-gray-900">{{ student.id }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-semibold mb-2">Name:</label>
        <p class="text-gray-900">{{ student.name }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-semibold mb-2">Email:</label>
        <p class="text-gray-900">{{ student.email }}</p>
      </div>
    </div>

    <div v-else>
      <p class="text-gray-500">Loading student details...</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

// Get the student ID from the URL
const route = useRoute();
const studentId = route.params.id;

// Reactive object to store student data
const student = reactive({});

// Fetch student data from backend
const fetchStudent = async () => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/students/${studentId}`
    );
    Object.assign(student, response.data);
  } catch (error) {
    console.error("Error fetching student:", error);
    alert("Failed to load student details.");
  }
};

// Load student data when component mounts
onMounted(() => {
  fetchStudent();
});
</script>
