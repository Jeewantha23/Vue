<template>
  <div class="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Student List</h2>
    <table class="min-w-full border border-gray-200">
      <thead class="bg-blue-100">
        <tr>
          <th class="px-4 py-2 border">ID</th>
          <th class="px-4 py-2 border">Name</th>
          <th class="px-4 py-2 border">Email</th>
          <th class="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="hover:bg-gray-100"
          v-for="student in students"
          :key="student.id"
        >
          <td class="px-4 py-2 border">{{ student.id }}</td>
          <td class="px-4 py-2 border">{{ student.name }}</td>
          <td class="px-4 py-2 border">{{ student.email }}</td>
          <td class="px-4 py-2 border space-x-2">
            <RouterLink
              :to="`/show-student/${student.id}`"
              class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              Show
            </RouterLink>
            <RouterLink
              :to="`/edit-student/${student.id}`"
              class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
            >
              Edit
            </RouterLink>
            <button
              @click="deleteStudent(student.id)"
              class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
