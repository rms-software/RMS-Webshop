(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/bakkerij-adriaans/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"09f7":function(t,e,r){"use strict";r("e172")},"14c9":function(t,e,r){"use strict";r("ae39")},"21bb":function(t,e,r){"use strict";r("2dad")},"2dad":function(t,e,r){},3609:function(t,e,r){"use strict";r("719d")},"49af":function(t,e,r){"use strict";r("ef74")},"4c91":function(t,e,r){},"4cde":function(t,e,r){"use strict";r("4c91")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("8c4f"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.rmsConnection?[r("Header",{attrs:{logo:t.companyInfo.companyLogo,navLinks:t.navLinks,linkWidth:120}}),r("div",{staticStyle:{margin:"50px","flex-grow":"1"}},[r("router-view")],1),r("Footer",{attrs:{socials:t.companyInfo.socials,image:t.companyInfo.companyLogo}})]:r("div",{attrs:{id:"connection-error"}},[t._v(" ERROR: Connection with server failed ")])],2)},s=[],i=r("1da1"),c=(r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("div",{staticClass:"header"},[t.logo?r("span",{attrs:{id:"logo"}},[r("img",{attrs:{src:t.logo,alt:"logo"}})]):t._e(),t.title?r("span",{attrs:{id:"title"}},[t._v(" "+t._s(t.title)+" ")]):t._e(),r("span",{attrs:{id:"navbar"}},t._l(t.navLinks,(function(e){return r("router-link",{key:e.to,staticClass:"router-link",style:"width: "+t.linkWidth+"px;",attrs:{to:e.to}},[t._v(" "+t._s(e.name)+" ")])})),1)]),r("div",{staticClass:"navigator"},t._l(t.navLinks,(function(e){return r("router-link",{key:e.to,staticClass:"router-link",style:"width: "+t.linkWidth+"px;",attrs:{to:e.to}},[t._v(" "+t._s(e.name)+" ")])})),1),t.navLinks.length>0?r("div",{staticClass:"mobile-navigator"},[r("button",{staticClass:"btn",on:{click:t.toggleBurger}},[r("unicon",{attrs:{name:"bars",fill:"black"}})],1),t.burgerOpen?r("div",{staticClass:"link-list"},t._l(t.navLinks,(function(e){return r("router-link",{key:e.to,staticClass:"router-link",attrs:{to:e.to},nativeOn:{click:function(e){t.burgerOpen=!1}}},[t._v(" "+t._s(e.name)+" ")])})),1):t._e()]):t._e()])}),l=[],u=(r("a9e3"),{props:{title:{type:String,default:null},logo:{type:String,default:null},navLinks:{type:Array,default:function(){return[]}},linkWidth:{type:Number,default:40}},data:function(){return{burgerOpen:!1}},methods:{toggleBurger:function(){this.burgerOpen=!this.burgerOpen}}}),d=u,p=(r("3609"),r("2877")),m=Object(p["a"])(d,c,l,!1,null,"3de1626d",null),f=m.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[t.socials?r("DoubleSection",{scopedSlots:t._u([{key:"left",fn:function(){return[r("span",{attrs:{id:"image-and-version"}},[r("div",[t.image?r("img",{staticStyle:{width:"200px",padding:"20px 20px 20px 0px"},attrs:{src:t.image,alt:"footer image"}}):t._e()]),r("div",[t._v(" v"+t._s(t.version)+" ")])])]},proxy:!0},{key:"right",fn:function(){return[r("span",{attrs:{id:"socials"}},[r("a",{attrs:{rel:"noopener",href:"https://www.facebook.com/"+t.socials.facebook,target:"_blank"}},[r("div",{staticClass:"social"},[r("unicon",{attrs:{name:"facebook"}}),t._v(" "+t._s(t.socials.facebook)+" ")],1)]),r("a",{attrs:{rel:"noopener",href:"mailto:"+t.socials.email,target:"_blank"}},[r("div",{staticClass:"social"},[r("unicon",{attrs:{name:"at"}}),t._v(" "+t._s(t.socials.email)+" ")],1)]),r("a",{attrs:{rel:"noopener",href:"tel:"+t.socials.tel,target:"_blank"}},[r("div",{staticClass:"social"},[r("unicon",{attrs:{name:"phone"}}),t._v(" "+t._s(t.socials.tel)+" ")],1)]),r("a",{attrs:{rel:"noopener",href:"https://api.whatsapp.com/send?phone="+t.socials.tel+"&app=DWWSite",target:"_blank"}},[r("div",{staticClass:"social"},[r("unicon",{attrs:{name:"whatsapp"}}),t._v(" "+t._s(t.socials.tel)+" ")],1)])])]},proxy:!0}],null,!1,1758362901)}):t._e()],1)},b=[],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"double-section"},[r("span",{staticClass:"left"},[t._t("left")],2),r("span",[t._t("right")],2)])},g=[],_={},w=_,k=(r("14c9"),Object(p["a"])(w,h,g,!1,null,"5a86c134",null)),y=k.exports,C=r("9224"),x={components:{DoubleSection:y},props:{socials:{type:Object,default:function(){}},image:{type:String,default:null}},data:function(){return{version:C["a"]}}},j=x,O=(r("4cde"),Object(p["a"])(j,v,b,!1,null,"6f13a715",null)),P=O.exports,S=(r("99af"),r("bc3a")),E=r.n(S),N={socials:{facebook:"BakkerijAdriaans",email:"bakkerijadriaans@gmail.com",tel:"0624939954"},server_url:"https://rhino-ms.herokuapp.com",company_id:2},L={},$=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!L[e]){t.next=4;break}return t.abrupt("return",L[e]);case 4:return t.next=6,r();case 6:return L[e]=t.sent,t.abrupt("return",L[e]);case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),z=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="".concat(N.server_url,"/api/ping"),t.prev=1,t.next=4,E.a.get(e);case 4:return r=t.sent,t.abrupt("return",200===r.status);case 8:return t.prev=8,t.t0=t["catch"](1),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),R=function(){return $("getCompanyInfo",Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="".concat(N.server_url,"/api/open/").concat(N.company_id,"/general/get-info"),t.next=3,E.a.get(e);case 3:return r=t.sent,r.data.socials=N.socials,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)}))))},W=function(){return $("getCompanyProducts",Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="".concat(N.server_url,"/api/open/").concat(N.company_id,"/products/all"),t.next=3,E.a.get(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)}))))},D={getCompanyInfo:R,getProductList:W,testConnection:z},T={components:{Header:f,Footer:P},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.testConnection();case 2:return t.rmsConnection=e.sent,console.log(t.rmsConnection),e.next=6,D.getCompanyInfo();case 6:t.companyInfo=e.sent,document.title=t.companyInfo.companyName;case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{companyInfo:{},rmsConnection:!0,navLinks:[{name:"Home",to:"/home"},{name:"Producten",to:"/producten"},{name:"Winkelwagen",to:"/cart"}],socials:[{type:"facebook",link:"https://www.facebook.com/De-Wit-Worstenbrood-100184555272377/",name:"De Wit Worstenbrood"},{type:"at",link:"mailto:john@dewitworstenbrood.nl",name:"john@dewitworstenbrood.nl"},{type:"phone",link:"tel:31610184265",name:"31610184265"},{type:"whatsapp",link:"https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text=Hallo, ik zou graag <aantal> <product> willen afhalen, wanneer kan ik ze komen ophalen?",name:"31610184265"}]}}},I=T,A=(r("5c0b"),Object(p["a"])(I,o,s,!1,null,null,null)),B=A.exports,F=r("cb81"),M=r.n(F),q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("OverlayPopup",{ref:"orderCount"},[r("div",{staticClass:"order-count-wrapper"},[r("div",{staticClass:"order-count-announcement"},[t._v(" U staat op het punt om '"+t._s(t.activeProduct.name)+"' toe te voegen aan uw winkelmand ")]),r("div",{staticClass:"order-count-counter"},[r("span",{staticStyle:{"margin-right":"20px"}},[t._v("Hoeveelheid: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.productCount,expression:"productCount"}],attrs:{type:"number"},domProps:{value:t.productCount},on:{input:function(e){e.target.composing||(t.productCount=e.target.value)}}})]),r("div",{staticClass:"order-count-counter"},[r("span",{staticStyle:{"margin-right":"20px"}},[t._v("Minder pittig: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.lessSpicy,expression:"lessSpicy"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.lessSpicy)?t._i(t.lessSpicy,null)>-1:t.lessSpicy},on:{change:function(e){var r=t.lessSpicy,n=e.target,a=!!n.checked;if(Array.isArray(r)){var o=null,s=t._i(r,o);n.checked?s<0&&(t.lessSpicy=r.concat([o])):s>-1&&(t.lessSpicy=r.slice(0,s).concat(r.slice(s+1)))}else t.lessSpicy=a}}})]),r("span",[r("button",{staticClass:"btn cancle",staticStyle:{"margin-right":"20px"},on:{click:function(e){t.$refs.orderCount.show=!1}}},[t._v(" ANNULEER ")]),r("button",{staticClass:"btn confirm",on:{click:t.addProductsToBasket}},[t._v(" TOEVOEGEN € "+t._s((t.productCount*t.activeProduct.price).toFixed(2))+" ")])])])]),r("OverlayPopup",{ref:"basketView"},[r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content"},[r("div",{staticClass:"order-count-wrapper"},[r("div",{staticClass:"order-count-announcement"},[t._v(" Winkelmand • "),r("span",{staticClass:"price"},[t._v("€ "+t._s(t.basketTotal.toFixed(2)))])]),r("table",{staticClass:"basket-list"},[r("thead",[r("tr",[r("th",[t._v("Product")]),r("th",[t._v("Aantal")]),r("th",[t._v("Prijs totaal")])])]),r("tbody",t._l(Object.entries(t.basket),(function(e,n){return r("tr",{key:n},[r("td",[t._v(" "+t._s(e[0])+" ")]),r("td",[t._v(" "+t._s(e[1].count)+" ")]),r("td",[t._v(" € "+t._s((e[1].count*e[1].price).toFixed(2))+" ")])])})),0)]),r("span",[r("span",[t._v("Ophaal datum   ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.pickupDate,expression:"pickupDate"}],staticStyle:{width:"120px","margin-bottom":"20px"},attrs:{type:"date"},domProps:{value:t.pickupDate},on:{input:function(e){e.target.composing||(t.pickupDate=e.target.value)}}})]),r("span",[r("button",{class:{"btn confirm":!0},staticStyle:{"margin-right":"20px"},on:{click:function(e){t.$refs.basketView.show=!1}}},[t._v(" VERDER WINKELEN ")]),r("button",{class:{"btn confirm":!0,disabled:""===t.pickupDate},attrs:{disabled:""===t.pickupDate},on:{click:function(e){t.$refs.basketView.show=!1,t.$refs.orderPlacer.show=!0}}},[t._v(" BESTELLEN € "+t._s(t.basketTotal.toFixed(2))+" ")])])])])])]),r("OverlayPopup",{ref:"orderPlacer"},[r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content"},[r("div",{staticClass:"order-count-wrapper"},[r("div",{staticClass:"order-count-announcement"},[t._v(" Bestellen ")]),r("div",{staticStyle:{"margin-bottom":"40px"}},[t._v(" Kies Uw methode om te bestellen: ")]),r("div",{staticClass:"order-methods"},[r("a",{staticClass:"order-method-card",attrs:{rel:"noopener",href:"https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text="+t.GetOrderMessage(),target:"_blank"}},[r("unicon",{attrs:{name:"whatsapp"}})],1),r("a",{staticClass:"order-method-card",attrs:{rel:"noopener",href:"mailto:john@dewitworstenbrood.nl?subject=bestelling&body="+t.GetOrderMessage(),target:"_blank"}},[r("unicon",{attrs:{name:"envelope"}})],1)]),r("span",{staticStyle:{"margin-top":"40px"}},[r("button",{staticClass:"btn cancle",staticStyle:{"margin-right":"20px"},on:{click:function(e){t.$refs.orderPlacer.show=!1}}},[t._v(" TERUG ")])])])])])]),t._m(0)],1)},J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{margin:"50px","flex-grow":"1"}},[r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content"},[r("span",{staticClass:"center",staticStyle:{padding:"20px 0px"}},[r("h1",[t._v("Bakkerij Adriaans")]),r("h3",{staticStyle:{"margin-top":"-30px"}},[t._v("Lorem Ipsum")]),r("p",[t._v(" lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),r("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium optio officiis consequatur, facilis sapiente ipsum commodi eos ullam tenetur iste corrupti nam quas nobis illo id odit natus nihil temporibus? ")])]),r("br"),r("br"),r("br")])])])}],U=(r("e9c4"),r("b0c0"),r("d81d"),r("4fad"),r("d3b7"),r("159b"),r("b680"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("div",{staticClass:"overlay"},[t._t("default")],2):t._e()}),H=[],V={data:function(){return{show:!1}}},G=V,Q=(r("86e8"),Object(p["a"])(G,U,H,!1,null,null,null)),X=Q.exports,K={components:{OverlayPopup:X},methods:{orderItem:function(t){this.productCount=1,this.lessSpicy=!1,this.activeProduct=JSON.parse(JSON.stringify(this.products[t])),this.$refs.orderCount.show=!0},addProductsToBasket:function(){this.lessSpicy&&(this.activeProduct.name+=" (minder pittig)");var t=this.basket[this.activeProduct.name];t?t.count=Number(t.count)+Number(this.productCount):this.basket[this.activeProduct.name]={count:this.productCount,price:this.activeProduct.price},this.$refs.orderCount.show=!1,this.$refs.basketView.show=!0,this.calcBasketTotal()},calcBasketTotal:function(){var t=Object.entries(this.basket).map((function(t){return t[1]}));this.basketTotal=t.reduce((function(t,e){return t+e.price*e.count}),0)},GetOrderMessage:function(){var t="Beste John, ik zou graag een bestelling willen plaatsen bij de Wit worstenbroodjes. %0A%0AIk zou graag het volgende willen bestellen:%0A";return Object.entries(this.basket).forEach((function(e){t+="".concat(e[1].count,"x ").concat(e[0]," %0A")})),t+="%0ADat wordt dan in totaal ".concat(this.basketTotal.toFixed(2)," euro, en ik zou de bestelling graag af willen halen op ").concat(this.pickupDate),t}},data:function(){return{basketTotal:0,lessSpicy:!1,pickupDate:"",activeProduct:{},basket:{},productCount:1,products:[{image:"products/worstenbroodje.jpg",name:"Worstenbroodjes",description:["Normaal standaard worstenbroodje zijn altijd vers gebakken uit de oven, en handgemaakt door een hobbybakker.   Ze zijn in te vriezen als u ze heeft opgehaald.","Houd je niet van pittig bestel dan de mildere versie."],weight:"90 - 95 gram",price:1},{image:"products/worstenbroodje-klein.png",name:"Worstenbroodjes klein",description:["Deze worstenbroodjes zijn de kleinere variant van onze standaard worstenbroodjes, ze zijn ongeveer de helft in gewicht, en dus ook de helft goedkoper. Ze zijn in te vriezen als u ze heeft opgehaald.","Houd je niet van pittig bestel dan de mildere versie."],weight:"40 - 45 gram",price:.5},{image:"products/worstenbol.jpg",name:"Witbollen",description:["Deze worstenbroodjes zijn de bol vormige variant van onze standaard pittige worstenbroodjes, ze zijn ongeveer de helft in gewicht, en dus ook de helft goedkoper.","hou je niet van pittig? dan kun je ook in de bestelling aangeven dat je het worstenbroodje wat milder wilt hebben."],weight:"40 - 45 gram",price:.5},{image:"products/worstenbrood-xxxl.png",name:"Worstenbrood XXXL",description:["Op verzoek maken we ook XXXL worstenbroodjes. Deze worstenbroodjes zijn rond de 200 gram dus bijna een maaltijd. Leuk om cadeau te geven.","Het is ook mogelijk om er een cijfer in te laten bakken."],weight:"200 gram",price:2.5}]}}},Y=K,Z=(r("21bb"),Object(p["a"])(Y,q,J,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-wrapper"},[r("div",{staticClass:"products"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{type:"text",placeholder:"zoeken..."},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),r("ProductList",{attrs:{products:t.filteredProducts},on:{order:t.askAddToCart}})],1),r("Modal",{ref:"modalShoppingCart",attrs:{title:(t.orderProduct?t.orderProduct.name:"")+" bestellen"}},[r("br"),r("label",{attrs:{for:"amount"}},[t._v("Aantal")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.orderCount,expression:"orderCount"}],staticClass:"form-control",attrs:{type:"number",id:"order-amount"},domProps:{value:t.orderCount},on:{input:function(e){e.target.composing||(t.orderCount=e.target.value)}}}),r("br"),r("br"),r("br"),r("button",{staticClass:"btn confirm",attrs:{type:"button"},on:{click:t.putItemInBasket}},[t._v(" In winkelwagen stoppen ")])])],1)},rt=[],nt=(r("4de4"),r("caad"),r("2532"),r("7db0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-list"},t._l(t.products,(function(e,n){return r("div",{key:n},[r("DoubleSection",[r("p",{staticClass:"product-image-wrapper",attrs:{slot:"left"},slot:"left"},[r("img",{staticClass:"product-image",attrs:{src:e.image,alt:e.name+" product image"}})]),r("div",{staticClass:"product-info",attrs:{slot:"right"},slot:"right"},[r("div",{staticClass:"title"},[t._v(" "+t._s(e.name)+" ")]),r("div",{staticClass:"weight"},[t._v(" "+t._s(e.weight)+" • "),r("span",{staticClass:"price"},[t._v("€ "+t._s(e.basePrice.toFixed(2)))]),t._v(" per stuk ")]),r("div",{staticClass:"description"},[t._v(" "+t._s(e.description)+" ")]),r("div",[r("button",{staticClass:"btn",on:{click:function(r){return t.$emit("order",e)}}},[t._v("BESTELLEN € "+t._s(e.basePrice.toFixed(2))+" ")])])])]),r("br"),r("hr",{staticStyle:{color:"white"}}),r("br"),r("br"),r("br")],1)})),0)}),at=[],ot={props:{products:{type:Array,required:!0}},components:{DoubleSection:y}},st=ot,it=(r("49af"),Object(p["a"])(st,nt,at,!1,null,"4cb5f0c9",null)),ct=it.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isOpen?r("div",{attrs:{id:"modal-wrapper"}},[r("div",{attrs:{id:"modal"}},[r("div",{attrs:{id:"header"}},[r("div",{attrs:{id:"title"}},[t._v(t._s(t.title))]),r("div",{attrs:{id:"closer"},on:{click:function(e){t.isOpen=!1}}},[t._v("x")])]),t._t("default")],2)]):t._e()},ut=[],dt={props:{title:{type:String,default:"Modal Title"}},data:function(){return{isOpen:!1}}},pt=dt,mt=(r("ca29"),Object(p["a"])(pt,lt,ut,!1,null,"f90726c0",null)),ft=mt.exports,vt={components:{DoubleSection:y,ProductList:ct,Modal:ft},data:function(){return{products:[],orderCount:1,searchQuery:"",orderProduct:null}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.getProductList();case 2:t.products=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{filteredProducts:function(){var t=this;return this.products.filter((function(e){return e.name.toLowerCase().includes(t.searchQuery.toLowerCase())}))}},methods:{askAddToCart:function(t){this.orderCount=1,this.orderProduct=t,this.$refs.modalShoppingCart.isOpen=!0},putItemInBasket:function(){var t=JSON.parse(localStorage.getItem("basket")||"[]");t.push({product:this.orderProduct,amount:this.orderCount});var e=t.reduce((function(t,e){var r=t.find((function(t){return t.product.id===e.product.id}));return r?r.amount=Number(r.amount)+Number(e.amount):t.push(e),t}),[]);localStorage.setItem("basket",JSON.stringify(e)),this.$refs.modalShoppingCart.isOpen=!1}}},bt=vt,ht=(r("baa1"),Object(p["a"])(bt,et,rt,!1,null,"d9ac9b7c",null)),gt=ht.exports,_t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reviews-wrapper"},[r("div",{staticClass:"reviews"},[r("div",{staticClass:"section"},[r("div",{staticClass:"question"},[t._v("Hoeveel sterren geef jij mijn worstenbroodjes?")]),r("div",{staticClass:"entry stars"},[r("Unicon",{staticClass:"star",attrs:{name:"star",fill:t.form.stars>=1?"gold":"gray"},on:{click:function(e){t.form.stars=1}}}),r("Unicon",{staticClass:"star",attrs:{name:"star",fill:t.form.stars>=2?"gold":"gray"},on:{click:function(e){t.form.stars=2}}}),r("Unicon",{staticClass:"star",attrs:{name:"star",fill:t.form.stars>=3?"gold":"gray"},on:{click:function(e){t.form.stars=3}}}),r("Unicon",{staticClass:"star",attrs:{name:"star",fill:t.form.stars>=4?"gold":"gray"},on:{click:function(e){t.form.stars=4}}}),r("Unicon",{staticClass:"star",attrs:{name:"star",fill:t.form.stars>=5?"gold":"gray"},on:{click:function(e){t.form.stars=5}}})],1)]),r("div",{staticClass:"section"},[r("div",{staticClass:"question"},[t._v("Wat is jouw naam?")]),r("div",{staticClass:"entry stars"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),r("div",{staticClass:"section"},[r("div",{staticClass:"question"},[t._v("Wanneer heb jij jouw worstenbroodjes afgehaald?")]),r("div",{staticClass:"entry stars"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date,expression:"form.date"}],attrs:{type:"date"},domProps:{value:t.form.date},on:{input:function(e){e.target.composing||t.$set(t.form,"date",e.target.value)}}})])]),r("div",{staticClass:"section"},[r("div",{staticClass:"question"},[t._v("Waarom vind je mijn worstenbroodjes zo lekker?")]),r("div",{staticClass:"entry stars"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.comment,expression:"form.comment"}],attrs:{resize:"none"},domProps:{value:t.form.comment},on:{input:function(e){e.target.composing||t.$set(t.form,"comment",e.target.value)}}})])]),r("button",{class:{"section btn confirm":!0,disabled:!t.formCompleted},attrs:{disabled:!t.formCompleted},on:{click:t.sendForm}},[t._v("Verstuur beoordeling")]),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),t._v(" Reviews van anderen: "),r("div",{staticClass:"review-list"},t._l(t.reviews,(function(e){return r("div",{key:"review-"+e.id,staticClass:"review-item"},[r("hr",{staticStyle:{border:"1px solid #ddd"}}),r("div",{staticClass:"top"},[r("span",{staticClass:"reviewer"},[t._v(" "+t._s(e.name)+" ")]),t._l(e.stars,(function(t){return r("span",{key:"star-"+t,staticClass:"star"},[r("Unicon",{attrs:{name:"star",fill:"gold"}})],1)}))],2),r("div",{staticClass:"mid"},[t._v(" "+t._s(e.date.split(" ")[0])+" ")]),r("div",{staticClass:"bottom"},[t._v(" "+t._s(e.comment)+" ")])])})),0)])])},wt=[],kt={data:function(){return{reviews:[],form:{stars:4,name:"",comment:"",date:""}}},computed:{formCompleted:function(){return""!==this.form.name&&""!==this.form.comment&&""!==this.form.date}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.dewitworstenbrood.nl/reviews");case 2:r=e.sent,t.reviews=r.data;case 4:case"end":return e.stop()}}),e)})))()},methods:{sendForm:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("https://api.dewitworstenbrood.nl/reviews",t.form);case 2:e.sent,location.reload();case 4:case"end":return e.stop()}}),e)})))()}}},yt=kt,Ct=(r("09f7"),Object(p["a"])(yt,_t,wt,!1,null,"60b7b958",null)),xt=Ct.exports,jt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Restrictor",{attrs:{width:800}},[r("div",{attrs:{id:"shopping-cart"}},[r("div",{attrs:{id:"header"}},[r("h3",[t._v("Winkelwagen")]),r("div",[t._v(t._s(t.cart.length)+" Items")])]),r("hr"),r("div",{attrs:{id:"cart-list"}},[r("span",{staticClass:"thead"},[t._v("Producten")]),r("span",{staticClass:"thead"},[t._v("Prijs")]),r("span",{staticClass:"thead"},[t._v("Totaal")]),t._l(t.cart,(function(e){return[r("span",{key:e.id,staticClass:"overview"},[r("img",{staticClass:"item-pic",attrs:{src:e.product.image}}),r("div",[r("b",[t._v(t._s(e.product.name))]),r("br"),t._v(" "+t._s(e.amount)+"x ")])]),r("span",{key:e.id},[t._v("€ "+t._s(e.product.basePrice.toFixed(2)))]),r("span",{key:e.id},[t._v("€ "+t._s((e.amount*e.product.basePrice).toFixed(2)))])]}))],2),r("hr"),r("div",{attrs:{id:"footer"}},[r("h3",[t._v("Totaal")]),r("div",[t._v("€ "+t._s(t.totalPrice.toFixed(2)))])]),r("br"),r("br"),r("button",{staticClass:"btn confirm",on:{click:t.askPlaceOrder}},[t._v("Bestellen")])]),r("Modal",{ref:"orderModal",attrs:{title:"Bestelling plaatsen"}},[r("div",[t._v("Totaal bedrag: € "+t._s(t.totalPrice.toFixed(2)))]),r("br"),r("div",{attrs:{id:"user-data-form"}},[r("label",{attrs:{for:"email"}},[t._v("E-mail")]),r("br"),r("input",{staticClass:"form-control",attrs:{type:"email",id:"email"}}),r("br"),r("br"),r("label",{attrs:{for:"name"}},[t._v("Naam")]),r("br"),r("input",{staticClass:"form-control",attrs:{type:"text",id:"name"}}),r("br"),r("br"),r("label",{attrs:{for:"address"}},[t._v("Adres")]),r("br"),r("input",{staticClass:"form-control",attrs:{type:"text",id:"address"}}),r("br"),r("br"),r("label",{attrs:{for:"phone"}},[t._v("Telefoonnummer")]),r("br"),r("input",{staticClass:"form-control",attrs:{type:"text",id:"phone"}})]),r("br"),r("button",{staticClass:"btn confirm"},[t._v("Bestelling plaatsen")])])],1)},Ot=[],Pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"wrapper"}},[r("div",{style:"max-width: "+t.width+"px",attrs:{id:"restrictor"}},[t._t("default")],2)])},St=[],Et={props:{width:{type:Number,default:800}}},Nt=Et,Lt=(r("8c7b"),Object(p["a"])(Nt,Pt,St,!1,null,"1973f329",null)),$t=Lt.exports,zt={components:{Restrictor:$t,Modal:ft},data:function(){return{cart:[]}},computed:{totalPrice:function(){return this.cart.reduce((function(t,e){return t+e.amount*e.product.basePrice}),0)}},mounted:function(){this.cart=JSON.parse(localStorage.getItem("basket")||"[]")},methods:{askPlaceOrder:function(){this.$refs.orderModal.isOpen=!0},placeOrder:function(){}}},Rt=zt,Wt=(r("8823"),Object(p["a"])(Rt,jt,Ot,!1,null,"c2c98e10",null)),Dt=Wt.exports,Tt=r("a584"),It=r("d327");M.a.add([It["b"],It["d"],It["e"],It["a"],It["g"],It["c"],It["f"]]),n["a"].use(M.a),n["a"].use(a["a"]),n["a"].use(Tt["a"],{config:{id:"G-LLJJC2YYJ6"},appName:"Dewit worstenbrood website",pageTrackerScreenviewEnabled:!0},Bt);var At=[{path:"/",component:tt,name:"home"},{path:"*",component:tt,name:"home"},{path:"/home",component:tt,name:"home"},{path:"/cart",component:Dt,name:"winkelwagen"},{path:"/producten",component:gt,name:"producten"},{path:"/reviews",component:xt,name:"reviews"}],Bt=new a["a"]({routes:At});n["a"].config.productionTip=!1,new n["a"]({router:Bt,render:function(t){return t(B)}}).$mount("#app")},"596d":function(t,e,r){},"5b73":function(t,e,r){},"5c0b":function(t,e,r){"use strict";r("9c0c")},"6d3d":function(t,e,r){},"719d":function(t,e,r){},"7a1b":function(t,e,r){},"86e8":function(t,e,r){"use strict";r("6d3d")},8823:function(t,e,r){"use strict";r("596d")},"8c7b":function(t,e,r){"use strict";r("5b73")},9224:function(t){t.exports=JSON.parse('{"a":"1.5.0"}')},"9c0c":function(t,e,r){},ae39:function(t,e,r){},baa1:function(t,e,r){"use strict";r("7a1b")},bd0b:function(t,e,r){},ca29:function(t,e,r){"use strict";r("bd0b")},e172:function(t,e,r){},ef74:function(t,e,r){}});
//# sourceMappingURL=app.dfce27c5.js.map