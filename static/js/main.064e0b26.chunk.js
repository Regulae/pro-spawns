(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){e.exports=a(300)},155:function(e,t,a){},160:function(e,t){},162:function(e,t){},174:function(e,t,a){},176:function(e,t,a){},178:function(e,t,a){e.exports=a.p+"static/media/RawSpawnData.139a7916.csv"},179:function(e,t,a){e.exports=a.p+"static/media/RawWaterSpawnData.ce1ee5a1.csv"},180:function(e,t,a){e.exports=a.p+"static/media/HeadbuttSpawnData.5e104bfc.csv"},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),i=a.n(l),o=(a(155),a(88)),s=a(128),c=a(129),u=a(138),m=a(130),d=a(139),p=a(131),h=(a(171),a(174),a(176),a(312)),k=a(310),g=a(311),f=a(307),y=a(308),b=a(309),v=a(40),E=a(46),w=a.n(E),C=function(e){function t(){var e;Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).types=["land","water","headbutt"],e.regionSorting={Kanto:1,Johto:2,Hoenn:3,Sinnoh:4,Unova:5,Kalos:6,Alola:7},e.sourceData={land:[],water:[],headbutt:[]},e.filteredData={land:[],water:[],headbutt:[]},e.repelTrickData={},e.sortByColumns={pokedexNumber:["pokedexNumber","_sortArea","location"],_sortArea:["_sortArea","tier","pokedexNumber","location"],min:["min","_sortArea","location"],tier:["tier","_sortArea","pokedexNumber","location"]},e._defaultQuickList=[{id:"133",name:"Eevee"},{id:"147",name:"Dratini"},{id:"175",name:"Togepi"},{id:"246",name:"Larvitar"},{id:"280",name:"Ralts"},{id:"371",name:"Bagon"},{id:"443",name:"Gible"},{id:"446",name:"Munchlax"},{id:"532",name:"Timburr"},{id:"633",name:"Deino"}],e.state={filter:{name:"",area:""},sortBy:{column:"_sortArea",direction:"ascending"},sorted:{land:[],water:[],headbutt:[]}};var n=[a(178),a(179),a(180)];return Promise.all(n.map(function(e){return new Promise(function(t,a){p.parse(e,{header:!0,download:!0,skipEmptyLines:!0,complete:t,error:a})})})).then(function(t){e.sourceData={land:t[0].data.map(function(t){return e._dataParser(t,"land")}),water:t[1].data.map(function(t){return e._dataParser(t,"water")}),headbutt:t[2].data.map(function(t){return e._dataParser(t,"headbutt")})},e.filter()}),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"_dataParser",value:function(e,t){delete e.membersAccessible,e.pokedexNumber=e.pokedexNumber.padStart(3,"0"),e.membership=e.membership.length>0,e.morning=!!e.morning,e.day=!!e.day,e.night=!!e.night,e._sortArea=this.regionSorting[e.region]+" - "+e.region+" - "+e.area,e.min=parseInt(e.levels.match(/^(\d+)-(\d+)$/)?e.levels.replace(/^(\d+)-(\d+)$/,"$1"):e.levels,10),e.max=parseInt(e.levels.match(/^(\d+)-(\d+)$/)?e.levels.replace(/^(\d+)-(\d+)$/,"$2"):e.levels,10);var a=t+" - "+e.region+" - "+e.area;return this.repelTrickData.hasOwnProperty(a)||(this.repelTrickData[a]={}),this.repelTrickData[a].hasOwnProperty(e.max)||(this.repelTrickData[a][e.max]=0),this.repelTrickData[a][e.max]++,e}},{key:"filter",value:function(){var e=this,t=this.state.filter.name.toLowerCase(),a=this.state.filter.area;try{var n=new RegExp(a.replace("*",".*"),"i");this.types.forEach(function(r){e.filteredData[r]=e.sourceData[r].filter(function(e){return t.length>0&&e.pokemon.toLowerCase().indexOf(t)>-1||a.length>0&&null!==e._sortArea.match(n)})})}catch(r){this.filteredData=w.a.cloneDeep(this.sourceData)}this.sort()}},{key:"sort",value:function(){var e=this,t={};this.types.forEach(function(a){e.state.sortBy.column?(t[a]=w.a.sortBy(e.filteredData[a],e.sortByColumns[e.state.sortBy.column]),"descending"===e.state.sortBy.direction&&(t.type=t[a].reverse())):t[a]=e.filteredData[a]}),this.setState({sorted:t})}},{key:"repelTrickPossible",value:function(e,t){if(t.hasOwnProperty("location")&&"Fishing"===t.location)return!1;var a=e+" - "+t.region+" - "+t.area;if(!this.repelTrickData.hasOwnProperty(a))return!1;var n=this.repelTrickData[a],r=Math.max.apply(Math,Object(o.a)(Object.values(n))),l=Object.values(n).indexOf(r),i=Object.keys(n)[l];return t.min>i}},{key:"setFilter",value:function(e,t){t&&t.preventDefault(),e.hasOwnProperty("name")||(e.name=this.state.filter.name),e.hasOwnProperty("area")||(e.area=this.state.filter.area),this.state.filter=e,this.filter()}},{key:"alternateDirection",value:function(e){return"ascending"===e?"descending":"ascending"}},{key:"sortBy",value:function(e){this.state.sortBy={column:e,direction:this.state.sortBy.column===e?this.alternateDirection(this.state.sortBy.direction):"ascending"},this.filter()}},{key:"getTierClassName",value:function(e){switch(e){case"1":case"Common":return"green";case"2":case"3":return"olive";case"4":case"5":case"Intermediate":return"yellow";case"6":case"7":case"Rare":return"orange";case"8":case"9":return"red";default:throw console.error(e),new Error("rarity not found")}}},{key:"getQuickList",value:function(){var e=localStorage.getItem("proSpawnQuickList");return null===e?this._defaultQuickList:JSON.parse(e)}},{key:"saveQuickList",value:function(e){e=e.sort(function(e,t){return e.id===t.id?0:e.id>t.id?1:-1}),localStorage.setItem("proSpawnQuickList",JSON.stringify(e)),this.forceUpdate()}},{key:"addToQuickList",value:function(e,t){if(!this.inQuickList(e)){var a=this.getQuickList();a.push({id:e,name:t}),this.saveQuickList(a)}}},{key:"removeFromQuickList",value:function(e){var t=this.getQuickList();w.a.remove(t,{id:e}),this.saveQuickList(t)}},{key:"inQuickList",value:function(e){return void 0!==w.a.find(this.getQuickList(),{id:e})}},{key:"renderQuickList",value:function(){var e=this,t=this.getQuickList();return t?r.a.createElement(h.a,null,r.a.createElement(k.a,{horizontal:!0},t.map(function(t,a){return r.a.createElement(k.a.Item,{key:a},r.a.createElement(g.a,{className:"btn-lnk",onClick:function(){return e.setFilter({name:t.name,area:""})}},r.a.createElement("i",{className:"pokedex-sprite pokedex-sprite-".concat(t.id)}),t.name))}))):null}},{key:"render",value:function(){var e,t=this,a=r.a.createElement("img",{src:"https://img.pokemondb.net/images/locations/morning.png",alt:"Morning",title:"Morning"}),n=r.a.createElement("img",{src:"https://img.pokemondb.net/images/locations/day.png",alt:"Day",title:"Day"}),l=r.a.createElement("img",{src:"https://img.pokemondb.net/images/locations/night.png",alt:"Night",title:"Night"}),i=r.a.createElement("img",{src:"https://img.pokemondb.net/sprites/items/fishing-rod.png",alt:"Fishing Rod"}),s={Old:r.a.createElement("img",{src:"https://img.pokemondb.net/sprites/items/old-rod.png",alt:"Old Rod",title:"Old Rod"}),Good:r.a.createElement("img",{src:"https://img.pokemondb.net/sprites/items/good-rod.png",alt:"Good Rod",title:"Good Rod"}),Super:r.a.createElement("img",{src:"https://img.pokemondb.net/sprites/items/super-rod.png",alt:"Super Rod",title:"Super Rod"})},c=this.state.sortBy,u=c.column,m=c.direction,d=(e=[]).concat.apply(e,Object(o.a)(Object.values(this.state.sorted))).length;return r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(y.a,{value:this.state.filter.name,onChange:function(e){return t.setFilter({name:e.target.value})},icon:{name:"close",link:!0,onClick:function(){return t.setFilter({name:""})}},placeholder:"pokemon name..."}),"\xa0 \xa0",r.a.createElement(y.a,{value:this.state.filter.area,onChange:function(e){return t.setFilter({area:e.target.value})},icon:{name:"close",link:!0,onClick:function(){return t.setFilter({area:""})}},placeholder:"region/area (regex)..."}),"\xa0 \xa0 \xa0",r.a.createElement("strong",null,d," results")),d>125?r.a.createElement(h.a,null,"Too many results to display"):this.types.map(function(e){var o=t.state.sorted[e];return r.a.createElement(b.a,{key:e,compact:"very",basic:!0,className:e,sortable:!0,unstackable:!0},r.a.createElement(b.a.Header,null,r.a.createElement(b.a.Row,null,r.a.createElement(b.a.HeaderCell,{sorted:"_sortArea"===u?m:null,onClick:function(){return t.sortBy("_sortArea")}},"Region - Area"),r.a.createElement(b.a.HeaderCell,{sorted:"pokedexNumber"===u?m:null,onClick:function(){return t.sortBy("pokedexNumber")}},"ID"),r.a.createElement(b.a.HeaderCell,null,"Pokemon"),"headbutt"!==e?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.HeaderCell,null,"M"),r.a.createElement(b.a.HeaderCell,null,"D"),r.a.createElement(b.a.HeaderCell,null,"N")):null,"water"===e?r.a.createElement(b.a.HeaderCell,null,i):null,r.a.createElement(b.a.HeaderCell,{sorted:"tier"===u?m:null,onClick:function(){return t.sortBy("tier")}},"Tier"),r.a.createElement(b.a.HeaderCell,null,"MS?"),r.a.createElement(b.a.HeaderCell,{textAlign:"right",sorted:"min"===u?m:null,onClick:function(){return t.sortBy("min")}},"Levels"),"headbutt"!==e?r.a.createElement(b.a.HeaderCell,null,"Repel"):null,r.a.createElement(b.a.HeaderCell,null,"Item"))),r.a.createElement(b.a.Body,null,o.map(function(i){var o=t.repelTrickPossible(e,i);return r.a.createElement(b.a.Row,{key:JSON.stringify(i)},r.a.createElement(b.a.Cell,null,r.a.createElement(g.a,{className:"btn-lnk",onClick:function(e){return t.setFilter({name:"",area:i.area+"$"},e)}},i.region," - ",i.area)),r.a.createElement(b.a.Cell,null,i.pokedexNumber),r.a.createElement(b.a.Cell,null,r.a.createElement("i",{className:"pokedex-sprite pokedex-sprite-".concat(i.pokedexNumber)}),r.a.createElement(g.a,{className:"btn-lnk",onClick:function(e){return t.setFilter({name:i.pokemon,area:""},e)}},i.pokemon),"\xa0",r.a.createElement("a",{href:"https://pokemondb.net/pokedex/".concat(i.pokedexNumber),target:"_blank"},r.a.createElement(v.a,{name:"external alternate"})),"\xa0",t.inQuickList(i.pokedexNumber)?r.a.createElement(g.a,{className:"btn-lnk",onClick:function(){return t.removeFromQuickList(i.pokedexNumber)}},r.a.createElement("i",{"aria-hidden":"true",className:"bookmark green icon"})):r.a.createElement(g.a,{className:"btn-lnk",onClick:function(){return t.addToQuickList(i.pokedexNumber,i.pokemon)}},r.a.createElement("i",{"aria-hidden":"true",className:"bookmark grey icon"}))),"headbutt"!==e?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Cell,{className:i.morning?"yellow":""},i.morning?a:null),r.a.createElement(b.a.Cell,{className:i.day?"blue":""},i.day?n:null),r.a.createElement(b.a.Cell,{className:i.night?"grey":""},i.night?l:null)):null,"water"===e?r.a.createElement(b.a.Cell,null,i.rod?s[i.rod]:null):null,r.a.createElement(b.a.Cell,{className:t.getTierClassName(i.tier),textAlign:"center"},i.tier),r.a.createElement(b.a.Cell,{textAlign:"center",className:i.membership?"violet":""},i.membership?r.a.createElement("i",{className:"ui icon dollar sign white"}):null),r.a.createElement(b.a.Cell,{textAlign:"right"},i.levels),"headbutt"!==e?r.a.createElement(b.a.Cell,{textAlign:"center",className:o?"teal":""},o?"Yes":null):null,r.a.createElement(b.a.Cell,null,i.heldItem))})))}),this.renderQuickList())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[150,2,1]]]);
//# sourceMappingURL=main.064e0b26.chunk.js.map