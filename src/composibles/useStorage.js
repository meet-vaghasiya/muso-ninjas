import { ref } from "vue";
import { projectStorage } from "../firebase/config";
import getUser from "./getUser";

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);
  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`;

    const storeageRef = projectStorage.ref(filePath.value);

    try {
      const res = await storeageRef.put(file);
      url.value = await res.ref.getDownloadURL();
    } catch (error) {
      console.log(error);
      error.value = error;
    }
  };
  return { error, url, filePath, uploadImage };
};
export default useStorage;
