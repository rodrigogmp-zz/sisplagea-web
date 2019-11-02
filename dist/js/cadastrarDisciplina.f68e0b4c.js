(function(t){function a(a){for(var o,l,s=a[0],n=a[1],c=a[2],d=0,p=[];d<s.length;d++)l=s[d],r[l]&&p.push(r[l][0]),r[l]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],o=!0,s=1;s<e.length;s++){var n=e[s];0!==r[n]&&(o=!1)}o&&(i.splice(a--,1),t=l(l.s=e[0]))}return t}var o={},r={cadastrarDisciplina:0},i=[];function l(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=o,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)l.d(e,o,function(a){return t[a]}.bind(null,o));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],n=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var u=n;i.push([8,"chunk-vendors"]),e()})({"0956":function(t,a,e){"use strict";e.r(a);e("14c6"),e("08c1"),e("4842"),e("d9fc");var o=e("2b0e"),r=e("ce5b"),i=e.n(r),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("Menu"),e("Navbar",{attrs:{estaLogado:""}}),e("v-content",[e("ModuloCadastrarDisc")],1),e("Footer")],1)},s=[],n=e("d178"),c=e("fd2d"),u=e("fb62"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{"justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm10:"",md8:"",lg6:""}},[e("h1",[t._v("Cadastrar Disciplina")]),e("v-divider"),e("form",[e("v-text-field",{attrs:{label:"Nome",required:""},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs6:"",sm5:"",md4:"",lg3:""}},[e("v-text-field",{attrs:{label:"Código",required:""},model:{value:t.code,callback:function(a){t.code=a},expression:"code"}})],1),e("v-flex",{attrs:{xs6:"",sm5:"",md4:"",lg3:""}},[e("v-text-field",{attrs:{label:"Horas/Aulas",required:""},model:{value:t.workload,callback:function(a){t.workload=a},expression:"workload"}})],1)],1),e("v-radio-group",{attrs:{label:"Turma:"},model:{value:t.category,callback:function(a){t.category=a},expression:"category"}},[e("v-radio",{attrs:{label:"Graduação",value:"graduate"}}),e("v-radio",{attrs:{label:"Pós-Graduação",value:"postgraduate"}})],1),e("v-text-field",{attrs:{label:"Local das aulas",required:""},model:{value:t.class_location,callback:function(a){t.class_location=a},expression:"class_location"}}),e("v-textarea",{attrs:{label:"Descrição",required:""},model:{value:t.description,callback:function(a){t.description=a},expression:"description"}}),e("v-btn",{attrs:{outline:"",color:"info",right:!0},on:{click:t.cadastrarDisciplina}},[t._v("Cadastrar")])],1),e("v-alert",{attrs:{value:t.alerta,type:"success",transition:"scale-transition",dismissible:""},on:{click:function(a){t.alerta=!1}}},[t._v("Disciplina cadastrada com sucesso.")]),e("v-alert",{attrs:{value:t.erro,type:"error",transition:"scale-transition",dismissible:""},on:{click:function(a){t.erro=!1}}},[t._v("Erro ao cadastrar Disciplina.")])],1)],1)],1)},p=[],v=(e("7f7f"),e("bc3a")),f=e.n(v),m={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}},h={data:function(){return{alerta:!1,erro:!1,name:"",code:"",workload:"",category:"",class_location:"",description:""}},methods:{cadastrarDisciplina:function(){var t=this;f()({method:"post",url:"https://sisplagea-api.herokuapp.com/api/v1/subjects.json",headers:m.headers,data:{name:this.name,category:this.category,code:this.code,workload:this.workload,class_location:this.class_location,description:this.description}}).then(function(){t.alerta=!t.alerta,t.name="",t.category="",t.code="",t.workload="",t.class_location="",t.description="",setTimeout(t.setAlertFalse,5e3)}).catch(function(){t.erro=!0})},setAlertFalse:function(){this.alerta=!1}}},g=h,b=e("2877"),_=e("6544"),x=e.n(_),k=e("0798"),y=e("8336"),V=e("a523"),w=e("ce7e"),C=e("0e8f"),S=e("a722"),P=e("67b6"),j=e("43a6"),I=e("2677"),T=e("a844"),D=Object(b["a"])(g,d,p,!1,null,null,null),L=D.exports;x()(D,{VAlert:k["a"],VBtn:y["a"],VContainer:V["a"],VDivider:w["a"],VFlex:C["a"],VLayout:S["a"],VRadio:P["a"],VRadioGroup:j["a"],VTextField:I["a"],VTextarea:T["a"]});var O={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}};null==O.headers.client&&(window.location.href="/login.html");var q={name:"app",components:{Navbar:n["a"],Footer:c["a"],Menu:u["a"],ModuloCadastrarDisc:L}},A=q,G=e("7496"),M=e("549c"),E=Object(b["a"])(A,l,s,!1,null,null,null),F=E.exports;x()(E,{VApp:G["a"],VContent:M["a"]});e("bf40");o["default"].config.productionTip=!1,o["default"].use(i.a),new o["default"]({render:function(t){return t(F)}}).$mount("#app")},8:function(t,a,e){t.exports=e("0956")},d178:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-toolbar",{staticClass:"light-blue darken-3",attrs:{app:"",dark:"","clipped-left":"",dense:"",fixed:""}},[e("v-toolbar-title",{staticClass:"headline"},[e("v-icon",{attrs:{large:""}},[t._v("business")]),e("span",[t._v(" SisPlagea")]),e("span",{staticClass:"font-weight-light text-uppercase"},[t._v(" - Sistema de Planejamento e Gestão de Atividades")])],1),e("v-spacer"),t.estaLogado?e("v-btn",{attrs:{flat:"",href:"/mensagens.html"}},[e("span",{staticClass:"mr-2"},[t._v("Mensagens")]),e("v-icon",[t._v("email")])],1):t._e(),t.estaLogado?e("v-btn",{attrs:{flat:""},on:{click:t.logout}},[e("span",{staticClass:"mr-2"},[t._v("Sair")]),e("v-icon",[t._v("input")])],1):e("v-btn",{attrs:{flat:"",href:"/login.html"}},[e("span",{staticClass:"mr-2"},[t._v("Login")]),e("v-icon",[t._v("account_circle")])],1)],1)},r=[],i=e("bc3a"),l=e.n(i),s={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}},n={name:"Navbar",props:{estaLogado:Boolean},methods:{logout:function(){l()({method:"delete",url:"https://sisplagea-api.herokuapp.com/api/v1/auth/sign_out",headers:s.headers}).then(function(t){200==t.status&&(localStorage.removeItem("data['at']"),localStorage.removeItem("data['c']"),localStorage.removeItem("data['ct']"),localStorage.removeItem("data['rt']"),localStorage.removeItem("data['uid']"),window.location.href="/index.html")}).catch(function(){})}}},c=n,u=e("2877"),d=e("6544"),p=e.n(d),v=e("8336"),f=e("132d"),m=e("9910"),h=e("71d9"),g=e("2a7f"),b=Object(u["a"])(c,o,r,!1,null,null,null);a["a"]=b.exports;p()(b,{VBtn:v["a"],VIcon:f["a"],VSpacer:m["a"],VToolbar:h["a"],VToolbarTitle:g["a"]})},fb62:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-navigation-drawer",{staticClass:"grey darken-4",attrs:{width:"250",dark:"","mobile-break-point":"700",clipped:"",fixed:"",app:""}},[e("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[e("v-list",[e("v-list-tile",{attrs:{avatar:""}},[e("v-list-tile-avatar",{attrs:{color:"white"}},[e("v-img",{attrs:{contain:"",src:t.photo_url}})],1),e("v-list-tile-content",[e("v-list-tile-title",{staticClass:"title"},[t._v(t._s(t.informacoes.name))])],1)],1)],1)],1),e("v-list",{attrs:{"two-line":""}},[e("v-divider"),t._l(t.opcoes,function(a,o){return e("v-list-tile",{key:o,staticClass:"v-list-item",attrs:{href:a.para}},[e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icone))])],1),e("v-list-tile-title",{domProps:{textContent:t._s(a.titulo)}})],1)}),e("v-list-group",{attrs:{"sub-group":"","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-tile",[e("v-list-tile-title",[t._v("Cadastrar")])],1)]},proxy:!0}])},t._l(t.cadastros,function(a,o){return e("v-list-tile",{key:o,staticClass:"v-list-item",attrs:{href:a.para}},[e("v-list-tile-title",{domProps:{textContent:t._s(a.titulo)}}),e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icone))])],1)],1)}),1),e("v-list-group",{attrs:{"sub-group":"","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-tile",[e("v-list-tile-title",[t._v("Listar/Editar")])],1)]},proxy:!0}])},t._l(t.listas,function(a,o){return e("v-list-tile",{key:o,staticClass:"v-list-item",attrs:{href:a.para}},[e("v-list-tile-title",{domProps:{textContent:t._s(a.titulo)}}),e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icone))])],1)],1)}),1)],2)],1)},r=[],i=e("bc3a"),l=e.n(i),s={data:function(){return{informacoes:"",photo_url:"",url_base:"https://sisplagea-api.herokuapp.com/",opcoes:[{titulo:"Home",icone:"home",para:"/home.html"},{titulo:"Adicionar Aluno",icone:"person_add",para:"/adicionarAluno.html"},{titulo:"Editar Info Pessoais",icone:"settings",para:"/infoPessoais.html"}],cadastros:[{titulo:"Publicação",icone:"import_contacts",para:"/cadastrarPublicacao.html"},{titulo:"Grupo pesq.",icone:"group_add",para:"/cadastrarGrupoPesq.html"},{titulo:"Projeto pesq.",icone:"attachment",para:"/cadastrarProjPesq.html"},{titulo:"Disciplina",icone:"border_color",para:"/cadastrarDisciplina.html"}],listas:[{titulo:"Alunos",icone:"supervisor_account",para:"/listarAlunos.html"},{titulo:"Publicação",icone:"import_contacts",para:"/listarPublicacoes.html"},{titulo:"Grupo pesq.",icone:"group_add",para:"/listarGruposPesq.html"},{titulo:"Projeto pesq.",icone:"attachment",para:"/listarProjPesq.html"},{titulo:"Disciplina",icone:"border_color",para:"/listarDisciplinas.html"}]}},mounted:function(){var t=this;l()({method:"get",url:"https://sisplagea-api.herokuapp.com/api/v1/users/info.json"}).then(function(a){t.informacoes=a.data,t.photo_url=t.url_base+t.informacoes.photo.url}).catch(function(){alert("erro")})}},n=s,c=e("2877"),u=e("6544"),d=e.n(u),p=e("ce7e"),v=e("132d"),f=e("adda"),m=e("8860"),h=e("56b0"),g=e("ba95"),b=e("40fe"),_=e("c954"),x=e("5d23"),k=e("f774"),y=e("71d9"),V=Object(c["a"])(n,o,r,!1,null,null,null);a["a"]=V.exports;d()(V,{VDivider:p["a"],VIcon:v["a"],VImg:f["a"],VList:m["a"],VListGroup:h["a"],VListTile:g["a"],VListTileAction:b["a"],VListTileAvatar:_["a"],VListTileContent:x["a"],VListTileTitle:x["b"],VNavigationDrawer:k["a"],VToolbar:y["a"]})},fd2d:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-footer",{attrs:{dark:"",inset:"",absolute:"",dense:"",app:"",height:"auto"}},[e("v-card",{staticClass:"flex light-blue darken-3 white--text text-xs-center",attrs:{flat:"",tile:""}},[e("v-card-text",{staticClass:"white--text pt-3"},[t._v("\n            Trabalho de Programação Web.\n        ")]),e("v-divider"),e("v-card-text",{staticClass:"white--text"},[t._v("©2019 — "),e("strong",[t._v("Fábrica de Bugs")])])],1)],1)},r=[],i=e("2877"),l=e("6544"),s=e.n(l),n=e("b0af"),c=e("99d9"),u=e("ce7e"),d=e("553a"),p={},v=Object(i["a"])(p,o,r,!1,null,null,null);a["a"]=v.exports;s()(v,{VCard:n["a"],VCardText:c["b"],VDivider:u["a"],VFooter:d["a"]})}});
//# sourceMappingURL=cadastrarDisciplina.f68e0b4c.js.map