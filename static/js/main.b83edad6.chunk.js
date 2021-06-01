(this["webpackJsonppokedex-cards"]=this["webpackJsonppokedex-cards"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(6),r=n.n(c),o=(n(16),n(2)),i=n.n(o),l=n(4),d=n(7),u=n(8),p=n(3),h=n(11),j=n(10),m=(n(18),n(19),n(20),n(0)),b=function(e){return Object(m.jsx)("div",{className:"card-border "+e.pokemon.types[0],children:Object(m.jsxs)("div",{className:"card-container",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsxs)("span",{className:"name",children:[e.pokemon.name+" ",Object(m.jsxs)("span",{className:"id",children:["#",("00"+e.pokemon.id).slice(-3)]})]}),Object(m.jsxs)("span",{className:"hp",children:[e.pokemon.hp," HP"]})]}),Object(m.jsx)("div",{className:"image-container bkg"+parseInt(e.pokemon.types[0],36)%6,title:e.pokemon.name,children:Object(m.jsx)("img",{src:e.pokemon.img,alt:e.pokemon.name,loading:"lazy"})}),Object(m.jsxs)("div",{className:"stats",children:[Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:e.pokemon.types.map((function(e){return Object(m.jsxs)("span",{className:e+" types",children:[e," "]},e)}))})}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:(.1*e.pokemon.height).toFixed(2)})," m"]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:(.1*e.pokemon.weight).toFixed(2)})," kg"]})]}),Object(m.jsx)("div",{className:"abilities",children:e.pokemon.abilities.map((function(t,n){return Object(m.jsxs)("div",{className:"ability ability"+n,children:[Object(m.jsxs)("p",{className:e.pokemon.types[0]+" types",children:[t.name,":"]}),Object(m.jsxs)("span",{title:t.effect,children:[Object(m.jsx)("input",{id:e.pokemon.id+t.name,type:"checkbox"}),Object(m.jsx)("label",{for:e.pokemon.id+t.name,children:t.effect}),Object(m.jsx)("div",{className:"tooltip",children:t.effect})]})]},n)}))})]})})},x=function(e){return Object(m.jsx)("div",{className:"card-list",children:e.pokecards.filter((function(t){return t.name.includes(e.searchBox.toLowerCase())||t.types.find((function(t){return t.includes(e.searchBox.toLowerCase())}))||t.abilities.find((function(t){return t.name.includes(e.searchBox.toLowerCase())}))})).map((function(e){return Object(m.jsx)(b,{pokemon:e},e.id)}))})},g=n(9),f=(n(22),n.p+"static/media/pokedex_logo.62bee4d5.webp"),O=function(e){var t=Object(a.useState)(0),n=Object(g.a)(t,2),s=n[0],c=n[1];return Object(m.jsxs)("nav",{children:[Object(m.jsx)("img",{src:f,alt:"Pokedex logo",className:"pokedex"}),Object(m.jsx)("div",{className:"loading-bar",style:{width:e.progress+"%"}}),e.loading?Object(m.jsx)("div",{className:"loading-container",children:Object(m.jsxs)("p",{children:["Loading and caching data from pokeapi.co.",Object(m.jsx)("strong",{children:e.currentPokemon?" Fetching: "+e.currentPokemon:""})]})}):Object(m.jsxs)("div",{className:"nav-container",children:[Object(m.jsxs)("select",{value:s,onChange:function(t){e.selectChange(t),c(t.target.value)},name:"Generations",children:[Object(m.jsx)("option",{value:"0",children:"Gen I"}),Object(m.jsx)("option",{value:"1",children:"Gen II"}),Object(m.jsx)("option",{value:"2",children:"Gen III"}),Object(m.jsx)("option",{value:"3",children:"Gen IV"}),Object(m.jsx)("option",{value:"4",children:"Gen V"}),Object(m.jsx)("option",{value:"5",children:"Gen VI"}),Object(m.jsx)("option",{value:"6",children:"Gen VII"}),Object(m.jsx)("option",{value:"7",children:"Gen VIII"})]}),Object(m.jsx)("input",{type:"search",placeholder:"Search Cards by Name, Type or Ability",onChange:e.searchBoxChange})]})]})},k=(n(23),n.p+"static/media/logo192.2f6e61c9.png"),v=function(e){return e.loading?Object(m.jsx)("div",{className:"loader",children:Object(m.jsx)("img",{src:k,alt:"Poke ball"})}):Object(m.jsx)(m.Fragment,{})},y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={pokecards:[],searchBox:"",loading:!0,progress:0,currentPokemon:""},e.searchBoxChange=e.searchBoxChange.bind(Object(p.a)(e)),e.selectChange=e.selectChange.bind(Object(p.a)(e)),e}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{searchBoxChange:this.searchBoxChange,selectChange:this.selectChange,loading:this.state.loading,currentPokemon:this.state.currentPokemon,progress:this.state.progress}),Object(m.jsx)(v,{loading:this.state.loading}),Object(m.jsx)(x,{pokecards:this.state.pokecards,searchBox:this.state.searchBox})]})}},{key:"componentDidMount",value:function(){this.loadPokeGen(0)}},{key:"searchBoxChange",value:function(e){this.setState({searchBox:e.target.value})}},{key:"selectChange",value:function(e){this.setState({pokecards:[]}),this.setState({loading:!0}),this.loadPokeGen(parseInt(e.target.value))}},{key:"loadPokeGen",value:function(e){var t=this,n=[[151,0],[100,151],[135,251],[107,386],[156,493],[72,649],[88,721],[89,809]],a=localStorage.getItem("pokedata-gen"+e);a?(this.setState({pokecards:JSON.parse(a)}),console.log("data loaded from storage"),this.setState({loading:!1})):(this.getPokeData(n[e][0],n[e][1]).then((function(n){t.setState({pokecards:n},(function(){return localStorage.setItem("pokedata-gen"+e,JSON.stringify(t.state.pokecards))})),t.setState({loading:!1,progress:0,currentPokemon:""})})),console.log("data loaded from api"))}},{key:"getPokeData",value:function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,s,c,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(t,"&offset=").concat(n));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,c=s.results.map(function(){var e=Object(l.a)(i.a.mark((function e(n,a){var s,c,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n.url);case 2:return s=e.sent,e.next=5,s.json();case 5:return c=e.sent,o=c.abilities.map(function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.ability.url);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,s=a.flavor_text_entries.find((function(e){return"en"===e.language.name})),e.abrupt("return",{name:a.name,effect:s.flavor_text});case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),e.next=9,Promise.all(o);case 9:return d=e.sent,r.setState({currentPokemon:c.name,progress:r.state.progress+100/t*1}),e.abrupt("return",{name:c.name,id:c.id,weight:c.weight,height:c.height,hp:c.stats[0].base_stat,img:c.sprites.other.dream_world.front_default?c.sprites.other.dream_world.front_default:c.sprites.other["official-artwork"].front_default,types:c.types.map((function(e){return e.type.name})),abilities:d});case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(c));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),n}(a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),N()}],[[24,1,2]]]);
//# sourceMappingURL=main.b83edad6.chunk.js.map