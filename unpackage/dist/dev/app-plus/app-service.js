if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_1$6 = "/static/images/img/four.png";
  const _imports_1$5 = "/static/images/index/logo.png";
  const _imports_2$3 = "/static/images/index/search.png";
  const _imports_3$4 = "/static/images/index/add.png";
  const _imports_4$3 = "/static/images/index/apply.png";
  const _imports_6$1 = "/static/images/img/one.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$d = {
    data() {
      return {};
    },
    onLoad() {
    },
    methods: {
      goSearch: function() {
        uni.navigateTo({
          url: "/pages/search/search"
        });
      },
      goUser: function() {
        uni.navigateTo({
          url: "/pages/userhome/userhome"
        });
      },
      buildGroup: function() {
        uni.navigateTo({
          url: "/pages/buildgroup/buildgroup"
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("navigator", {
          url: "../userhome/userhome?id=aaa",
          "hover-class": "none",
          class: "top-bar-left"
        }, [
          vue.createElementVNode("image", { src: _imports_1$6 })
        ]),
        vue.createElementVNode("view", { class: "top-bar-between" }, [
          vue.createElementVNode("image", {
            src: _imports_1$5,
            class: "logo"
          })
        ]),
        vue.createElementVNode("view", { class: "top-bar-right" }, [
          vue.createElementVNode("view", { class: "search" }, [
            vue.createElementVNode("image", {
              src: _imports_2$3,
              onClick: _cache[0] || (_cache[0] = (...args) => $options.goSearch && $options.goSearch(...args))
            })
          ]),
          vue.createElementVNode("view", { class: "add" }, [
            vue.createElementVNode("image", {
              src: _imports_3$4,
              onClick: _cache[1] || (_cache[1] = (...args) => $options.buildGroup && $options.buildGroup(...args))
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "friend" }, [
          vue.createElementVNode("view", { class: "friend-list" }, [
            vue.createElementVNode("view", { class: "friend-list-l" }, [
              vue.createElementVNode("text", { class: "tip" }, "11"),
              vue.createElementVNode("image", { src: _imports_4$3 })
            ]),
            vue.createElementVNode("view", { class: "friend-list-r" }, [
              vue.createElementVNode("view", { class: "top" }, [
                vue.createElementVNode("view", { class: "name" }, "好友申请"),
                vue.createElementVNode("view", { class: "time" }, "12:00")
              ]),
              vue.createElementVNode("view", { class: "news" }, "正义之手大家说的哈酒发撒华电国际撒都感觉啊刷卡")
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "friend" }, [
          vue.createElementVNode("view", { class: "friend-list" }, [
            vue.createElementVNode("view", { class: "friend-list-l" }, [
              vue.createElementVNode("text", { class: "tip" }, "11"),
              vue.createElementVNode("image", { src: _imports_6$1 })
            ]),
            vue.createElementVNode("view", { class: "friend-list-r" }, [
              vue.createElementVNode("view", { class: "top" }, [
                vue.createElementVNode("view", { class: "name" }, "cjh"),
                vue.createElementVNode("view", { class: "time" }, "12:00")
              ]),
              vue.createElementVNode("view", { class: "news" }, "正义之手大家说的哈酒发撒华电国际撒都感觉啊刷卡")
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "C:/Users/cjh19/Desktop/uniapp/pages/index/index.vue"]]);
  const _imports_0$5 = "/static/images/common/back.png";
  const _imports_0$4 = "/static/images/sign/logo1.png";
  const _imports_2$2 = "/static/images/sign/right1.png";
  const _sfc_main$c = {
    data() {
      return {
        type: "password",
        isuser: false,
        //用户名是否可用
        isemail: true,
        //邮箱是否可用
        look: true,
        //密码是否可见
        invalid: false,
        //邮箱是否有效
        useremploy: false,
        //是否被占用
        emailemploy: false,
        lookUrl: "../../static/images/sign/biyan.png",
        Email: "",
        isok: false,
        user: "",
        psw: ","
      };
    },
    methods: {
      //显示密码功能函数
      looks: function() {
        if (this.Email.length > 0) {
          if (this.look) {
            this.type = "password";
            this.look = !this.look;
            this.lookUrl = "../../static/images/sign/biyan.png";
          } else {
            this.type = "text";
            this.look = !this.look;
            this.lookUrl = "../../static/images/sign/look.png";
          }
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
        this.isOk();
      },
      backSignin: function() {
        uni.navigateBack({
          delta: 1
        });
      },
      getUser: function(e) {
        this.user = e.detail.value;
        this.isOk();
      },
      getPsw: function(e) {
        this.psw = e.detail.value;
        this.isOk();
      },
      isOk: function() {
        if (this.isuser && this.psw.length > 5 && this.isemail) {
          this.isok = true;
        } else {
          this.isok = false;
        }
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("view", {
          class: "top-bar-left",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.backSignin && $options.backSignin(...args))
        }, [
          vue.createElementVNode("image", {
            class: "back-img",
            src: _imports_0$5
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "logo" }, [
        vue.createElementVNode("image", { src: _imports_0$4 })
      ]),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "main-text" }, "注册"),
        vue.createElementVNode("view", { class: "main-input" }, [
          vue.createElementVNode("view", { class: "input-div" }, [
            vue.createElementVNode(
              "input",
              {
                type: "text",
                value: "",
                placeholder: "请取个名字",
                class: "user",
                "placeholder-style": "color:#aaa;font-size:400",
                onInput: _cache[1] || (_cache[1] = (...args) => $options.getUser && $options.getUser(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            $data.useremploy ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "employ"
            }, "已占用")) : vue.createCommentVNode("v-if", true),
            $data.isuser ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              src: _imports_2$2,
              class: "ok"
            })) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "input-div" }, [
            vue.createElementVNode(
              "input",
              {
                type: "text",
                value: "",
                placeholder: "请输入邮箱",
                class: "email",
                "placeholder-style": "color:#aaa;font-size:400",
                onInput: _cache[2] || (_cache[2] = (...args) => $options.isEmail && $options.isEmail(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            $data.emailemploy ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "employ"
            }, "已占用")) : vue.createCommentVNode("v-if", true),
            $data.invalid ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "invalid"
            }, "邮箱无效")) : vue.createCommentVNode("v-if", true),
            $data.isemail ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 2,
              src: _imports_2$2,
              class: "ok"
            })) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "input-div" }, [
            vue.createElementVNode("input", {
              type: $data.type,
              value: "",
              placeholder: "这里输入密码",
              class: "pwd",
              "placeholder-style": "color:#aaa;font-size:400",
              onInput: _cache[3] || (_cache[3] = (...args) => $options.getPsw && $options.getPsw(...args))
            }, null, 40, ["type"]),
            vue.createElementVNode("image", {
              src: $data.lookUrl,
              class: "look",
              onClick: _cache[4] || (_cache[4] = (...args) => $options.looks && $options.looks(...args))
            }, null, 8, ["src"])
          ])
        ])
      ]),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass([{ submit: $data.isok }, { submit1: !$data.isok }])
        },
        "注册",
        2
        /* CLASS */
      )
    ]);
  }
  const PagesSignupSignup = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "C:/Users/cjh19/Desktop/uniapp/pages/signup/signup.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const _sfc_main$b = {
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
        uni.navigateTo({
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
          formatAppLog("log", "at pages/signin/signin.vue:50", "登录成功");
        }
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("view", {
          class: "top-bar-right",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.toSignup && $options.toSignup(...args))
        }, [
          vue.createElementVNode("view", { class: "text" }, " 注册 ")
        ])
      ]),
      vue.createElementVNode("view", { class: "logo" }, [
        vue.createElementVNode("image", { src: _imports_0$4 })
      ]),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "main-text" }, "登录"),
        vue.createElementVNode("view", { class: "slogan" }, "你好，欢迎光临"),
        vue.createElementVNode("view", { class: "main-input" }, [
          vue.createElementVNode(
            "input",
            {
              type: "text",
              value: "",
              placeholder: "用户名/邮箱",
              class: "user",
              "placeholder-style": "color:#aaa;font-size:400",
              onBlur: _cache[1] || (_cache[1] = (...args) => $options.getUser && $options.getUser(...args))
            },
            null,
            32
            /* NEED_HYDRATION */
          ),
          vue.createElementVNode(
            "input",
            {
              type: "password",
              value: "",
              placeholder: "请输入密码",
              class: "pwd",
              "placeholder-style": "color:#aaa;font-size:400",
              onBlur: _cache[2] || (_cache[2] = (...args) => $options.getPsw && $options.getPsw(...args))
            },
            null,
            32
            /* NEED_HYDRATION */
          )
        ]),
        vue.createElementVNode("view", { class: "tips" }, "输入用户或密码错误")
      ]),
      vue.createElementVNode("view", {
        class: "submit",
        onClick: _cache[3] || (_cache[3] = (...args) => $options.login && $options.login(...args))
      }, "登录")
    ]);
  }
  const PagesSigninSignin = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "C:/Users/cjh19/Desktop/uniapp/pages/signin/signin.vue"]]);
  const _imports_0$3 = "/static/images/search/search.png";
  const _sfc_main$a = {
    data() {
      return {};
    },
    methods: {
      // search:function(e){
      // 	let searchval=e.detail.value;
      // },
      //寻找匹配的用户函数
      // searchUser:function(e){
      // }
      //判断是否为好友
      // isFriend:function(e){
      // 	let tip=0;
      // }
      // 返回上一个页面
      backOne: function() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("view", { class: "search-div" }, [
          vue.createElementVNode("image", {
            src: _imports_0$3,
            class: "search-img"
          }),
          vue.createElementVNode(
            "input",
            {
              type: "search",
              value: "",
              placeholder: "搜索用户/群",
              class: "search",
              "placeholder-style": "color:#aaa;font-size:400",
              onInput: _cache[0] || (_cache[0] = (...args) => _ctx.search && _ctx.search(...args))
            },
            null,
            32
            /* NEED_HYDRATION */
          )
        ]),
        vue.createElementVNode("view", { class: "top-bar-right" }, [
          vue.createElementVNode("view", {
            class: "text",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.backOne && $options.backOne(...args))
          }, "取消")
        ])
      ]),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "search-user result" }, [
          vue.createElementVNode("view", { class: "title" }, "用户"),
          vue.createElementVNode("view", { class: "list user" }, [
            vue.createElementVNode("image", { src: _imports_6$1 }),
            vue.createElementVNode("view", { class: "names" }, [
              vue.createElementVNode("view", { class: "name" }, "曹建豪"),
              vue.createElementVNode("view", { class: "email" }, "hhhhhjjjj")
            ]),
            vue.createElementVNode("view", { class: "right-btn send" }, "发消息")
          ]),
          vue.createElementVNode("view", { class: "list user" }, [
            vue.createElementVNode("navigator", { url: "../userhome/userhome?id=aaa" }, [
              vue.createElementVNode("image", { src: _imports_6$1 })
            ]),
            vue.createElementVNode("view", { class: "names" }, [
              vue.createElementVNode("view", { class: "name" }, "曹建豪"),
              vue.createElementVNode("view", { class: "email" }, "hhhhhjjjj")
            ]),
            vue.createElementVNode("view", { class: "right-btn add" }, "加好友")
          ]),
          vue.createElementVNode("view", { class: "list user" }, [
            vue.createElementVNode("image", { src: _imports_6$1 }),
            vue.createElementVNode("view", { class: "names" }, [
              vue.createElementVNode("view", { class: "name" }, "曹建豪"),
              vue.createElementVNode("view", { class: "email" }, "hhhhhjjjj")
            ]),
            vue.createElementVNode("view", { class: "right-btn" }, "发送")
          ])
        ])
      ])
    ]);
  }
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "C:/Users/cjh19/Desktop/uniapp/pages/search/search.vue"]]);
  const _imports_1$4 = "/static/images/userhome/more.png";
  const _imports_1$3 = "/static/images/img/three.png";
  const _imports_3$3 = "/static/images/userhome/female.png";
  const _sfc_main$9 = {
    data() {
      return {
        sexcolor: "rgba(255,93,91,1)",
        addHeight: "",
        animationData: {},
        //动画
        animationData1: {},
        animationData2: {},
        //动画
        animationData3: {},
        //动画
        animationData4: {},
        //动画
        isAdd: false,
        myname: "春雨",
        user: {
          name: "曹建豪",
          nick: "云溪",
          intr: "先天下之忧而忧，后天下之乐而乐乎"
        }
      };
    },
    onReady() {
      this.getElementStyle();
    },
    methods: {
      // 返回上一个页面
      backOne: function() {
        uni.navigateBack({
          delta: 1
        });
      },
      //获取页面高度
      getElementStyle: function() {
        const query = uni.createSelectorQuery().in(this);
        query.select(".bg").boundingClientRect((data) => {
          formatAppLog("log", "at pages/userhome/userhome.vue:80", "得到布局位置信息" + JSON.stringify(data));
          formatAppLog("log", "at pages/userhome/userhome.vue:81", "节点离页面顶部的距离为" + data.top);
          this.addHeight = data.height - 186;
        }).exec();
      },
      //添加好友动画
      addFriendAnimat: function() {
        this.isAdd = !this.isAdd;
        var animation = uni.createAnimation({
          duration: 300,
          timingFunction: "ease"
        });
        var animation1 = uni.createAnimation({
          duration: 300,
          timingFunction: "ease"
        });
        var animation2 = uni.createAnimation({
          duration: 300,
          timingFunction: "ease"
        });
        var animation3 = uni.createAnimation({
          duration: 300,
          timingFunction: "ease"
        });
        var animation4 = uni.createAnimation({
          duration: 300,
          timingFunction: "ease"
        });
        if (this.isAdd) {
          animation.bottom(0).step();
          animation1.bottom(0).step();
          animation2.width(120).height(120).step();
          animation3.opacity(0).step();
          animation4.backgroundColor("rgba(255,228,49,0.6)").step();
        } else {
          animation.bottom(-this.addHeight).step();
          animation1.bottom(-100).step();
          animation2.width(200).height(200).step();
          animation3.opacity(1).step();
          animation4.backgroundColor("rgba(255,228,255,0)").step();
        }
        this.animationData = animation.export();
        this.animationData1 = animation1.export();
        this.animationData2 = animation2.export();
        this.animationData3 = animation3.export();
        this.animationData4 = animation4.export();
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("view", {
          class: "top-bar-left",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.backOne && $options.backOne(...args))
        }, [
          vue.createElementVNode("image", {
            class: "back-img",
            src: _imports_0$5
          })
        ]),
        vue.createElementVNode("view", { class: "top-bar-right" }, [
          vue.createElementVNode("view", { class: "more-img" }, [
            vue.createElementVNode("image", { src: _imports_1$4 })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "bg" }, [
        vue.createElementVNode("view", {
          class: "bg-bai",
          animation: $data.animationData4
        }, null, 8, ["animation"]),
        vue.createElementVNode("image", {
          src: _imports_1$3,
          class: "bg-img",
          mode: "aspectFill"
        })
      ]),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "user-header" }, [
          vue.createElementVNode("view", {
            class: "sex",
            style: vue.normalizeStyle({ background: $data.sexcolor }),
            animation: $data.animationData3
          }, [
            vue.createElementVNode("image", { src: _imports_3$3 })
          ], 12, ["animation"]),
          vue.createElementVNode("image", {
            src: _imports_1$3,
            class: "user-img",
            mode: "aspectFill",
            animation: $data.animationData2
          }, null, 8, ["animation"])
        ]),
        vue.createElementVNode("view", { class: "user-imf" }, [
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($data.user.name),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "nick" },
            "昵称：" + vue.toDisplayString($data.user.nick),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "intr" },
            vue.toDisplayString($data.user.intr),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "bottom-bar" }, [
        vue.createElementVNode("view", {
          class: "bottom-btn btn1",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.addFriendAnimat && $options.addFriendAnimat(...args))
        }, "加为好友")
      ]),
      vue.createElementVNode("view", {
        class: "add-misg",
        style: vue.normalizeStyle({ height: $data.addHeight + "px", bottom: -+$data.addHeight + "px" }),
        animation: $data.animationData
      }, [
        vue.createElementVNode(
          "view",
          { class: "name" },
          vue.toDisplayString($data.user.name),
          1
          /* TEXT */
        ),
        vue.createElementVNode("textarea", {
          value: $data.myname + "请求加为好友~",
          maxlength: "120",
          class: "add-main"
        }, null, 8, ["value"])
      ], 12, ["animation"]),
      vue.createElementVNode("view", {
        class: "add-bt bottom-bar",
        animation: $data.animationData1
      }, [
        vue.createElementVNode("view", {
          class: "close btn1",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.addFriendAnimat && $options.addFriendAnimat(...args))
        }, "取消"),
        vue.createElementVNode("view", { class: "send btn1" }, "发送")
      ], 8, ["animation"])
    ]);
  }
  const PagesUserhomeUserhome = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "C:/Users/cjh19/Desktop/uniapp/pages/userhome/userhome.vue"]]);
  const _sfc_main$8 = {
    name: "image-cropper",
    props: {
      cropWidth: {
        type: Number,
        default: 200
      },
      cropHeight: {
        type: Number,
        default: 200
      },
      cropFixed: {
        type: Boolean,
        default: false
      },
      iszoom: {
        type: Boolean,
        default: false
      },
      src: {
        type: String
      },
      showResetBtn: {
        type: Boolean,
        default: true
      },
      showRotateBtn: {
        type: Boolean,
        default: true
      },
      proportion: {
        type: Number,
        default: 0
      }
    },
    data() {
      const sysInfo = uni.getSystemInfoSync();
      const pixelRatio = sysInfo.pixelRatio;
      return {
        show: false,
        scale: 1,
        rotate: 0,
        cropW: 0,
        cropH: 0,
        cropOldW: 0,
        cropOldH: 0,
        sysInfo,
        pixelRatio,
        imageRealWidth: 0,
        imageRealHeight: 0,
        cropOffsertX: 0,
        cropOffsertY: 0,
        startX: 0,
        startY: 0,
        // 裁剪框与边界间距
        border: 5,
        x: 0,
        y: 0,
        startL: 0,
        oldScale: 1,
        scaling: false
      };
    },
    watch: {
      src(val) {
        if (val.length > 0) {
          this.init();
        }
      },
      show(val) {
      }
    },
    computed: {
      containerTop() {
        let top = 0;
        return top;
      },
      // 容器高度
      containerHeight() {
        return this.windowHeight - 48;
      },
      // 屏幕宽度
      windowWidth() {
        return this.sysInfo.windowWidth;
      },
      windowHeight() {
        return this.sysInfo.windowHeight;
      },
      // 图片宽高比
      imageRatio() {
        if (this.imageRealHeight > 0) {
          return this.imageRealWidth / this.imageRealHeight;
        }
        return 0;
      },
      // 等比缩放后的宽度
      imageWidth() {
        if (this.imageRatio >= 1) {
          return this.windowWidth;
        }
        return this.windowWidth * this.imageRatio;
      },
      // 等比缩放后的高度
      imageHeight() {
        if (this.imageRatio >= 1) {
          return this.windowWidth / this.imageRatio;
        }
        return this.windowWidth;
      }
    },
    methods: {
      moveHandle() {
      },
      rotateHandler() {
        if (this.rotate == 3) {
          this.rotate = 0;
        } else {
          ++this.rotate;
        }
      },
      init() {
        this.rotate = 0;
        this.scale = 1;
        this.cropW = this.cropWidth;
        this.cropH = this.cropHeight;
        uni.showLoading({
          title: "图片加载中..."
        });
        this.loadImage(this.src).then((e) => {
          uni.hideLoading();
        }).catch((e) => {
          uni.hideLoading();
          uni.showModal({
            title: "标题",
            content: "图片加载失败"
          });
        });
      },
      loadImage(src) {
        const _this = this;
        return new Promise((resolve, reject) => {
          uni.getImageInfo({
            src,
            success: (res) => {
              _this.imageRealWidth = res.width;
              _this.imageRealHeight = res.height;
              _this.cropOffsertX = _this.windowWidth / 2 - _this.cropW / 2;
              _this.cropOffsertY = _this.windowHeight / 2 - _this.cropH / 2;
              _this.show = true;
              _this.$nextTick(() => {
                _this.x = _this.windowWidth / 2 - _this.imageWidth / 2;
                _this.y = _this.containerHeight / 2 - _this.imageHeight / 2;
              });
              resolve(res);
            },
            fail: (e) => {
              _this.show = false;
              reject(e);
            }
          });
        }).catch((e) => {
        });
      },
      cancel() {
        this.show = false;
        this.$emit("cancel");
      },
      confirm(event) {
        uni.showLoading({
          title: "裁剪中..."
        });
        if (this.iszoom) {
          this.pixelRatio = 1;
          formatAppLog("log", "at components/ling-imgcropper/ling-imgcropper.vue:248", "this is fixed");
        } else {
          if (this.proportion != 0)
            this.proportion = this.pixelRatio;
        }
        const _this = this;
        const ctx = uni.createCanvasContext("myCanvas", _this);
        const pixelRatio = _this.pixelRatio;
        const imgage = _this.src;
        const imgW = _this.imageWidth * _this.scale;
        const imgH = _this.imageHeight * _this.scale;
        const rotate = _this.rotate;
        let dx = _this.cropOffsertX - _this.x - (_this.imageWidth - imgW) / 2;
        let dy = _this.cropOffsertY - _this.y - (_this.imageHeight - imgH) / 2;
        ctx.setFillStyle("white");
        ctx.fillRect(0, 0, imgW, imgH);
        ctx.save();
        ctx.rotate(rotate * 90 * Math.PI / 180);
        switch (rotate) {
          case 1:
            dx += (imgH - imgW) / 2;
            dy -= (imgH - imgW) / 2;
            ctx.drawImage(imgage, -dy, dx, imgW, -imgH);
            break;
          case 2:
            ctx.drawImage(imgage, dx, dy, -imgW, -imgH);
            break;
          case 3:
            dx += (imgH - imgW) / 2;
            dy -= (imgH - imgW) / 2;
            ctx.drawImage(imgage, dy, -dx, -imgW, imgH);
            break;
          default:
            ctx.drawImage(imgage, -dx, -dy, imgW, imgH);
            break;
        }
        ctx.restore();
        ctx.draw(false, () => {
          uni.canvasToTempFilePath({
            canvasId: "myCanvas",
            destWidth: _this.cropW * pixelRatio,
            destHeight: _this.cropH * pixelRatio,
            success: (res) => {
              uni.hideLoading();
              event.detail.tempFilePath = res.tempFilePath;
              console.log();
              _this.show = false;
              _this.$emit("confirm", event);
            },
            fail: (e) => {
              uni.hideLoading();
              uni.showModal({
                title: "提示",
                content: "裁剪失败"
              });
            }
          }, _this);
        });
      },
      imgTouchStart(e) {
        if (e.touches.length === 2) {
          this.oldScale = this.scale;
          const x = e.touches[0].pageX - e.touches[1].pageX;
          const y = e.touches[0].pageY - e.touches[1].pageY;
          const hypotenuse = Math.sqrt(
            Math.pow(x, 2) + Math.pow(y, 2)
          );
          this.startL = Math.max(x, y, hypotenuse);
        } else if (e.touches.length === 1) {
          this.scaling = true;
          this.startX = e.touches[0].pageX - this.x;
          this.startY = e.touches[0].pageY - this.y;
        }
      },
      imgMoveing(e) {
        if (e.touches.length === 2) {
          let scale = this.oldScale;
          const x = e.touches[0].pageX - e.touches[1].pageX;
          const y = e.touches[0].pageY - e.touches[1].pageY;
          const hypotenuse = Math.sqrt(
            Math.pow(x, 2) + Math.pow(y, 2)
          );
          const newL = Math.max(x, y, hypotenuse);
          const cha = newL - this.startL;
          let coe = 1;
          coe = coe / this.imageWidth > coe / this.imageHeight ? coe / this.imageHeight : coe / this.imageWidth;
          coe = coe > 0.1 ? 0.1 : coe;
          const num = coe * cha;
          if (cha > 0) {
            scale += Math.abs(num);
          } else if (cha < 0) {
            scale > Math.abs(num) ? scale -= Math.abs(num) : scale;
          }
          this.scale = scale;
        } else if (this.scaling && e.touches.length === 1) {
          const moveX = e.touches[0].pageX - this.startX;
          const moveY = e.touches[0].pageY - this.startY;
          this.x = moveX;
          this.y = moveY;
        }
      },
      imgMoveEnd() {
        this.scaling = false;
      },
      imgcancel() {
        this.scaling = false;
      },
      touchStart(e) {
        if (!this.scaling) {
          this.startX = e.touches[0].pageX - this.cropOffsertX;
          this.startY = e.touches[0].pageY - this.cropOffsertY;
          this.cropOldW = this.cropW;
          this.cropOldH = this.cropH;
        }
      },
      cropMoveing(e) {
        if (!this.scaling) {
          const moveX = this._cropX(e.touches[0].pageX - this.startX);
          const moveY = this._cropY(e.touches[0].pageY - this.startY);
          this.cropOffsertX = moveX;
          this.cropOffsertY = moveY;
        }
      },
      dragMove(e, type) {
        if (this.cropFixed) {
          return false;
        }
        const moveX = e.touches[0].pageX - this.startX;
        const moveY = e.touches[0].pageY - this.startY;
        switch (type) {
          case "left-top":
            this._cropMoveLeft(moveX);
            this._cropMoveTop(moveY);
            break;
          case "middle-top":
            this._cropMoveTop(moveY);
            break;
          case "right-top":
            this._cropMoveTop(moveY);
            this._cropMoveRight(moveX);
            break;
          case "middle-right":
            this._cropMoveRight(moveX);
            break;
          case "right-bottom":
            this._cropMoveRight(moveX);
            this._cropMoveBottom(moveY);
            break;
          case "middle-bottom":
            this._cropMoveBottom(moveY);
            break;
          case "left-bottom":
            this._cropMoveBottom(moveY);
            this._cropMoveLeft(moveX);
            break;
          case "middle-left":
            this._cropMoveLeft(moveX);
            break;
        }
      },
      _cropMoveTop(y) {
        const topY = this._cropY(y);
        this.cropH += this.cropOffsertY - topY;
        this.cropOffsertY = topY;
      },
      _cropMoveRight(x) {
        if (this.cropOldW + x >= this.windowWidth - this.border) {
          return false;
        }
        this.cropW = this.cropOldW + (x - this.cropOffsertX);
      },
      _cropMoveBottom(y) {
        if (this.cropOldH + y >= this.windowHeight - this.containerTop - this.border) {
          return false;
        }
        this.cropH = this.cropOldH + (y - this.cropOffsertY);
      },
      _cropMoveLeft(x) {
        const leftX = this._cropY(x);
        this.cropW += this.cropOffsertX - leftX;
        this.cropOffsertX = leftX;
      },
      _cropX(x) {
        if (x <= this.border) {
          return this.border;
        }
        if (x + this.cropW >= this.windowWidth - this.border) {
          return this.windowWidth - this.cropW - this.border;
        }
        return x;
      },
      _cropY(y) {
        if (y <= this.border) {
          return this.border;
        }
        if (y + this.cropH >= this.windowHeight - this.containerTop - this.border) {
          return this.windowHeight - this.cropH - this.containerTop - this.border;
        }
        return y;
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "vue-cropper",
        ref: "cropper",
        style: vue.normalizeStyle({ top: `${$options.containerTop}px` }),
        onTouchmove: _cache[26] || (_cache[26] = vue.withModifiers(() => {
        }, ["stop", "prevent"])),
        catchtouchmove: "false"
      },
      [
        vue.createElementVNode("view", { class: "cropper-box" }, [
          vue.createElementVNode(
            "view",
            {
              class: "cropper-box-canvas",
              onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.imgTouchStart && $options.imgTouchStart(...args), ["stop", "prevent"])),
              onTouchcancel: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.imgcancel && $options.imgcancel(...args), ["stop", "prevent"])),
              onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.imgMoveing && $options.imgMoveing(...args), ["stop", "prevent"])),
              onTouchend: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.imgMoveEnd && $options.imgMoveEnd(...args), ["stop", "prevent"])),
              style: vue.normalizeStyle({
                "width": $options.imageWidth + "px",
                "height": $options.imageHeight + "px",
                "transform": "scale(" + $data.scale + "," + $data.scale + ") translate3d(" + $data.x / $data.scale + "px," + $data.y / $data.scale + "px,0)rotateZ(" + $data.rotate * 90 + "deg)"
              })
            },
            [
              vue.createElementVNode("image", {
                src: $props.src,
                alt: "cropper-img",
                ref: "cropperImg",
                mode: "scaleToFill",
                class: "uni-image"
              }, null, 8, ["src"])
            ],
            36
            /* STYLE, NEED_HYDRATION */
          )
        ]),
        vue.createElementVNode("view", { class: "cropper-drag-box cropper-modal cropper-move pointer-events" }),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["cropper-crop-box", { "pointer-events": $props.cropFixed }]),
            style: vue.normalizeStyle({ "width": $data.cropW + "px", "height": $data.cropH + "px", "transform": "translate3d(" + $data.cropOffsertX + "px," + $data.cropOffsertY + "px,0)" })
          },
          [
            vue.createElementVNode("view", { class: "cropper-view-box" }, [
              vue.createElementVNode("image", {
                style: vue.normalizeStyle({ "width": $options.imageWidth + "px", "height": $options.imageHeight + "px", "transform": "scale(" + $data.scale + "," + $data.scale + ") translate3d(" + ($data.x - $data.cropOffsertX) / $data.scale + "px," + ($data.y - $data.cropOffsertY) / $data.scale + "px,0)rotateZ(" + $data.rotate * 90 + "deg)" }),
                mode: "scaleToFill",
                src: $props.src,
                alt: "cropper-img"
              }, null, 12, ["src"])
            ]),
            !$props.cropFixed ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: "cropper-face cropper-move",
                onTouchstart: _cache[4] || (_cache[4] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                onTouchmove: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.cropMoveing && $options.cropMoveing(...args), ["stop", "prevent"]))
              },
              null,
              32
              /* NEED_HYDRATION */
            )) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "crop-line line-w" }),
            vue.createElementVNode("view", { class: "crop-line line-a" }),
            vue.createElementVNode("view", { class: "crop-line line-s" }),
            vue.createElementVNode("view", { class: "crop-line line-d" }),
            !$props.cropFixed ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-lt",
                    onTouchstart: _cache[6] || (_cache[6] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[7] || (_cache[7] = vue.withModifiers(($event) => $options.dragMove($event, "left-top"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-mt",
                    onTouchstart: _cache[8] || (_cache[8] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[9] || (_cache[9] = vue.withModifiers(($event) => $options.dragMove($event, "middle-top"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-rt",
                    onTouchstart: _cache[10] || (_cache[10] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[11] || (_cache[11] = vue.withModifiers(($event) => $options.dragMove($event, "right-top"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-ml",
                    onTouchstart: _cache[12] || (_cache[12] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[13] || (_cache[13] = vue.withModifiers(($event) => $options.dragMove($event, "middle-left"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-mr",
                    onTouchstart: _cache[14] || (_cache[14] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[15] || (_cache[15] = vue.withModifiers(($event) => $options.dragMove($event, "middle-right"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-lb",
                    onTouchstart: _cache[16] || (_cache[16] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[17] || (_cache[17] = vue.withModifiers(($event) => $options.dragMove($event, "left-bottom"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-mb",
                    onTouchstart: _cache[18] || (_cache[18] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[19] || (_cache[19] = vue.withModifiers(($event) => $options.dragMove($event, "middle-bottom"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "crop-point point-rb",
                    onTouchstart: _cache[20] || (_cache[20] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["stop", "prevent"])),
                    onTouchmove: _cache[21] || (_cache[21] = vue.withModifiers(($event) => $options.dragMove($event, "right-bottom"), ["stop", "prevent"]))
                  },
                  null,
                  32
                  /* NEED_HYDRATION */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createElementVNode(
          "canvas",
          {
            id: "myCanvas",
            "canvas-id": "myCanvas",
            class: "cropper-canvas",
            style: vue.normalizeStyle({ "width": $data.cropW + "px", "height": $data.cropH + "px" })
          },
          null,
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", { class: "btn-group" }, [
          vue.withDirectives(vue.createElementVNode(
            "view",
            {
              class: "btn-item reset-btn",
              onClick: _cache[22] || (_cache[22] = (...args) => $options.init && $options.init(...args))
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $props.showResetBtn]
          ]),
          vue.withDirectives(vue.createElementVNode(
            "view",
            {
              class: "btn-item rotate-btn",
              onClick: _cache[23] || (_cache[23] = (...args) => $options.rotateHandler && $options.rotateHandler(...args))
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $props.showRotateBtn]
          ])
        ]),
        vue.createElementVNode("view", { class: "uni-info__ft" }, [
          vue.createElementVNode("view", {
            class: "uni-modal__btn uni-modal__btn_default",
            style: { "color": "rgb(0, 0, 0)" },
            onClick: _cache[24] || (_cache[24] = (...args) => $options.cancel && $options.cancel(...args))
          }, "取消"),
          vue.createElementVNode("view", {
            class: "uni-modal__btn uni-modal__btn_primary",
            style: { "color": "rgb(0, 122, 255)" },
            onClick: _cache[25] || (_cache[25] = (...args) => $options.confirm && $options.confirm(...args))
          }, "确定")
        ])
      ],
      36
      /* STYLE, NEED_HYDRATION */
    )), [
      [vue.vShow, $data.show]
    ]);
  }
  const ImageCropper = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-40239f57"], ["__file", "C:/Users/cjh19/Desktop/uniapp/components/ling-imgcropper/ling-imgcropper.vue"]]);
  const _imports_4$2 = "/static/images/common/more.png";
  const _sfc_main$7 = {
    data() {
      const currentDate = this.getDate({
        format: true
      });
      return {
        imgUrl: "../../static/images/img/three.png",
        title: "picker",
        array: ["男", "女"],
        index: 0,
        date: currentDate,
        cropFilePath: "../../static/images/img/four.png",
        tempFilePath: "",
        headimg: "",
        data: "修改的内容",
        animationData: {},
        isModify: false,
        widHeight: "",
        pwd: "",
        ispwd: "none"
      };
    },
    components: {
      ImageCropper
    },
    computed: {
      startDate() {
        return this.getDate("start");
      },
      endDate() {
        return this.getDate("end");
      }
    },
    onReady() {
      this.getElementStyle();
    },
    methods: {
      //图片裁剪
      upload() {
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["original", "compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"],
          //从相册选择
          success: (res) => {
            this.tempFilePath = res.tempFilePaths.shift();
          }
        });
      },
      confirm(e) {
        this.tempFilePath = "";
        this.cropFilePath = e.detail.tempFilePath;
        this.headimg = e.detail.tempFilePath;
        uni.uploadFile({
          url: "服务器上传图片地址",
          filePath: this.headimg,
          name: "file",
          fileType: "image",
          formData: {
            上传附加数据
          },
          success: (uploadFileRes) => {
          },
          complete() {
            uni.hideLoading();
          },
          fail(e2) {
            formatAppLog("log", "at pages/userdetails/userdetails.vue:192", "this is errormes " + e2.message);
          }
        });
      },
      cancel() {
        formatAppLog("log", "at pages/userdetails/userdetails.vue:198", "canceled");
      },
      //修改项弹框
      modify: function() {
        if (this.ispwd) {
          this.pwd = "block";
        } else {
          this.pwd = "none";
        }
        this.isModify = !this.isModify;
        var animation = uni.createAnimation({
          duration: 300,
          timingFunction: "ease"
        });
        if (this.isModify) {
          animation.bottom(0).step();
        } else {
          animation.bottom(-this.widHeight).step();
        }
        this.animationData = animation.export();
      },
      //弹窗修改确定
      modifySubmit: function() {
        this.modify();
      },
      //获取页面高度
      getElementStyle: function() {
        const query = uni.createSelectorQuery().in(this);
        query.select(".modify").boundingClientRect((data) => {
          formatAppLog("log", "at pages/userdetails/userdetails.vue:230", "得到布局位置信息" + JSON.stringify(data));
          formatAppLog("log", "at pages/userdetails/userdetails.vue:231", "节点离页面顶部的距离为" + data.top);
          this.widHeight = data.height;
          formatAppLog("log", "at pages/userdetails/userdetails.vue:233", this.widHeight);
        }).exec();
      },
      // 返回上一个页面
      backOne: function() {
        uni.navigateBack({
          delta: 1
        });
      },
      bindPickerChange: function(e) {
        formatAppLog("log", "at pages/userdetails/userdetails.vue:245", "picker发送选择改变，携带值为", e.detail.value);
        this.index = e.detail.value;
      },
      bindDateChange: function(e) {
        this.date = e.detail.value;
      },
      getDate(type) {
        const date = /* @__PURE__ */ new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (type === "start") {
          year = year - 60;
        } else if (type === "end") {
          year = year + 2;
        }
        month = month > 9 ? month : "0" + month;
        day = day > 9 ? day : "0" + day;
        return `${year}-${month}-${day}`;
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_image_cropper = vue.resolveComponent("image-cropper");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("view", {
          class: "top-bar-left",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.backOne && $options.backOne(...args))
        }, [
          vue.createElementVNode("image", {
            class: "back-img",
            src: _imports_0$5
          })
        ]),
        vue.createElementVNode("view", { class: "top-bar-between" }, [
          vue.createElementVNode("view", { class: "title" }, "详情")
        ]),
        vue.createElementVNode("view", { class: "top-bar-right spice" })
      ]),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "column heads" }, [
          vue.createElementVNode("view", { class: "row head" }, [
            vue.createElementVNode("view", { class: "title" }, "头像"),
            vue.createElementVNode("view", { class: "user-head" }, [
              vue.createVNode(_component_image_cropper, {
                src: $data.tempFilePath,
                onConfirm: $options.confirm,
                onCancel: $options.cancel
              }, null, 8, ["src", "onConfirm", "onCancel"]),
              vue.createElementVNode("image", {
                src: $data.cropFilePath,
                onClick: _cache[1] || (_cache[1] = (...args) => $options.upload && $options.upload(...args)),
                class: "user-img"
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createElementVNode("image", {
                src: _imports_4$2,
                mode: "aspectFit"
              })
            ])
          ]),
          vue.createElementVNode("view", {
            class: "row head",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.modify && $options.modify(...args))
          }, [
            vue.createElementVNode("view", { class: "title" }, "签名"),
            vue.createElementVNode("view", { class: "cont" }, " 啥也没有 "),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createElementVNode("image", {
                src: _imports_4$2,
                mode: "aspectFit"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "row head" }, [
            vue.createElementVNode("view", { class: "title" }, "注册"),
            vue.createElementVNode("view", { class: "cont" }, " 2020-09-09 "),
            vue.createElementVNode("view", { class: "more" })
          ])
        ]),
        vue.createElementVNode("view", { class: "column" }, [
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "title" }, "昵称"),
            vue.createElementVNode("view", { class: "cont" }, " 曹建豪 "),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createElementVNode("image", {
                src: _imports_4$2,
                mode: "aspectFit"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "title" }, "性别"),
            vue.createElementVNode("view", { class: "cont" }, [
              vue.createElementVNode("picker", {
                onChange: _cache[3] || (_cache[3] = (...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
                value: $data.index,
                range: $data.array
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "uni-input" },
                  vue.toDisplayString($data.array[$data.index]),
                  1
                  /* TEXT */
                )
              ], 40, ["value", "range"])
            ]),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createElementVNode("image", {
                src: _imports_4$2,
                mode: "aspectFit"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "title" }, "生日"),
            vue.createElementVNode("view", { class: "cont" }, [
              vue.createElementVNode("picker", {
                mode: "date",
                value: $data.date,
                start: $options.startDate,
                end: $options.endDate,
                onChange: _cache[4] || (_cache[4] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "uni-input" },
                  vue.toDisplayString($data.date),
                  1
                  /* TEXT */
                )
              ], 40, ["value", "start", "end"])
            ]),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createElementVNode("image", {
                src: _imports_4$2,
                mode: "aspectFit"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "title" }, "电话"),
            vue.createElementVNode("view", { class: "cont" }, " 2020-09-09 "),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createElementVNode("image", {
                src: _imports_4$2,
                mode: "aspectFit"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "title" }, "邮箱"),
            vue.createElementVNode("view", { class: "cont" }, " 2020-09-09 "),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createElementVNode("image", {
                src: _imports_4$2,
                mode: "aspectFit"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "title" }, "密码"),
            vue.createElementVNode("view", { class: "cont" }, " 2020-09-09 "),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createElementVNode("image", {
                src: _imports_4$2,
                mode: "aspectFit"
              })
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "bt2" }, "退出登录")
      ]),
      vue.createElementVNode("view", {
        class: "modify",
        style: vue.normalizeStyle({ bottom: -$data.widHeight + "px" }),
        animation: $data.animationData
      }, [
        vue.createElementVNode("view", { class: "modify-header" }, [
          vue.createElementVNode("view", {
            class: "close",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.modify && $options.modify(...args))
          }, "取消"),
          vue.createElementVNode("view", { class: "title" }, "签名"),
          vue.createElementVNode("view", {
            class: "define",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.modifySubmit && $options.modifySubmit(...args))
          }, "确定")
        ]),
        vue.createElementVNode("view", { class: "modify-main" }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "text",
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.pwd = $event),
              class: "modify-pwd",
              placeholder: "请输入原密码",
              "placeholder-style": "color:#aaa;font-size:400",
              style: vue.normalizeStyle({ display: $data.ispwd })
            },
            null,
            4
            /* STYLE */
          ), [
            [vue.vModelText, $data.pwd]
          ]),
          vue.withDirectives(vue.createElementVNode(
            "textarea",
            {
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.data = $event),
              class: "modify-content"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.data]
          ])
        ])
      ], 12, ["animation"])
    ]);
  }
  const PagesUserdetailsUserdetails = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "C:/Users/cjh19/Desktop/uniapp/pages/userdetails/userdetails.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {
      // 返回上一个页面
      backOne: function() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("view", {
          class: "top-bar-left",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.backOne && $options.backOne(...args))
        }, [
          vue.createElementVNode("image", {
            class: "back-img",
            src: _imports_0$5
          })
        ]),
        vue.createElementVNode("view", { class: "top-bar-between" }, [
          vue.createElementVNode("view", { class: "title" }, "好友请求")
        ]),
        vue.createElementVNode("view", { class: "top-bar-right" }, [
          vue.createElementVNode("view", { class: "spice" })
        ])
      ]),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "requester" }, [
          vue.createElementVNode("view", { class: "request-top" }, [
            vue.createElementVNode("view", { class: "reject btn" }, "拒绝"),
            vue.createElementVNode("view", { class: "header-img" }, [
              vue.createElementVNode("image", { src: _imports_1$6 })
            ]),
            vue.createElementVNode("view", { class: "aggree btn" }, "同意")
          ]),
          vue.createElementVNode("view", { class: "request-center" }, [
            vue.createElementVNode("view", { class: "title" }, "这里是名字"),
            vue.createElementVNode("view", { class: "time" }, "2025-01-01")
          ]),
          vue.createElementVNode("view", { class: "notic" }, [
            vue.createElementVNode("text", null, "留言："),
            vue.createTextVNode(" 这里是留言内容。 ")
          ])
        ]),
        vue.createElementVNode("view", { class: "requester" }, [
          vue.createElementVNode("view", { class: "request-top" }, [
            vue.createElementVNode("view", { class: "reject btn" }, "拒绝"),
            vue.createElementVNode("view", { class: "header-img" }, [
              vue.createElementVNode("image", { src: _imports_1$6 })
            ]),
            vue.createElementVNode("view", { class: "aggree btn" }, "同意")
          ]),
          vue.createElementVNode("view", { class: "request-center" }, [
            vue.createElementVNode("view", { class: "title" }, "这里是名字"),
            vue.createElementVNode("view", { class: "time" }, "2025-01-01")
          ]),
          vue.createElementVNode("view", { class: "notic" }, [
            vue.createElementVNode("text", null, "留言："),
            vue.createTextVNode(" 这里是留言内容。 ")
          ])
        ])
      ])
    ]);
  }
  const PagesFriendrequestFriendrequest = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "C:/Users/cjh19/Desktop/uniapp/pages/friendrequest/friendrequest.vue"]]);
  const _imports_0$2 = "/static/images/group/change.png";
  const _imports_1$2 = "/static/images/group/choose.png";
  const _sfc_main$5 = {
    data() {
      return {
        cropFilePath: "../../static/images/group/group.png",
        tempFilePath: "",
        headimg: "",
        name: "",
        user: [
          {
            selected: false,
            imgUrl: "../../static/images/img/one.png",
            name: "曹建豪"
          },
          {
            selected: true,
            imgUrl: "../../static/images/img/three.png",
            name: "曹建豪"
          },
          {
            selected: true,
            imgUrl: "../../static/images/img/one.png",
            name: "曹建豪"
          },
          {
            selected: false,
            imgUrl: "../../static/images/img/one.png",
            name: "曹建豪"
          }
        ]
      };
    },
    components: {
      ImageCropper
    },
    computed: {
      selectedNumber() {
        return this.user.filter((item) => item.selected).length;
      }
    },
    methods: {
      back: function() {
        uni.navigateBack({
          url: "../index/index"
        });
      },
      selectFriend: function(e) {
        this.user[e].selected = !this.user[e].selected;
      },
      //图片裁剪
      upload() {
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["original", "compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"],
          //从相册选择
          success: (res) => {
            this.tempFilePath = res.tempFilePaths.shift();
          }
        });
      },
      confirm(e) {
        this.tempFilePath = "";
        this.cropFilePath = e.detail.tempFilePath;
        this.headimg = e.detail.tempFilePath;
        uni.uploadFile({
          url: "服务器上传图片地址",
          filePath: this.headimg,
          name: "file",
          fileType: "image",
          formData: {
            上传附加数据
          },
          success: (uploadFileRes) => {
          },
          complete() {
            uni.hideLoading();
          },
          fail(e2) {
            formatAppLog("log", "at pages/buildgroup/buildgroup.vue:126", "this is errormes " + e2.message);
          }
        });
      },
      cancel() {
        formatAppLog("log", "at pages/buildgroup/buildgroup.vue:132", "canceled");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_image_cropper = vue.resolveComponent("image-cropper");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("view", { class: "top-bar-left" }, [
          vue.createElementVNode("view", {
            class: "text",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
          }, "取消")
        ]),
        vue.createElementVNode("view", { class: "top-bar-between" }, [
          vue.createElementVNode("view", { class: "title" }, "创建群聊")
        ]),
        vue.createElementVNode("view", { class: "top-bar-right spice" })
      ]),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "top" }, [
          vue.createCommentVNode(" 群头像 "),
          vue.createElementVNode("view", { class: "group-img" }, [
            vue.createVNode(_component_image_cropper, {
              src: $data.tempFilePath,
              onConfirm: $options.confirm,
              onCancel: $options.cancel
            }, null, 8, ["src", "onConfirm", "onCancel"]),
            vue.createElementVNode("image", {
              src: _imports_0$2,
              class: "pan",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.upload && $options.upload(...args))
            }),
            vue.createElementVNode("image", {
              src: $data.cropFilePath,
              class: "img",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.upload && $options.upload(...args))
            }, null, 8, ["src"])
          ]),
          vue.createCommentVNode(" 群名字 "),
          vue.createElementVNode("view", { class: "group-name" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "group-name-input",
                type: "text",
                placeholder: "为群取个名字",
                "placeholder-style": "color:#aaa;",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.name = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.name]
            ])
          ]),
          vue.createElementVNode("view", { class: "title" }, "用户")
        ]),
        vue.createCommentVNode(" 用户选择 "),
        vue.createElementVNode("view", { class: "friends" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.user, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "user",
                key: index,
                onClick: ($event) => $options.selectFriend(index)
              }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["selected", { isselected: item.selected }])
                  },
                  [
                    item.selected ? (vue.openBlock(), vue.createElementBlock("image", {
                      key: 0,
                      src: _imports_1$2,
                      class: "selected-img"
                    })) : vue.createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                ),
                vue.createElementVNode("image", {
                  class: "user-img",
                  src: item.imgUrl
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("view", { class: "bottom-bar" }, [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["bottom-btn", $options.selectedNumber > 0 && $data.name.length > 0 ? "btn1" : "noselected"])
          },
          "创建(" + vue.toDisplayString($options.selectedNumber) + ")",
          3
          /* TEXT, CLASS */
        )
      ])
    ]);
  }
  const PagesBuildgroupBuildgroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/cjh19/Desktop/uniapp/pages/buildgroup/buildgroup.vue"]]);
  const _imports_0$1 = "/static/images/common/back1.png";
  const _imports_1$1 = "/static/images/group/more1.png";
  const _imports_3$2 = "/static/images/userhome/more.png";
  const _imports_5$1 = "/static/images/group/delete.png";
  const _imports_7$1 = "/static/images/group/add.png";
  const _sfc_main$4 = {
    data() {
      return {
        gid: "",
        gimg: "../../static/images/img/four.png",
        swit: false,
        top: "0",
        animationData: {}
      };
    },
    onLoad: function(e) {
    },
    onReady: function() {
      this.getTop();
    },
    onPageScroll: function(e) {
      this.getTop();
      this.addAnimat();
    },
    methods: {
      // 返回上一个页面
      backOne: function() {
        uni.navigateBack({
          delta: 1
        });
      },
      switchChange: function(e) {
        formatAppLog("log", "at pages/grouphome/grouphome.vue:177", "switch1 发生 change 事件，携带值为", e.detail.value);
      },
      //获取距离顶部高度
      getTop: function() {
        const query = uni.createSelectorQuery().in(this);
        query.select(".main-inner").boundingClientRect((data) => {
          this.top = data.top;
          formatAppLog("log", "at pages/grouphome/grouphome.vue:186", this.top);
        }).exec();
      },
      //顶部切换动画
      addAnimat: function() {
        var animation = uni.createAnimation({
          duration: 300,
          timingFunction: "linear"
        });
        if (this.top < 60) {
          animation.opacity(1).step();
        } else {
          animation.opacity(0).step();
        }
        this.animationData = animation.export();
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("view", {
          class: "top-bar-left",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.backOne && $options.backOne(...args))
        }, [
          vue.createElementVNode("image", {
            class: "back-img",
            src: _imports_0$1
          })
        ]),
        vue.createElementVNode("view", { class: "top-bar-right" }, [
          vue.createElementVNode("view", { class: "more-img" }, [
            vue.createElementVNode("image", { src: _imports_1$1 })
          ])
        ])
      ]),
      vue.createElementVNode("view", {
        class: "top-bar bgbar",
        animation: $data.animationData
      }, [
        vue.createElementVNode("view", {
          class: "top-bar-left",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.backOne && $options.backOne(...args))
        }, [
          vue.createElementVNode("image", {
            class: "back-img",
            src: _imports_0$5
          })
        ]),
        vue.createElementVNode("view", { class: "top-bar-right" }, [
          vue.createElementVNode("view", { class: "more-img" }, [
            vue.createElementVNode("image", { src: _imports_3$2 })
          ])
        ])
      ], 8, ["animation"]),
      vue.createElementVNode("view", { class: "bg" }, [
        vue.createElementVNode("image", {
          src: $data.gimg,
          class: "bg-img",
          mode: "aspectFill"
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "main-inner" }, [
          vue.createElementVNode("view", { class: "inf" }, [
            vue.createElementVNode("view", { class: "name" }, "今天不错"),
            vue.createElementVNode("view", { class: "time" }, "2025-01-01"),
            vue.createElementVNode("view", { class: "notice" }, "监督科四大皆空手动滑稽刷卡机考拉")
          ]),
          vue.createElementVNode("view", { class: "member" }, [
            vue.createElementVNode("view", { class: "top" }, [
              vue.createElementVNode("view", { class: "title" }, "群成员"),
              vue.createElementVNode("view", { class: "more" }, " 管理群成员 "),
              vue.createElementVNode("image", {
                src: _imports_4$2,
                class: "more-img",
                mode: "aspectFit"
              })
            ]),
            vue.createElementVNode("view", { class: "member-ls" }, [
              vue.createElementVNode("view", { class: "member-li" }, [
                vue.createElementVNode("view", { class: "imgs" }, [
                  vue.createElementVNode("image", {
                    src: _imports_5$1,
                    mode: "aspectFill",
                    class: "delete"
                  }),
                  vue.createElementVNode("image", {
                    src: _imports_6$1,
                    mode: "aspectFill",
                    class: "user-img"
                  })
                ]),
                vue.createElementVNode("view", { class: "name" }, "曹建豪")
              ]),
              vue.createElementVNode("view", { class: "member-li" }, [
                vue.createElementVNode("view", { class: "imgs" }, [
                  vue.createElementVNode("image", {
                    src: _imports_5$1,
                    mode: "aspectFill",
                    class: "delete"
                  }),
                  vue.createElementVNode("image", {
                    src: _imports_6$1,
                    mode: "aspectFill",
                    class: "user-img"
                  })
                ]),
                vue.createElementVNode("view", { class: "name" }, "曹建豪")
              ]),
              vue.createElementVNode("view", { class: "member-li" }, [
                vue.createElementVNode("view", { class: "imgs" }, [
                  vue.createElementVNode("image", {
                    src: _imports_5$1,
                    mode: "aspectFill",
                    class: "delete"
                  }),
                  vue.createElementVNode("image", {
                    src: _imports_6$1,
                    mode: "aspectFill",
                    class: "user-img"
                  })
                ]),
                vue.createElementVNode("view", { class: "name" }, "曹建豪")
              ]),
              vue.createElementVNode("view", { class: "member-li" }, [
                vue.createElementVNode("view", { class: "imgs" }, [
                  vue.createElementVNode("image", {
                    src: _imports_5$1,
                    mode: "aspectFill",
                    class: "delete"
                  }),
                  vue.createElementVNode("image", {
                    src: _imports_6$1,
                    mode: "aspectFill",
                    class: "user-img"
                  })
                ]),
                vue.createElementVNode("view", { class: "name" }, "曹建豪")
              ]),
              vue.createElementVNode("view", { class: "member-li" }, [
                vue.createElementVNode("view", { class: "imgs" }, [
                  vue.createElementVNode("image", {
                    src: _imports_5$1,
                    mode: "aspectFill",
                    class: "delete"
                  }),
                  vue.createElementVNode("image", {
                    src: _imports_6$1,
                    mode: "aspectFill",
                    class: "user-img"
                  })
                ]),
                vue.createElementVNode("view", { class: "name" }, "曹建豪")
              ]),
              vue.createElementVNode("view", { class: "member-li" }, [
                vue.createElementVNode("view", { class: "imgs" }, [
                  vue.createElementVNode("image", {
                    src: _imports_5$1,
                    mode: "aspectFill",
                    class: "delete"
                  }),
                  vue.createElementVNode("image", {
                    src: _imports_6$1,
                    mode: "aspectFill",
                    class: "user-img"
                  })
                ]),
                vue.createElementVNode("view", { class: "name" }, "曹建豪")
              ]),
              vue.createElementVNode("view", { class: "member-li" }, [
                vue.createElementVNode("view", { class: "imgs" }, [
                  vue.createElementVNode("image", {
                    src: _imports_7$1,
                    mode: "aspectFit",
                    class: "user-add"
                  })
                ]),
                vue.createElementVNode("view", { class: "name" }, "邀请")
              ])
            ]),
            vue.createElementVNode("view", { class: "clear" })
          ]),
          vue.createElementVNode("view", { class: "mitem" }, [
            vue.createElementVNode("view", { class: "row" }, [
              vue.createElementVNode("view", { class: "title" }, "群名称"),
              vue.createElementVNode("view", { class: "cont" }, "非常大开杀戒啊肯定就是"),
              vue.createElementVNode("view", { class: "more" }, [
                vue.createElementVNode("image", {
                  src: _imports_4$2,
                  mode: "aspectFit"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "row" }, [
              vue.createElementVNode("view", { class: "title" }, "群头像"),
              vue.createElementVNode("view", { class: "cont" }, [
                vue.createElementVNode("image", {
                  src: $data.gimg,
                  class: "group-img",
                  mode: "aspectFill"
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "more" }, [
                vue.createElementVNode("image", {
                  src: _imports_4$2,
                  mode: "aspectFit"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "row" }, [
              vue.createElementVNode("view", { class: "title" }, "群公告"),
              vue.createElementVNode("view", { class: "cont" }, "非常大开杀打三个地方哈施工计划发拒收发撒发货即可到付哈几十块姐夫点开链接开发"),
              vue.createElementVNode("view", { class: "more" }, [
                vue.createElementVNode("image", {
                  src: _imports_4$2,
                  mode: "aspectFit"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "row" }, [
              vue.createElementVNode("view", { class: "title" }, "群命名"),
              vue.createElementVNode("view", { class: "cont" }, "非常大开杀戒啊肯定就是"),
              vue.createElementVNode("view", { class: "more" }, [
                vue.createElementVNode("image", {
                  src: _imports_4$2,
                  mode: "aspectFit"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "row" }, [
              vue.createElementVNode("view", { class: "title" }, "消息免打扰"),
              vue.createElementVNode("view", { class: "cont" }),
              vue.createElementVNode("view", { class: "more" }, [
                vue.createElementVNode("switch", {
                  checked: $data.swit,
                  onChange: _cache[2] || (_cache[2] = (...args) => _ctx.switch1Change && _ctx.switch1Change(...args)),
                  color: "rgba(255,228,49,1)",
                  class: "switch"
                }, null, 40, ["checked"])
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "bt2" }, "解散群")
        ])
      ])
    ]);
  }
  const PagesGrouphomeGrouphome = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/cjh19/Desktop/uniapp/pages/grouphome/grouphome.vue"]]);
  const _sfc_main$3 = {
    props: {
      height: {
        type: Number,
        default: 260
      }
    },
    data() {
      return {
        emoji: [
          ["😃", "😄", "😁", "😅", "🤣", "😂", "😊"],
          ["😇", "😕", "😟", "🙁", "😠", "😮", "😨"],
          ["😧", "😥", "🥵", "🥺", "😳", "😲", "😭"],
          ["😱", "😖", "😣", "😓", "🥱", "😈", "👿"],
          ["☠", "💩", "🤡", "👻", "🤖", "😸", "😽"],
          ["💗", "💝", "💔", "💢", "😍", "🥰", "🤪"],
          ["🤔", "😴", "😷", "🧐", "😵", "️🐲", "💫"],
          ["😵", "🥶", "🥵", "🤢", "🤮", "👋", "🧿"],
          ["🕶", "🥽", "🔑", "🪝", "🔭", "🪛", "⚒"],
          ["🛠", "🗡", "⚔", "💣", "🧲", "💻", "🖥"],
          ["💵", "💶", "🪙", "💰", "📜", "🏧", "☣"],
          ["☢", "🚩", "🏁", "🏳", "🏴", "🐔️", "☠"]
        ]
      };
    },
    methods: {
      //获取表情并发送
      clickEmoji: function(e) {
        this.$emit("emotion", e);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "emoji",
        style: vue.normalizeStyle({ height: $props.height + "px" })
      },
      [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.emoji, (line, i) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "emoji-line",
              key: i
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(line, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "emoji-line-item",
                    key: index,
                    onClick: ($event) => $options.clickEmoji(item)
                  }, vue.toDisplayString(item), 9, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    );
  }
  const emoji = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-7ac8294e"], ["__file", "C:/Users/cjh19/Desktop/uniapp/components/submit/emoji/emoji.vue"]]);
  const _imports_0 = "/static/images/submit/bq.png";
  const _imports_1 = "/static/images/submit/tj.png";
  const _imports_2$1 = "/static/images/submit/back.png";
  const _imports_3$1 = "/static/images/submit/tp.png";
  const _imports_4$1 = "/static/images/submit/pz.png";
  const _imports_5 = "/static/images/submit/dw.png";
  const _imports_6 = "/static/images/submit/sp.png";
  const _imports_7 = "/static/images/submit/wj.png";
  const recorderManager = uni.getRecorderManager();
  const _sfc_main$2 = {
    data() {
      return {
        isrecord: false,
        isemoji: true,
        ismore: true,
        msg: "",
        toc: "../../static/images/submit/yy.png",
        timer: "",
        vlength: 0,
        voicebg: true,
        pageY: 0
      };
    },
    components: {
      emoji
    },
    methods: {
      //获取模块高度
      getElementHeight: function() {
        const query = uni.createSelectorQuery().in(this);
        query.select(".submit").boundingClientRect((data) => {
          this.$emit("heights", data.height);
        }).exec();
      },
      //点击切换音频
      records: function() {
        this.isemoji = true;
        this.ismore = true;
        setTimeout(() => {
          this.getElementHeight();
        }, 10);
        if (this.isrecord) {
          this.isrecord = false;
          this.toc = "/static/images/submit/yy.png";
        } else {
          this.isrecord = true;
          this.toc = "/static/images/submit/jp.png";
        }
      },
      //表情
      emoji: function() {
        this.isemoji = !this.isemoji;
        this.ismore = true;
        this.isrecord = false;
        this.toc = "/static/images/submit/yy.png";
        setTimeout(() => {
          this.getElementHeight();
        }, 10);
      },
      //接收表情
      emotion: function(e) {
        this.msg = this.msg + e;
      },
      //文字发送
      inputs: function(e) {
        var chatm = e.detail.value;
        var pos = chatm.indexOf("\n");
        if (pos != -1 && chatm.length > 1) {
          this.send(this.msg, 0);
        }
      },
      //输入框聚焦
      focus: function() {
        this.isemoji = true;
        this.ismore = true;
        formatAppLog("log", "at components/submit/submit.vue:137", "aaa");
        setTimeout(() => {
          this.getElementHeight();
        }, 10);
      },
      //表情发送
      emojiSend: function() {
        if (this.msg.length > 0) {
          this.send(this.msg, 0);
        }
      },
      //表情退格
      emojiBack: function() {
        if (this.msg.length > 0) {
          this.msg = this.msg.substring(0, this.msg.length - 1);
        }
      },
      //更多功能
      more: function() {
        this.ismore = !this.ismore;
        this.isemoji = true;
        this.isrecord = false;
        this.toc = "/static/images/submit/yy.png";
        setTimeout(() => {
          this.getElementHeight();
        }, 10);
      },
      //图片发送
      sendImg: function(e) {
        let count = 9;
        if (e == "album") {
          count = 9;
        } else {
          count = 1;
        }
        uni.chooseImage({
          count,
          //默认9
          sizeType: ["original", "compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: [e],
          //从相册选择
          success: (res) => {
            const filePaths = res.tempFilePaths;
            for (let i = 0; i < filePaths.length; i++) {
              this.send(filePaths[i], 1);
            }
          }
        });
      },
      //音频处理
      //开始录音
      touchstart: function(e) {
        this.pageY = e.changedTouches[0].pageY;
        formatAppLog("log", "at components/submit/submit.vue:195", "开始");
        this.voicebg = false;
        let i = 1;
        this.timer = setInterval(() => {
          this.vlength = i;
          i++;
          formatAppLog("log", "at components/submit/submit.vue:201", i);
          if (i > 60) {
            clearInterval(this.timer);
            this.touchend();
          }
        }, 1e3);
        recorderManager.start();
      },
      //结束录音
      touchend: function() {
        clearInterval(this.timer);
        recorderManager.stop();
        recorderManager.onStop((res) => {
          let data = {
            voice: res.tempFilePath,
            time: this.vlength
          };
          if (!this.voicebg) {
            this.send(data, 2);
          }
          this.vlength = 0;
          this.voicebg = true;
        });
      },
      //终止录音
      touchmove: function(e) {
        if (this.pageY - e.changedTouches[0].pageY > 100) {
          this.voicebg = true;
        }
      },
      //选择定位
      chooseLocation: function() {
        uni.chooseLocation({
          success: function(res) {
            formatAppLog("log", "at components/submit/submit.vue:252", "位置名称：" + res.name);
            formatAppLog("log", "at components/submit/submit.vue:253", "详细地址：" + res.address);
            formatAppLog("log", "at components/submit/submit.vue:254", "纬度：" + res.latitude);
            formatAppLog("log", "at components/submit/submit.vue:255", "经度：" + res.longitude);
          }
        });
        this.ismore = !this.ismore;
      },
      //发送
      send: function(msg, type) {
        let data = {
          message: msg,
          types: type
        };
        this.$emit("inputs", data);
        setTimeout(() => {
          this.msg = "";
        }, 0);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_emoji = vue.resolveComponent("emoji");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", { class: "submit" }, [
            vue.createElementVNode("view", { class: "submit-chat" }, [
              vue.createElementVNode("view", {
                class: "bt-img",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.records && $options.records(...args))
              }, [
                vue.createElementVNode("image", { src: $data.toc }, null, 8, ["src"])
              ]),
              vue.withDirectives(vue.createElementVNode(
                "textarea",
                {
                  "auto-height": "true",
                  class: vue.normalizeClass(["chat-send btn", { displaynone: $data.isrecord }]),
                  onInput: _cache[1] || (_cache[1] = (...args) => $options.inputs && $options.inputs(...args)),
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.msg = $event),
                  onFocus: _cache[3] || (_cache[3] = (...args) => $options.focus && $options.focus(...args))
                },
                null,
                34
                /* CLASS, NEED_HYDRATION */
              ), [
                [vue.vModelText, $data.msg]
              ]),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["record btn", { displaynone: !$data.isrecord }]),
                  onTouchstart: _cache[4] || (_cache[4] = (...args) => $options.touchstart && $options.touchstart(...args)),
                  onTouchend: _cache[5] || (_cache[5] = (...args) => $options.touchend && $options.touchend(...args)),
                  onTouchmove: _cache[6] || (_cache[6] = (...args) => $options.touchmove && $options.touchmove(...args))
                },
                "按住说话",
                34
                /* CLASS, NEED_HYDRATION */
              ),
              vue.createElementVNode("view", {
                class: "bt-img",
                onClick: _cache[7] || (_cache[7] = (...args) => $options.emoji && $options.emoji(...args))
              }, [
                vue.createElementVNode("image", { src: _imports_0 })
              ]),
              vue.createElementVNode("view", {
                class: "bt-img",
                onClick: _cache[8] || (_cache[8] = (...args) => $options.more && $options.more(...args))
              }, [
                vue.createElementVNode("image", { src: _imports_1 })
              ])
            ]),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["emoji", { displaynone: $data.isemoji }])
              },
              [
                vue.createElementVNode("view", { class: "emoji-send" }, [
                  vue.createElementVNode("view", {
                    class: "emoji-send-det",
                    onClick: _cache[9] || (_cache[9] = (...args) => $options.emojiBack && $options.emojiBack(...args))
                  }, [
                    vue.createElementVNode("image", { src: _imports_2$1 })
                  ]),
                  vue.createElementVNode("view", {
                    class: "emoji-send-bt",
                    onClick: _cache[10] || (_cache[10] = (...args) => $options.emojiSend && $options.emojiSend(...args))
                  }, "发送")
                ]),
                vue.createVNode(_component_emoji, {
                  onEmotion: $options.emotion,
                  height: 260
                }, null, 8, ["onEmotion"])
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["more", { displaynone: $data.ismore }])
              },
              [
                vue.createElementVNode("view", {
                  class: "more-list",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.sendImg("album"))
                }, [
                  vue.createElementVNode("image", { src: _imports_3$1 }),
                  vue.createElementVNode("view", { class: "more-list-title" }, "图片")
                ]),
                vue.createElementVNode("view", {
                  class: "more-list",
                  onClick: _cache[12] || (_cache[12] = ($event) => $options.sendImg("camera"))
                }, [
                  vue.createElementVNode("image", { src: _imports_4$1 }),
                  vue.createElementVNode("view", { class: "more-list-title" }, "拍照")
                ]),
                vue.createElementVNode("view", {
                  class: "more-list",
                  onClick: _cache[13] || (_cache[13] = (...args) => $options.chooseLocation && $options.chooseLocation(...args))
                }, [
                  vue.createElementVNode("image", { src: _imports_5 }),
                  vue.createElementVNode("view", { class: "more-list-title" }, "定位")
                ]),
                vue.createElementVNode("view", { class: "more-list" }, [
                  vue.createElementVNode("image", { src: _imports_6 }),
                  vue.createElementVNode("view", { class: "more-list-title" }, "视频")
                ]),
                vue.createElementVNode("view", { class: "more-list" }, [
                  vue.createElementVNode("image", { src: _imports_7 }),
                  vue.createElementVNode("view", { class: "more-list-title" }, "文件")
                ]),
                vue.createCommentVNode(' <more @more="more" :height="260"></more> ')
              ],
              2
              /* CLASS */
            )
          ])
        ]),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["voice-bg", { displaynone: $data.voicebg }])
          },
          [
            vue.createElementVNode("view", { class: "voice-bg-len" }, [
              vue.createElementVNode(
                "view",
                {
                  class: "voice-bg-time",
                  style: vue.normalizeStyle({ width: $data.vlength / 0.6 + "%" })
                },
                vue.toDisplayString($data.vlength) + '"',
                5
                /* TEXT, STYLE */
              )
            ]),
            vue.createElementVNode("view", { class: "voice-del" }, "上划取消录音")
          ],
          2
          /* CLASS */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-573e4157"], ["__file", "C:/Users/cjh19/Desktop/uniapp/components/submit/submit.vue"]]);
  const datas = {
    message: function() {
      let msgs = [
        {
          id: "a",
          imgurl: "one.png",
          message: {
            voice: "a",
            time: 60
          },
          types: 2,
          time: /* @__PURE__ */ new Date() - 1e3,
          tips: 0
        },
        {
          id: "b",
          imgurl: "one.png",
          message: "个错误信息表明在尝试解析一文件中导入以下是解决这个问题的步骤：",
          types: 0,
          time: /* @__PURE__ */ new Date() - 1e3,
          tips: 0
        },
        {
          id: "b",
          imgurl: "one.png",
          message: "个错误信息表明在尝试解析一文件中导入以下是解决这个问题的步骤：",
          types: 0,
          time: /* @__PURE__ */ new Date() - 1e3,
          tips: 0
        }
      ];
      return msgs;
    }
  };
  const myfun = {
    // 格式化日期时间
    dateTime: function(timestamp) {
      const now = /* @__PURE__ */ new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      const yesterday = new Date(today - 24 * 60 * 60 * 1e3);
      const beforeYesterday = new Date(today - 2 * 24 * 60 * 60 * 1e3);
      if (date >= today) {
        return `${hour}:${minute}`;
      } else if (date >= yesterday && date < today) {
        return `昨天 ${hour}:${minute}`;
      } else if (date >= beforeYesterday && date < yesterday) {
        return `${month}-${day}`;
      } else if (year === now.getFullYear()) {
        return `${month}-${day}`;
      } else {
        return `${year}-${month}-${day}`;
      }
    },
    //间隔时间差
    spaceTime(old, now) {
      old = new Date(old);
      now = new Date(now);
      var told = old.getTime();
      var tnow = now.getTime();
      if (told > tnow + 1e3 * 60 * 5) {
        return now;
      } else {
        return "";
      }
    }
  };
  const _imports_2 = "/static/images/common/loading.png";
  const _imports_3 = "/static/images/chatroom/yy.png";
  const _imports_4 = "/static/images/chatroom/map.png";
  const innerAudioContext = uni.createInnerAudioContext();
  const _sfc_main$1 = {
    data() {
      return {
        msgs: [],
        imgMsg: [],
        scrollToView: "",
        oldTime: /* @__PURE__ */ new Date(),
        inputh: "72",
        animationData: {},
        nowpage: 0,
        //页码
        loading: "",
        isloading: true,
        swanition: true,
        beginloading: true
      };
    },
    onLoad: function() {
      this.getMsg(this.nowpage);
    },
    components: {
      submit: __easycom_0
    },
    methods: {
      //返回登录页面
      backOne: function() {
        uni.navigateBack({
          dalta: 1
        });
      },
      //处理时间
      changeTime: function(date) {
        return myfun.dateTime(date);
      },
      //滚动加载下一页
      nextPage: function() {
        if (this.nowpage > 0 && this.beginloading) {
          this.isloading = false;
          this.beginloading = false;
          var animation = uni.createAnimation({
            duration: 1e3,
            timingFunction: "step-start"
          });
          this.animation = animation;
          let i = 1;
          this.loading = setInterval((function() {
            animation.rotate(i * 30).step();
            this.animationData = animation.export();
            i++;
            if (i > 10) {
              this.getMsg(this.nowpage);
            }
          }).bind(this), 100);
        }
      },
      //获取聊天数据
      getMsg: function(page) {
        let msg = datas.message();
        let maxpages = msg.length;
        if (msg.length > (page + 1) * 10) {
          maxpages = (page + 1) * 10;
          this.nowpage++;
        } else {
          this.nowpage = -1;
        }
        for (var i = page * 10; i < maxpages; i++) {
          msg[i].imgurl = "../../static/images/img/" + msg[i].imgurl;
          if (i < msg.length - 1) {
            let t = myfun.spaceTime(this.oldTime, msg[i].time);
            if (t) {
              this.oldTime = t;
            }
            msg[i].time = t;
          }
          if (msg[i].types == 1) {
            msg[i].message = "../../static/images/img/" + msg[i].message;
            this.imgMsg.unshift(msg[i].message);
          }
          this.msgs.unshift(msg[i]);
        }
        this.$nextTick(function() {
          this.swanition = false;
          this.scrollToView = "msg" + this.msgs[maxpage - page * 10 - 1].tip;
        });
        clearInterval(this.loading);
        this.isloading = true;
        this.beginloading = true;
      },
      //预览图片
      previewImg: function(e) {
        let index = 0;
        for (let i = 0; i < this.imgMsg.length; i++) {
          if (this.imgMsg[i] == e) {
            index = i;
          }
        }
        uni.previewImage({
          current: index,
          urls: this.imgMsg,
          longPressActions: {
            itemList: ["发送给朋友", "保存图片", "收藏"],
            success: function(data) {
              formatAppLog("log", "at pages/chatroom/chatroom.vue:205", "选中了第" + (data.tapIndex + 1) + "个按钮,第" + (data.index + 1) + "张图片");
            },
            fail: function(err) {
              formatAppLog("log", "at pages/chatroom/chatroom.vue:208", err.errMsg);
            }
          }
        });
      },
      //音频播放
      playVoice: function(e) {
        innerAudioContext.src = e;
        innerAudioContext.play();
      },
      //地图定位
      covers: function(e) {
        let map = [{
          latiude: e.latiude,
          longitude: e.longitude,
          iconPath: "../../static/images/chatroom/dw.png"
        }];
        return map;
      },
      //导航
      openLocation: function(e) {
        uni.openLocation({
          latitude: e.latitude,
          longitude: e.longitude,
          name: e.name,
          address: e.adderss,
          success: function() {
            formatAppLog("log", "at pages/chatroom/chatroom.vue:235", "success");
          }
        });
      },
      //接收输入内容
      inputs: function(e) {
        this.swanition = true;
        let len = this.msgs.length;
        let nowTime = /* @__PURE__ */ new Date();
        let t = myfun.spaceTime(this.oldTime, nowTime);
        if (t) {
          this.oldTime = t;
        }
        nowTime = t;
        let data = {
          id: "a",
          imgurl: "../../static/images/img/one.png",
          message: e.message,
          types: e.types,
          time: nowTime,
          tip: len
        };
        this.msgs.push(data);
        this.goBottom();
        if (e.types == 1) {
          this.imgMsg.push(e.message);
        }
      },
      //输入框高度
      heights: function(e) {
        this.inputh = e;
        this.goBottom();
      },
      //滚动到底部
      goBottom: function() {
        this.swanition = true;
        this.scrollToView = "";
        this.$nextTick(function() {
          let len = this.msgs.length - 1;
          this.scrollToView = "msg" + this.msgs[len].tip;
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_submit = resolveEasycom(vue.resolveDynamicComponent("submit"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top-bar" }, [
        vue.createElementVNode("view", {
          class: "top-bar-left",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.backOne && $options.backOne(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0$5,
            class: "back-img"
          })
        ]),
        vue.createElementVNode("view", { class: "top-bar-between" }, [
          vue.createElementVNode("view", { class: "title" }, " 小明 ")
        ]),
        vue.createElementVNode("view", { class: "top-bar-right" }, [
          vue.createElementVNode("view", { class: "spice" }),
          vue.createElementVNode("view", { class: "group-img" }, [
            vue.createElementVNode("image", { src: _imports_1$3 })
          ])
        ])
      ]),
      vue.createElementVNode("scroll-view", {
        class: "chat",
        "scroll-y": "true",
        "scroll-with-animation": $data.swanition,
        "scroll-into-view": $data.scrollToView,
        onScrolltoupper: _cache[1] || (_cache[1] = (...args) => $options.nextPage && $options.nextPage(...args))
      }, [
        vue.createElementVNode(
          "view",
          {
            class: "chat-main",
            style: vue.normalizeStyle({ paddingBottom: $data.inputh + "px" })
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["loading", { displaynone: $data.isloading }])
              },
              [
                vue.createElementVNode("image", {
                  src: _imports_2,
                  class: "loading-img",
                  animation: $data.animationData
                }, null, 8, ["animation"])
              ],
              2
              /* CLASS */
            ),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.msgs, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "chat-ls",
                  key: index,
                  id: "msg" + item.tip
                }, [
                  item.time != "" ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: "chat-time"
                    },
                    vue.toDisplayString($options.changeTime(item.time)),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true),
                  item.id == "b" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "msg-m msg-left"
                  }, [
                    vue.createElementVNode("image", {
                      src: item.imgurl,
                      class: "user-img"
                    }, null, 8, ["src"]),
                    item.types == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "message"
                    }, [
                      vue.createElementVNode(
                        "view",
                        { class: "msg-text" },
                        vue.toDisplayString(item.message),
                        1
                        /* TEXT */
                      )
                    ])) : vue.createCommentVNode("v-if", true),
                    item.types == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "message"
                    }, [
                      vue.createElementVNode("image", {
                        src: item.message,
                        class: "msg-img",
                        mode: "widthFix",
                        onClick: ($event) => $options.previewImg(item.message)
                      }, null, 8, ["src", "onClick"])
                    ])) : vue.createCommentVNode("v-if", true),
                    item.types == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 2,
                      class: "message"
                    }, [
                      vue.createCommentVNode(" 音频 "),
                      vue.createElementVNode("view", {
                        class: "msg-text voice",
                        style: vue.normalizeStyle({ width: item.message.time * 4 + _ctx.px }),
                        onClick: ($event) => $options.playVoice(item.message.voice)
                      }, [
                        vue.createElementVNode("image", {
                          src: _imports_3,
                          class: "voice-img"
                        }),
                        vue.createTextVNode(
                          " " + vue.toDisplayString(item.message.time) + '"',
                          1
                          /* TEXT */
                        )
                      ], 12, ["onClick"])
                    ])) : vue.createCommentVNode("v-if", true),
                    item.types == 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 3,
                      class: "message"
                    }, [
                      vue.createCommentVNode(" 位置 "),
                      vue.createElementVNode("view", {
                        class: "msg-map",
                        onClick: ($event) => $options.openLocation(item.message)
                      }, [
                        vue.createElementVNode(
                          "view",
                          { class: "map-name" },
                          vue.toDisplayString(item.message.name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "map-address" },
                          vue.toDisplayString(item.message.address),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("image", {
                          src: _imports_4,
                          mode: "aspectFit",
                          class: "map-img"
                        }),
                        vue.createCommentVNode(' <map class="map" :longitude="item.message.longitude" :latitude="item.message.latitude" :markers="covers(item.message)"></map> ')
                      ], 8, ["onClick"])
                    ])) : vue.createCommentVNode("v-if", true)
                  ])) : vue.createCommentVNode("v-if", true),
                  item.id != "b" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 2,
                    class: "msg-m msg-right"
                  }, [
                    vue.createElementVNode("image", {
                      src: item.imgurl,
                      class: "user-img"
                    }, null, 8, ["src"]),
                    item.types == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "message"
                    }, [
                      vue.createCommentVNode(" 文字 "),
                      vue.createElementVNode(
                        "view",
                        { class: "msg-text" },
                        vue.toDisplayString(item.message),
                        1
                        /* TEXT */
                      )
                    ])) : vue.createCommentVNode("v-if", true),
                    item.types == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "message"
                    }, [
                      vue.createCommentVNode(" 图片 "),
                      vue.createElementVNode("image", {
                        src: item.message,
                        class: "msg-img",
                        mode: "widthFix",
                        onClick: ($event) => $options.previewImg(item.message)
                      }, null, 8, ["src", "onClick"])
                    ])) : vue.createCommentVNode("v-if", true),
                    item.types == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 2,
                      class: "message"
                    }, [
                      vue.createCommentVNode(" 音频 "),
                      vue.createElementVNode("view", {
                        class: "msg-text voice",
                        style: vue.normalizeStyle({ width: item.message.time * 4 + "px" }),
                        onClick: ($event) => $options.playVoice(item.message.voice)
                      }, [
                        vue.createTextVNode(
                          vue.toDisplayString(item.message.time) + '" ',
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("image", {
                          src: _imports_3,
                          class: "voice-img"
                        })
                      ], 12, ["onClick"])
                    ])) : vue.createCommentVNode("v-if", true),
                    item.types == 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 3,
                      class: "message"
                    }, [
                      vue.createCommentVNode(" 位置 "),
                      vue.createElementVNode("view", {
                        class: "msg-map",
                        onClick: ($event) => $options.openLocation(item.message)
                      }, [
                        vue.createElementVNode(
                          "view",
                          { class: "map-name" },
                          vue.toDisplayString(item.message.name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "map-address" },
                          vue.toDisplayString(item.message.address),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("image", {
                          src: _imports_4,
                          mode: "aspectFit",
                          class: "map-img"
                        }),
                        vue.createCommentVNode(' <map class="map" :longitude="item.message.longitude" :latitude="item.message.latitude" :markers="covers(item.message)"></map> ')
                      ], 8, ["onClick"])
                    ])) : vue.createCommentVNode("v-if", true)
                  ])) : vue.createCommentVNode("v-if", true)
                ], 8, ["id"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          4
          /* STYLE */
        ),
        vue.createCommentVNode(' <view class="padbt"></view> ')
      ], 40, ["scroll-with-animation", "scroll-into-view"]),
      vue.createVNode(_component_submit, {
        onInputs: $options.inputs,
        onHeights: $options.heights
      }, null, 8, ["onInputs", "onHeights"])
    ]);
  }
  const PagesChatroomChatroom = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/cjh19/Desktop/uniapp/pages/chatroom/chatroom.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/signup/signup", PagesSignupSignup);
  __definePage("pages/signin/signin", PagesSigninSignin);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/userhome/userhome", PagesUserhomeUserhome);
  __definePage("pages/userdetails/userdetails", PagesUserdetailsUserdetails);
  __definePage("pages/friendrequest/friendrequest", PagesFriendrequestFriendrequest);
  __definePage("pages/buildgroup/buildgroup", PagesBuildgroupBuildgroup);
  __definePage("pages/grouphome/grouphome", PagesGrouphomeGrouphome);
  __definePage("pages/chatroom/chatroom", PagesChatroomChatroom);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/cjh19/Desktop/uniapp/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
