(this.webpackJsonprefoto=this.webpackJsonprefoto||[]).push([[0],{65:function(e,t,a){e.exports=a(94)},70:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),c=a.n(r),i=(a(70),a(27)),l=a(22),s=a(47),u=a(125),m=a(128),p=a(126),d=a(54),h=a.n(d),f=a(29),g=a(124),E=a(118),v=a(127),b=a(17),O=a.n(b),T=a(120),j=a(119),C={withCredentials:!0,headers:{"Access-Control-Allow-Headers":"Authorization","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE","Content-Type":"application/json;charset=UTF-8"}},y=Object(s.a)((function(e){return{root:{marginTop:e.spacing(2),marginBottom:e.spacing(3)},google_button:{},icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)}}}));var w=function(){var e=y(),t=Object(l.f)();return Object(n.useEffect)((function(){O.a.get("http://refoto.appspot.com/get_status",C).then((function(e){"True"===e.data.running&&t.push("/status")})).catch((function(e){console.log(e)}))}),[]),o.a.createElement(v.a,{className:e.root},o.a.createElement("div",{className:e.heroContent},o.a.createElement(E.a,{maxWidth:"sm"},o.a.createElement(f.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Bem-vindo ao ReFoto!"),o.a.createElement(f.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Seu maravilhoso restaurador autom\xe1tico de fotos antigas"),o.a.createElement("div",{className:e.heroButtons},o.a.createElement(j.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(j.a,{item:!0},o.a.createElement(T.a,{className:e.google_button,variant:"contained",color:"primary",onClick:function(){O.a.get("http://refoto.appspot.com/do_authorize",C).then((function(e){var t=e.data;window.location.href=String(t)})).catch((function(e){console.log(e)}))}},"Restaurar \xe1lbum do meu Google Drive")),o.a.createElement(j.a,{item:!0},o.a.createElement(T.a,{variant:"outlined",color:"primary"},"Enviar fotos a partir do meu computador")))))))},S=a(15),A=a(121),k=a(129),_=a(122),N=a(123),P=a(52),x=a.n(P),F={withCredentials:!0,headers:{"Access-Control-Allow-Headers":"Authorization","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE","Content-Type":"application/json;charset=UTF-8"}},B=Object(s.a)((function(e){return{root:{marginBottom:e.spacing(3)}}}));var D=function(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),i=Object(S.a)(c,2),s=i[0],u=i[1],m=B(),p=Object(l.f)();return Object(n.useEffect)((function(){O.a.get("http://refoto.appspot.com/list_drive_files",F).then((function(e){var t=e.data;"True"===t.running?p.push("/status"):r(t.list)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",{className:m.root},o.a.createElement(f.a,{variant:"h4"},"Escolha aqui uma das pastas do seu Google Drive:"),o.a.createElement(f.a,{variant:"subtitle"},'Depois clique no bot\xe3o "restaurar" (no final da p\xe1gina) para que todas as fotos contidas nesta pasta sejam restauradas automaticamente.'),o.a.createElement(A.a,{component:"nav","aria-label":"main mailbox folders"},a.map((function(e){return o.a.createElement(k.a,{button:!0,key:e.id,selected:s===e.id,onClick:function(t){return a=e.id,void u(a);var a}},o.a.createElement(_.a,null,o.a.createElement(x.a,null)),o.a.createElement(N.a,{primary:e.name}))}))),o.a.createElement(T.a,{variant:"contained",color:"primary",onClick:function(){null!==s&&O.a.get("http://refoto.appspot.com/process_folder/"+s,F).then((function(e){"True"===e.data.running?p.push("/status"):console.log("erro!")})).catch((function(e){console.log(e)}))},disabled:null===s},"Restaurar!"))},R=a(130),H=a(53),W=a.n(H),U={withCredentials:!0,headers:{"Access-Control-Allow-Headers":"Authorization","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE","Content-Type":"application/json;charset=UTF-8"}},G=Object(s.a)((function(e){return{root:{marginBottom:e.spacing(3)}}}));var I=function(){var e=Object(n.useState)([]),t=Object(S.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(S.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)(0),p=Object(S.a)(m,2),d=p[0],h=p[1],g=Object(n.useState)(0),E=Object(S.a)(g,2),v=E[0],b=E[1],j=G(),C=Object(l.f)(),y=function(e,t,a){var o=Object(n.useState)([]),r=Object(S.a)(o,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){var n=[];e.map((function(e,o){t<o?n.push(0):t>o?n.push(100):t===o&&n.push(a)})),i(n)}),[t,a]),c}(a,d,v);function w(){O.a.get("http://refoto.appspot.com/get_status",U).then((function(e){var t=e.data;"False"===t.running?C.push("/"):(h(t.current_file),b(t.progress))})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){O.a.get("http://refoto.appspot.com/get_filelist",U).then((function(e){var t=e.data;"False"===t.running?C.push("/"):"True"===t.running&&(u(t.folder_name),r(t.files_list))})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){w(),setInterval((function(){w()}),1e3)}),[]),o.a.createElement("div",{className:j.root},o.a.createElement(f.a,{variant:"h4"},"Seus arquivos est\xe3o sendo processados..."),o.a.createElement(f.a,{variant:"subtitle"},"Quando terminar, todos ser\xe3o salvos na pasta: ",s,"_resultado."),o.a.createElement(A.a,{component:"nav","aria-label":"main mailbox folders"},a.map((function(e,t){return o.a.createElement(k.a,{key:e.id},o.a.createElement(_.a,null,o.a.createElement(W.a,null)),o.a.createElement(N.a,{primary:e.name}),o.a.createElement(R.a,{variant:"determinate",value:y[t]}))}))),o.a.createElement(T.a,{variant:"contained",onClick:function(){O.a.get("http://refoto.appspot.com/cancel_processing",U).then((function(e){"False"===e.data.running&&C.push("/")})).catch((function(e){console.log(e)}))}},"Cancelar"))},q=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"white"},icon:{marginRight:e.spacing(2)},main:{marginTop:e.spacing(4),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"dark"===e.palette.type?e.palette.grey[800]:e.palette.grey[100]}}}));function z(){return o.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(g.a,{color:"inherit",href:"https://refoto.com.br/"},"ReFoto")," ",(new Date).getFullYear(),".")}var L=function(){var e=q();return o.a.createElement(i.a,null,o.a.createElement(v.a,{className:e.root},o.a.createElement(u.a,null),o.a.createElement(m.a,{position:"relative"},o.a.createElement(p.a,null,o.a.createElement(h.a,{className:e.icon}),o.a.createElement(f.a,{variant:"h6",color:"inherit",noWrap:!0},"ReFoto!"))),o.a.createElement(E.a,{component:"main",className:e.main,maxWidth:"sm"},o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/drive"},o.a.createElement(D,null)),o.a.createElement(l.a,{path:"/status"},o.a.createElement(I,null)),o.a.createElement(l.a,{path:"/"},o.a.createElement(w,null)))),o.a.createElement("footer",{className:e.footer},o.a.createElement(E.a,{maxWidth:"sm"},o.a.createElement(f.a,{variant:"h6",align:"center",gutterBottom:!0},"ReFoto"),o.a.createElement(f.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Desenvolvido por: Rodrigo Werneck Franco"),o.a.createElement(z,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.143c6e58.chunk.js.map