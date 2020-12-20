<template>
  <div id="footer">
    <div id="container">
      <h4>
        <span v-if="this.$store.getters.languageGet"
          >网页由Daisy Tong制作于2020年</span
        ><span v-else>Created By Daisy Tong @ 2020</span>
      </h4>
      <h4>
        <span v-if="this.$store.getters.languageGet">版权所有</span
        ><span v-else>All Rights Reserved</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  height: 7vh;
  display: grid;
  justify-items: center;
  align-items: end;
}

#container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  justify-items: center;
  align-items: center;
  background-color: black;

  h4 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    color: grey;
    font-weight: normal;
  }
}

@media only screen and (min-width: 600px) {
  #container {
    h4 {
      font-size: 1rem;
    }
  }
}

@media only screen and (min-width: 600px) {
    #container {
        h4 {
        font-size: 1.2rem;
        }
    }
}
</style>