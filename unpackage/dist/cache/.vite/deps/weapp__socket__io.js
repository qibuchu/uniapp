var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../../../../逸氪聊天/uniapp/node_modules/weapp.socket.io/lib/weapp.socket.io.js
var require_weapp_socket_io = __commonJS({
  "../../../../逸氪聊天/uniapp/node_modules/weapp.socket.io/lib/weapp.socket.io.js"(exports, module) {
    !function(t, e) {
      if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
      else if ("function" == typeof define && define.amd)
        define([], e);
      else {
        var r = e();
        for (var n in r)
          ("object" == typeof exports ? exports : t)[n] = r[n];
      }
    }(window, function() {
      return function(t) {
        var e = {};
        function r(n) {
          if (e[n])
            return e[n].exports;
          var o = e[n] = { i: n, l: false, exports: {} };
          return t[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
        }
        return r.m = t, r.c = e, r.d = function(t2, e2, n) {
          r.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: n });
        }, r.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, r.t = function(t2, e2) {
          if (1 & e2 && (t2 = r(t2)), 8 & e2)
            return t2;
          if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
            return t2;
          var n = /* @__PURE__ */ Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
            for (var o in t2)
              r.d(n, o, (function(e3) {
                return t2[e3];
              }).bind(null, o));
          return n;
        }, r.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return r.d(e2, "a", e2), e2;
        }, r.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, r.p = "", r(r.s = 16);
      }([function(t, e) {
        t.exports = function() {
          return function() {
          };
        };
      }, function(t, e, r) {
        const n = r(27), o = r(28), i = String.fromCharCode(30);
        t.exports = { protocol: 4, encodePacket: n, encodePayload: (t2, e2) => {
          const r2 = t2.length, o2 = new Array(r2);
          let s = 0;
          t2.forEach((t3, a) => {
            n(t3, false, (t4) => {
              o2[a] = t4, ++s === r2 && e2(o2.join(i));
            });
          });
        }, decodePacket: o, decodePayload: (t2, e2) => {
          const r2 = t2.split(i), n2 = [];
          for (let t3 = 0; t3 < r2.length; t3++) {
            const i2 = o(r2[t3], e2);
            if (n2.push(i2), "error" === i2.type)
              break;
          }
          return n2;
        } };
      }, function(t, e, r) {
        function n(t2) {
          if (t2)
            return function(t3) {
              for (var e2 in n.prototype)
                t3[e2] = n.prototype[e2];
              return t3;
            }(t2);
        }
        t.exports = n, n.prototype.on = n.prototype.addEventListener = function(t2, e2) {
          return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t2] = this._callbacks["$" + t2] || []).push(e2), this;
        }, n.prototype.once = function(t2, e2) {
          function r2() {
            this.off(t2, r2), e2.apply(this, arguments);
          }
          return r2.fn = e2, this.on(t2, r2), this;
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t2, e2) {
          if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
            return this._callbacks = {}, this;
          var r2, n2 = this._callbacks["$" + t2];
          if (!n2)
            return this;
          if (1 == arguments.length)
            return delete this._callbacks["$" + t2], this;
          for (var o = 0; o < n2.length; o++)
            if ((r2 = n2[o]) === e2 || r2.fn === e2) {
              n2.splice(o, 1);
              break;
            }
          return 0 === n2.length && delete this._callbacks["$" + t2], this;
        }, n.prototype.emit = function(t2) {
          this._callbacks = this._callbacks || {};
          for (var e2 = new Array(arguments.length - 1), r2 = this._callbacks["$" + t2], n2 = 1; n2 < arguments.length; n2++)
            e2[n2 - 1] = arguments[n2];
          if (r2) {
            n2 = 0;
            for (var o = (r2 = r2.slice(0)).length; n2 < o; ++n2)
              r2[n2].apply(this, e2);
          }
          return this;
        }, n.prototype.listeners = function(t2) {
          return this._callbacks = this._callbacks || {}, this._callbacks["$" + t2] || [];
        }, n.prototype.hasListeners = function(t2) {
          return !!this.listeners(t2).length;
        };
      }, function(t, e, r) {
        const n = r(10);
        t.exports.pick = (t2, ...e2) => e2.reduce((e3, r2) => (t2.hasOwnProperty(r2) && (e3[r2] = t2[r2]), e3), {});
        const o = setTimeout, i = clearTimeout;
        t.exports.installTimerFunctions = (t2, e2) => {
          e2.useNativeTimers ? (t2.setTimeoutFn = o.bind(n), t2.clearTimeoutFn = i.bind(n)) : (t2.setTimeoutFn = setTimeout.bind(n), t2.clearTimeoutFn = clearTimeout.bind(n));
        };
      }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.Decoder = e.Encoder = e.PacketType = e.protocol = void 0;
        const n = r(2), o = r(32), i = r(13), s = r(0)("socket.io-parser");
        var a;
        e.protocol = 5, function(t2) {
          t2[t2.CONNECT = 0] = "CONNECT", t2[t2.DISCONNECT = 1] = "DISCONNECT", t2[t2.EVENT = 2] = "EVENT", t2[t2.ACK = 3] = "ACK", t2[t2.CONNECT_ERROR = 4] = "CONNECT_ERROR", t2[t2.BINARY_EVENT = 5] = "BINARY_EVENT", t2[t2.BINARY_ACK = 6] = "BINARY_ACK";
        }(a = e.PacketType || (e.PacketType = {}));
        e.Encoder = class {
          encode(t2) {
            return s("encoding packet %j", t2), t2.type !== a.EVENT && t2.type !== a.ACK || !i.hasBinary(t2) ? [this.encodeAsString(t2)] : (t2.type = t2.type === a.EVENT ? a.BINARY_EVENT : a.BINARY_ACK, this.encodeAsBinary(t2));
          }
          encodeAsString(t2) {
            let e2 = "" + t2.type;
            return t2.type !== a.BINARY_EVENT && t2.type !== a.BINARY_ACK || (e2 += t2.attachments + "-"), t2.nsp && "/" !== t2.nsp && (e2 += t2.nsp + ","), null != t2.id && (e2 += t2.id), null != t2.data && (e2 += JSON.stringify(t2.data)), s("encoded %j as %s", t2, e2), e2;
          }
          encodeAsBinary(t2) {
            const e2 = o.deconstructPacket(t2), r2 = this.encodeAsString(e2.packet), n2 = e2.buffers;
            return n2.unshift(r2), n2;
          }
        };
        class c extends n {
          constructor() {
            super();
          }
          add(t2) {
            let e2;
            if ("string" == typeof t2)
              e2 = this.decodeString(t2), e2.type === a.BINARY_EVENT || e2.type === a.BINARY_ACK ? (this.reconstructor = new h(e2), 0 === e2.attachments && super.emit("decoded", e2)) : super.emit("decoded", e2);
            else {
              if (!i.isBinary(t2) && !t2.base64)
                throw new Error("Unknown type: " + t2);
              if (!this.reconstructor)
                throw new Error("got binary data when not reconstructing a packet");
              e2 = this.reconstructor.takeBinaryData(t2), e2 && (this.reconstructor = null, super.emit("decoded", e2));
            }
          }
          decodeString(t2) {
            let e2 = 0;
            const r2 = { type: Number(t2.charAt(0)) };
            if (void 0 === a[r2.type])
              throw new Error("unknown packet type " + r2.type);
            if (r2.type === a.BINARY_EVENT || r2.type === a.BINARY_ACK) {
              const n3 = e2 + 1;
              for (; "-" !== t2.charAt(++e2) && e2 != t2.length; )
                ;
              const o2 = t2.substring(n3, e2);
              if (o2 != Number(o2) || "-" !== t2.charAt(e2))
                throw new Error("Illegal attachments");
              r2.attachments = Number(o2);
            }
            if ("/" === t2.charAt(e2 + 1)) {
              const n3 = e2 + 1;
              for (; ++e2; ) {
                if ("," === t2.charAt(e2))
                  break;
                if (e2 === t2.length)
                  break;
              }
              r2.nsp = t2.substring(n3, e2);
            } else
              r2.nsp = "/";
            const n2 = t2.charAt(e2 + 1);
            if ("" !== n2 && Number(n2) == n2) {
              const n3 = e2 + 1;
              for (; ++e2; ) {
                const r3 = t2.charAt(e2);
                if (null == r3 || Number(r3) != r3) {
                  --e2;
                  break;
                }
                if (e2 === t2.length)
                  break;
              }
              r2.id = Number(t2.substring(n3, e2 + 1));
            }
            if (t2.charAt(++e2)) {
              const n3 = function(t3) {
                try {
                  return JSON.parse(t3);
                } catch (t4) {
                  return false;
                }
              }(t2.substr(e2));
              if (!c.isPayloadValid(r2.type, n3))
                throw new Error("invalid payload");
              r2.data = n3;
            }
            return s("decoded %s as %j", t2, r2), r2;
          }
          static isPayloadValid(t2, e2) {
            switch (t2) {
              case a.CONNECT:
                return "object" == typeof e2;
              case a.DISCONNECT:
                return void 0 === e2;
              case a.CONNECT_ERROR:
                return "string" == typeof e2 || "object" == typeof e2;
              case a.EVENT:
              case a.BINARY_EVENT:
                return Array.isArray(e2) && e2.length > 0;
              case a.ACK:
              case a.BINARY_ACK:
                return Array.isArray(e2);
            }
          }
          destroy() {
            this.reconstructor && this.reconstructor.finishedReconstruction();
          }
        }
        e.Decoder = c;
        class h {
          constructor(t2) {
            this.packet = t2, this.buffers = [], this.reconPack = t2;
          }
          takeBinaryData(t2) {
            if (this.buffers.push(t2), this.buffers.length === this.reconPack.attachments) {
              const t3 = o.reconstructPacket(this.reconPack, this.buffers);
              return this.finishedReconstruction(), t3;
            }
            return null;
          }
          finishedReconstruction() {
            this.reconPack = null, this.buffers = [];
          }
        }
      }, function(t, e) {
        var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        t.exports = function(t2) {
          var e2 = t2, o = t2.indexOf("["), i = t2.indexOf("]");
          -1 != o && -1 != i && (t2 = t2.substring(0, o) + t2.substring(o, i).replace(/:/g, ";") + t2.substring(i, t2.length));
          for (var s, a, c = r.exec(t2 || ""), h = {}, u = 14; u--; )
            h[n[u]] = c[u] || "";
          return -1 != o && -1 != i && (h.source = e2, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = true), h.pathNames = function(t3, e3) {
            var r2 = e3.replace(/\/{2,9}/g, "/").split("/");
            "/" != e3.substr(0, 1) && 0 !== e3.length || r2.splice(0, 1);
            "/" == e3.substr(e3.length - 1, 1) && r2.splice(r2.length - 1, 1);
            return r2;
          }(0, h.path), h.queryKey = (s = h.query, a = {}, s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t3, e3, r2) {
            e3 && (a[e3] = r2);
          }), a), h;
        };
      }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.Manager = void 0;
        const n = r(19), o = r(3), i = r(12), s = r(4), a = r(14), c = r(33), h = r(15), u = r(0)("socket.io-client:manager");
        class f extends h.StrictEventEmitter {
          constructor(t2, e2) {
            var r2;
            super(), this.nsps = {}, this.subs = [], t2 && "object" == typeof t2 && (e2 = t2, t2 = void 0), (e2 = e2 || {}).path = e2.path || "/socket.io", this.opts = e2, (0, o.installTimerFunctions)(this, e2), this.reconnection(false !== e2.reconnection), this.reconnectionAttempts(e2.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e2.reconnectionDelay || 1e3), this.reconnectionDelayMax(e2.reconnectionDelayMax || 5e3), this.randomizationFactor(null !== (r2 = e2.randomizationFactor) && void 0 !== r2 ? r2 : 0.5), this.backoff = new c({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e2.timeout ? 2e4 : e2.timeout), this._readyState = "closed", this.uri = t2;
            const n2 = e2.parser || s;
            this.encoder = new n2.Encoder(), this.decoder = new n2.Decoder(), this._autoConnect = false !== e2.autoConnect, this._autoConnect && this.open();
          }
          reconnection(t2) {
            return arguments.length ? (this._reconnection = !!t2, this) : this._reconnection;
          }
          reconnectionAttempts(t2) {
            return void 0 === t2 ? this._reconnectionAttempts : (this._reconnectionAttempts = t2, this);
          }
          reconnectionDelay(t2) {
            var e2;
            return void 0 === t2 ? this._reconnectionDelay : (this._reconnectionDelay = t2, null === (e2 = this.backoff) || void 0 === e2 || e2.setMin(t2), this);
          }
          randomizationFactor(t2) {
            var e2;
            return void 0 === t2 ? this._randomizationFactor : (this._randomizationFactor = t2, null === (e2 = this.backoff) || void 0 === e2 || e2.setJitter(t2), this);
          }
          reconnectionDelayMax(t2) {
            var e2;
            return void 0 === t2 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t2, null === (e2 = this.backoff) || void 0 === e2 || e2.setMax(t2), this);
          }
          timeout(t2) {
            return arguments.length ? (this._timeout = t2, this) : this._timeout;
          }
          maybeReconnectOnOpen() {
            !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
          }
          open(t2) {
            if (u("readyState %s", this._readyState), ~this._readyState.indexOf("open"))
              return this;
            u("opening %s", this.uri), this.engine = n(this.uri, this.opts);
            const e2 = this.engine, r2 = this;
            this._readyState = "opening", this.skipReconnect = false;
            const o2 = (0, a.on)(e2, "open", function() {
              r2.onopen(), t2 && t2();
            }), i2 = (0, a.on)(e2, "error", (e3) => {
              u("error"), r2.cleanup(), r2._readyState = "closed", this.emitReserved("error", e3), t2 ? t2(e3) : r2.maybeReconnectOnOpen();
            });
            if (false !== this._timeout) {
              const t3 = this._timeout;
              u("connect attempt will timeout after %d", t3), 0 === t3 && o2();
              const r3 = this.setTimeoutFn(() => {
                u("connect attempt timed out after %d", t3), o2(), e2.close(), e2.emit("error", new Error("timeout"));
              }, t3);
              this.opts.autoUnref && r3.unref(), this.subs.push(function() {
                clearTimeout(r3);
              });
            }
            return this.subs.push(o2), this.subs.push(i2), this;
          }
          connect(t2) {
            return this.open(t2);
          }
          onopen() {
            u("open"), this.cleanup(), this._readyState = "open", this.emitReserved("open");
            const t2 = this.engine;
            this.subs.push((0, a.on)(t2, "ping", this.onping.bind(this)), (0, a.on)(t2, "data", this.ondata.bind(this)), (0, a.on)(t2, "error", this.onerror.bind(this)), (0, a.on)(t2, "close", this.onclose.bind(this)), (0, a.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
          }
          onping() {
            this.emitReserved("ping");
          }
          ondata(t2) {
            this.decoder.add(t2);
          }
          ondecoded(t2) {
            this.emitReserved("packet", t2);
          }
          onerror(t2) {
            u("error", t2), this.emitReserved("error", t2);
          }
          socket(t2, e2) {
            let r2 = this.nsps[t2];
            return r2 || (r2 = new i.Socket(this, t2, e2), this.nsps[t2] = r2), r2;
          }
          _destroy(t2) {
            const e2 = Object.keys(this.nsps);
            for (const t3 of e2) {
              if (this.nsps[t3].active)
                return void u("socket %s is still active, skipping close", t3);
            }
            this._close();
          }
          _packet(t2) {
            u("writing packet %j", t2);
            const e2 = this.encoder.encode(t2);
            for (let r2 = 0; r2 < e2.length; r2++)
              this.engine.write(e2[r2], t2.options);
          }
          cleanup() {
            u("cleanup"), this.subs.forEach((t2) => t2()), this.subs.length = 0, this.decoder.destroy();
          }
          _close() {
            u("disconnect"), this.skipReconnect = true, this._reconnecting = false, "opening" === this._readyState && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close();
          }
          disconnect() {
            return this._close();
          }
          onclose(t2) {
            u("onclose"), this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t2), this._reconnection && !this.skipReconnect && this.reconnect();
          }
          reconnect() {
            if (this._reconnecting || this.skipReconnect)
              return this;
            const t2 = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
              u("reconnect failed"), this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = false;
            else {
              const e2 = this.backoff.duration();
              u("will wait %dms before reconnect attempt", e2), this._reconnecting = true;
              const r2 = this.setTimeoutFn(() => {
                t2.skipReconnect || (u("attempting reconnect"), this.emitReserved("reconnect_attempt", t2.backoff.attempts), t2.skipReconnect || t2.open((e3) => {
                  e3 ? (u("reconnect attempt error"), t2._reconnecting = false, t2.reconnect(), this.emitReserved("reconnect_error", e3)) : (u("reconnect success"), t2.onreconnect());
                }));
              }, e2);
              this.opts.autoUnref && r2.unref(), this.subs.push(function() {
                clearTimeout(r2);
              });
            }
          }
          onreconnect() {
            const t2 = this.backoff.attempts;
            this._reconnecting = false, this.backoff.reset(), this.emitReserved("reconnect", t2);
          }
        }
        e.Manager = f;
      }, function(t, e, r) {
        const n = r(21);
        e.websocket = n;
      }, function(t, e, r) {
        const n = r(1), o = r(2), { installTimerFunctions: i } = r(3), s = r(0)("engine.io-client:transport");
        t.exports = class extends o {
          constructor(t2) {
            super(), i(this, t2), this.opts = t2, this.query = t2.query, this.readyState = "", this.socket = t2.socket;
          }
          onError(t2, e2) {
            const r2 = new Error(t2);
            return r2.type = "TransportError", r2.description = e2, this.emit("error", r2), this;
          }
          open() {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
          }
          close() {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
          }
          send(t2) {
            "open" === this.readyState ? this.write(t2) : s("transport is not open, discarding packets");
          }
          onOpen() {
            this.readyState = "open", this.writable = true, this.emit("open");
          }
          onData(t2) {
            const e2 = n.decodePacket(t2, this.socket.binaryType);
            this.onPacket(e2);
          }
          onPacket(t2) {
            this.emit("packet", t2);
          }
          onClose() {
            this.readyState = "closed", this.emit("close");
          }
        };
      }, function(t, e) {
        const r = /* @__PURE__ */ Object.create(null);
        r.open = "0", r.close = "1", r.ping = "2", r.pong = "3", r.message = "4", r.upgrade = "5", r.noop = "6";
        const n = /* @__PURE__ */ Object.create(null);
        Object.keys(r).forEach((t2) => {
          n[r[t2]] = t2;
        });
        t.exports = { PACKET_TYPES: r, PACKET_TYPES_REVERSE: n, ERROR_PACKET: { type: "error", data: "parser error" } };
      }, function(t, e) {
        t.exports = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
      }, function(t, e) {
        e.encode = function(t2) {
          var e2 = "";
          for (var r in t2)
            t2.hasOwnProperty(r) && (e2.length && (e2 += "&"), e2 += encodeURIComponent(r) + "=" + encodeURIComponent(t2[r]));
          return e2;
        }, e.decode = function(t2) {
          for (var e2 = {}, r = t2.split("&"), n = 0, o = r.length; n < o; n++) {
            var i = r[n].split("=");
            e2[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
          }
          return e2;
        };
      }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.Socket = void 0;
        const n = r(4), o = r(14), i = r(15), s = r(0)("socket.io-client:socket"), a = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
        class c extends i.StrictEventEmitter {
          constructor(t2, e2, r2) {
            super(), this.connected = false, this.disconnected = true, this.receiveBuffer = [], this.sendBuffer = [], this.ids = 0, this.acks = {}, this.flags = {}, this.io = t2, this.nsp = e2, r2 && r2.auth && (this.auth = r2.auth), this.io._autoConnect && this.open();
          }
          subEvents() {
            if (this.subs)
              return;
            const t2 = this.io;
            this.subs = [(0, o.on)(t2, "open", this.onopen.bind(this)), (0, o.on)(t2, "packet", this.onpacket.bind(this)), (0, o.on)(t2, "error", this.onerror.bind(this)), (0, o.on)(t2, "close", this.onclose.bind(this))];
          }
          get active() {
            return !!this.subs;
          }
          connect() {
            return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this;
          }
          open() {
            return this.connect();
          }
          send(...t2) {
            return t2.unshift("message"), this.emit.apply(this, t2), this;
          }
          emit(t2, ...e2) {
            if (a.hasOwnProperty(t2))
              throw new Error('"' + t2 + '" is a reserved event name');
            e2.unshift(t2);
            const r2 = { type: n.PacketType.EVENT, data: e2, options: {} };
            r2.options.compress = false !== this.flags.compress, "function" == typeof e2[e2.length - 1] && (s("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e2.pop(), r2.id = this.ids++);
            const o2 = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
            return this.flags.volatile && (!o2 || !this.connected) ? s("discard packet as the transport is not currently writable") : this.connected ? this.packet(r2) : this.sendBuffer.push(r2), this.flags = {}, this;
          }
          packet(t2) {
            t2.nsp = this.nsp, this.io._packet(t2);
          }
          onopen() {
            s("transport is open - connecting"), "function" == typeof this.auth ? this.auth((t2) => {
              this.packet({ type: n.PacketType.CONNECT, data: t2 });
            }) : this.packet({ type: n.PacketType.CONNECT, data: this.auth });
          }
          onerror(t2) {
            this.connected || this.emitReserved("connect_error", t2);
          }
          onclose(t2) {
            s("close (%s)", t2), this.connected = false, this.disconnected = true, delete this.id, this.emitReserved("disconnect", t2);
          }
          onpacket(t2) {
            if (t2.nsp === this.nsp)
              switch (t2.type) {
                case n.PacketType.CONNECT:
                  if (t2.data && t2.data.sid) {
                    const e3 = t2.data.sid;
                    this.onconnect(e3);
                  } else
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                  break;
                case n.PacketType.EVENT:
                case n.PacketType.BINARY_EVENT:
                  this.onevent(t2);
                  break;
                case n.PacketType.ACK:
                case n.PacketType.BINARY_ACK:
                  this.onack(t2);
                  break;
                case n.PacketType.DISCONNECT:
                  this.ondisconnect();
                  break;
                case n.PacketType.CONNECT_ERROR:
                  const e2 = new Error(t2.data.message);
                  e2.data = t2.data.data, this.emitReserved("connect_error", e2);
              }
          }
          onevent(t2) {
            const e2 = t2.data || [];
            s("emitting event %j", e2), null != t2.id && (s("attaching ack callback to event"), e2.push(this.ack(t2.id))), this.connected ? this.emitEvent(e2) : this.receiveBuffer.push(Object.freeze(e2));
          }
          emitEvent(t2) {
            if (this._anyListeners && this._anyListeners.length) {
              const e2 = this._anyListeners.slice();
              for (const r2 of e2)
                r2.apply(this, t2);
            }
            super.emit.apply(this, t2);
          }
          ack(t2) {
            const e2 = this;
            let r2 = false;
            return function(...o2) {
              r2 || (r2 = true, s("sending ack %j", o2), e2.packet({ type: n.PacketType.ACK, id: t2, data: o2 }));
            };
          }
          onack(t2) {
            const e2 = this.acks[t2.id];
            "function" == typeof e2 ? (s("calling ack %s with %j", t2.id, t2.data), e2.apply(this, t2.data), delete this.acks[t2.id]) : s("bad ack %s", t2.id);
          }
          onconnect(t2) {
            s("socket connected with id %s", t2), this.id = t2, this.connected = true, this.disconnected = false, this.emitBuffered(), this.emitReserved("connect");
          }
          emitBuffered() {
            this.receiveBuffer.forEach((t2) => this.emitEvent(t2)), this.receiveBuffer = [], this.sendBuffer.forEach((t2) => this.packet(t2)), this.sendBuffer = [];
          }
          ondisconnect() {
            s("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
          }
          destroy() {
            this.subs && (this.subs.forEach((t2) => t2()), this.subs = void 0), this.io._destroy(this);
          }
          disconnect() {
            return this.connected && (s("performing disconnect (%s)", this.nsp), this.packet({ type: n.PacketType.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
          }
          close() {
            return this.disconnect();
          }
          compress(t2) {
            return this.flags.compress = t2, this;
          }
          get volatile() {
            return this.flags.volatile = true, this;
          }
          onAny(t2) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t2), this;
          }
          prependAny(t2) {
            return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t2), this;
          }
          offAny(t2) {
            if (!this._anyListeners)
              return this;
            if (t2) {
              const e2 = this._anyListeners;
              for (let r2 = 0; r2 < e2.length; r2++)
                if (t2 === e2[r2])
                  return e2.splice(r2, 1), this;
            } else
              this._anyListeners = [];
            return this;
          }
          listenersAny() {
            return this._anyListeners || [];
          }
        }
        e.Socket = c;
      }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.hasBinary = e.isBinary = void 0;
        const n = "function" == typeof ArrayBuffer, o = Object.prototype.toString, i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob), s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
        function a(t2) {
          return n && (t2 instanceof ArrayBuffer || ((t3) => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t3) : t3.buffer instanceof ArrayBuffer)(t2)) || i && t2 instanceof Blob || s && t2 instanceof File;
        }
        e.isBinary = a, e.hasBinary = function t2(e2, r2) {
          if (!e2 || "object" != typeof e2)
            return false;
          if (Array.isArray(e2)) {
            for (let r3 = 0, n2 = e2.length; r3 < n2; r3++)
              if (t2(e2[r3]))
                return true;
            return false;
          }
          if (a(e2))
            return true;
          if (e2.toJSON && "function" == typeof e2.toJSON && 1 === arguments.length)
            return t2(e2.toJSON(), true);
          for (const r3 in e2)
            if (Object.prototype.hasOwnProperty.call(e2, r3) && t2(e2[r3]))
              return true;
          return false;
        };
      }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.on = void 0, e.on = function(t2, e2, r2) {
          return t2.on(e2, r2), function() {
            t2.off(e2, r2);
          };
        };
      }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.StrictEventEmitter = void 0;
        const n = r(2);
        e.StrictEventEmitter = class extends n {
          on(t2, e2) {
            return super.on(t2, e2), this;
          }
          once(t2, e2) {
            return super.once(t2, e2), this;
          }
          emit(t2, ...e2) {
            return super.emit(t2, ...e2), this;
          }
          emitReserved(t2, ...e2) {
            return super.emit(t2, ...e2), this;
          }
          listeners(t2) {
            return super.listeners(t2);
          }
        };
      }, function(t, e, r) {
        t.exports = r(17);
      }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.io = e.Socket = e.Manager = e.protocol = void 0;
        const n = r(18), o = r(6), i = r(0)("socket.io-client");
        t.exports = e = a;
        const s = e.managers = {};
        function a(t2, e2) {
          "object" == typeof t2 && (e2 = t2, t2 = void 0), e2 = e2 || {};
          const r2 = (0, n.url)(t2, e2.path || "/socket.io"), a2 = r2.source, c2 = r2.id, h2 = r2.path, u2 = s[c2] && h2 in s[c2].nsps;
          let f;
          return e2.forceNew || e2["force new connection"] || false === e2.multiplex || u2 ? (i("ignoring socket cache for %s", a2), f = new o.Manager(a2, e2)) : (s[c2] || (i("new io instance for %s", a2), s[c2] = new o.Manager(a2, e2)), f = s[c2]), r2.query && !e2.query && (e2.query = r2.queryKey), f.socket(r2.path, e2);
        }
        e.io = a;
        var c = r(4);
        Object.defineProperty(e, "protocol", { enumerable: true, get: function() {
          return c.protocol;
        } }), e.connect = a;
        var h = r(6);
        Object.defineProperty(e, "Manager", { enumerable: true, get: function() {
          return h.Manager;
        } });
        var u = r(12);
        Object.defineProperty(e, "Socket", { enumerable: true, get: function() {
          return u.Socket;
        } }), e.default = a;
      }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.url = void 0;
        const n = r(5), o = r(0)("socket.io-client:url");
        e.url = function(t2, e2 = "", r2) {
          let i = t2;
          r2 = r2 || "undefined" != typeof location && location, null == t2 && (t2 = r2.protocol + "//" + r2.host), "string" == typeof t2 && ("/" === t2.charAt(0) && (t2 = "/" === t2.charAt(1) ? r2.protocol + t2 : r2.host + t2), /^(https?|wss?):\/\//.test(t2) || (o("protocol-less url %s", t2), t2 = void 0 !== r2 ? r2.protocol + "//" + t2 : "https://" + t2), o("parse %s", t2), i = n(t2)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
          const s = -1 !== i.host.indexOf(":") ? "[" + i.host + "]" : i.host;
          return i.id = i.protocol + "://" + s + ":" + i.port + e2, i.href = i.protocol + "://" + s + (r2 && r2.port === i.port ? "" : ":" + i.port), i;
        };
      }, function(t, e, r) {
        const n = r(20);
        t.exports = (t2, e2) => new n(t2, e2), t.exports.Socket = n, t.exports.protocol = n.protocol, t.exports.Transport = r(8), t.exports.transports = r(7), t.exports.parser = r(1);
      }, function(t, e, r) {
        const n = r(7), o = r(2), i = r(0)("engine.io-client:socket"), s = r(1), a = r(5), c = r(11), { installTimerFunctions: h } = r(3);
        class u extends o {
          constructor(t2, e2 = {}) {
            super(), t2 && "object" == typeof t2 && (e2 = t2, t2 = null), t2 ? (t2 = a(t2), e2.hostname = t2.host, e2.secure = "https" === t2.protocol || "wss" === t2.protocol, e2.port = t2.port, t2.query && (e2.query = t2.query)) : e2.host && (e2.hostname = a(e2.host).host), h(this, e2), this.secure = null != e2.secure ? e2.secure : "undefined" != typeof location && "https:" === location.protocol, e2.hostname && !e2.port && (e2.port = this.secure ? "443" : "80"), this.hostname = e2.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e2.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.transports = e2.transports || ["websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, jsonp: true, timestampParam: "t", rememberUpgrade: false, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: true }, e2), this.opts.path = this.opts.path.replace(/\/$/, "") + "/", "string" == typeof this.opts.query && (this.opts.query = c.decode(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, "function" == typeof addEventListener && (this.opts.closeOnBeforeunload && addEventListener("beforeunload", () => {
              this.transport && (this.transport.removeAllListeners(), this.transport.close());
            }, false), "localhost" !== this.hostname && (this.offlineEventListener = () => {
              this.onClose("transport close");
            }, addEventListener("offline", this.offlineEventListener, false))), this.open();
          }
          createTransport(t2) {
            i('creating transport "%s"', t2);
            const e2 = function(t3) {
              const e3 = {};
              for (let r3 in t3)
                t3.hasOwnProperty(r3) && (e3[r3] = t3[r3]);
              return e3;
            }(this.opts.query);
            e2.EIO = s.protocol, e2.transport = t2, this.id && (e2.sid = this.id);
            const r2 = Object.assign({}, this.opts.transportOptions[t2], this.opts, { query: e2, socket: this, hostname: this.hostname, secure: this.secure, port: this.port });
            return i("options: %j", r2), new n[t2](r2);
          }
          open() {
            let t2;
            if (this.opts.rememberUpgrade && u.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
              t2 = "websocket";
            else {
              if (0 === this.transports.length)
                return void this.setTimeoutFn(() => {
                  this.emit("error", "No transports available");
                }, 0);
              t2 = this.transports[0];
            }
            this.readyState = "opening";
            try {
              t2 = this.createTransport(t2);
            } catch (t3) {
              return i("error while creating transport: %s", t3), this.transports.shift(), void this.open();
            }
            t2.open(), this.setTransport(t2);
          }
          setTransport(t2) {
            i("setting transport %s", t2.name), this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t2, t2.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", () => {
              this.onClose("transport close");
            });
          }
          probe(t2) {
            i('probing transport "%s"', t2);
            let e2 = this.createTransport(t2, { probe: 1 }), r2 = false;
            u.priorWebsocketSuccess = false;
            const n2 = () => {
              r2 || (i('probe transport "%s" opened', t2), e2.send([{ type: "ping", data: "probe" }]), e2.once("packet", (n3) => {
                if (!r2)
                  if ("pong" === n3.type && "probe" === n3.data) {
                    if (i('probe transport "%s" pong', t2), this.upgrading = true, this.emit("upgrading", e2), !e2)
                      return;
                    u.priorWebsocketSuccess = "websocket" === e2.name, i('pausing current transport "%s"', this.transport.name), this.transport.pause(() => {
                      r2 || "closed" !== this.readyState && (i("changing transport and sending upgrade packet"), f(), this.setTransport(e2), e2.send([{ type: "upgrade" }]), this.emit("upgrade", e2), e2 = null, this.upgrading = false, this.flush());
                    });
                  } else {
                    i('probe transport "%s" failed', t2);
                    const r3 = new Error("probe error");
                    r3.transport = e2.name, this.emit("upgradeError", r3);
                  }
              }));
            };
            function o2() {
              r2 || (r2 = true, f(), e2.close(), e2 = null);
            }
            const s2 = (r3) => {
              const n3 = new Error("probe error: " + r3);
              n3.transport = e2.name, o2(), i('probe transport "%s" failed because of error: %s', t2, r3), this.emit("upgradeError", n3);
            };
            function a2() {
              s2("transport closed");
            }
            function c2() {
              s2("socket closed");
            }
            function h2(t3) {
              e2 && t3.name !== e2.name && (i('"%s" works - aborting "%s"', t3.name, e2.name), o2());
            }
            const f = () => {
              e2.removeListener("open", n2), e2.removeListener("error", s2), e2.removeListener("close", a2), this.removeListener("close", c2), this.removeListener("upgrading", h2);
            };
            e2.once("open", n2), e2.once("error", s2), e2.once("close", a2), this.once("close", c2), this.once("upgrading", h2), e2.open();
          }
          onOpen() {
            if (i("socket open"), this.readyState = "open", u.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause) {
              i("starting upgrade probes");
              let t2 = 0;
              const e2 = this.upgrades.length;
              for (; t2 < e2; t2++)
                this.probe(this.upgrades[t2]);
            }
          }
          onPacket(t2) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
              switch (i('socket receive: type "%s", data "%s"', t2.type, t2.data), this.emit("packet", t2), this.emit("heartbeat"), t2.type) {
                case "open":
                  this.onHandshake(JSON.parse(t2.data));
                  break;
                case "ping":
                  this.resetPingTimeout(), this.sendPacket("pong"), this.emit("ping"), this.emit("pong");
                  break;
                case "error":
                  const e2 = new Error("server error");
                  e2.code = t2.data, this.onError(e2);
                  break;
                case "message":
                  this.emit("data", t2.data), this.emit("message", t2.data);
              }
            else
              i('packet received with socket readyState "%s"', this.readyState);
          }
          onHandshake(t2) {
            this.emit("handshake", t2), this.id = t2.sid, this.transport.query.sid = t2.sid, this.upgrades = this.filterUpgrades(t2.upgrades), this.pingInterval = t2.pingInterval, this.pingTimeout = t2.pingTimeout, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout();
          }
          resetPingTimeout() {
            this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
          }
          onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
          }
          flush() {
            "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
          }
          write(t2, e2, r2) {
            return this.sendPacket("message", t2, e2, r2), this;
          }
          send(t2, e2, r2) {
            return this.sendPacket("message", t2, e2, r2), this;
          }
          sendPacket(t2, e2, r2, n2) {
            if ("function" == typeof e2 && (n2 = e2, e2 = void 0), "function" == typeof r2 && (n2 = r2, r2 = null), "closing" === this.readyState || "closed" === this.readyState)
              return;
            (r2 = r2 || {}).compress = false !== r2.compress;
            const o2 = { type: t2, data: e2, options: r2 };
            this.emit("packetCreate", o2), this.writeBuffer.push(o2), n2 && this.once("flush", n2), this.flush();
          }
          close() {
            const t2 = () => {
              this.onClose("forced close"), i("socket closing - telling transport to close"), this.transport.close();
            }, e2 = () => {
              this.removeListener("upgrade", e2), this.removeListener("upgradeError", e2), t2();
            }, r2 = () => {
              this.once("upgrade", e2), this.once("upgradeError", e2);
            };
            return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
              this.upgrading ? r2() : t2();
            }) : this.upgrading ? r2() : t2()), this;
          }
          onError(t2) {
            i("socket error %j", t2), u.priorWebsocketSuccess = false, this.emit("error", t2), this.onClose("transport error", t2);
          }
          onClose(t2, e2) {
            "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (i('socket close with reason: "%s"', t2), this.clearTimeoutFn(this.pingIntervalTimer), this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, false), this.readyState = "closed", this.id = null, this.emit("close", t2, e2), this.writeBuffer = [], this.prevBufferLen = 0);
          }
          filterUpgrades(t2) {
            const e2 = [];
            let r2 = 0;
            const n2 = t2.length;
            for (; r2 < n2; r2++)
              ~this.transports.indexOf(t2[r2]) && e2.push(t2[r2]);
            return e2;
          }
        }
        u.priorWebsocketSuccess = false, u.protocol = s.protocol, t.exports = u;
      }, function(t, e, r) {
        (function(e2) {
          const n = r(8), o = r(1), i = r(11), s = r(30), { pick: a } = r(3), { WebSocket: c, usingBrowserWebSocket: h, defaultBinaryType: u, nextTick: f } = r(31), p = r(0)("engine.io-client:websocket"), l = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
          class d extends n {
            constructor(t2) {
              super(t2), this.supportsBinary = !t2.forceBase64;
            }
            get name() {
              return "websocket";
            }
            doOpen() {
              if (!this.check())
                return;
              const t2 = this.uri(), e3 = this.opts.protocols, r2 = l ? {} : a(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
              this.opts.extraHeaders && (r2.headers = this.opts.extraHeaders);
              try {
                this.ws = h && !l ? e3 ? new c(t2, e3) : new c(t2) : new c(t2, e3, r2);
              } catch (t3) {
                return this.emit("error", t3);
              }
              this.ws.binaryType = this.socket.binaryType || u, this.addEventListeners();
            }
            addEventListeners() {
              this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
              }, this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = (t2) => this.onData(t2.data), this.ws.onerror = (t2) => this.onError("websocket error", t2);
            }
            write(t2) {
              this.writable = false;
              for (let r2 = 0; r2 < t2.length; r2++) {
                const n2 = t2[r2], i2 = r2 === t2.length - 1;
                o.encodePacket(n2, this.supportsBinary, (t3) => {
                  const r3 = {};
                  if (!h && (n2.options && (r3.compress = n2.options.compress), this.opts.perMessageDeflate)) {
                    ("string" == typeof t3 ? e2.byteLength(t3) : t3.length) < this.opts.perMessageDeflate.threshold && (r3.compress = false);
                  }
                  try {
                    h ? this.ws.send(t3) : this.ws.send(t3, r3);
                  } catch (t4) {
                    p("websocket closed before onclose event");
                  }
                  i2 && f(() => {
                    this.writable = true, this.emit("drain");
                  }, this.setTimeoutFn);
                });
              }
            }
            onClose() {
              n.prototype.onClose.call(this);
            }
            doClose() {
              void 0 !== this.ws && (this.ws.close(), this.ws = null);
            }
            uri() {
              let t2 = this.query || {};
              const e3 = this.opts.secure ? "wss" : "ws";
              let r2 = "";
              return this.opts.port && ("wss" === e3 && 443 !== Number(this.opts.port) || "ws" === e3 && 80 !== Number(this.opts.port)) && (r2 = ":" + this.opts.port), this.opts.timestampRequests && (t2[this.opts.timestampParam] = s()), this.supportsBinary || (t2.b64 = 1), t2 = i.encode(t2), t2.length && (t2 = "?" + t2), e3 + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + r2 + this.opts.path + t2;
            }
            check() {
              return !(!c || "__initialize" in c && this.name === d.prototype.name);
            }
          }
          t.exports = d;
        }).call(this, r(22).Buffer);
      }, function(t, e, r) {
        "use strict";
        (function(t2) {
          var n = r(24), o = r(25), i = r(26);
          function s() {
            return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function a(t3, e2) {
            if (s() < e2)
              throw new RangeError("Invalid typed array length");
            return c.TYPED_ARRAY_SUPPORT ? (t3 = new Uint8Array(e2)).__proto__ = c.prototype : (null === t3 && (t3 = new c(e2)), t3.length = e2), t3;
          }
          function c(t3, e2, r2) {
            if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
              return new c(t3, e2, r2);
            if ("number" == typeof t3) {
              if ("string" == typeof e2)
                throw new Error("If encoding is specified then the first argument must be a string");
              return f(this, t3);
            }
            return h(this, t3, e2, r2);
          }
          function h(t3, e2, r2, n2) {
            if ("number" == typeof e2)
              throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e2 instanceof ArrayBuffer ? function(t4, e3, r3, n3) {
              if (e3.byteLength, r3 < 0 || e3.byteLength < r3)
                throw new RangeError("'offset' is out of bounds");
              if (e3.byteLength < r3 + (n3 || 0))
                throw new RangeError("'length' is out of bounds");
              e3 = void 0 === r3 && void 0 === n3 ? new Uint8Array(e3) : void 0 === n3 ? new Uint8Array(e3, r3) : new Uint8Array(e3, r3, n3);
              c.TYPED_ARRAY_SUPPORT ? (t4 = e3).__proto__ = c.prototype : t4 = p(t4, e3);
              return t4;
            }(t3, e2, r2, n2) : "string" == typeof e2 ? function(t4, e3, r3) {
              "string" == typeof r3 && "" !== r3 || (r3 = "utf8");
              if (!c.isEncoding(r3))
                throw new TypeError('"encoding" must be a valid string encoding');
              var n3 = 0 | d(e3, r3), o2 = (t4 = a(t4, n3)).write(e3, r3);
              o2 !== n3 && (t4 = t4.slice(0, o2));
              return t4;
            }(t3, e2, r2) : function(t4, e3) {
              if (c.isBuffer(e3)) {
                var r3 = 0 | l(e3.length);
                return 0 === (t4 = a(t4, r3)).length || e3.copy(t4, 0, 0, r3), t4;
              }
              if (e3) {
                if ("undefined" != typeof ArrayBuffer && e3.buffer instanceof ArrayBuffer || "length" in e3)
                  return "number" != typeof e3.length || (n3 = e3.length) != n3 ? a(t4, 0) : p(t4, e3);
                if ("Buffer" === e3.type && i(e3.data))
                  return p(t4, e3.data);
              }
              var n3;
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }(t3, e2);
          }
          function u(t3) {
            if ("number" != typeof t3)
              throw new TypeError('"size" argument must be a number');
            if (t3 < 0)
              throw new RangeError('"size" argument must not be negative');
          }
          function f(t3, e2) {
            if (u(e2), t3 = a(t3, e2 < 0 ? 0 : 0 | l(e2)), !c.TYPED_ARRAY_SUPPORT)
              for (var r2 = 0; r2 < e2; ++r2)
                t3[r2] = 0;
            return t3;
          }
          function p(t3, e2) {
            var r2 = e2.length < 0 ? 0 : 0 | l(e2.length);
            t3 = a(t3, r2);
            for (var n2 = 0; n2 < r2; n2 += 1)
              t3[n2] = 255 & e2[n2];
            return t3;
          }
          function l(t3) {
            if (t3 >= s())
              throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
            return 0 | t3;
          }
          function d(t3, e2) {
            if (c.isBuffer(t3))
              return t3.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t3) || t3 instanceof ArrayBuffer))
              return t3.byteLength;
            "string" != typeof t3 && (t3 = "" + t3);
            var r2 = t3.length;
            if (0 === r2)
              return 0;
            for (var n2 = false; ; )
              switch (e2) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r2;
                case "utf8":
                case "utf-8":
                case void 0:
                  return D(t3).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r2;
                case "hex":
                  return r2 >>> 1;
                case "base64":
                  return F(t3).length;
                default:
                  if (n2)
                    return D(t3).length;
                  e2 = ("" + e2).toLowerCase(), n2 = true;
              }
          }
          function y(t3, e2, r2) {
            var n2 = false;
            if ((void 0 === e2 || e2 < 0) && (e2 = 0), e2 > this.length)
              return "";
            if ((void 0 === r2 || r2 > this.length) && (r2 = this.length), r2 <= 0)
              return "";
            if ((r2 >>>= 0) <= (e2 >>>= 0))
              return "";
            for (t3 || (t3 = "utf8"); ; )
              switch (t3) {
                case "hex":
                  return S(this, e2, r2);
                case "utf8":
                case "utf-8":
                  return R(this, e2, r2);
                case "ascii":
                  return P(this, e2, r2);
                case "latin1":
                case "binary":
                  return B(this, e2, r2);
                case "base64":
                  return T(this, e2, r2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return O(this, e2, r2);
                default:
                  if (n2)
                    throw new TypeError("Unknown encoding: " + t3);
                  t3 = (t3 + "").toLowerCase(), n2 = true;
              }
          }
          function g(t3, e2, r2) {
            var n2 = t3[e2];
            t3[e2] = t3[r2], t3[r2] = n2;
          }
          function m(t3, e2, r2, n2, o2) {
            if (0 === t3.length)
              return -1;
            if ("string" == typeof r2 ? (n2 = r2, r2 = 0) : r2 > 2147483647 ? r2 = 2147483647 : r2 < -2147483648 && (r2 = -2147483648), r2 = +r2, isNaN(r2) && (r2 = o2 ? 0 : t3.length - 1), r2 < 0 && (r2 = t3.length + r2), r2 >= t3.length) {
              if (o2)
                return -1;
              r2 = t3.length - 1;
            } else if (r2 < 0) {
              if (!o2)
                return -1;
              r2 = 0;
            }
            if ("string" == typeof e2 && (e2 = c.from(e2, n2)), c.isBuffer(e2))
              return 0 === e2.length ? -1 : b(t3, e2, r2, n2, o2);
            if ("number" == typeof e2)
              return e2 &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o2 ? Uint8Array.prototype.indexOf.call(t3, e2, r2) : Uint8Array.prototype.lastIndexOf.call(t3, e2, r2) : b(t3, [e2], r2, n2, o2);
            throw new TypeError("val must be string, number or Buffer");
          }
          function b(t3, e2, r2, n2, o2) {
            var i2, s2 = 1, a2 = t3.length, c2 = e2.length;
            if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
              if (t3.length < 2 || e2.length < 2)
                return -1;
              s2 = 2, a2 /= 2, c2 /= 2, r2 /= 2;
            }
            function h2(t4, e3) {
              return 1 === s2 ? t4[e3] : t4.readUInt16BE(e3 * s2);
            }
            if (o2) {
              var u2 = -1;
              for (i2 = r2; i2 < a2; i2++)
                if (h2(t3, i2) === h2(e2, -1 === u2 ? 0 : i2 - u2)) {
                  if (-1 === u2 && (u2 = i2), i2 - u2 + 1 === c2)
                    return u2 * s2;
                } else
                  -1 !== u2 && (i2 -= i2 - u2), u2 = -1;
            } else
              for (r2 + c2 > a2 && (r2 = a2 - c2), i2 = r2; i2 >= 0; i2--) {
                for (var f2 = true, p2 = 0; p2 < c2; p2++)
                  if (h2(t3, i2 + p2) !== h2(e2, p2)) {
                    f2 = false;
                    break;
                  }
                if (f2)
                  return i2;
              }
            return -1;
          }
          function v(t3, e2, r2, n2) {
            r2 = Number(r2) || 0;
            var o2 = t3.length - r2;
            n2 ? (n2 = Number(n2)) > o2 && (n2 = o2) : n2 = o2;
            var i2 = e2.length;
            if (i2 % 2 != 0)
              throw new TypeError("Invalid hex string");
            n2 > i2 / 2 && (n2 = i2 / 2);
            for (var s2 = 0; s2 < n2; ++s2) {
              var a2 = parseInt(e2.substr(2 * s2, 2), 16);
              if (isNaN(a2))
                return s2;
              t3[r2 + s2] = a2;
            }
            return s2;
          }
          function w(t3, e2, r2, n2) {
            return V(D(e2, t3.length - r2), t3, r2, n2);
          }
          function E(t3, e2, r2, n2) {
            return V(function(t4) {
              for (var e3 = [], r3 = 0; r3 < t4.length; ++r3)
                e3.push(255 & t4.charCodeAt(r3));
              return e3;
            }(e2), t3, r2, n2);
          }
          function k(t3, e2, r2, n2) {
            return E(t3, e2, r2, n2);
          }
          function _(t3, e2, r2, n2) {
            return V(F(e2), t3, r2, n2);
          }
          function A(t3, e2, r2, n2) {
            return V(function(t4, e3) {
              for (var r3, n3, o2, i2 = [], s2 = 0; s2 < t4.length && !((e3 -= 2) < 0); ++s2)
                r3 = t4.charCodeAt(s2), n3 = r3 >> 8, o2 = r3 % 256, i2.push(o2), i2.push(n3);
              return i2;
            }(e2, t3.length - r2), t3, r2, n2);
          }
          function T(t3, e2, r2) {
            return 0 === e2 && r2 === t3.length ? n.fromByteArray(t3) : n.fromByteArray(t3.slice(e2, r2));
          }
          function R(t3, e2, r2) {
            r2 = Math.min(t3.length, r2);
            for (var n2 = [], o2 = e2; o2 < r2; ) {
              var i2, s2, a2, c2, h2 = t3[o2], u2 = null, f2 = h2 > 239 ? 4 : h2 > 223 ? 3 : h2 > 191 ? 2 : 1;
              if (o2 + f2 <= r2)
                switch (f2) {
                  case 1:
                    h2 < 128 && (u2 = h2);
                    break;
                  case 2:
                    128 == (192 & (i2 = t3[o2 + 1])) && (c2 = (31 & h2) << 6 | 63 & i2) > 127 && (u2 = c2);
                    break;
                  case 3:
                    i2 = t3[o2 + 1], s2 = t3[o2 + 2], 128 == (192 & i2) && 128 == (192 & s2) && (c2 = (15 & h2) << 12 | (63 & i2) << 6 | 63 & s2) > 2047 && (c2 < 55296 || c2 > 57343) && (u2 = c2);
                    break;
                  case 4:
                    i2 = t3[o2 + 1], s2 = t3[o2 + 2], a2 = t3[o2 + 3], 128 == (192 & i2) && 128 == (192 & s2) && 128 == (192 & a2) && (c2 = (15 & h2) << 18 | (63 & i2) << 12 | (63 & s2) << 6 | 63 & a2) > 65535 && c2 < 1114112 && (u2 = c2);
                }
              null === u2 ? (u2 = 65533, f2 = 1) : u2 > 65535 && (u2 -= 65536, n2.push(u2 >>> 10 & 1023 | 55296), u2 = 56320 | 1023 & u2), n2.push(u2), o2 += f2;
            }
            return function(t4) {
              var e3 = t4.length;
              if (e3 <= 4096)
                return String.fromCharCode.apply(String, t4);
              var r3 = "", n3 = 0;
              for (; n3 < e3; )
                r3 += String.fromCharCode.apply(String, t4.slice(n3, n3 += 4096));
              return r3;
            }(n2);
          }
          e.Buffer = c, e.SlowBuffer = function(t3) {
            +t3 != t3 && (t3 = 0);
            return c.alloc(+t3);
          }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t2.TYPED_ARRAY_SUPPORT ? t2.TYPED_ARRAY_SUPPORT : function() {
            try {
              var t3 = new Uint8Array(1);
              return t3.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                return 42;
              } }, 42 === t3.foo() && "function" == typeof t3.subarray && 0 === t3.subarray(1, 1).byteLength;
            } catch (t4) {
              return false;
            }
          }(), e.kMaxLength = s(), c.poolSize = 8192, c._augment = function(t3) {
            return t3.__proto__ = c.prototype, t3;
          }, c.from = function(t3, e2, r2) {
            return h(null, t3, e2, r2);
          }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, { value: null, configurable: true })), c.alloc = function(t3, e2, r2) {
            return function(t4, e3, r3, n2) {
              return u(e3), e3 <= 0 ? a(t4, e3) : void 0 !== r3 ? "string" == typeof n2 ? a(t4, e3).fill(r3, n2) : a(t4, e3).fill(r3) : a(t4, e3);
            }(null, t3, e2, r2);
          }, c.allocUnsafe = function(t3) {
            return f(null, t3);
          }, c.allocUnsafeSlow = function(t3) {
            return f(null, t3);
          }, c.isBuffer = function(t3) {
            return !(null == t3 || !t3._isBuffer);
          }, c.compare = function(t3, e2) {
            if (!c.isBuffer(t3) || !c.isBuffer(e2))
              throw new TypeError("Arguments must be Buffers");
            if (t3 === e2)
              return 0;
            for (var r2 = t3.length, n2 = e2.length, o2 = 0, i2 = Math.min(r2, n2); o2 < i2; ++o2)
              if (t3[o2] !== e2[o2]) {
                r2 = t3[o2], n2 = e2[o2];
                break;
              }
            return r2 < n2 ? -1 : n2 < r2 ? 1 : 0;
          }, c.isEncoding = function(t3) {
            switch (String(t3).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, c.concat = function(t3, e2) {
            if (!i(t3))
              throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t3.length)
              return c.alloc(0);
            var r2;
            if (void 0 === e2)
              for (e2 = 0, r2 = 0; r2 < t3.length; ++r2)
                e2 += t3[r2].length;
            var n2 = c.allocUnsafe(e2), o2 = 0;
            for (r2 = 0; r2 < t3.length; ++r2) {
              var s2 = t3[r2];
              if (!c.isBuffer(s2))
                throw new TypeError('"list" argument must be an Array of Buffers');
              s2.copy(n2, o2), o2 += s2.length;
            }
            return n2;
          }, c.byteLength = d, c.prototype._isBuffer = true, c.prototype.swap16 = function() {
            var t3 = this.length;
            if (t3 % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e2 = 0; e2 < t3; e2 += 2)
              g(this, e2, e2 + 1);
            return this;
          }, c.prototype.swap32 = function() {
            var t3 = this.length;
            if (t3 % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e2 = 0; e2 < t3; e2 += 4)
              g(this, e2, e2 + 3), g(this, e2 + 1, e2 + 2);
            return this;
          }, c.prototype.swap64 = function() {
            var t3 = this.length;
            if (t3 % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e2 = 0; e2 < t3; e2 += 8)
              g(this, e2, e2 + 7), g(this, e2 + 1, e2 + 6), g(this, e2 + 2, e2 + 5), g(this, e2 + 3, e2 + 4);
            return this;
          }, c.prototype.toString = function() {
            var t3 = 0 | this.length;
            return 0 === t3 ? "" : 0 === arguments.length ? R(this, 0, t3) : y.apply(this, arguments);
          }, c.prototype.equals = function(t3) {
            if (!c.isBuffer(t3))
              throw new TypeError("Argument must be a Buffer");
            return this === t3 || 0 === c.compare(this, t3);
          }, c.prototype.inspect = function() {
            var t3 = "", r2 = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t3 = this.toString("hex", 0, r2).match(/.{2}/g).join(" "), this.length > r2 && (t3 += " ... ")), "<Buffer " + t3 + ">";
          }, c.prototype.compare = function(t3, e2, r2, n2, o2) {
            if (!c.isBuffer(t3))
              throw new TypeError("Argument must be a Buffer");
            if (void 0 === e2 && (e2 = 0), void 0 === r2 && (r2 = t3 ? t3.length : 0), void 0 === n2 && (n2 = 0), void 0 === o2 && (o2 = this.length), e2 < 0 || r2 > t3.length || n2 < 0 || o2 > this.length)
              throw new RangeError("out of range index");
            if (n2 >= o2 && e2 >= r2)
              return 0;
            if (n2 >= o2)
              return -1;
            if (e2 >= r2)
              return 1;
            if (this === t3)
              return 0;
            for (var i2 = (o2 >>>= 0) - (n2 >>>= 0), s2 = (r2 >>>= 0) - (e2 >>>= 0), a2 = Math.min(i2, s2), h2 = this.slice(n2, o2), u2 = t3.slice(e2, r2), f2 = 0; f2 < a2; ++f2)
              if (h2[f2] !== u2[f2]) {
                i2 = h2[f2], s2 = u2[f2];
                break;
              }
            return i2 < s2 ? -1 : s2 < i2 ? 1 : 0;
          }, c.prototype.includes = function(t3, e2, r2) {
            return -1 !== this.indexOf(t3, e2, r2);
          }, c.prototype.indexOf = function(t3, e2, r2) {
            return m(this, t3, e2, r2, true);
          }, c.prototype.lastIndexOf = function(t3, e2, r2) {
            return m(this, t3, e2, r2, false);
          }, c.prototype.write = function(t3, e2, r2, n2) {
            if (void 0 === e2)
              n2 = "utf8", r2 = this.length, e2 = 0;
            else if (void 0 === r2 && "string" == typeof e2)
              n2 = e2, r2 = this.length, e2 = 0;
            else {
              if (!isFinite(e2))
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              e2 |= 0, isFinite(r2) ? (r2 |= 0, void 0 === n2 && (n2 = "utf8")) : (n2 = r2, r2 = void 0);
            }
            var o2 = this.length - e2;
            if ((void 0 === r2 || r2 > o2) && (r2 = o2), t3.length > 0 && (r2 < 0 || e2 < 0) || e2 > this.length)
              throw new RangeError("Attempt to write outside buffer bounds");
            n2 || (n2 = "utf8");
            for (var i2 = false; ; )
              switch (n2) {
                case "hex":
                  return v(this, t3, e2, r2);
                case "utf8":
                case "utf-8":
                  return w(this, t3, e2, r2);
                case "ascii":
                  return E(this, t3, e2, r2);
                case "latin1":
                case "binary":
                  return k(this, t3, e2, r2);
                case "base64":
                  return _(this, t3, e2, r2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return A(this, t3, e2, r2);
                default:
                  if (i2)
                    throw new TypeError("Unknown encoding: " + n2);
                  n2 = ("" + n2).toLowerCase(), i2 = true;
              }
          }, c.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          };
          function P(t3, e2, r2) {
            var n2 = "";
            r2 = Math.min(t3.length, r2);
            for (var o2 = e2; o2 < r2; ++o2)
              n2 += String.fromCharCode(127 & t3[o2]);
            return n2;
          }
          function B(t3, e2, r2) {
            var n2 = "";
            r2 = Math.min(t3.length, r2);
            for (var o2 = e2; o2 < r2; ++o2)
              n2 += String.fromCharCode(t3[o2]);
            return n2;
          }
          function S(t3, e2, r2) {
            var n2 = t3.length;
            (!e2 || e2 < 0) && (e2 = 0), (!r2 || r2 < 0 || r2 > n2) && (r2 = n2);
            for (var o2 = "", i2 = e2; i2 < r2; ++i2)
              o2 += Y(t3[i2]);
            return o2;
          }
          function O(t3, e2, r2) {
            for (var n2 = t3.slice(e2, r2), o2 = "", i2 = 0; i2 < n2.length; i2 += 2)
              o2 += String.fromCharCode(n2[i2] + 256 * n2[i2 + 1]);
            return o2;
          }
          function C(t3, e2, r2) {
            if (t3 % 1 != 0 || t3 < 0)
              throw new RangeError("offset is not uint");
            if (t3 + e2 > r2)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function x(t3, e2, r2, n2, o2, i2) {
            if (!c.isBuffer(t3))
              throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e2 > o2 || e2 < i2)
              throw new RangeError('"value" argument is out of bounds');
            if (r2 + n2 > t3.length)
              throw new RangeError("Index out of range");
          }
          function N(t3, e2, r2, n2) {
            e2 < 0 && (e2 = 65535 + e2 + 1);
            for (var o2 = 0, i2 = Math.min(t3.length - r2, 2); o2 < i2; ++o2)
              t3[r2 + o2] = (e2 & 255 << 8 * (n2 ? o2 : 1 - o2)) >>> 8 * (n2 ? o2 : 1 - o2);
          }
          function L(t3, e2, r2, n2) {
            e2 < 0 && (e2 = 4294967295 + e2 + 1);
            for (var o2 = 0, i2 = Math.min(t3.length - r2, 4); o2 < i2; ++o2)
              t3[r2 + o2] = e2 >>> 8 * (n2 ? o2 : 3 - o2) & 255;
          }
          function I(t3, e2, r2, n2, o2, i2) {
            if (r2 + n2 > t3.length)
              throw new RangeError("Index out of range");
            if (r2 < 0)
              throw new RangeError("Index out of range");
          }
          function U(t3, e2, r2, n2, i2) {
            return i2 || I(t3, 0, r2, 4), o.write(t3, e2, r2, n2, 23, 4), r2 + 4;
          }
          function j(t3, e2, r2, n2, i2) {
            return i2 || I(t3, 0, r2, 8), o.write(t3, e2, r2, n2, 52, 8), r2 + 8;
          }
          c.prototype.slice = function(t3, e2) {
            var r2, n2 = this.length;
            if ((t3 = ~~t3) < 0 ? (t3 += n2) < 0 && (t3 = 0) : t3 > n2 && (t3 = n2), (e2 = void 0 === e2 ? n2 : ~~e2) < 0 ? (e2 += n2) < 0 && (e2 = 0) : e2 > n2 && (e2 = n2), e2 < t3 && (e2 = t3), c.TYPED_ARRAY_SUPPORT)
              (r2 = this.subarray(t3, e2)).__proto__ = c.prototype;
            else {
              var o2 = e2 - t3;
              r2 = new c(o2, void 0);
              for (var i2 = 0; i2 < o2; ++i2)
                r2[i2] = this[i2 + t3];
            }
            return r2;
          }, c.prototype.readUIntLE = function(t3, e2, r2) {
            t3 |= 0, e2 |= 0, r2 || C(t3, e2, this.length);
            for (var n2 = this[t3], o2 = 1, i2 = 0; ++i2 < e2 && (o2 *= 256); )
              n2 += this[t3 + i2] * o2;
            return n2;
          }, c.prototype.readUIntBE = function(t3, e2, r2) {
            t3 |= 0, e2 |= 0, r2 || C(t3, e2, this.length);
            for (var n2 = this[t3 + --e2], o2 = 1; e2 > 0 && (o2 *= 256); )
              n2 += this[t3 + --e2] * o2;
            return n2;
          }, c.prototype.readUInt8 = function(t3, e2) {
            return e2 || C(t3, 1, this.length), this[t3];
          }, c.prototype.readUInt16LE = function(t3, e2) {
            return e2 || C(t3, 2, this.length), this[t3] | this[t3 + 1] << 8;
          }, c.prototype.readUInt16BE = function(t3, e2) {
            return e2 || C(t3, 2, this.length), this[t3] << 8 | this[t3 + 1];
          }, c.prototype.readUInt32LE = function(t3, e2) {
            return e2 || C(t3, 4, this.length), (this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16) + 16777216 * this[t3 + 3];
          }, c.prototype.readUInt32BE = function(t3, e2) {
            return e2 || C(t3, 4, this.length), 16777216 * this[t3] + (this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3]);
          }, c.prototype.readIntLE = function(t3, e2, r2) {
            t3 |= 0, e2 |= 0, r2 || C(t3, e2, this.length);
            for (var n2 = this[t3], o2 = 1, i2 = 0; ++i2 < e2 && (o2 *= 256); )
              n2 += this[t3 + i2] * o2;
            return n2 >= (o2 *= 128) && (n2 -= Math.pow(2, 8 * e2)), n2;
          }, c.prototype.readIntBE = function(t3, e2, r2) {
            t3 |= 0, e2 |= 0, r2 || C(t3, e2, this.length);
            for (var n2 = e2, o2 = 1, i2 = this[t3 + --n2]; n2 > 0 && (o2 *= 256); )
              i2 += this[t3 + --n2] * o2;
            return i2 >= (o2 *= 128) && (i2 -= Math.pow(2, 8 * e2)), i2;
          }, c.prototype.readInt8 = function(t3, e2) {
            return e2 || C(t3, 1, this.length), 128 & this[t3] ? -1 * (255 - this[t3] + 1) : this[t3];
          }, c.prototype.readInt16LE = function(t3, e2) {
            e2 || C(t3, 2, this.length);
            var r2 = this[t3] | this[t3 + 1] << 8;
            return 32768 & r2 ? 4294901760 | r2 : r2;
          }, c.prototype.readInt16BE = function(t3, e2) {
            e2 || C(t3, 2, this.length);
            var r2 = this[t3 + 1] | this[t3] << 8;
            return 32768 & r2 ? 4294901760 | r2 : r2;
          }, c.prototype.readInt32LE = function(t3, e2) {
            return e2 || C(t3, 4, this.length), this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16 | this[t3 + 3] << 24;
          }, c.prototype.readInt32BE = function(t3, e2) {
            return e2 || C(t3, 4, this.length), this[t3] << 24 | this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3];
          }, c.prototype.readFloatLE = function(t3, e2) {
            return e2 || C(t3, 4, this.length), o.read(this, t3, true, 23, 4);
          }, c.prototype.readFloatBE = function(t3, e2) {
            return e2 || C(t3, 4, this.length), o.read(this, t3, false, 23, 4);
          }, c.prototype.readDoubleLE = function(t3, e2) {
            return e2 || C(t3, 8, this.length), o.read(this, t3, true, 52, 8);
          }, c.prototype.readDoubleBE = function(t3, e2) {
            return e2 || C(t3, 8, this.length), o.read(this, t3, false, 52, 8);
          }, c.prototype.writeUIntLE = function(t3, e2, r2, n2) {
            (t3 = +t3, e2 |= 0, r2 |= 0, n2) || x(this, t3, e2, r2, Math.pow(2, 8 * r2) - 1, 0);
            var o2 = 1, i2 = 0;
            for (this[e2] = 255 & t3; ++i2 < r2 && (o2 *= 256); )
              this[e2 + i2] = t3 / o2 & 255;
            return e2 + r2;
          }, c.prototype.writeUIntBE = function(t3, e2, r2, n2) {
            (t3 = +t3, e2 |= 0, r2 |= 0, n2) || x(this, t3, e2, r2, Math.pow(2, 8 * r2) - 1, 0);
            var o2 = r2 - 1, i2 = 1;
            for (this[e2 + o2] = 255 & t3; --o2 >= 0 && (i2 *= 256); )
              this[e2 + o2] = t3 / i2 & 255;
            return e2 + r2;
          }, c.prototype.writeUInt8 = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || x(this, t3, e2, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t3 = Math.floor(t3)), this[e2] = 255 & t3, e2 + 1;
          }, c.prototype.writeUInt16LE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || x(this, t3, e2, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t3, this[e2 + 1] = t3 >>> 8) : N(this, t3, e2, true), e2 + 2;
          }, c.prototype.writeUInt16BE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || x(this, t3, e2, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 8, this[e2 + 1] = 255 & t3) : N(this, t3, e2, false), e2 + 2;
          }, c.prototype.writeUInt32LE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || x(this, t3, e2, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e2 + 3] = t3 >>> 24, this[e2 + 2] = t3 >>> 16, this[e2 + 1] = t3 >>> 8, this[e2] = 255 & t3) : L(this, t3, e2, true), e2 + 4;
          }, c.prototype.writeUInt32BE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || x(this, t3, e2, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 24, this[e2 + 1] = t3 >>> 16, this[e2 + 2] = t3 >>> 8, this[e2 + 3] = 255 & t3) : L(this, t3, e2, false), e2 + 4;
          }, c.prototype.writeIntLE = function(t3, e2, r2, n2) {
            if (t3 = +t3, e2 |= 0, !n2) {
              var o2 = Math.pow(2, 8 * r2 - 1);
              x(this, t3, e2, r2, o2 - 1, -o2);
            }
            var i2 = 0, s2 = 1, a2 = 0;
            for (this[e2] = 255 & t3; ++i2 < r2 && (s2 *= 256); )
              t3 < 0 && 0 === a2 && 0 !== this[e2 + i2 - 1] && (a2 = 1), this[e2 + i2] = (t3 / s2 >> 0) - a2 & 255;
            return e2 + r2;
          }, c.prototype.writeIntBE = function(t3, e2, r2, n2) {
            if (t3 = +t3, e2 |= 0, !n2) {
              var o2 = Math.pow(2, 8 * r2 - 1);
              x(this, t3, e2, r2, o2 - 1, -o2);
            }
            var i2 = r2 - 1, s2 = 1, a2 = 0;
            for (this[e2 + i2] = 255 & t3; --i2 >= 0 && (s2 *= 256); )
              t3 < 0 && 0 === a2 && 0 !== this[e2 + i2 + 1] && (a2 = 1), this[e2 + i2] = (t3 / s2 >> 0) - a2 & 255;
            return e2 + r2;
          }, c.prototype.writeInt8 = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || x(this, t3, e2, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t3 = Math.floor(t3)), t3 < 0 && (t3 = 255 + t3 + 1), this[e2] = 255 & t3, e2 + 1;
          }, c.prototype.writeInt16LE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || x(this, t3, e2, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t3, this[e2 + 1] = t3 >>> 8) : N(this, t3, e2, true), e2 + 2;
          }, c.prototype.writeInt16BE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || x(this, t3, e2, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 8, this[e2 + 1] = 255 & t3) : N(this, t3, e2, false), e2 + 2;
          }, c.prototype.writeInt32LE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || x(this, t3, e2, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t3, this[e2 + 1] = t3 >>> 8, this[e2 + 2] = t3 >>> 16, this[e2 + 3] = t3 >>> 24) : L(this, t3, e2, true), e2 + 4;
          }, c.prototype.writeInt32BE = function(t3, e2, r2) {
            return t3 = +t3, e2 |= 0, r2 || x(this, t3, e2, 4, 2147483647, -2147483648), t3 < 0 && (t3 = 4294967295 + t3 + 1), c.TYPED_ARRAY_SUPPORT ? (this[e2] = t3 >>> 24, this[e2 + 1] = t3 >>> 16, this[e2 + 2] = t3 >>> 8, this[e2 + 3] = 255 & t3) : L(this, t3, e2, false), e2 + 4;
          }, c.prototype.writeFloatLE = function(t3, e2, r2) {
            return U(this, t3, e2, true, r2);
          }, c.prototype.writeFloatBE = function(t3, e2, r2) {
            return U(this, t3, e2, false, r2);
          }, c.prototype.writeDoubleLE = function(t3, e2, r2) {
            return j(this, t3, e2, true, r2);
          }, c.prototype.writeDoubleBE = function(t3, e2, r2) {
            return j(this, t3, e2, false, r2);
          }, c.prototype.copy = function(t3, e2, r2, n2) {
            if (r2 || (r2 = 0), n2 || 0 === n2 || (n2 = this.length), e2 >= t3.length && (e2 = t3.length), e2 || (e2 = 0), n2 > 0 && n2 < r2 && (n2 = r2), n2 === r2)
              return 0;
            if (0 === t3.length || 0 === this.length)
              return 0;
            if (e2 < 0)
              throw new RangeError("targetStart out of bounds");
            if (r2 < 0 || r2 >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n2 < 0)
              throw new RangeError("sourceEnd out of bounds");
            n2 > this.length && (n2 = this.length), t3.length - e2 < n2 - r2 && (n2 = t3.length - e2 + r2);
            var o2, i2 = n2 - r2;
            if (this === t3 && r2 < e2 && e2 < n2)
              for (o2 = i2 - 1; o2 >= 0; --o2)
                t3[o2 + e2] = this[o2 + r2];
            else if (i2 < 1e3 || !c.TYPED_ARRAY_SUPPORT)
              for (o2 = 0; o2 < i2; ++o2)
                t3[o2 + e2] = this[o2 + r2];
            else
              Uint8Array.prototype.set.call(t3, this.subarray(r2, r2 + i2), e2);
            return i2;
          }, c.prototype.fill = function(t3, e2, r2, n2) {
            if ("string" == typeof t3) {
              if ("string" == typeof e2 ? (n2 = e2, e2 = 0, r2 = this.length) : "string" == typeof r2 && (n2 = r2, r2 = this.length), 1 === t3.length) {
                var o2 = t3.charCodeAt(0);
                o2 < 256 && (t3 = o2);
              }
              if (void 0 !== n2 && "string" != typeof n2)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n2 && !c.isEncoding(n2))
                throw new TypeError("Unknown encoding: " + n2);
            } else
              "number" == typeof t3 && (t3 &= 255);
            if (e2 < 0 || this.length < e2 || this.length < r2)
              throw new RangeError("Out of range index");
            if (r2 <= e2)
              return this;
            var i2;
            if (e2 >>>= 0, r2 = void 0 === r2 ? this.length : r2 >>> 0, t3 || (t3 = 0), "number" == typeof t3)
              for (i2 = e2; i2 < r2; ++i2)
                this[i2] = t3;
            else {
              var s2 = c.isBuffer(t3) ? t3 : D(new c(t3, n2).toString()), a2 = s2.length;
              for (i2 = 0; i2 < r2 - e2; ++i2)
                this[i2 + e2] = s2[i2 % a2];
            }
            return this;
          };
          var M = /[^+\/0-9A-Za-z-_]/g;
          function Y(t3) {
            return t3 < 16 ? "0" + t3.toString(16) : t3.toString(16);
          }
          function D(t3, e2) {
            var r2;
            e2 = e2 || 1 / 0;
            for (var n2 = t3.length, o2 = null, i2 = [], s2 = 0; s2 < n2; ++s2) {
              if ((r2 = t3.charCodeAt(s2)) > 55295 && r2 < 57344) {
                if (!o2) {
                  if (r2 > 56319) {
                    (e2 -= 3) > -1 && i2.push(239, 191, 189);
                    continue;
                  }
                  if (s2 + 1 === n2) {
                    (e2 -= 3) > -1 && i2.push(239, 191, 189);
                    continue;
                  }
                  o2 = r2;
                  continue;
                }
                if (r2 < 56320) {
                  (e2 -= 3) > -1 && i2.push(239, 191, 189), o2 = r2;
                  continue;
                }
                r2 = 65536 + (o2 - 55296 << 10 | r2 - 56320);
              } else
                o2 && (e2 -= 3) > -1 && i2.push(239, 191, 189);
              if (o2 = null, r2 < 128) {
                if ((e2 -= 1) < 0)
                  break;
                i2.push(r2);
              } else if (r2 < 2048) {
                if ((e2 -= 2) < 0)
                  break;
                i2.push(r2 >> 6 | 192, 63 & r2 | 128);
              } else if (r2 < 65536) {
                if ((e2 -= 3) < 0)
                  break;
                i2.push(r2 >> 12 | 224, r2 >> 6 & 63 | 128, 63 & r2 | 128);
              } else {
                if (!(r2 < 1114112))
                  throw new Error("Invalid code point");
                if ((e2 -= 4) < 0)
                  break;
                i2.push(r2 >> 18 | 240, r2 >> 12 & 63 | 128, r2 >> 6 & 63 | 128, 63 & r2 | 128);
              }
            }
            return i2;
          }
          function F(t3) {
            return n.toByteArray(function(t4) {
              if ((t4 = function(t5) {
                return t5.trim ? t5.trim() : t5.replace(/^\s+|\s+$/g, "");
              }(t4).replace(M, "")).length < 2)
                return "";
              for (; t4.length % 4 != 0; )
                t4 += "=";
              return t4;
            }(t3));
          }
          function V(t3, e2, r2, n2) {
            for (var o2 = 0; o2 < n2 && !(o2 + r2 >= e2.length || o2 >= t3.length); ++o2)
              e2[o2 + r2] = t3[o2];
            return o2;
          }
        }).call(this, r(23));
      }, function(t, e) {
        var r;
        r = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          r = r || new Function("return this")();
        } catch (t2) {
          "object" == typeof window && (r = window);
        }
        t.exports = r;
      }, function(t, e, r) {
        "use strict";
        e.byteLength = function(t2) {
          var e2 = h(t2), r2 = e2[0], n2 = e2[1];
          return 3 * (r2 + n2) / 4 - n2;
        }, e.toByteArray = function(t2) {
          var e2, r2, n2 = h(t2), s2 = n2[0], a2 = n2[1], c2 = new i(function(t3, e3, r3) {
            return 3 * (e3 + r3) / 4 - r3;
          }(0, s2, a2)), u2 = 0, f = a2 > 0 ? s2 - 4 : s2;
          for (r2 = 0; r2 < f; r2 += 4)
            e2 = o[t2.charCodeAt(r2)] << 18 | o[t2.charCodeAt(r2 + 1)] << 12 | o[t2.charCodeAt(r2 + 2)] << 6 | o[t2.charCodeAt(r2 + 3)], c2[u2++] = e2 >> 16 & 255, c2[u2++] = e2 >> 8 & 255, c2[u2++] = 255 & e2;
          2 === a2 && (e2 = o[t2.charCodeAt(r2)] << 2 | o[t2.charCodeAt(r2 + 1)] >> 4, c2[u2++] = 255 & e2);
          1 === a2 && (e2 = o[t2.charCodeAt(r2)] << 10 | o[t2.charCodeAt(r2 + 1)] << 4 | o[t2.charCodeAt(r2 + 2)] >> 2, c2[u2++] = e2 >> 8 & 255, c2[u2++] = 255 & e2);
          return c2;
        }, e.fromByteArray = function(t2) {
          for (var e2, r2 = t2.length, o2 = r2 % 3, i2 = [], s2 = 0, a2 = r2 - o2; s2 < a2; s2 += 16383)
            i2.push(u(t2, s2, s2 + 16383 > a2 ? a2 : s2 + 16383));
          1 === o2 ? (e2 = t2[r2 - 1], i2.push(n[e2 >> 2] + n[e2 << 4 & 63] + "==")) : 2 === o2 && (e2 = (t2[r2 - 2] << 8) + t2[r2 - 1], i2.push(n[e2 >> 10] + n[e2 >> 4 & 63] + n[e2 << 2 & 63] + "="));
          return i2.join("");
        };
        for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a)
          n[a] = s[a], o[s.charCodeAt(a)] = a;
        function h(t2) {
          var e2 = t2.length;
          if (e2 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var r2 = t2.indexOf("=");
          return -1 === r2 && (r2 = e2), [r2, r2 === e2 ? 0 : 4 - r2 % 4];
        }
        function u(t2, e2, r2) {
          for (var o2, i2, s2 = [], a2 = e2; a2 < r2; a2 += 3)
            o2 = (t2[a2] << 16 & 16711680) + (t2[a2 + 1] << 8 & 65280) + (255 & t2[a2 + 2]), s2.push(n[(i2 = o2) >> 18 & 63] + n[i2 >> 12 & 63] + n[i2 >> 6 & 63] + n[63 & i2]);
          return s2.join("");
        }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
      }, function(t, e) {
        e.read = function(t2, e2, r, n, o) {
          var i, s, a = 8 * o - n - 1, c = (1 << a) - 1, h = c >> 1, u = -7, f = r ? o - 1 : 0, p = r ? -1 : 1, l = t2[e2 + f];
          for (f += p, i = l & (1 << -u) - 1, l >>= -u, u += a; u > 0; i = 256 * i + t2[e2 + f], f += p, u -= 8)
            ;
          for (s = i & (1 << -u) - 1, i >>= -u, u += n; u > 0; s = 256 * s + t2[e2 + f], f += p, u -= 8)
            ;
          if (0 === i)
            i = 1 - h;
          else {
            if (i === c)
              return s ? NaN : 1 / 0 * (l ? -1 : 1);
            s += Math.pow(2, n), i -= h;
          }
          return (l ? -1 : 1) * s * Math.pow(2, i - n);
        }, e.write = function(t2, e2, r, n, o, i) {
          var s, a, c, h = 8 * i - o - 1, u = (1 << h) - 1, f = u >> 1, p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : i - 1, d = n ? 1 : -1, y = e2 < 0 || 0 === e2 && 1 / e2 < 0 ? 1 : 0;
          for (e2 = Math.abs(e2), isNaN(e2) || e2 === 1 / 0 ? (a = isNaN(e2) ? 1 : 0, s = u) : (s = Math.floor(Math.log(e2) / Math.LN2), e2 * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e2 += s + f >= 1 ? p / c : p * Math.pow(2, 1 - f)) * c >= 2 && (s++, c /= 2), s + f >= u ? (a = 0, s = u) : s + f >= 1 ? (a = (e2 * c - 1) * Math.pow(2, o), s += f) : (a = e2 * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t2[r + l] = 255 & a, l += d, a /= 256, o -= 8)
            ;
          for (s = s << o | a, h += o; h > 0; t2[r + l] = 255 & s, l += d, s /= 256, h -= 8)
            ;
          t2[r + l - d] |= 128 * y;
        };
      }, function(t, e) {
        var r = {}.toString;
        t.exports = Array.isArray || function(t2) {
          return "[object Array]" == r.call(t2);
        };
      }, function(t, e, r) {
        const { PACKET_TYPES: n } = r(9), o = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), i = "function" == typeof ArrayBuffer, s = (t2, e2) => {
          const r2 = new FileReader();
          return r2.onload = function() {
            const t3 = r2.result.split(",")[1];
            e2("b" + t3);
          }, r2.readAsDataURL(t2);
        };
        t.exports = ({ type: t2, data: e2 }, r2, a) => {
          return o && e2 instanceof Blob ? r2 ? a(e2) : s(e2, a) : i && (e2 instanceof ArrayBuffer || (c = e2, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(c) : c && c.buffer instanceof ArrayBuffer)) ? r2 ? a(e2) : s(new Blob([e2]), a) : a(n[t2] + (e2 || ""));
          var c;
        };
      }, function(t, e, r) {
        const { PACKET_TYPES_REVERSE: n, ERROR_PACKET: o } = r(9);
        let i;
        "function" == typeof ArrayBuffer && (i = r(29));
        const s = (t2, e2) => {
          if (i) {
            const r2 = i.decode(t2);
            return a(r2, e2);
          }
          return { base64: true, data: t2 };
        }, a = (t2, e2) => {
          switch (e2) {
            case "blob":
              return t2 instanceof ArrayBuffer ? new Blob([t2]) : t2;
            case "arraybuffer":
            default:
              return t2;
          }
        };
        t.exports = (t2, e2) => {
          if ("string" != typeof t2)
            return { type: "message", data: a(t2, e2) };
          const r2 = t2.charAt(0);
          return "b" === r2 ? { type: "message", data: s(t2.substring(1), e2) } : n[r2] ? t2.length > 1 ? { type: n[r2], data: t2.substring(1) } : { type: n[r2] } : o;
        };
      }, function(t, e) {
        !function(t2) {
          "use strict";
          e.encode = function(e2) {
            var r, n = new Uint8Array(e2), o = n.length, i = "";
            for (r = 0; r < o; r += 3)
              i += t2[n[r] >> 2], i += t2[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t2[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += t2[63 & n[r + 2]];
            return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i;
          }, e.decode = function(e2) {
            var r, n, o, i, s, a = 0.75 * e2.length, c = e2.length, h = 0;
            "=" === e2[e2.length - 1] && (a--, "=" === e2[e2.length - 2] && a--);
            var u = new ArrayBuffer(a), f = new Uint8Array(u);
            for (r = 0; r < c; r += 4)
              n = t2.indexOf(e2[r]), o = t2.indexOf(e2[r + 1]), i = t2.indexOf(e2[r + 2]), s = t2.indexOf(e2[r + 3]), f[h++] = n << 2 | o >> 4, f[h++] = (15 & o) << 4 | i >> 2, f[h++] = (3 & i) << 6 | 63 & s;
            return u;
          };
        }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
      }, function(t, e, r) {
        "use strict";
        var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), i = {}, s = 0, a = 0;
        function c(t2) {
          var e2 = "";
          do {
            e2 = o[t2 % 64] + e2, t2 = Math.floor(t2 / 64);
          } while (t2 > 0);
          return e2;
        }
        function h() {
          var t2 = c(+/* @__PURE__ */ new Date());
          return t2 !== n ? (s = 0, n = t2) : t2 + "." + c(s++);
        }
        for (; a < 64; a++)
          i[o[a]] = a;
        h.encode = c, h.decode = function(t2) {
          var e2 = 0;
          for (a = 0; a < t2.length; a++)
            e2 = 64 * e2 + i[t2.charAt(a)];
          return e2;
        }, t.exports = h;
      }, function(t, e, r) {
        const n = r(10), o = "function" == typeof Promise && "function" == typeof Promise.resolve ? (t2) => Promise.resolve().then(t2) : (t2, e2) => e2(t2, 0);
        t.exports = { WebSocket: n.WebSocket || n.MozWebSocket, usingBrowserWebSocket: true, defaultBinaryType: "arraybuffer", nextTick: o };
      }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true }), e.reconstructPacket = e.deconstructPacket = void 0;
        const n = r(13);
        e.deconstructPacket = function(t2) {
          const e2 = [], r2 = t2.data, o = t2;
          return o.data = function t3(e3, r3) {
            if (!e3)
              return e3;
            if (n.isBinary(e3)) {
              const t4 = { _placeholder: true, num: r3.length };
              return r3.push(e3), t4;
            }
            if (Array.isArray(e3)) {
              const n2 = new Array(e3.length);
              for (let o2 = 0; o2 < e3.length; o2++)
                n2[o2] = t3(e3[o2], r3);
              return n2;
            }
            if ("object" == typeof e3 && !(e3 instanceof Date)) {
              const n2 = {};
              for (const o2 in e3)
                e3.hasOwnProperty(o2) && (n2[o2] = t3(e3[o2], r3));
              return n2;
            }
            return e3;
          }(r2, e2), o.attachments = e2.length, { packet: o, buffers: e2 };
        }, e.reconstructPacket = function(t2, e2) {
          return t2.data = function t3(e3, r2) {
            if (!e3)
              return e3;
            if (e3 && e3._placeholder)
              return r2[e3.num];
            if (Array.isArray(e3))
              for (let n2 = 0; n2 < e3.length; n2++)
                e3[n2] = t3(e3[n2], r2);
            else if ("object" == typeof e3)
              for (const n2 in e3)
                e3.hasOwnProperty(n2) && (e3[n2] = t3(e3[n2], r2));
            return e3;
          }(t2.data, e2), t2.attachments = void 0, t2;
        };
      }, function(t, e) {
        function r(t2) {
          t2 = t2 || {}, this.ms = t2.min || 100, this.max = t2.max || 1e4, this.factor = t2.factor || 2, this.jitter = t2.jitter > 0 && t2.jitter <= 1 ? t2.jitter : 0, this.attempts = 0;
        }
        t.exports = r, r.prototype.duration = function() {
          var t2 = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            var e2 = Math.random(), r2 = Math.floor(e2 * this.jitter * t2);
            t2 = 0 == (1 & Math.floor(10 * e2)) ? t2 - r2 : t2 + r2;
          }
          return 0 | Math.min(t2, this.max);
        }, r.prototype.reset = function() {
          this.attempts = 0;
        }, r.prototype.setMin = function(t2) {
          this.ms = t2;
        }, r.prototype.setMax = function(t2) {
          this.max = t2;
        }, r.prototype.setJitter = function(t2) {
          this.jitter = t2;
        };
      }]);
    });
  }
});
export default require_weapp_socket_io();
/*! Bundled license information:

weapp.socket.io/lib/weapp.socket.io.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <http://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=weapp__socket__io.js.map
