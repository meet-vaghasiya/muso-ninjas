<template>
  <div class="error" v-if="error">Could not fetch the data</div>

  <LIstView :playlists="documents"></LIstView>
</template>

<script>
import LIstView from "../components/LIstView";
// @ is an alias to /src
import getCollection from "@/composibles/getCollection";
export default {
  name: "Home",
  components: {
    LIstView,
  },
  setup() {
    const { error, documents } = getCollection("playlists");
    return { error, documents };
  },
};
</script>
