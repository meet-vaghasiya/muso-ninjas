import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const logout = async () => {
  error.value = null;
  isPending.value = true;
  try {
    const res = projectAuth.signOut();
    console.log(res, "this is my response");
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
    isPending.value = false;
  }
};

const useLogout = () => {
  return { error, logout, isPending };
};

export default useLogout;
