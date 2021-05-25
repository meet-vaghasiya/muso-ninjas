import { ref } from "vue";
import { projectFireStore } from "../firebase/config";

const useCollection = (collection) => {
  console.log("this is my collection", collection);
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFireStore.collection(collection).add(doc);
    } catch (err) {
      error.value = "Could not send message";
    }
  };

  return { addDoc, error };
};

export default useCollection;
