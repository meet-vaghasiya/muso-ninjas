<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input v-model="email" placeholder="Enter email" type="text" />
      <input v-model="password" placeholder="Enter password" type="password" />
      <div class="error" v-if="error">{{ error }}</div>
      <button>{{ !isPending ? "Login" : "Loading" }}</button>
      <!-- <button>Loading...</button> -->
    </form>
  </div>
</template>

<script>
import useLogin from "@/composibles/useLogin";
import { ref } from "vue";
export default {
  setup() {
    const { error, login, isPending } = useLogin();
    const email = ref("");
    const password = ref("");
    // const isPending = ref(false);

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log("user loggin");
      }
    };

    return { email, password, handleSubmit, error, isPending };
  },
};
</script>

<style scoped></style>
