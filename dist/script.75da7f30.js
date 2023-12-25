// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"modules/createImage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImage = createImage;
function createImage(_ref) {
  var id = _ref.id,
    urls = _ref.urls,
    avatarImage = _ref.avatarImage,
    alt_description = _ref.alt_description,
    small = _ref.user.profile_image.small;
  return "<li class=\"galleryList\" id=".concat(id, ">\n    <div class=\"galleryItem\">\n        <img src=").concat(urls.full, " class=\"img\" id=\"img\"/>\n        <div class=\"cardButton\"></div>\n        <button type=\"button\" class=\"imageButton\"  id=").concat(id, ">\n            <svg class=\"svgBtn\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" aria-label=\"\" role=\"img\">\n            <path d=\"M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z\"></path>\n            </svg>\n        </button>\n    </div>\n    <div class=\"card\">\n        <img src=").concat(small, " class=\"avatarImg\" />\n        <p class=\"cardDescription\">").concat(alt_description, "</p>\n    </div>\n    </li>");
}
},{}],"modules/getPinterest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runPinterestApplication = exports.getPinterestData = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getPinterestData = exports.getPinterestData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var photos;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://api.unsplash.com/photos/random/?client_id=5HxesvmDSHyOpCHGFTaK2E_qm_g_xkMj9DZ-KU5QOdQ&count=25").then(function (response) {
            return response.json();
          });
        case 2:
          photos = _context.sent;
          return _context.abrupt("return", {
            photos: photos
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getPinterestData() {
    return _ref.apply(this, arguments);
  };
}();
var runPinterestApplication = exports.runPinterestApplication = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var localStoragePhotos, _yield$getPinterestDa, photos;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          localStoragePhotos = localStorage.getItem("photos");
          if (localStoragePhotos) {
            _context2.next = 7;
            break;
          }
          _context2.next = 4;
          return getPinterestData();
        case 4:
          _yield$getPinterestDa = _context2.sent;
          photos = _yield$getPinterestDa.photos;
          localStorage.setItem("photos", JSON.stringify(photos));
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function runPinterestApplication() {
    return _ref2.apply(this, arguments);
  };
}();
},{}],"modules/createElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = void 0;
exports.getElementByRef = getElementByRef;
exports.getElementsByRef = getElementsByRef;
var createElement = exports.createElement = {
  gallery: '.gallery',
  searchByTag: "#searchByTag",
  selectBoardBtn: ".selectBoardBtn",
  board: ".board",
  btnBoardFirst: ".btnBoardFirst",
  btnBoardSecond: ".btnBoardSecond",
  btnBoardThird: ".btnBoardThird",
  boardBnt: ".boardBnt",
  complaint: "complaint",
  complainBtn: ".complainBtn",
  addToBoardBtnFirst: ".addToBoardBtnFirst",
  addToBoardBtnSecond: ".addToBoardBtnSecond",
  addToBoardBtnThird: ".addToBoardBtnThird",
  btnCancel: ".btnCancel",
  btnSend: ".btnSend",
  imageButton: ".imageButton",
  noPins: ".noPins"
};
function getElementByRef(ref) {
  return document.querySelector(createElement[ref]);
}
function getElementsByRef(ref) {
  return document.querySelectorAll(createElement[ref]);
}
},{}],"modules/createCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCard = createCard;
var _createImage = require("./createImage");
function createCard(data) {
  console.log(data);
  return data.map(_createImage.createImage).join(' ');
}
},{"./createImage":"modules/createImage.js"}],"modules/listEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBord = addBord;
exports.btnCancel = btnCancel;
exports.chooseBoard = chooseBoard;
exports.clickOnWin = clickOnWin;
exports.complain = complain;
exports.getBoardFirst = getBoardFirst;
exports.getBoardSecond = getBoardSecond;
exports.getBoardThird = getBoardThird;
exports.getMenuCard = getMenuCard;
exports.postBoardFirst = postBoardFirst;
exports.postBoardSecond = postBoardSecond;
exports.postBoardThird = postBoardThird;
exports.searchByPhoto = searchByPhoto;
var _createElement = require("./createElement.js");
var _script = require("../script.js");
var _createCard = _interopRequireDefault(require("./createCard.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function searchByPhoto(event) {
  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('serch-input');
    input.addEventListener("input", function (event) {
      //...
    });
  });
  window.onload = function () {
    var input = document.querySelector('#input');
    input.oninput = function () {
      var value = this.value.trim();
      var list = document.querySelectorAll({
        alt_description: alt_description
      });
      if (value != '') {
        list.forEach(function (elem) {
          if (elem.innerText.search(value) == -1) {
            elem.classList.add('hide');
          }
        });
      } else {
        list.forEach(function (elem) {
          elem.classList.remove('hide');
        });
      }
      console.log(this.value);
    };
  };
}
function chooseBoard() {
  document.getElementById("board").classList.toggle("show");

  // createElement.board.classList.toggle("show");
  //вернёт только карточки первой доски
  // return getBoardFirst();

  //   carts = getBoardFirst()
  //   const galleryElement = getElementByRef('gallery');

  //   galleryElement.innerHTML = createCard(carts);

  //   // when try report
  //   localStorage.setItem('selected-card-id', '12345');

  //   // in send
  //   const id = localStorage.getItem('selected-cart-id');

  //   const card = document.getElementById(id);
  //   card.img.remove();
}
function getBoardFirst() {
  // const allCarts = JSON.parse(localStorage.getItem(photos));
  // const boardCarts = JSON.parse(localStorage.getItem("board_1")) // поменять на board_ + ид доски
  // return allCarts.filter((cart) => boardCarts.includes(cart.id));
  // const id = localStorage.getItem('boardFirst')
  // console.log('hello')
  // console.log(id)

  var imagesOnBoard = JSON.parse(localStorage.getItem('boardFirst'));
  console.log('hello');
  if (imagesOnBoard) {
    noPins.innerHTML = "";
    gallery.innerHTML = createList(imagesOnBoard);
    board.classList.add("show");
  } else {
    gallery.innerHTML = "";
    noPins.innerHTML = "<p class=\"no-pins\">You have no saved pins here :(</p>";
    board.classList.add("show");
  }
}
function getBoardSecond() {}
function getBoardThird() {}
function addBord() {
  document.getElementById("addToBoard").classList.toggle("show");
}
function complain() {
  document.getElementById("complaint").classList.toggle("show");
}
function postBoard(boardNum) {}
function postBoardFirst(boardNum) {
  // const id = localStorage.getItem('cart-id');

  // const boardStr = localStorage.getItem('board_' + boardNum); // "[1,2,3]"
  // const board = JSON.parse(boardStr); // [1,2,3]

  // // TODO: Проверить если доски не сущесвует создать

  // board.append(id); // [1,2,3,id]

  // localStorage.setItem('board_' + boardNum, board); // [1,2,3,id] => board_

  // //для получения карточки
  // // очистить все карточки 
  // // передать через localStorage карточки

  var id = localStorage.getItem('cart-id');
  localStorage.setItem('boardFirst', id);
}
function postBoardSecond() {}
function postBoardThird() {}
function getMenuCard(event, id) {
  console.log(event);
  var menu = document.getElementById("menu");
  menu.classList.toggle("show1");
  menu.style.position = 'absolute';
  menu.style.left = event.x - 110 + 'px';
  menu.style.top = event.y + 20 + 'px';
  var target = event.target;
  localStorage.setItem('cart-id', target.id);
}
function btnCancel() {
  var complaint = document.getElementById('complaint');
  complaint.classList.toggle("show");
}
function clickOnWin(event) {
  // if(
  // !event.target.matches('.menu', '.addToBoard', 'complaint', 'board')
  // ){
  //     createElement.complaint.classList.add("show");
  // }
}
},{"./createElement.js":"modules/createElement.js","../script.js":"script.js","./createCard.js":"modules/createCard.js"}],"script.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.images = void 0;
var _createImage = _interopRequireDefault(require("./modules/createImage.js"));
var _getPinterest = _interopRequireWildcard(require("./modules/getPinterest.js"));
var _createElement = require("./modules/createElement.js");
var _listEvent = _interopRequireWildcard(require("./modules/listEvent.js"));
var _createCard = require("./modules/createCard.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.addEventListener("DOMContentLoaded", function () {
  var gallery = _createElement.createElement.gallery,
    searchByTag = _createElement.createElement.searchByTag,
    btn = _createElement.createElement.btn,
    btnBoardFirst = _createElement.createElement.btnBoardFirst,
    btnBoardSecond = _createElement.createElement.btnBoardSecond,
    btnBoardThird = _createElement.createElement.btnBoardThird,
    boardBnt = _createElement.createElement.boardBnt,
    complainBtn = _createElement.createElement.complainBtn,
    addToBoardBtnFirst = _createElement.createElement.addToBoardBtnFirst,
    addToBoardBtnSecond = _createElement.createElement.addToBoardBtnSecond,
    addToBoardBtnThird = _createElement.createElement.addToBoardBtnThird,
    btnCancel = _createElement.createElement.btnCancel,
    btnSend = _createElement.createElement.btnSend,
    imageButton = _createElement.createElement.imageButton;
  function getPhotos() {
    (0, _getPinterest.runPinterestApplication)();
    exports.images = images = JSON.parse(localStorage.getItem("photos")) || [];
    var galleryElement = (0, _createElement.getElementByRef)('gallery');
    galleryElement.innerHTML = (0, _createCard.createCard)(images);
  }
  getPhotos();
  var imageButtonElements = (0, _createElement.getElementsByRef)('imageButton');
  imageButtonElements.forEach(function (btn) {
    btn.addEventListener("click", _listEvent.getMenuCard);
  });
  var btnBoardFirstElements = (0, _createElement.getElementsByRef)('btnBoardFirst');
  btnBoardFirstElements.forEach(function (btn) {
    btn.addEventListener("click", _listEvent.getBoardFirst);
  });
  var btnBoardSecondElements = (0, _createElement.getElementsByRef)('btnBoardSecond');
  btnBoardSecondElements.forEach(function (btn) {
    btn.addEventListener("click", _listEvent.getBoardSecond);
  });
  var btnBoardThirdElements = (0, _createElement.getElementsByRef)('btnBoardThird');
  btnBoardThirdElements.forEach(function (btn) {
    btn.addEventListener("click", _listEvent.getBoardThird);
  });
});
var searchByTagElement = (0, _createElement.getElementByRef)('searchByTag');
searchByTagElement.addEventListener("input", _listEvent.searchByPhoto);
var selectBoardBtnElement = (0, _createElement.getElementByRef)('selectBoardBtn');
selectBoardBtnElement.addEventListener("click", _listEvent.chooseBoard);
var boardBntElement = (0, _createElement.getElementByRef)('boardBnt');
boardBntElement.addEventListener("click", _listEvent.addBord);
var complainBtnElement = (0, _createElement.getElementByRef)('complainBtn');
complainBtnElement.addEventListener("click", _listEvent.complain);
var addToBoardBtnFirstElement = (0, _createElement.getElementByRef)('addToBoardBtnFirst');
addToBoardBtnFirstElement.addEventListener("click", _listEvent.postBoardFirst);
var addToBoardBtnSecondElement = (0, _createElement.getElementByRef)('addToBoardBtnSecond');
addToBoardBtnSecondElement.addEventListener("click", _listEvent.postBoardSecond);
var addToBoardBtnThirdElement = (0, _createElement.getElementByRef)('addToBoardBtnThird');
addToBoardBtnThirdElement.addEventListener("click", _listEvent.postBoardThird);
var btnCancelElement = (0, _createElement.getElementByRef)('btnCancel');
btnCancelElement.addEventListener("click", _listEvent.btnCancel);
window.addEventListener('click', _listEvent.clickOnWin);
var images;
},{"./modules/createImage.js":"modules/createImage.js","./modules/getPinterest.js":"modules/getPinterest.js","./modules/createElement.js":"modules/createElement.js","./modules/listEvent.js":"modules/listEvent.js","./modules/createCard.js":"modules/createCard.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52252" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map