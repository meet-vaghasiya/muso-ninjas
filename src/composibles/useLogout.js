import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    const res = projectAuth.signOut();
    console.log(res, "this is my response");
    error.value = null;
    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
