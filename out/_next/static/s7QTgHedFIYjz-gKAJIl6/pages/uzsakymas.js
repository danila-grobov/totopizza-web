(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Cgje:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(p,e);var t,n,a,o,f=(t=p,function(){var e,n=l(t);if(s()){var a=l(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return i(this,e)});function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),f.apply(this,arguments)}return n=p,(a=[{key:"render",value:function(){var e=this.props,t=e.getMenuStatus,n=e.closeMenu;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__wrapper"},r.a.createElement("img",{src:"images/logo.svg",className:"header__logoButton",onClick:function(){window.location.replace("/")}}),r.a.createElement("a",{href:"/",className:"header__link"},"Pagrindinis"),r.a.createElement("a",{href:"/uzsakymas",className:"header__link header__link--highlighted"},"U\u017esisakyk")),t&&t()?r.a.createElement("div",{className:"menuHeader"},r.a.createElement("span",{className:"menuHeader__title"},"Menu"),r.a.createElement("img",{src:"images/close.svg",className:"menuHeader__close",onClick:function(){return n()}})):"")}}])&&c(n.prototype,a),o&&c(n,o),p}(a.Component);t.a=f},NFsH:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Cgje"),c=function(){return r.a.createElement("div",{className:"payment"},r.a.createElement("span",{className:"payment__info"},"U\u017esakant u\u017e 8,80\u20ac ir daugiau \u0160ilut\u0117s mieste pristatymas NEMOKAMAS!"),r.a.createElement("span",{className:"payment__info"},"U\u017esakant iki 8,80\u20ac taikoma 1\u20ac pristatymo mok\u0119stis (pageidaujant pristatysime ir ma\u017e\u0105 pic\u0105)."),r.a.createElement("span",{className:"payment__info"},"U\u017e miesto rib\u0173 pristatymas sutartinis, teirautis telefonu."))},i=function(){return r.a.createElement("div",{className:"phoneInfo"},r.a.createElement("div",{className:"phoneInfo__spacer"}),r.a.createElement("div",{className:"phoneInfo__textWrapper",onClick:function(){window.location.replace("tel:+37063999399")}},r.a.createElement("span",{className:"phoneInfo__text"},"U\u017dSAKYM\u0172 TELEFONAS"),r.a.createElement("span",{className:"phoneInfo__text phoneInfo__text--bold"},"8 639 99399")),r.a.createElement("div",{className:"phoneInfo__spacer"}))};function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(_,e);var t,n,a,s,y=(t=_,function(){var e,n=p(t);if(f()){var a=p(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return u(this,e)});function _(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_),y.apply(this,arguments)}return n=_,(a=[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(o.a,null),r.a.createElement("div",{className:"app__backgroudImage"}),r.a.createElement("div",{className:"app__blob app__blob--granite"},r.a.createElement("div",{className:"orderInfo"},r.a.createElement("div",{className:"orderInfo__car"},r.a.createElement("img",{src:"images/Tacka.png",className:"orderInfo__carImage"})),r.a.createElement(c,null),r.a.createElement(i,null),r.a.createElement("span",{className:"orderInfo__address",onClick:function(){window.open("https://g.page/totopizza-lt?share")}},"Adresas: Til\u017e\u0117s g. 5, \u0160ilut\u0117"),r.a.createElement("div",{className:"socialInfo"},r.a.createElement("span",{className:"socialInfo__text",onClick:function(){window.open("https://instagram.com/totopizza.lt")}},"www.instagram.com/totopizza.lt"),r.a.createElement("div",{className:"socialInfo__spacer"}),r.a.createElement("span",{className:"socialInfo__text",onClick:function(){window.open("https://fb.com/totopizza.lt")}},"www.fb.com/totopizza.lt")))))}}])&&l(n.prototype,a),s&&l(n,s),_}(a.Component);t.default=y},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},qE5a:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uzsakymas",function(){return n("NFsH")}])}},[["qE5a",0,1]]]);