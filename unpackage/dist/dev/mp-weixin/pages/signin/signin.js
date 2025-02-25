"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      user: "",
      //用户名
      psw: ""
      //密码
    };
  },
  methods: {
    //跳转注册页面
    toSignup: function() {
      common_vendor.index.navigateTo({
        url: "../signup/signup"
      });
    },
    getUser: function(e) {
      this.user = e.detail.value;
    },
    getPsw: function(e) {
      this.psw = e.detail.value;
    },
    //登录提交
    login: function() {
      if (this.psw && this.user) {
        console.log("登录成功");
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toSignup && $options.toSignup(...args)),
    b: common_assets._imports_1,
    c: common_vendor.o((...args) => $options.getUser && $options.getUser(...args)),
    d: common_vendor.o((...args) => $options.getPsw && $options.getPsw(...args)),
    e: common_vendor.o((...args) => $options.login && $options.login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
