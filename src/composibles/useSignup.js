import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const signup = async (email, password, dname) => {
  console.log(email, password, dname);
  error.value = null;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!res) {
      throw new Error("Could not complete the signup");
    }
    console.log(res.user);
    await res.user.updateProfile({ displayName: dname }); //use displayName only for dispalying name beacuse its firebase propertyy
    console.log(res.user);
    // error.value = null;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    console.log(error.value);
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
