(function (t) { function n (n) { for (var e, i, r = n[0], c = n[1], l = n[2], p = 0, b = []; p < r.length; p++)i = r[p], Object.prototype.hasOwnProperty.call(a, i) && a[i] && b.push(a[i][0]), a[i] = 0; for (e in c)Object.prototype.hasOwnProperty.call(c, e) && (t[e] = c[e]); u && u(n); while (b.length)b.shift()(); return o.push.apply(o, l || []), s() } function s () { for (var t, n = 0; n < o.length; n++) { for (var s = o[n], e = !0, r = 1; r < s.length; r++) { var c = s[r]; a[c] !== 0 && (e = !1) }e && (o.splice(n--, 1), t = i(i.s = s[0])) } return t } var e = {}; var a = { app: 0 }; var o = []; function i (n) { if (e[n]) return e[n].exports; var s = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports }i.m = t, i.c = e, i.d = function (t, n, s) { i.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: s }) }, i.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }) }, i.t = function (t, n) { if (1 & n && (t = i(t)), 8 & n) return t; if (4 & n && typeof t === 'object' && t && t.__esModule) return t; var s = Object.create(null); if (i.r(s), Object.defineProperty(s, 'default', { enumerable: !0, value: t }), 2 & n && typeof t !== 'string') for (var e in t)i.d(s, e, function (n) { return t[n] }.bind(null, e)); return s }, i.n = function (t) { var n = t && t.__esModule ? function () { return t.default } : function () { return t }; return i.d(n, 'a', n), n }, i.o = function (t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, i.p = '/'; var r = window.webpackJsonp = window.webpackJsonp || []; var c = r.push.bind(r); r.push = n, r = r.slice(); for (var l = 0; l < r.length; l++)n(r[l]); var u = c; o.push([0, 'chunk-vendors']), s() })({ 0: function (t, n, s) { t.exports = s('56d7') }, '56d7': function (t, n, s) { 'use strict'; s.r(n); s('e260'), s('e6cf'), s('cca6'), s('a79d'); var e = s('7a23'); var a = Object(e.b)('<div class="header"><div class="container"><h1 class="header__title">Конвертер регистров</h1></div></div><main class="main"><div class="container"><div class="forms-content"><div class="forms-content__title"><span>Конвертер регистров</span> - простой инструмент, который поможет Вам избавиться от рутинной работы и сэкономить вемя. </div><div class="forms-content__forms-wrap"><textarea class="forms-content__form forms-content--form-indent" placeholder="Введите текст"></textarea><textarea class="forms-content__form" placeholder="Здесь будет результат"></textarea></div></div><div class="buttons"><button class="buttons__btn">Верхний регистр</button><button class="buttons__btn">Нижний регистр</button><button class="buttons__btn">Каждое слово с заглавной буквы</button><button class="buttons__btn">CamelСase</button><button class="buttons__btn">snake_case</button><button class="buttons__btn">kebab-case</button><button class="buttons__btn">PascalCase</button><button class="buttons__btn">Upper case &amp; Snake</button><button class="buttons__btn">Конвертировать в латиницу</button><br><button class="buttons__btn buttons__last-btn"> Очистить ЛЕВОЕ поле </button><button class="buttons__btn buttons__last-btn"> Очистить ПРАВОЕ поле </button></div><div class="description"><ul class="description__text"><li class="description__item"><span>Верхний регистр</span> - все буквы станут большими. </li><li class="description__item"><span>Нижний регистр</span> - все буквы станут маленькими. </li><li class="description__item"><span>Каждое слово с заглавной буквы</span> - каждое слово будет написано с большой буквы. </li><li class="description__item"><span>camelCase</span> - должен начинаться со строчной буквы, а первая буква каждого последующего слова должна быть заглавной. Все слова при этом пишутся слитно между собой. </li><li class="description__item"><span>snake_case</span> - чтобы писать в стиле snake_case, нужно просто заменить пробелы знаками подчеркивания. Все слова при этом пишутся строчными буквами. </li><li class="description__item"><span>kebab-case</span> - kebab-case похож на snake_case, только в нем пробелы заменяются на дефисы. Слова также пишутся строчными буквами. </li><li class="description__item"><span>PascalCase</span> - В PascalCase каждое слово начинается с заглавной буквы (в отличие от camelCase, где первое слово начинается со строчной). </li><li class="description__item"><span>Upper case &amp; Snake</span> - все слова пишутся заглавными буквами, а пробелы заменяются знаками подчеркивания. Например: <span>UPPER_CASE_SNAKE_CASE.</span></li><li class="description__item"><span>Конвертировать в латиницу</span> - выполнит транслитерацию кириллицы в латиницу. </li><li class="description__item"><span>Очистить ЛЕВОЕ поле</span> - очистка левого поля. </li><li class="description__item"><span>Очистить ПРАВОЕ поле</span> - очистка правого поля. </li></ul></div></div></main>', 2); function o (t, n, s, e, o, i) { return a } var i = {}; i.render = o; var r = i; s('7046'); Object(e.a)(r).mount('#app') }, 7046: function (t, n, s) {} })
// # sourceMappingURL=app.c5bf7633.js.map
