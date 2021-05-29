<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h4>create playlist</h4>

      <input type="text" placeholder="Playlist title" v-model="title" />
      <textarea
        name=""
        id=""
        placeholder="Enter text"
        v-model="description"
      ></textarea>
      <label>Upload playlist image</label>
      <input type="file" @change="handleChange" />
      <div class="error">{{ fileError }}</div>
      <div class="error">{{ error }}</div>
      <button :disabled="isPending">
        {{ !isPending ? "Create" : "saving..." }}
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import userStorage from "@/composibles/useStorage";
import useCollection from "@/composibles/useCollection";
import getUser from "@/composibles/getUser";
import { timestamp } from "@/firebase/config";

export default {
  setup() {
    const { filePath, url, uploadImage } = userStorage();
    const { error, addDoc } = useCollection("playlists");
    const { user } = getUser();
    const isPending = ref(false);

    const title = ref("");
    const description = ref("");
    const file = ref(null);
    const fileError = ref(null);
    const handleSubmit = async () => {
      if (file.value) {
        isPending.value = true;
        await uploadImage(file.value);
        await addDoc({
          title: title.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          coverUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp(),
        });
        isPending.value = false;
        if (!error.value) {
          console.log("playlist added succ");
        }
      }

      console.log(title.value, description.value);
    };
    const handleChange = (e) => {
      const selectedFile = e.target.files[0];

      //allowed type
      const types = ["image/jpeg", "image/jpg", "image/png"];

      if (selectedFile && types.includes(selectedFile.type)) {
        fileError.value = null;
        file.value = selectedFile;
      } else {
        file.value = null;
        fileError.value = "Please select an image file(png or jpeg)";
      }
      console.log(selectedFile);
    };

    return {
      title,
      description,
      handleSubmit,
      handleChange,
      fileError,
      isPending,
    };
  },
};
</script>

<style lang="scss" scoped>
input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
