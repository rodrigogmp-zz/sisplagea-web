(function(t){function e(e){for(var r,n,l=e[0],s=e[1],c=e[2],d=0,p=[];d<l.length;d++)n=l[d],o[n]&&p.push(o[n][0]),o[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},o={cadastrarGrupoPesq:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push([9,"chunk-vendors"]),a()})({"6c21":function(t,e,a){"use strict";a.r(e);a("14c6"),a("08c1"),a("4842"),a("d9fc");var r=a("2b0e"),o=a("ce5b"),i=a.n(o),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Menu"),a("Navbar",{attrs:{estaLogado:""}}),a("v-content",[a("ModuloCadastrarGrupo")],1),a("Footer")],1)},l=[],s=a("d178"),c=a("fd2d"),u=a("fb62"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:"",lg6:""}},[a("h1",[t._v("Cadastrar Grupo de Pesquisa")]),a("v-divider"),a("form",[a("v-text-field",{attrs:{label:"Nome do Grupo",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-flex",{attrs:{xs3:"",sm3:"",md3:"",lg3:""}},[a("v-text-field",{attrs:{label:"Ano de criação",required:""},model:{value:t.create_year,callback:function(e){t.create_year=e},expression:"create_year"}})],1),a("v-textarea",{attrs:{label:"Líder(es)",required:""},model:{value:t.leaders,callback:function(e){t.leaders=e},expression:"leaders"}}),a("v-text-field",{attrs:{label:"Área predominante",required:""},model:{value:t.predominant_area,callback:function(e){t.predominant_area=e},expression:"predominant_area"}}),a("v-textarea",{attrs:{label:"Objetivos",required:""},model:{value:t.objective,callback:function(e){t.objective=e},expression:"objective"}}),a("v-btn",{attrs:{outline:"",color:"info",right:!0},on:{click:t.cadastrarGrupo}},[t._v("Cadastrar")])],1),a("v-alert",{attrs:{value:t.alerta,type:"success",transition:"scale-transition",dismissible:""},on:{click:function(e){t.alerta=!1}}},[t._v("Grupo de pesquisa cadastrado com sucesso.")])],1)],1)],1)},p=[],v=(a("7f7f"),a("bc3a")),f=a.n(v),m={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}},h={data:function(){return{alerta:!1,erro:!1,name:"",create_year:"",leaders:"",predominant_area:"",objective:""}},methods:{cadastrarGrupo:function(){var t=this;f()({method:"post",url:"https://sisplagea-api.herokuapp.com/api/v1/study_groups.json",headers:m.headers,data:{name:this.name,create_year:this.create_year,leaders:this.leaders,predominant_area:this.predominant_area,objective:this.objective}}).then(function(){t.alerta=!t.alerta,t.name="",t.create_year="",t.leaders="",t.predominant_area="",t.objective="",setTimeout(t.setAlertFalse,5e3)}).catch(function(){t.erro=!0})},setAlertFalse:function(){this.alerta=!1}}},b=h,g=a("2877"),_=a("6544"),x=a.n(_),y=a("0798"),V=a("8336"),k=a("a523"),j=a("ce7e"),C=a("0e8f"),P=a("a722"),S=a("2677"),w=a("a844"),I=Object(g["a"])(b,d,p,!1,null,null,null),T=I.exports;x()(I,{VAlert:y["a"],VBtn:V["a"],VContainer:k["a"],VDivider:j["a"],VFlex:C["a"],VLayout:P["a"],VTextField:S["a"],VTextarea:w["a"]});var q={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}};null==q.headers.client&&(window.location.href="/login.html");var L={name:"app",components:{Navbar:s["a"],Footer:c["a"],Menu:u["a"],ModuloCadastrarGrupo:T}},O=L,A=a("7496"),G=a("549c"),M=Object(g["a"])(O,n,l,!1,null,null,null),D=M.exports;x()(M,{VApp:A["a"],VContent:G["a"]});a("bf40");r["default"].config.productionTip=!1,r["default"].use(i.a),new r["default"]({render:function(t){return t(D)}}).$mount("#app")},9:function(t,e,a){t.exports=a("6c21")},d178:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"light-blue darken-3",attrs:{app:"",dark:"","clipped-left":"",dense:"",fixed:""}},[a("v-toolbar-title",{staticClass:"headline"},[a("v-icon",{attrs:{large:""}},[t._v("business")]),a("span",[t._v(" SisPlagea")]),a("span",{staticClass:"font-weight-light text-uppercase"},[t._v(" - Sistema de Planejamento e Gestão de Atividades")])],1),a("v-spacer"),t.estaLogado?a("v-btn",{attrs:{flat:"",href:"/mensagens.html"}},[a("span",{staticClass:"mr-2"},[t._v("Mensagens")]),a("v-icon",[t._v("email")])],1):t._e(),t.estaLogado?a("v-btn",{attrs:{flat:""},on:{click:t.logout}},[a("span",{staticClass:"mr-2"},[t._v("Sair")]),a("v-icon",[t._v("input")])],1):a("v-btn",{attrs:{flat:"",href:"/login.html"}},[a("span",{staticClass:"mr-2"},[t._v("Login")]),a("v-icon",[t._v("account_circle")])],1)],1)},o=[],i=a("bc3a"),n=a.n(i),l={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}},s={name:"Navbar",props:{estaLogado:Boolean},methods:{logout:function(){n()({method:"delete",url:"https://sisplagea-api.herokuapp.com/api/v1/auth/sign_out",headers:l.headers}).then(function(t){200==t.status&&(localStorage.removeItem("data['at']"),localStorage.removeItem("data['c']"),localStorage.removeItem("data['ct']"),localStorage.removeItem("data['rt']"),localStorage.removeItem("data['uid']"),window.location.href="/index.html")}).catch(function(){})}}},c=s,u=a("2877"),d=a("6544"),p=a.n(d),v=a("8336"),f=a("132d"),m=a("9910"),h=a("71d9"),b=a("2a7f"),g=Object(u["a"])(c,r,o,!1,null,null,null);e["a"]=g.exports;p()(g,{VBtn:v["a"],VIcon:f["a"],VSpacer:m["a"],VToolbar:h["a"],VToolbarTitle:b["a"]})},fb62:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"grey darken-4",attrs:{width:"250",dark:"","mobile-break-point":"700",clipped:"",fixed:"",app:""}},[a("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[a("v-list",[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",{attrs:{color:"white"}},[a("v-img",{attrs:{contain:"",src:t.photo_url}})],1),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"title"},[t._v(t._s(t.informacoes.name))])],1)],1)],1)],1),a("v-list",{attrs:{"two-line":""}},[a("v-divider"),t._l(t.opcoes,function(e,r){return a("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{href:e.para}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icone))])],1),a("v-list-tile-title",{domProps:{textContent:t._s(e.titulo)}})],1)}),a("v-list-group",{attrs:{"sub-group":"","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-tile",[a("v-list-tile-title",[t._v("Cadastrar")])],1)]},proxy:!0}])},t._l(t.cadastros,function(e,r){return a("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{href:e.para}},[a("v-list-tile-title",{domProps:{textContent:t._s(e.titulo)}}),a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icone))])],1)],1)}),1),a("v-list-group",{attrs:{"sub-group":"","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-tile",[a("v-list-tile-title",[t._v("Listar/Editar")])],1)]},proxy:!0}])},t._l(t.listas,function(e,r){return a("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{href:e.para}},[a("v-list-tile-title",{domProps:{textContent:t._s(e.titulo)}}),a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icone))])],1)],1)}),1)],2)],1)},o=[],i=a("bc3a"),n=a.n(i),l={data:function(){return{informacoes:"",photo_url:"",url_base:"https://sisplagea-api.herokuapp.com/",opcoes:[{titulo:"Home",icone:"home",para:"/home.html"},{titulo:"Adicionar Aluno",icone:"person_add",para:"/adicionarAluno.html"},{titulo:"Buscar atividades",icone:"search",para:"/buscarAtividades.html"},{titulo:"Editar Info Pessoais",icone:"settings",para:"/infoPessoais.html"}],cadastros:[{titulo:"Publicação",icone:"import_contacts",para:"/cadastrarPublicacao.html"},{titulo:"Grupo pesq.",icone:"group_add",para:"/cadastrarGrupoPesq.html"},{titulo:"Projeto pesq.",icone:"attachment",para:"/cadastrarProjPesq.html"},{titulo:"Disciplina",icone:"border_color",para:"/cadastrarDisciplina.html"}],listas:[{titulo:"Alunos",icone:"supervisor_account",para:"/listarAlunos.html"},{titulo:"Publicação",icone:"import_contacts",para:"/listarPublicacoes.html"},{titulo:"Grupo pesq.",icone:"group_add",para:"/listarGruposPesq.html"},{titulo:"Projeto pesq.",icone:"attachment",para:"/listarProjPesq.html"},{titulo:"Disciplina",icone:"border_color",para:"/listarDisciplinas.html"}]}},mounted:function(){var t=this;n()({method:"get",url:"https://sisplagea-api.herokuapp.com/api/v1/users/info.json"}).then(function(e){t.informacoes=e.data,t.photo_url=t.url_base+t.informacoes.photo.url}).catch(function(){alert("erro")})}},s=l,c=a("2877"),u=a("6544"),d=a.n(u),p=a("ce7e"),v=a("132d"),f=a("adda"),m=a("8860"),h=a("56b0"),b=a("ba95"),g=a("40fe"),_=a("c954"),x=a("5d23"),y=a("f774"),V=a("71d9"),k=Object(c["a"])(s,r,o,!1,null,null,null);e["a"]=k.exports;d()(k,{VDivider:p["a"],VIcon:v["a"],VImg:f["a"],VList:m["a"],VListGroup:h["a"],VListTile:b["a"],VListTileAction:g["a"],VListTileAvatar:_["a"],VListTileContent:x["a"],VListTileTitle:x["b"],VNavigationDrawer:y["a"],VToolbar:V["a"]})},fd2d:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",inset:"",absolute:"",dense:"",app:"",height:"auto"}},[a("v-card",{staticClass:"flex light-blue darken-3 white--text text-xs-center",attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"white--text pt-3"},[t._v("\n            Trabalho de Programação Web.\n        ")]),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v("©2019 — "),a("strong",[t._v("Fábrica de Bugs")])])],1)],1)},o=[],i=a("2877"),n=a("6544"),l=a.n(n),s=a("b0af"),c=a("99d9"),u=a("ce7e"),d=a("553a"),p={},v=Object(i["a"])(p,r,o,!1,null,null,null);e["a"]=v.exports;l()(v,{VCard:s["a"],VCardText:c["b"],VDivider:u["a"],VFooter:d["a"]})}});
//# sourceMappingURL=cadastrarGrupoPesq.4c6fe0be.js.map