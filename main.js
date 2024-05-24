(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"html {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  background: linear-gradient(#3035c3, #a3c5ef);\n  min-height: 100vh;\n  display: grid;\n  gap: 10px;\n  align-content: start;\n  justify-content: center;\n\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: white;\n}\n\nh1 {\n  color: white;\n  font-size: 2.7rem;\n  text-align: center;\n  padding-top: 20px;\n}\n\nform {\n  justify-self: center;\n  background-color: #173675;\n  padding: 15px 20px;\n\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 5px;\n\n  align-content: center;\n  border-radius: 10px;\n}\n\nh2 {\n  grid-column: 1 / 3;\n  color: white;\n  margin: 0;\n  font-size: 1.5rem;\n}\n\nlabel {\n  display: flex;\n  align-items: center;\n}\n\ninput {\n  width: 250px;\n  outline: black 6px;\n  padding: 0 10px;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\nbutton {\n  background-color: #173675;\n  border: none;\n  padding: 5px;\n  border-radius: 3px;\n}\n\nbutton:hover {\n  background-color: #072155;\n}\n\nbutton:active {\n  background-color: #173675;\n}\n\nlabel svg {\n  fill: white;\n}\n\n.message-to-user {\n  visibility: hidden;\n  min-height: 40px;\n  width: fit-content;\n\n  color: rgb(255, 255, 255);\n  background-color: #d2e0f18e;\n  padding: 4px 8px;\n  border-radius: 3px;\n\n  text-align: center;\n  justify-self: center;\n}\n\n.temperature-toggler {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  margin: 0;\n\n  display: grid;\n  grid-template-columns: auto auto;\n}\n.temperature-toggler button {\n  color: white;\n  padding: 5px 15px;\n  margin: 0;\n  font-weight: bold;\n  background-color: rgb(101, 104, 114);\n}\n\n.temperature-toggler button:hover {\n  background-color: rgb(119, 120, 121);\n}\n\n.temperature-toggler button:active {\n  background-color: rgb(101, 104, 114);\n}\n\n.temperature-toggler .celsius {\n  border-radius: 8px 0 0 8px;\n}\n\n.temperature-toggler .fahrengheit {\n  border-radius: 0 8px 8px 0;\n}\n\n.temperature-toggler button.active {\n  background-color: #0a2355;\n}\n\n.weather-data-container {\n  display: grid;\n  gap: 50px;\n  margin: 0 20px 50px;\n}\n\n.current-forecast {\n  background-color: #4955c2;\n  padding: 15px;\n  border-radius: 15px;\n  width: fit-content;\n  justify-self: center;\n\n  display: grid;\n  gap: 10px;\n}\n\n.current-forecast .location-container {\n  display: flex;\n  gap: 10px;\n}\n\n.current-forecast .location-container svg {\n  fill: white;\n}\n\n.weather-container {\n  display: grid;\n  gap: 0px;\n}\n\n.current-forecast .weather-condition-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 25px;\n\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.current-forecast .weather-description,\n.current-forecast .weather-feelslike {\n  display: flex;\n  justify-content: center;\n}\n\n.current-forecast .weather-description {\n  margin-bottom: 15px;\n}\n\n.forecast-container {\n  display: grid;\n  justify-items: center;\n  gap: 20px;\n}\n\n.forecast-cards-container {\n  min-width: 90vw;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 20px;\n  justify-content: center;\n}\n\n.weather-card {\n  width: 100%;\n  background-color: #4955c2;\n  padding: 15px;\n  border-radius: 15px;\n\n  display: grid;\n  justify-content: center;\n  gap: 5px;\n\n  justify-self: center;\n}\n\n.weather-card .date {\n  text-align: center;\n  font-weight: 600;\n}\n\n.weather-card img {\n  justify-self: center;\n}\n\n.weather-card .description {\n  margin-bottom: 15px;\n  text-align: center;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,6CAA6C;EAC7C,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,oBAAoB;EACpB,uBAAuB;;EAEvB,eAAe;EACf,yCAAyC;EACzC,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,kBAAkB;;EAElB,aAAa;EACb,+BAA+B;EAC/B,QAAQ;;EAER,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;;EAElB,yBAAyB;EACzB,2BAA2B;EAC3B,gBAAgB;EAChB,kBAAkB;;EAElB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,SAAS;;EAET,aAAa;EACb,gCAAgC;AAClC;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,SAAS;EACT,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;;EAEpB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;;EAET,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8CAA8C;EAC9C,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,aAAa;EACb,mBAAmB;;EAEnB,aAAa;EACb,uBAAuB;EACvB,QAAQ;;EAER,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB",sourcesContent:["html {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  background: linear-gradient(#3035c3, #a3c5ef);\n  min-height: 100vh;\n  display: grid;\n  gap: 10px;\n  align-content: start;\n  justify-content: center;\n\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: white;\n}\n\nh1 {\n  color: white;\n  font-size: 2.7rem;\n  text-align: center;\n  padding-top: 20px;\n}\n\nform {\n  justify-self: center;\n  background-color: #173675;\n  padding: 15px 20px;\n\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 5px;\n\n  align-content: center;\n  border-radius: 10px;\n}\n\nh2 {\n  grid-column: 1 / 3;\n  color: white;\n  margin: 0;\n  font-size: 1.5rem;\n}\n\nlabel {\n  display: flex;\n  align-items: center;\n}\n\ninput {\n  width: 250px;\n  outline: black 6px;\n  padding: 0 10px;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\nbutton {\n  background-color: #173675;\n  border: none;\n  padding: 5px;\n  border-radius: 3px;\n}\n\nbutton:hover {\n  background-color: #072155;\n}\n\nbutton:active {\n  background-color: #173675;\n}\n\nlabel svg {\n  fill: white;\n}\n\n.message-to-user {\n  visibility: hidden;\n  min-height: 40px;\n  width: fit-content;\n\n  color: rgb(255, 255, 255);\n  background-color: #d2e0f18e;\n  padding: 4px 8px;\n  border-radius: 3px;\n\n  text-align: center;\n  justify-self: center;\n}\n\n.temperature-toggler {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  margin: 0;\n\n  display: grid;\n  grid-template-columns: auto auto;\n}\n.temperature-toggler button {\n  color: white;\n  padding: 5px 15px;\n  margin: 0;\n  font-weight: bold;\n  background-color: rgb(101, 104, 114);\n}\n\n.temperature-toggler button:hover {\n  background-color: rgb(119, 120, 121);\n}\n\n.temperature-toggler button:active {\n  background-color: rgb(101, 104, 114);\n}\n\n.temperature-toggler .celsius {\n  border-radius: 8px 0 0 8px;\n}\n\n.temperature-toggler .fahrengheit {\n  border-radius: 0 8px 8px 0;\n}\n\n.temperature-toggler button.active {\n  background-color: #0a2355;\n}\n\n.weather-data-container {\n  display: grid;\n  gap: 50px;\n  margin: 0 20px 50px;\n}\n\n.current-forecast {\n  background-color: #4955c2;\n  padding: 15px;\n  border-radius: 15px;\n  width: fit-content;\n  justify-self: center;\n\n  display: grid;\n  gap: 10px;\n}\n\n.current-forecast .location-container {\n  display: flex;\n  gap: 10px;\n}\n\n.current-forecast .location-container svg {\n  fill: white;\n}\n\n.weather-container {\n  display: grid;\n  gap: 0px;\n}\n\n.current-forecast .weather-condition-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 25px;\n\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.current-forecast .weather-description,\n.current-forecast .weather-feelslike {\n  display: flex;\n  justify-content: center;\n}\n\n.current-forecast .weather-description {\n  margin-bottom: 15px;\n}\n\n.forecast-container {\n  display: grid;\n  justify-items: center;\n  gap: 20px;\n}\n\n.forecast-cards-container {\n  min-width: 90vw;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 20px;\n  justify-content: center;\n}\n\n.weather-card {\n  width: 100%;\n  background-color: #4955c2;\n  padding: 15px;\n  border-radius: 15px;\n\n  display: grid;\n  justify-content: center;\n  gap: 5px;\n\n  justify-self: center;\n}\n\n.weather-card .date {\n  text-align: center;\n  font-weight: 600;\n}\n\n.weather-card img {\n  justify-self: center;\n}\n\n.weather-card .description {\n  margin-bottom: 15px;\n  text-align: center;\n}"],sourceRoot:""}]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(i[A]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var A=n[c],s=r.base?A[0]+r.base:A[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var p=t(l),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var g=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var A=r(n,o),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=A}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n="34573fa62b5c47cd93243644241805",e="http://api.weatherapi.com/v1";const r=new DOMParser,o=document.querySelector(".message-to-user"),a=document.querySelector(".weather-data-container");function i(n){console.log("data ",n),a.innerHTML="";const e=function(n,e){const t=c("div",["current-forecast"]),o=function(n){console.log("loc",n);const e=r.parseFromString('<svg xmlns="http://www.w3.org/2000/svg" width=\'24\' height=\'24\' viewBox="0 0 24 24"><path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z" /></svg>',"image/svg+xml").documentElement,t=c("div","location-container"),o=document.createTextNode(`${n.city}, ${n.region}, ${n.country}`);return t.appendChild(e),t.appendChild(o),t}(n),a=function(n){console.log(n);const e=c("div","weather-container"),t=c("div","weather-condition-container"),r=A(n.icon),o=c("span","current-temperature");o.textContent=n.temp,t.appendChild(r),t.appendChild(o);const a=c("div","weather-description");a.textContent=n.description;const i=c("div","weather-feelslike");return i.textContent=`Feels like ${n.feelslike}`,e.appendChild(t),e.appendChild(a),e.appendChild(i),e}(e);return t.appendChild(o),t.appendChild(a),t}(n.location,n.currentForecast),t=function(n){const e=c("div","forecast-container"),t=c("h2","forecast-header");t.textContent=`${n.length} Days Forecast`;const r=c("div","forecast-cards-container");return n.forEach((n=>{const e=function(n){const e=c("div","weather-card"),t=c("div","date");t.textContent=n.date;const r=A(n.icon),o=c("div","description");o.textContent=n.description;const a=c("div","max-temp");a.textContent=`Max ${n.maxtemp}`;const i=c("div","min-temp");i.textContent=`Min ${n.mintemp}`;const s=c("div","avg-temp");return s.textContent=`Average ${n.avgtemp}`,e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(a),e.appendChild(i),e.appendChild(s),e}(n);r.appendChild(e)})),e.appendChild(t),e.appendChild(r),e}(n.nextDaysForecast);a.appendChild(e),a.appendChild(t)}function c(n,e){e=[].concat(e);const t=document.createElement(n);return e.forEach((n=>t.classList.add(n))),t}function A(n){const e=new Image;return e.src=n,e}var s=t(72),d=t.n(s),l=t(825),p=t.n(l),u=t(659),g=t.n(u),f=t(56),C=t.n(f),E=t(540),m=t.n(E),h=t(113),B=t.n(h),x=t(208),y={};y.styleTagTransform=B(),y.setAttributes=C(),y.insert=g().bind(null,"head"),y.domAPI=p(),y.insertStyleElement=m(),d()(x.A,y),x.A&&x.A.locals&&x.A.locals;const b=document.getElementById("city-name"),v=document.getElementById("form-button"),w=document.querySelector(".temperature-toggler"),k=w.querySelector(".celsius"),j=w.querySelector(".fahrengheit");let S=k,_="Moscow";const F="°C",z="°F";function T(t){(async function(t,r=1){const o=`${e}/forecast.json?key=${n}&q=${t}&days=${r}`,a=await async function(n){showLoadingMessage();try{const e=await fetch(n);return await e.json()}catch(n){console.log("Unable to get weather data: ",n)}}(o);if(a.error&&1006===a.error.code)return console.log(a.error),null;const i=function(n){console.log(n);const e={city:n.location.name,region:n.location.region,country:n.location.country},t=n.current,r={icon:t.condition.icon,description:t.condition.text,temp_c:t.temp_c,temp_f:t.temp_f,feelslike_c:t.feelslike_c,feelslike_f:t.feelslike_f},o=[];return n.forecast.forecastday.forEach((n=>{const e={maxtemp_c:n.day.maxtemp_c,maxtemp_f:n.day.maxtemp_f,mintemp_c:n.day.mintemp_c,mintemp_f:n.day.mintemp_f,avgtemp_c:n.day.avgtemp_c,avgtemp_f:n.day.avgtemp_f,date:n.date,icon:n.day.condition.icon,description:n.day.condition.text};o.push(e)})),{location:e,currentForecast:r,nextDaysForecast:o}}(a);return hideMessage(),i})(t,3).then((n=>{n?function(n){if(S.classList.contains("celsius")){const e=function(n){console.log("celsius");const e={};e.location=n.location,e.currentForecast={},e.nextDaysForecast=[];for(const[t,r]of Object.entries(n.currentForecast))t.endsWith("_c")?e.currentForecast[t.slice(0,-2)]=`${r} ${F}`:t.endsWith("_f")||(e.currentForecast[t]=r);return n.nextDaysForecast.forEach((n=>{const t={};for(const[e,r]of Object.entries(n))e.endsWith("_c")?t[e.slice(0,-2)]=`${r} ${F}`:e.endsWith("_f")||(t[e]=r);e.nextDaysForecast.push(t)})),e}(n);i(e)}else{const e=function(n){console.log("fahrengheit");const e={};e.location=n.location,e.currentForecast={},e.nextDaysForecast=[];for(const[t,r]of Object.entries(n.currentForecast))t.endsWith("_f")?e.currentForecast[t.slice(0,-2)]=`${r} ${z}`:t.endsWith("_c")||(e.currentForecast[t]=r);return n.nextDaysForecast.forEach((n=>{const t={};for(const[e,r]of Object.entries(n))e.endsWith("_f")?t[e.slice(0,-2)]=`${r} ${z}`:e.endsWith("_c")||(t[e]=r);e.nextDaysForecast.push(t)})),e}(n);i(e)}}(n):function(n){const e=document.createElement("span");e.textContent=n,e.style.fontWeight="bold";const t=document.createTextNode("City "),r=document.createTextNode(" not found, enter another city!");o.textContent="",o.style.visibility="visible",o.appendChild(t),o.appendChild(e),o.appendChild(r)}(t)}))}w.addEventListener("click",(function(n){n.target.classList.contains("active")||(k.classList.toggle("active"),j.classList.toggle("active"),S=n.target,T(_))})),v.addEventListener("click",(function(n){if(n.preventDefault(),!b.value)return;const e=b.value;_=e,T(_),b.value=""})),b.addEventListener("focus",(function(){o.textContent="",o.style.visibility="hidden"})),T(_)})()})();
//# sourceMappingURL=main.js.map