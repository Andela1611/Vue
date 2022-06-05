<template>
  <div class="favorites">
    <p>Favorite jokes</p>

    <ul v-for="(jokes,i )in jokes" v-bind:key="i">
      <li>{{ jokes }} --- {{ i }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FavoriteJoke",
  components: {},
  methods: {},
  mounted() {
    function forEachKey(callback) {
      for (var i = 0; i < localStorage.length; i++) {
        callback(localStorage.key(i));
      }
    }
    var jokes = [];
    for (var i = 0; i < localStorage.length; i++) {
      jokes = localStorage.getItem(localStorage.key(i));
      console.log(jokes, i);
    }
  },

  data() {
    return {
      jokes: [],
      i: [],
    };
  },
});
</script>
