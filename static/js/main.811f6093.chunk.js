(this.webpackJsonpmini2048=this.webpackJsonpmini2048||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(1),o=n.n(r),c=n(6),s=n.n(c);n(12),n(13),n(14);function a(t,e){return{leftRight:.16*t,top:.04*e}}function f(t){return{height:.075*t,width:.1*t}}var l=n(3);function u(){var t=o.a.useState({width:window.innerWidth,height:window.innerHeight}),e=Object(l.a)(t,2),n=e[0],i=e[1];function r(){i({width:window.innerWidth,height:window.innerHeight})}return o.a.useEffect((function(){return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[]),n}function h(t){switch(t){case 0:case 2:return"#466E83";case 4:return"#596F84";case 8:return"#6B7086";case 16:return"#7E7287";case 32:return"#907388";case 64:return"#A3748A";case 128:return"#B5758B";case 256:return"#C8768C";case 512:return"#DA788D";case 1024:return"#ED798F";case 2048:return"#FF7A90";case 4096:return"#E24C65";default:return"#FF3D5D"}}var d=n(5),g=n(2),b=n.n(g);var O=function(t){var e=t.num,n=t.width,r=t.index,o=j.blockStyle,c=f(n);return Object(i.jsx)("div",{style:Object(d.a)(Object(d.a)({},o),{},{color:h(e),height:c.height,width:c.width,left:80*(r-2.5),fontSize:.5*c.height}),children:0!==e?e:"\u2022"})},j={blockStyle:{position:"absolute",margin:3,display:"flex",justifyContent:"center",alignItems:"center",fontSize:45,fontWeight:"800"}},y=function(){var t=u(),e=t.width,n=t.height,o=(f(e),Object(r.useState)(!1)),c=Object(l.a)(o,2),s=(c[0],c[1]),a=Object(r.useState)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),h=Object(l.a)(a,2),d=h[0],g=h[1],j=function(t){for(var e=!1,n=!1,i=0;!e&&!n;){var r=Math.floor(4*Math.random()),o=Math.floor(4*Math.random());i++,0===t[r][o]&&(t[r][o]=Math.random()>.5?2:4,e=!0),i>50&&(n=!0,S()&&alert("game over"))}},y=function(t){console.log("swipe left");for(var e=d,n=b()(d),i=0;i<4;i++)for(var r=n[i],o=0,c=1;o<4;)4!==c?0===r[o]&&0===r[c]?c++:0===r[o]&&0!==r[c]?(r[o]=r[c],r[c]=0,c++):0!==r[o]&&0===r[c]?c++:0!==r[o]&&0!==r[c]&&(r[o]===r[c]?(r[o]=r[o]+r[c],r[c]=0,c=o+1,o++):c=++o+1):(c=o+1,o++);if(JSON.stringify(e)!==JSON.stringify(n)&&j(n),t)return n;g(n)},v=function(t){console.log("swipe right");for(var e=d,n=b()(d),i=3;i>=0;i--)for(var r=n[i],o=r.length-1,c=o-1;o>0;)-1!==c?0===r[o]&&0===r[c]?c--:0===r[o]&&0!==r[c]?(r[o]=r[c],r[c]=0,c--):0!==r[o]&&0===r[c]?c--:0!==r[o]&&0!==r[c]&&(r[o]===r[c]?(r[o]=r[o]+r[c],r[c]=0,c=o-1,o--):c=--o-1):(c=o-1,o--);if(JSON.stringify(n)!==JSON.stringify(e)&&j(n),t)return n;g(n)},w=function(t){console.log("swipe down"),console.log(d);for(var e=b()(d),n=JSON.parse(JSON.stringify(d)),i=3;i>=0;i--)for(var r=e.length-1,o=r-1;r>0;)-1!==o?0===e[r][i]&&0===e[o][i]?o--:0===e[r][i]&&0!==e[o][i]?(e[r][i]=e[o][i],e[o][i]=0,o--):0!==e[r][i]&&0===e[o][i]?o--:0!==e[r][i]&&0!==e[o][i]&&(e[r][i]===e[o][i]?(e[r][i]=e[r][i]+e[o][i],e[o][i]=0,o=r-1,r--):o=--r-1):(o=r-1,r--);if(JSON.stringify(e)!==JSON.stringify(n)&&j(e),t)return e;g(e)},p=function(t){console.log("swipe up");for(var e=b()(d),n=JSON.parse(JSON.stringify(d)),i=0;i<4;i++)for(var r=0,o=1;r<4;)4!==o?0===e[r][i]&&0===e[o][i]?o++:0===e[r][i]&&0!==e[o][i]?(e[r][i]=e[o][i],e[o][i]=0,o++):0!==e[r][i]&&0===e[o][i]?o++:0!==e[r][i]&&0!==e[o][i]&&(e[r][i]===e[o][i]?(e[r][i]=e[r][i]+e[o][i],e[o][i]=0,o=r+1,r++):o=++r+1):(o=r+1,r++);if(JSON.stringify(n)!==JSON.stringify(e)&&j(e),t)return e;g(e)},S=function(){console.log("CHECKING GAME OVER");var t=y(!0);if(JSON.stringify(d)!==JSON.stringify(t))return!1;var e=w(!0);if(JSON.stringify(d)!==JSON.stringify(e))return!1;var n=v(!0);if(JSON.stringify(d)!==JSON.stringify(n))return!1;var i=p(!0);return JSON.stringify(d)===JSON.stringify(i)};return Object(r.useEffect)((function(){!function(){var t=b()(d);console.log(t),j(t),console.table(t),j(t),console.table(t),g(t)}()}),[]),function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(r.useEffect)((function(){return window.addEventListener(t,e,n),function(){window.removeEventListener(t,e)}}))}("keydown",(function(t){switch(t.keyCode){case 38:p();break;case 40:w();break;case 39:v();break;case 37:y();break;case 87:p();break;case 83:w();break;case 65:y();break;case 68:v()}S()&&(alert("gameOver"),s(!0))})),Object(i.jsxs)("div",{style:{alignSelf:"center",margin:"auto",position:"relative",display:"flex",top:0,left:0,right:0,bottom:0},children:[d.map((function(t,n){return Object(i.jsx)("div",{style:{display:"flex",position:"absolute",top:80*(n-2)},children:t.map((function(t,n){return Object(i.jsx)(O,{num:t,width:e,index:n},n)}))},n)})),Object(i.jsx)("div",{style:{top:190,left:-50,background:"#FF7A90",position:"absolute",fontFamily:"Roboto Mono",fontWeight:500,borderRadius:15,width:100,fontSize:.03*n},children:Object(i.jsx)("div",{style:{padding:5,color:"#2d394d"},onClick:function(){return function(){s(!1);var t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];j(t),j(t),g(t)}()},children:"New Game"})})]})};function v(){var t=u(),e=t.width,n=t.height,r=a(e,n);return Object(i.jsx)("div",{style:{position:"absolute",left:r.leftRight,top:r.top},children:Object(i.jsx)("h1",{style:{fontFamily:"Roboto Mono",fontWeight:100,fontSize:.11*n,color:"#FF7A90",lineHeight:0},children:"2408"})})}function w(){var t=u(),e=t.width,n=t.height,r=a(e,n);return Object(i.jsxs)("div",{style:{position:"absolute",right:r.leftRight,top:r.top,lineHeight:0},children:[Object(i.jsxs)("p",{style:{fontFamily:"Roboto Mono",fontWeight:100,fontSize:.03*n,color:"#FF7A90",textAlign:"right"},children:["Score:",Object(i.jsx)("strong",{style:{fontWeight:500},children:"1642334"})]}),Object(i.jsxs)("p",{style:{fontFamily:"Roboto Mono",fontWeight:100,fontSize:.03*n,color:"#FF7A90",textAlign:"right",paddingTop:.025*n},children:["High Score:",Object(i.jsx)("strong",{style:{fontWeight:500},children:"1642334"})]})]})}var p=function(){return document.querySelector("body").style.backgroundColor="#2d394d",Object(i.jsxs)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[Object(i.jsx)(v,{}),Object(i.jsx)(w,{}),Object(i.jsx)(y,{})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),i(t),r(t),o(t),c(t)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),S()}},[[17,1,2]]]);
//# sourceMappingURL=main.811f6093.chunk.js.map