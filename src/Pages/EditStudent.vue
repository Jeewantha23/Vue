<template>
  <div class="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Update Student</h2>

    <form v-if="student" @submit.prevent="updateStudent" class="space-y-4">
      <!-- Name -->
      <div>
        <label class="block text-gray-700 font-semibold mb-2">Name</label>
        <input
          type="text"
          v-model="student.name"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          v-model="student.email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <!-- Submit Button -->
      <div class="pt-4">
        <button
          type="submit"
          class="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors duration-300"
        >
          Update Student
        </button>
      </div>
    </form>

    <div v-else>
      <p class="text-gray-500">Loading student details...</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const studentId = route.params.id;

const student = reactive({});

// Fetch student data
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

// Update student
const updateStudent = async () => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/api/students/${studentId}`,
      {
        name: student.name,
        email: student.email,
      }
    );

    alert(response.data.message);
    // Redirect back to student list after update
    router.push("/students");
  } catch (error) {
    console.error("Error updating student:", error);
    if (error.response) {
      alert(error.response.data.message || "Failed to update student.");
    } else {
      alert("Something went wrong!");
    }
  }
};

onMounted(() => {
  fetchStudent();
});
</script>
