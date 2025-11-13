<template>
  <div class="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Add New Student</h2>

    <form @submit.prevent="submitForm" class="space-y-4">
      <!-- Name -->
      <div>
        <label class="block text-gray-700 font-semibold mb-2" for="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          v-model="student.name"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter student name"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-gray-700 font-semibold mb-2" for="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          v-model="student.email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter student email"
          required
        />
      </div>

      <!-- Submit Button -->
      <div class="pt-4">
        <button
          type="submit"
          class="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors duration-300"
        >
          Add Student
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const students = ref([]);

// Fetch students from backend
const fetchStudents = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/students");
    students.value = response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
  }
};

// Delete student
const deleteStudent = async (id) => {
  if (!confirm("Are you sure you want to delete this student?")) return;

  try {
    await axios.delete(`http://127.0.0.1:8000/api/students/${id}`);
    alert("Student deleted successfully!");
    // Refresh the list after deletion
    fetchStudents();
  } catch (error) {
    console.error("Error deleting student:", error);
    alert("Failed to delete student.");
  }
};

// Load students when component mounts
onMounted(() => {
  fetchStudents();
});
</script>
