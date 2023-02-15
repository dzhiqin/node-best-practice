'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('../models'),
  Category = _require.Category,
  Author = _require.Author,
  Book = _require.Book;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var economics, science, memoirs, literature, HH, CW, GO;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return queryInterface.bulkInsert('Authors', [{
              name: "Henry Hazlitt",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "Charles Wheelan",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "Gregg Olsen",
              createdAt: new Date(),
              updatedAt: new Date()
            }]);
          case 2:
            _context10.next = 4;
            return queryInterface.bulkInsert('Categories', [{
              name: "social",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "economics",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "science",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "memoirs",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "literature",
              createdAt: new Date(),
              updatedAt: new Date()
            }]);
          case 4:
            _context10.next = 6;
            return queryInterface.bulkInsert('Books', [{
              name: "Cruel deception",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "Liying next to me",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "Economics in one lesson",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "Thinking as a science",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "The wisdom of Henry Hazlitt",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "Nacked ecnomics",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "Nacked statistics",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              name: "We come, we saw, we left",
              createdAt: new Date(),
              updatedAt: new Date()
            }]);
          case 6:
            _context10.next = 8;
            return queryInterface.bulkInsert('Categories', [{
              name: "economics",
              createdAt: new Date(),
              updatedAt: new Date()
            }]);
          case 8:
            _context10.next = 10;
            return Category.findOne({
              where: {
                name: "economics"
              }
            });
          case 10:
            economics = _context10.sent;
            _context10.next = 13;
            return Category.findOne({
              where: {
                name: "science"
              }
            });
          case 13:
            science = _context10.sent;
            _context10.next = 16;
            return Category.findOne({
              where: {
                name: "memoirs"
              }
            });
          case 16:
            memoirs = _context10.sent;
            _context10.next = 19;
            return Category.findOne({
              where: {
                name: "literature"
              }
            });
          case 19:
            literature = _context10.sent;
            _context10.next = 22;
            return Author.findOne({
              where: {
                name: "Henry Hazlitt"
              }
            });
          case 22:
            HH = _context10.sent;
            _context10.next = 25;
            return Author.findOne({
              where: {
                name: "Charles Wheelan"
              }
            });
          case 25:
            CW = _context10.sent;
            _context10.next = 28;
            return Author.findOne({
              where: {
                name: "Gregg Olsen"
              }
            });
          case 28:
            GO = _context10.sent;
            _context10.next = 31;
            return Book.findOne({
              where: {
                name: "If you tell"
              }
            }).then( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(book) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return book.setAuthor(GO);
                    case 2:
                      _context.next = 4;
                      return book.setCategory(literature);
                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          case 31:
            _context10.next = 33;
            return Book.findOne({
              where: {
                name: "Liying next to me"
              }
            }).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(book) {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return book.setAuthor(GO);
                    case 2:
                      _context2.next = 4;
                      return book.setCategory(literature);
                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 33:
            _context10.next = 35;
            return Book.findOne({
              where: {
                name: 'Cruel deception'
              }
            }).then( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(book) {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return book.setAuthor(GO);
                    case 2:
                      _context3.next = 4;
                      return book.setCategory(literature);
                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }());
          case 35:
            _context10.next = 37;
            return Book.findOne({
              where: {
                name: 'Economics in one lesson'
              }
            }).then( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(book) {
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return book.setAuthor(HH);
                    case 2:
                      _context4.next = 4;
                      return book.setCategory(economics);
                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return function (_x4) {
                return _ref4.apply(this, arguments);
              };
            }());
          case 37:
            _context10.next = 39;
            return Book.findOne({
              where: {
                name: 'Thinking as a science'
              }
            }).then( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(book) {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return book.setAuthor(HH);
                    case 2:
                      _context5.next = 4;
                      return book.setCategory(science);
                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));
              return function (_x5) {
                return _ref5.apply(this, arguments);
              };
            }());
          case 39:
            _context10.next = 41;
            return Book.findOne({
              where: {
                name: 'The wisdom of Henry Hazlitt'
              }
            }).then( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(book) {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return book.setAuthor(HH);
                    case 2:
                      _context6.next = 4;
                      return book.setCategory(memoirs);
                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              return function (_x6) {
                return _ref6.apply(this, arguments);
              };
            }());
          case 41:
            _context10.next = 43;
            return Book.findOne({
              where: {
                name: 'Nacked ecnomics'
              }
            }).then( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(book) {
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return book.setAuthor(CW);
                    case 2:
                      _context7.next = 4;
                      return book.setCategory(economics);
                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7);
              }));
              return function (_x7) {
                return _ref7.apply(this, arguments);
              };
            }());
          case 43:
            _context10.next = 45;
            return Book.findOne({
              where: {
                name: 'Nacked statistics'
              }
            }).then( /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(book) {
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return book.setAuthor(CW);
                    case 2:
                      _context8.next = 4;
                      return book.setCategory(science);
                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }));
              return function (_x8) {
                return _ref8.apply(this, arguments);
              };
            }());
          case 45:
            _context10.next = 47;
            return Book.findOne({
              where: {
                name: 'We come, we saw, we left'
              }
            }).then( /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(book) {
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return book.setAuthor(CW);
                    case 2:
                      _context9.next = 4;
                      return book.setCategory(literature);
                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9);
              }));
              return function (_x9) {
                return _ref9.apply(this, arguments);
              };
            }());
          case 47:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return queryInterface.bulkDelete('Categories', null, {});
          case 2:
            _context11.next = 4;
            return queryInterface.bulkDelete('Authors', null, {});
          case 4:
            _context11.next = 6;
            return queryInterface.bulkDelete('Books', null, {});
          case 6:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }))();
  }
};