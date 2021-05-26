<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h3>Sign up</h3>
      <input v-model="displayName" placeholder="Enter name" type="text" />
      <input v-model="email" placeholder="Enter email" type="text" />
      <input v-model="password" placeholder="Enter password" type="password" />
      <div class="error" v-if="error">{{ error }}</div>
      <button>{{ !isPending ? "Signup" : "Loading" }}</button>
      <!-- <button>Loading...</button> -->
    </form>
  </div>
</template>

<script>
// import useLogin from "@/composibles/useLogin";
import useSignup from "@/composibles/useSignup";
import { ref } from "vue";
export default {
  setup() {
    const { error, signup, isPending } = useSignup();
    const email = ref("");
    const password = ref("");
    const displayName = ref("");
    // const isPending = ref(false);

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("user singup");
      }
    };

    return { email, password, displayName, handleSubmit, error, isPending };
  },
};
</script>

<style scoped></style>
