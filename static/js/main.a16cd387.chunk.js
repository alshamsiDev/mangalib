(this.webpackJsonpmangalib=this.webpackJsonpmangalib||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=(a(39),a(18)),i=a(9),m=a(10),s=a(12),u=a(11),d=a(13),p=a(31),b=a.n(p),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){e.preventDefault(),a.setState((function(e){e.count++})),a.props.addNewAnime(a.props.anime)},a.handleRemoveAnime=function(e){e.preventDefault(),a.props.removeAnime(a.props.anime)},a.showDetails=function(e){a.setState({details:r.a.createElement("div",null,r.a.createElement("h1",null,e.title),r.a.createElement("h2",null,e.episodes))})},a.state={count:0,details:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.counter.filter((function(t){return t.title===e.props.anime.title}));return r.a.createElement("div",{className:"card text-white bg-secondary border-info rounded ",style:{width:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:this.props.anime.image_url,className:"card-img-top rounded",alt:this.props.anime.title}),r.a.createElement("h5",{className:"card-title"},this.props.anime.title),r.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.handleClick},"add to cart ",r.a.createElement("span",{className:"badge badge-info"},0===t.length?"":t.length)),r.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.showDetails(e.props.anime)}},"more details")),r.a.createElement("h4",null),this.state.details)}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.topAnimes.map((function(t,a){return r.a.createElement(h,{anime:t,key:a,addNewAnime:e.props.addNewAnime,counter:e.props.counter})}));return r.a.createElement("div",{className:"wrapper"},t)}}]),t}(n.Component),v=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"DETAILS"))},f=a(6),g=function(){return r.a.createElement("nav",{className:" navbar navbar-expand-lg p-3 p-3 mb-2 bg-dark"},r.a.createElement(f.b,{className:"navbar-brand text-white",to:"/"},"Home"),r.a.createElement(f.b,{className:"navbar-brand text-white",to:"/CartPage"},"myCart "),r.a.createElement(f.b,{className:"navbar-brand text-white",to:"/Comments"},"comment"))},N=function(e){var t=e.carts.map((function(t,a){return r.a.createElement("div",{key:a,className:"card mb-3",style:{maxWidth:"540px"}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:t.image_url,className:"card-img",alt:"..."})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.title),r.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))))),r.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.removeAnime(t)}},"Remove item"))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},t.length<=0?r.a.createElement("h1",null,"Empty"):t),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.clearAllAnime()}}," Clear all items! "))},w=a(19),A=function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),i=Object(w.a)(o,2),m=i[0],s=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"Example textarea"),r.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",placeholder:"add comment",onChange:function(e){s(e.target.value)}}),r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg",onClick:function(e){c(m)}},"add")),r.a.createElement("div",{className:"hide"},r.a.createElement("p",null,l),r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg",onClick:function(){console.log("hide or show")}},"edit")))},x=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found"),r.a.createElement("h1",null,"404"),r.a.createElement(f.b,{to:"/"},"Go home"))},j=a(7),y=(a(62),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).addNewAnime=function(e){a.setState({carts:[e].concat(Object(o.a)(a.state.carts))})},a.removeAnime=function(e){var t=Object(o.a)(a.state.carts),n=t.indexOf(e);t.splice(n,1),a.setState({carts:t})},a.clearAllAnime=function(){a.setState({carts:[]})},a.state={animes:[],carts:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.jikan.moe/v3/top/anime").then((function(t){var a=t.data.top;e.setState({animes:a})})).catch((function(e){console.error("thi is error",e)}))}},{key:"render",value:function(){var e=this;return console.log(this.state.carts),r.a.createElement(f.a,{basename:"/mangalib"},r.a.createElement("div",null,r.a.createElement(g,null)),r.a.createElement("div",null,r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",component:function(){return r.a.createElement(E,{counter:e.state.carts,topAnimes:e.state.animes,addNewAnime:e.addNewAnime})},removeAnime:this.removeAnime}),r.a.createElement(j.a,{path:"/animeinfor",component:function(){return r.a.createElement(v,null)}}),r.a.createElement(j.a,{path:"/CartPage",component:function(){return r.a.createElement(N,{removeAnime:e.removeAnime,carts:e.state.carts,clearAllAnime:e.clearAllAnime})}}),r.a.createElement(j.a,{path:"/Comments",component:function(){return r.a.createElement(A,null)}}),r.a.createElement(j.a,{component:x}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.a16cd387.chunk.js.map