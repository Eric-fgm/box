(function(e){function t(t){for(var a,o,c=t[0],r=t[1],d=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,c=1;c<s.length;c++){var r=s[c];0!==n[r]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/box/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=r;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0ed2":function(e,t,s){"use strict";s("8428")},"40bf":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},e._l(e.comBoxData,(function(t,a){return s("Box",{key:a,class:t.classes,attrs:{data:t,tasks:t.tasks},on:{event:e.handleEvent,onSaveTask:e.handleSave,onRemoveTask:e.handleRemove}})})),1),e.inputVisible?s("Input",{on:{value:e.handleValue,hide:e.hideInput}}):e._e()],1)},i=[],o=(s("4de4"),s("4160"),s("498a"),s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box",class:{active:e.isActive},on:{click:e.emitEvent,mousedown:e.addClass}},[s("div",{staticClass:"box__header"},[s("div",{staticClass:"box__header-top"},[s("div",{staticClass:"box__header-icon"},[e._v(e._s(e.data.icon))]),s("div",{staticClass:"box__header-counter"},[e._v(" "+e._s(e.data.count||0)+" ")])]),s("div",{staticClass:"box__header-bottom"},[s("h3",{staticClass:"box__header-headline"},[e._v(e._s(e.data.headline))]),s("span",{staticClass:"box__header-subhead"},[e._v(e._s(e.data.subhead))])])]),s("div",{ref:"scrollable",staticClass:"box__content box__scrollable"},[s("ul",{staticClass:"box__content-list"},e._l(e.tasks,(function(t){return s("Task",{key:t.id,attrs:{singleItem:t},on:{saveTask:e.emitSaveTask,removeTask:e.emitRemoveTask}})})),1)])])}),c=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"box__content-item",on:{mousedown:function(t){return t.stopPropagation(),e.stopTheEvent(t)}}},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"box__content-title",attrs:{type:"text"},domProps:{value:e.value},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveTask(t)},input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._l(e.singleItem.additional,(function(t,a){return s("span",{key:a,staticClass:"box__content-additional"},[e._v(" "+e._s(0==a?t+" • ":t)+" ")])}))],2),s("div",{staticClass:"box__content-manage"},[s("div",{staticClass:"box__content-save",on:{click:e.saveTask}},[s("span")]),s("div",{staticClass:"box__content-remove",on:{click:e.removeTask}},[s("span")])])])},d=[],l={name:"Task",props:["singleItem"],data:function(){return{value:this.singleItem.title}},watch:{},methods:{saveTask:function(){this.singleItem.title!==this.value&&this.$emit("saveTask",{value:this.value,id:this.singleItem.id})},removeTask:function(){this.$emit("removeTask",this.singleItem.id)},stopTheEvent:function(){console.log("s")}}},u=l,f=(s("594d"),s("2877")),b=Object(f["a"])(u,r,d,!1,null,"990b4518",null),j=b.exports,m={name:"Box",props:["data","tasks"],components:{Task:j},data:function(){return{isActive:!1}},watch:{tasks:function(){this.$refs.scrollable.scrollTop=0}},methods:{emitSaveTask:function(e){this.$emit("onSaveTask",e)},emitRemoveTask:function(e){this.$emit("onRemoveTask",e)},emitEvent:function(){this.$emit("event",this.data.event)},addClass:function(){"add-class"===this.data.event&&(this.isActive=!this.isActive)}}},h=m,v=(s("d9a0"),Object(f["a"])(h,o,c,!1,null,"dcd806b2",null)),p=v.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"input",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.emitValue(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text",name:"",id:""},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"datetime-local",name:"",id:""},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})])},g=[],y={name:"Input",props:{},data:function(){return{value:"",date:void 0}},mounted:function(){var e=this;document.addEventListener("keyup",(function(t){27===t.keyCode&&e.$emit("hide")}))},methods:{emitValue:function(){""!==this.value.trim()&&this.$emit("value",{value:this.value,date:this.date})}}},_=y,x=(s("0ed2"),Object(f["a"])(_,k,g,!1,null,"0473bba8",null)),z=x.exports,w=s("c1df"),T=s.n(w);T.a.locale("pl");var O={name:"App",components:{Box:p,Input:z},computed:{comBoxData:function(){var e=this.tasks,t=[],s=[{icon:"A",count:1,headline:"Ogólne",subhead:"Zobacz wszystkie zadania."},{icon:"S",count:3,headline:"Warto zobaczyć",subhead:"Zobacz wszystkie zadania."},{icon:"B",headline:"Wszystkie",subhead:"Zobacz wszystkie zadania.",classes:"stretch horizontal",event:"add-class"},{icon:"D",headline:"Dzisiejsze",subhead:"Zobacz wszystkie zadania.",classes:"stretch vertical",event:"add-class"},{icon:"E",count:1,headline:"Ważne",subhead:"Zobacz wszystkie zadania."},{icon:"L",count:"0",headline:"Dodaj zadanie",subhead:"Dodaj kolejne zadanie.",event:"add-task"}];return e.forEach((function(e){console.log("rendered");var s=T()(parseInt(e.timestamp+"000")),a=T()(),n=s.format("dddd"),i=s.format("hh:mm A");e.additional=[n,i],s.format("D")===a.format("D")&&s.format("M")===a.format("M")&&s.format("Y")===a.format("Y")&&t.push(e)})),s[3].tasks=t.sort((function(e,t){return t.timestamp-e.timestamp})),s[3].count=t.length,s[2].tasks=e.sort((function(e,t){return t.timestamp-e.timestamp})),s[2].count=e.length,s}},data:function(){return{tasks:[],inputVisible:!1}},mounted:function(){localStorage.getItem("tasks")&&(this.tasks=JSON.parse(localStorage.getItem("tasks")))},methods:{handleRemove:function(e){var t=this.tasks.filter((function(t){return t.id!==e}));this.tasks=t,localStorage.tasks=JSON.stringify(this.tasks)},handleSave:function(e){var t=e.value,s=e.id;if(""!=t.trim()){for(var a=this.tasks,n=0;n<a.length;n++)a[n].id==s&&(a[n].title=t,a[n].id=T()().unix());this.tasks=a,localStorage.tasks=JSON.stringify(this.tasks)}},handleValue:function(e){var t=e.value,s=e.date;s=void 0!==s?T()(s).unix():T()().unix();var a={title:t,timestamp:s,id:T()().unix()};this.tasks.push(a),localStorage.tasks=JSON.stringify(this.tasks),this.hideInput()},handleEvent:function(e){switch(e){case"add-task":this.showInput()}},showInput:function(){this.inputVisible=!0},hideInput:function(){this.inputVisible=!1}}},C=O,S=(s("5c0b"),Object(f["a"])(C,n,i,!1,null,null,null)),I=S.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(I)}}).$mount("#app")},"594d":function(e,t,s){"use strict";s("40bf")},"5c0b":function(e,t,s){"use strict";s("9c0c")},8428:function(e,t,s){},"9c0c":function(e,t,s){},d9a0:function(e,t,s){"use strict";s("ea6f")},ea6f:function(e,t,s){}});
//# sourceMappingURL=app.0ac9a563.js.map