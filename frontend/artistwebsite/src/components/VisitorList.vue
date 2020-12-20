<template>
  <div class="visitors">
    <visitor-card
      v-for="visitor in visitors"
      :key="visitor.id"
      :visitor="visitor"
      @deleteVisitor="deleteVisitor"
    ></visitor-card>
  </div>
</template>

<script>
import VisitorCard from "./VisitorCard.vue";
import axios from "axios";
export default {
  components: {
    VisitorCard,
  },
  data() {
    return {
      visitors: [],
    };
  },
  methods: {
    getVisitors: function () {
      axios
        .request({
          url: "https://artisttongkemin.ml/api/visitor",
          method: "GET",
        })
        .then((response) => {
          console.log(response);
          this.visitors = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteVisitor: function (data) {
      console.log(data);
      for (let i = 0; i < this.visitors.length; i++) {
        if (this.visitors[i].id == data) {
          this.visitors.splice(i, 1);
        }
      }
    },
  },
  mounted() {
    this.getVisitors();
  },
};
</script>

<style lang="scss" scoped>
.visitors {
  width: 100%;
  min-height: 80vh;
  display: grid;
  justify-items: center;
  align-items: start;
  align-content: start;
}

@media only screen and (min-width: 600px) {
  .visitors {
    min-height: 80vh;
    grid-template-columns: 1fr 1fr;
    align-content: start;
  }
}

@media only screen and (min-width: 1024px) {
  .visitors {
    min-height: 76vh;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: start;
  }
}
</style>