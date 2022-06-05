<template>
  <div class="home"></div>
  <div>
    <p>{{ list.id }} --- {{ list.joke }}</p>
    <button @click="favorite">Add to Favorites</button> |
    <button @click="reloadPage">Next joke...</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "HomeView",
  components: {},
  methods: {
    favorite() {
      var id = [];
      if (!(localStorage.getItem(this.list.id) === null)) {
        id = JSON.parse(localStorage.getItem("id"));
      }
      const joke = [this.list.joke];
      id.push(joke);
      window.localStorage.setItem(this.list.id, JSON.stringify(joke));
    },

    reloadPage() {
      window.location.reload();
    },
  },
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://api.icndb.com/jokes/random");
    console.log(result.data.value);
    this.list = result.data.value;
  },
});
</script>

<style scoped>
button {
  margin: 0 10px;
  color: #374b60;
  border: 3px solid #c6ced3;
  background: #c6ced3;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
p {
  font-size: 2em;
}
</style>
