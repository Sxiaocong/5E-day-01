<template>
  <div>
    <div class="login_input">
      <p>
        手机号码
        <input type="text" @input="onInput1" @keyup="on" v-model="phone" />
        <span class="yes" v-show="upper1">√</span>
        <span class="wrong" v-show="upper2">x</span>
      </p>
      <p class="mm">
        密码
        <input type="password" @input="onInput2" @keyup="on" v-model="pass" />
        <span class="yes" v-show="showy1">√</span>
        <span class="wrong" v-show="showy2">x</span>
      </p>
      <p>
        <button
          class="button"
          @click="onClickLogin"
          :disabled="!disabled"
        >
          登录
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upper1: false,
      upper2: false,
      showy1: false,
      showy2: false,
      login: false,
      disabled: true,
      phone: "",
      pass: "",
      disabled: false,
    };
  },
  methods: {
    onInput1() {
      var ph = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if (!ph.test(this.phone)) {
        this.upper2 = true;
        this.upper1 = false;
      } else {
        this.upper1 = true;
        this.upper2 = false;
      }
    },
    onInput2() {
      var pa = /^[a-zA-Z][a-zA-Z0-9_]*$/;
      if (!pa.test(this.pass)) {
        this.showy2 = true;
        this.showy1 = false;
      } else {
        this.showy1 = true;
        this.showy2 = false;
      }
    },
    on() {
      if (this.showy1 === true) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },
    onClickLogin() {
      this.$router.push({ path: "/bookStore" });
    },
  },
  directives: {},
};
</script>

<style lang="scss">
.login_input {
  width: 90%;
  height: 300px;
  // background-color: skyblue;
  margin-top: 120px;
  margin-left: 25px;
  text-align: center;
  p {
    margin-top: 10px;
  }
  input {
    width: 65%;
    height: 30px;
  }
  .yes {
    width: 10px;
    height: 10px;
    padding: 0px 5px;
    border-radius: 50%;
    background-color: green;
    color: #fff;
  }
  .wrong {
    width: 10px;
    height: 10px;
    padding: 0px 5px;
    border-radius: 50%;
    background-color: red;
    color: #fff;
  }
  .mm {
    margin-left: 19px;
  }
  .button {
    width: 120px;
    height: 35px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: #fff;
  }
}
</style>