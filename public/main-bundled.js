(()=>{var e={16:e=>{var t=function(e,t,i,r,n){this.name=e,this.feet=parseInt(t),this.inches=parseInt(i),this.height=this.calcHeight(this.feet,this.inches),this.weight=parseInt(r),this.diet=n};t.prototype.calcHeight=function(e,t){return 12*e+t},e.exports=t},872:e=>{"use strict";e.exports=JSON.parse('{"Dinos":[{"species":"Triceratops","weight":13000,"height":114,"diet":"herbavor","where":"North America","when":"Late Cretaceous","fact":"First discovered in 1889 by Othniel Charles Marsh"},{"species":"Tyrannosaurus Rex","weight":11905,"height":144,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"The largest known skull measures in at 5 feet long."},{"species":"Anklyosaurus","weight":10500,"height":55,"diet":"herbavor","where":"North America","when":"Late Cretaceous","fact":"Anklyosaurus survived for approximately 135 million years."},{"species":"Brachiosaurus","weight":70000,"height":"372","diet":"herbavor","where":"North America","when":"Late Jurasic","fact":"An asteroid was named 9954 Brachiosaurus in 1991."},{"species":"Stegosaurus","weight":11600,"height":79,"diet":"herbavor","where":"North America, Europe, Asia","when":"Late Jurasic to Early Cretaceous","fact":"The Stegosaurus had between 17 and 22 seperate places and flat spines."},{"species":"Elasmosaurus","weight":16000,"height":59,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"Elasmosaurus was a marine reptile first discovered in Kansas."},{"species":"Pteranodon","weight":44,"height":20,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"Actually a flying reptile, the Pteranodon is not a dinosaur."},{"species":"Pigeon","weight":0.5,"height":9,"diet":"herbavor","where":"World Wide","when":"Holocene","fact":"All birds are living dinosaurs."}]}')}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,i),a.exports}(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=i(16),n=(i(872),function(){function i(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.form=document.querySelector("#dino-compare"),this.button=document.querySelector("#btn"),this.name=document.getElementById("name"),this.feet=document.getElementById("feet"),this.inches=document.getElementById("inches"),this.weight=document.getElementById("weight"),this.diet=document.getElementById("diet"),this.events()}var n,a;return n=i,(a=[{key:"events",value:function(){var e=this;this.button.addEventListener("click",(function(t){t.preventDefault(),e.buildGrid()}))}},{key:"buildGrid",value:function(){var t=new r(this.name.value,this.feet.value,this.inches.value,this.weight.value,this.diet.value);this.form.classList.add("hide-dino-from"),console.log(t),alert("\n    ".concat(t.name,"\n    ").concat(t.height," ").concat(e(t.height)," \n    ").concat(t.weight," ").concat(e(t.weight)," \n    ").concat(t.diet,"\n    "))}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend","<div>".concat(this.name,"</div>"))}}])&&t(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),i}());document.querySelector("#dino-compare")&&new n})()})();