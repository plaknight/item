<template>
  <div class="login">
    <div class="arrow-Left">
      <img :src="backImg" alt="" />
    </div>

    <div class="login-img"></div>
    <div class="login-main">
      <div>
        <input
          class="input-user"
          type="text"
          placeholder="请输入手机号"
          name="username"
        />
      </div>
      <div>
        <input
          class="input-pass"
          type="text"
          placeholder="请输入密码"
          name="password"
        />
      </div>
    </div>
    <div class="login-btn">
      <button>{{ msg }}</button>
    </div>
    <div class="login-msg">
      <a href="javascript:void(0)">注册</a>
      <a href="javascript:void(0)">忘记密码</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "登录",
      backImg: require("@/assets/movie-imgs/icons/arr-left.png")
    };
  },
  created() {
    console.log(this.$route);
  }
};
</script>

<style lang='scss' scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #23262d;
  overflow: hidden;
  .arrow-Left {
    width: 14px;
    height: 20px;
    margin: 45px 0 0 24px;
    color: #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login-img {
    width: 103px;
    height: 92px;
    margin: 77px auto 0;
    background: url("../../assets/movie-imgs/icons/logo.png") no-repeat center;
    background-size: 100%;
  }
  .login-main {
    width: 254px;
    // height: 40px;
    margin: 33px auto 0;
    & > div {
      width: 100%;
      height: 40px;
      background-color: #33363d;
      border-radius: 11px;
      & > input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        color: #fff;
        text-indent: 49px;
      }
      .input-user {
        background: url("../../assets/movie-imgs/icons/phone.png") no-repeat
          27px;
      }
      .input-pass {
        background: url("../../assets/movie-imgs/icons/password.png") no-repeat
          27px;
      }
    }
    & > div:nth-child(2) {
      margin-top: 22px;
    }
  }
  .login-btn {
    width: 254px;
    margin: 68px auto 0;

    button {
      width: 100%;
      border: none;
      outline: none;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.57);
      border-radius: 11px;
      font-size: 20px;
      color: rgba(255, 255, 255, 1);
    }
  }
  .login-msg {
    width: 254px;
    margin: 15px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      line-height: 14px;
    }
  }
}
</style>