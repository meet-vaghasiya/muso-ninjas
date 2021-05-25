import { ref } from "vue";
import { projectFireStore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);
  //   console.log(collection, "collection form getCollection ");
  let collectionRef = projectFireStore
    .collection(collection)
    .orderBy("createdAt");

  //   console.log(collectionRef, "collecton ");
  //   console.log(collectionRef);
  collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      //   console.log(snap.docs, "this is snap");
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
      console.log(documents.value, "all docs value");
    },
    (err) => {
      documents.value = null;
      error.value = "could not fetch data";
    }
  );

  return { documents, error };
};

export default getCollection;
