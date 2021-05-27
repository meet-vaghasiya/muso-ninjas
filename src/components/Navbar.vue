<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="" />
      <h1>
        <router-link :to="{ name: 'Home' }">Muso Ninjas</router-link>
      </h1>
      <div class="links">
        <div class="" v-if="user">
          <button @click="handleClick" v-if="user">Logout</button>
        </div>
        <div class="" v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "@/composibles/useLogout";
import getUser from "@/composibles/getUser";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { logout } = useLogout();
    const router = useRouter();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      router.push({ name: "Login" });
    };
    return { handleClick, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: #fff;
}
nav {
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 50px;
}
</style>
