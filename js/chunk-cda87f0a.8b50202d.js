(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cda87f0a"],{2549:function(t,e,n){},"2d67":function(t,e,n){"use strict";n("2549")},5270:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header container-fluid"},[i("div",{staticClass:"row align-items-center justify-content-between"},[i("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},["inicio"!=t.$route.name?i("div",{staticClass:"header__menu me-4 me-sm-5",on:{click:function(e){return t.toggleMenu(!t.menuOpen)}}},[i("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":t.menuOpen}},[i("div",{staticClass:"line-2"}),i("div",{staticClass:"line-1"}),i("div",{staticClass:"line-3"})]),i("span",[t._v("MENÚ")])]):t._e(),i("img",{staticClass:"header__logo me-4 me-sm-5",attrs:{src:n("9eb5")}}),t.isInicio?i("div",{staticClass:"d-none d-md-flex align-items-center"},[i("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[t._v("Contenidos")])]):i("div",{staticClass:"header__componente-formativo"},[i("span",{domProps:{innerHTML:t._s(t.globalData.componenteFormativo)}})])]),t.isInicio?i("div",{staticClass:"col-auto"},[i("router-link",{staticClass:"boton",attrs:{to:{name:t.iniciarLnk.nombreRuta}}},[i("span",{staticClass:"me-1"},[t._v("Ver contenido")]),i("i",{staticClass:"fas fa-angle-right"})])],1):t._e()])])},s=[],a=(n("b0c0"),n("ecc5")),o={name:"Header",mixins:[a["a"]],computed:{globalData:function(){return this.$config&&this.$config.global},isInicio:function(){return"inicio"===this.$route.name},menuOpen:function(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu:function(t){this.$store.dispatch("toggleMenu",t)}}},c=o,r=(n("2d67"),n("2877")),u=Object(r["a"])(c,i,s,!1,null,"a108b06a",null);e["default"]=u.exports},ecc5:function(t,e,n){"use strict";e["a"]={computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const t=this.menuData.find(t=>"introduccion"===t.nombreRuta),e=this.menuData.find(t=>"tema1"===t.nombreRuta);return t||e}},methods:{quitarAcentos(t){const e=t.replace(/<\/?[^>]+(>|$)/g,""),n={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return e.split("").map(t=>n[t]||t).join("").toString()}}}}}]);
//# sourceMappingURL=chunk-cda87f0a.8b50202d.js.map