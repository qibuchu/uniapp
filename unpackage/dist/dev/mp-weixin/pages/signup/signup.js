"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      type: "password",
      isuser: true,
      //用户名是否占用
      isemail: false,
      //邮箱是否占用
      look: true,
      //密码是否可见
      invalid: false,
      //邮箱是否有效
      employ: false,
      //是否被占用
      lookUrl: "../../static/images/sign/biyan.png",
      Email: ""
    };
  },
  methods: {
    //显示密码功能函数
    looks: function() {
      if (this.look) {
        this.type = "password";
        this.look = !this.look;
        this.lookUrl = "../../static/images/sign/biyan.png";
      } else {
        this.type = "text";
        this.look = !this.look;
        this.lookUrl = "../../static/images/sign/look.png";
      }
    },
    //判断邮箱是否有效函数
    isEmail: function(e) {
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      this.Email = e.detail.value;
      if (reg.test(this.Email)) {
        this.isemail = true;
        this.invalid = false;
      } else {
        this.isemail = false;
        this.invalid = true;
      }
    },
    backSignin: function() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_assets._imports_0,
    b: common_vendor.o((...args) => $options.backSignin && $options.backSignin(...args)),
    c: common_assets._imports_1,
    d: $data.employ
  }, $data.employ ? {} : {}, {
    e: $data.isuser
  }, $data.isuser ? {
    f: common_assets._imports_2
  } : {}, {
    g: common_vendor.o((...args) => $options.isEmail && $options.isEmail(...args)),
    h: $data.employ
  }, $data.employ ? {} : {}, {
    i: $data.invalid
  }, $data.invalid ? {} : {}, {
    j: $data.isemail
  }, $data.isemail ? {
    k: common_assets._imports_2
  } : {}, {
    l: $data.type,
    m: $data.employ
  }, $data.employ ? {} : {}, {
    n: $data.lookUrl,
    o: common_vendor.o((...args) => $options.looks && $options.looks(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
