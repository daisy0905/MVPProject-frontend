<template>
  <div id="footer">
    <div id="container-1">
      <div id="unit-1">
        <div class="item">
          <img src="../assets/phone-icon.png" alt="phone icon" />
          <h4>13908484972</h4>
        </div>
        <div class="item">
          <img src="../assets/email-icon.png" alt="email icon" />
          <h4>kemin1018@163.com</h4>
        </div>
        <div class="item">
          <img src="../assets/wechat-icon.png" alt="weChat icon" />
          <h4>TK17Tk17</h4>
        </div>
      </div>
      <div id="unit-2">
        <div class="item-2">
          <img src="../assets/address-icon.png" alt="address icon" />
          <h4 class="address">
            <span v-if="this.$store.getters.languageGet"
              >中国长沙岳麓区后湖路后湖国际艺术区童柯敏工作室</span
            ><span v-else
              >Studio of Kemin Tong, Houhu International Art Park, Houhu Road,
              Yuelu District, Changsha, China</span
            >
          </h4>
        </div>
      </div>
    </div>
    <p @click="goToContact">
      <span v-if="this.$store.getters.languageGet">期待留下您的联系方式 ></span
      ><span v-else>Subscribe to our newsletter ></span>
    </p>
    <div id="container-2">
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
export default {
  name: "footer-section",
  methods: {
    goToContact: function () {
      this.$router.push("/contact");
    },
  },
};
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  height: 30vh;
  display: grid;
  justify-items: center;
  align-items: center;
}

#container-1 {
  width: 100%;
  height: 20vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  background-color: darkgrey;
}

#unit-1 {
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;

  .item {
    width: 100%;
    display: grid;
    justify-items: left;
    align-items: center;
    grid-template-columns: 15% 85%;
    margin-left: 2em;

    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }

    h4 {
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.8rem;
      margin: 0.5em;
      text-align: left;
    }
  }
}

#unit-2 {
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: start;

  .item-2 {
    height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    margin: 0.5em;

    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }

    .address {
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.8rem;
      line-height: 1.5em;
      margin: 0.5em;
    }
  }
}

p {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  text-align: center;
  border-bottom: 1px solid white;
  padding: 1em;
  color: white;
  height: 5vh;
  width: 100%;
  background-color: darkgrey;
}

#container-2 {
  width: 100%;
  height: 7vh;
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
  #unit-1 {
    .item {
      grid-template-columns: 20% 80%;
      margin-left: 3em;

      img {
        width: 30px;
        height: 30px;
      }

      h4 {
        font-size: 1.2rem;
      }
    }
  }

  #unit-2 {
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: start;

    .item-2 {
      height: 10vh;
      width: 100%;
      display: grid;
      justify-items: center;
      align-items: start;
      margin: 1em;

      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
      }

      .address {
        font-size: 1.2rem;
        width: 90%;
        line-height: 2em;
      }
    }
  }

  p {
    font-size: 1.2rem;
  }

  #container-2 {
    h4 {
      font-size: 1rem;
    }
  }
}

@media only screen and (min-width: 1024px) {
  #footer {
    height: 32vh;
  }

  #container-1 {
    height: 20vh;
    grid-template-columns: 100%;
  }

  #unit-1 {
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1em;

    .item {
      justify-items: center;
      align-items: center;
      grid-template-columns: 15% 85%;
      margin-left: 2em;

      img {
        width: 35px;
        height: 35px;
      }

      h4 {
        font-size: 1.2rem;
        text-align: center;
      }
    }
  }

  #unit-2 {
    align-items: center;
    justify-items: center;

    .item-2 {
      justify-items: center;
      align-items: start;
      margin: 0.5em;

      img {
        width: 35px;
        height: 35px;
      }

      .address {
        font-size: 1.2rem;
        line-height: 0;
      }
    }
  }

  p {
    font-size: 1.2rem;
    text-align: center;
  }

  #container-2 {
    h4 {
      font-size: 1.2rem;
    }
  }
}
</style>