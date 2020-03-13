(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{36:function(e,t,a){e.exports=a(52)},42:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),o=a.n(i),c=a(31),l=a(33),s=a.n(l),m=(a(42),a(35)),d=a(15),u=a(11),p="https://api.themoviedb.org/3",v="".concat(p,"/discover/movie"),f="".concat(p,"/movie"),h="api_key=".concat("1821c6b6049945b0e08619035590d15b"),E=a(1),x=a(23),b=a.n(x),w=a(24);var g=function(e){var t=e.score,a=e.sx;return r.a.createElement(E.a,{sx:Object(w.a)({display:"inline-block",color:"#0e1111",bg:"#FFD700",px:[2,3],py:[1,2,3],borderRadius:9999},a)},r.a.createElement(E.f,{fontSize:[1,2,3]},Math.trunc(t)))};var y=function(e){var t=e.color,a=e.isFilled,n=e.onClick;return r.a.createElement("div",{onClick:n,style:{display:"inline-block",float:"right"}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:a?"#FFD700":"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-star"},r.a.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})))};var k=function(e){var t=e.movie,a=e.favorites,n=e.onClickDetails,i=a.includes(t.id);return r.a.createElement(E.c,{sx:{p:2,border:"0.3px solid #808080",borderRadius:2,boxShadow:"0px 2px 10px #e0e0e0;"}},r.a.createElement(E.a,{pb:2},r.a.createElement(E.f,{fontSize:[2,3,4]},t.title,i&&r.a.createElement(y,{color:"#FFD700",isFilled:i}))),r.a.createElement(E.d,null,r.a.createElement(E.a,{width:.25},r.a.createElement(E.e,{sx:{width:[84,128,256]},src:"https://image.tmdb.org/t/p/w370_and_h556_bestv2".concat(t.poster_path)})),r.a.createElement(E.a,{display:"flex",sx:{alignItems:"center",paddingBottom:"24px"},width:1/1.5},r.a.createElement(E.a,{py:2,sx:{textAlign:"center",width:"100%"}},r.a.createElement(E.f,{fontSize:[1,2,3],pt:2,pb:[3,4]},"Released ",b()(t.release_date).format("MMMM Do YYYY")),r.a.createElement(E.b,{variant:"outline",onClick:function(){return n(t)}},"Show Details"))),r.a.createElement(E.a,{width:1/8,display:"flex",sx:{alignItems:"center"}},r.a.createElement(g,{score:t.popularity}))))};var j=function(e){var t=e.movies,a=e.favorites,n=e.onClickDetails;return r.a.createElement("div",{style:{paddingTop:"54px"}},t.map((function(e){return r.a.createElement(E.a,{key:e.title,sx:{p:1}},r.a.createElement(k,{favorites:a,onClickDetails:n,movie:e}))})))};var O=function(e){var t=e.title,a=e.children;return r.a.createElement(E.d,{sx:{position:"fixed",width:"100%",textAlign:"center"},py:2,px:2,color:"white",bg:"black",alignItems:"center"},r.a.createElement(E.f,{fontSize:[1,2],sx:{width:"100%"},p:2,fontWeight:"bold"},t),a,r.a.createElement(E.a,{mx:"auto"}))};var _=function(e){var t=e.onClickDetails,a=e.movies,n=e.favorites;return r.a.createElement("div",null,r.a.createElement(O,{title:"Movies"}),r.a.createElement(j,{favorites:n,onClickDetails:t,movies:a}))},F=a(17);var D=function(e){var t=e.movie,a=e.onFavorite,n=e.favorites;return r.a.createElement(E.a,{style:{paddingTop:"64px"}},r.a.createElement(E.d,{px:2},r.a.createElement(E.a,{p:[0,2],width:1/3},r.a.createElement(E.e,{sx:{width:256},src:"https://image.tmdb.org/t/p/w370_and_h556_bestv2".concat(t.poster_path)})),r.a.createElement(E.a,{width:.5,sx:{display:"flex",alignItems:"center"},px:3},r.a.createElement(E.f,{sx:{display:"inline"},fontSize:[1,2,3]},"Released ",b()(t.release_date).format("MMMM Do YYYY"))),r.a.createElement(E.a,{width:1/8,pt:[0,2],sx:{display:"inline",paddingRight:2}},r.a.createElement(g,{sx:{float:"right"},score:t.popularity})),r.a.createElement(E.a,{width:.1,pt:[0,3],sx:{display:"inline"}},r.a.createElement(y,{color:"black",isFilled:n.includes(t.id),onClick:function(){a(n,t)},width:"36",height:"36"}))),r.a.createElement(E.a,{px:2,pt:2},t.overview))};var M=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x"},r.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))};var C=function(e){var t=Object(u.g)().pathname.split("/"),a=t[t.length-1],i=Object(n.useState)(Object(w.a)({},e.movie)),o=Object(d.a)(i,2),c=o[0],l=o[1];return c.id||function(e){return fetch("".concat(f,"/").concat(e,"?").concat(h)).then((function(e){return e.json()})).catch(console.error)}(a).then(l),r.a.createElement("div",null,r.a.createElement(O,{title:c.title},r.a.createElement(F.b,{style:{color:"white",paddingTop:"4px"},to:"/"},r.a.createElement(M,null))),c.id&&r.a.createElement(D,{favorites:e.favorites,onFavorite:e.onFavorite,movie:c}))};var S=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(),c=Object(d.a)(o,2),l=c[0],s=c[1],p=Object(n.useState)([]),f=Object(d.a)(p,2),E=f[0],x=f[1],b=Object(u.f)();return Object(n.useEffect)((function(){var e;(e=2016,fetch("".concat(v,"?").concat(function(e){return"primary_release_year=".concat(e)}(e),"&").concat("sort_by=popularity.desc","&").concat(h)).then((function(e){return e.json()})).then((function(e){return e.results.sort((function(e,t){return Math.trunc(e.popularity)>Math.trunc(t.popularity)?-1:1}))})).catch(console.error)).then((function(e){return i(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/movie/:id"},r.a.createElement(C,{onFavorite:function(e,t){var a=E.includes(t.id);x(a?E.filter((function(e){return e.id===t.id})):[].concat(Object(m.a)(E),[t.id]))},movie:l,favorites:E})),r.a.createElement(u.a,{path:"/"},r.a.createElement(_,{favorites:E,onClickDetails:function(e){b.push("/movie/".concat(e.id)),s(e)},movies:a}))))};var Y=function(e){var t=e.children;return r.a.createElement(F.a,null,t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49).config(),o.a.render(r.a.createElement(c.a,{theme:s.a},r.a.createElement(Y,null,r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.0544cd1b.chunk.js.map