var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function l(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let s;function i(t){s=t}const d=[],p=[],m=[],h=[],$=Promise.resolve();let g=!1;function b(t){m.push(t)}const y=new Set;function x(){do{for(;d.length;){const t=d.shift();i(t),_(t.$$)}for(;p.length;)p.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];y.has(n)||(y.add(n),n())}m.length=0}while(d.length);for(;h.length;)h.pop()();g=!1,y.clear()}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const v=new Set;function w(t,n){-1===t.$$.dirty[0]&&(d.push(t),g||(g=!0,$.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(c,u,a,f,l,d,p=[-1]){const m=s;i(c);const h=u.props||{},$=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:p};let g=!1;var y,_;$.ctx=a?a(c,h,(t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),g&&w(c,t)),n}):[],$.update(),g=!0,o($.before_update),$.fragment=!!f&&f($.ctx),u.target&&(u.hydrate?$.fragment&&$.fragment.l(function(t){return Array.from(t.childNodes)}(u.target)):$.fragment&&$.fragment.c(),u.intro&&((y=c.$$.fragment)&&y.i&&(v.delete(y),y.i(_))),function(t,e,c){const{fragment:u,on_mount:a,on_destroy:f,after_update:l}=t.$$;u&&u.m(e,c),b(()=>{const e=a.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(b)}(c,u.target,u.anchor),x()),i(m)}function k(n){let e,o,r,c,s,i,d;return{c(){e=a("main"),o=a("h1"),r=f("Hello "),c=f(n[0]),s=f("!"),i=f(" "),d=a("p"),d.textContent="Hello world page works!",l(o,"class","svelte-vb2ebo"),l(e,"class","svelte-vb2ebo")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),u(e,o),u(o,r),u(o,c),u(o,s),u(e,i),u(e,d)},p(t,[n]){1&n&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(c,t[0])},i:t,o:t,d(t){var n;t&&(n=e).parentNode.removeChild(n)}}}function E(t,n,e){let{name:o}=n;return t.$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),A(this,t,E,k,c,{name:0})}}({target:document.body,props:{name:"Arul"}})}();
//# sourceMappingURL=bundle.js.map
