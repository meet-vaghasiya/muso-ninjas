import { ref } from "vue";
import { projectFireStore } from "../firebase/config";

const useCollection = (collection) => {
  console.log("this is my collection", collection);
  const error = ref(null);
  const isPending = ref(false);

  const addDoc = async (doc) => {
    error.value = null;
    isPending.value = true;
    try {
      await projectFireStore.collection(collection).add(doc);
      isPending.value = false;
    } catch (err) {
      error.value = "Could not send message";
      isPending.value = false;
    }
  };

  return { addDoc, error, isPending };
};

export default useCollection;
