import{defineComponent as y,reactive as ht,openBlock as f,createBlock as P,ref as E,watchEffect as ft,createElementBlock as d,createBaseVNode as c,Fragment as C,renderList as D,normalizeClass as st,createTextVNode as dt,toDisplayString as I,createVNode as A,onMounted as _t,computed as bt,resolveDynamicComponent as vt,unref as w,KeepAlive as yt,computed$1 as mt}from"./runtime-core.esm-bundler.b8473f7e.js";function v(r){return typeof r=="function"}function gt(r){return v(r?.lift)}function xt(r){return function(e){if(gt(e))return e.lift(function(t){try{return r(t,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}var V=function(r,e){return V=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},V(r,e)};function g(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");V(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function M(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function U(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var n=t.call(r),o,s=[],i;try{for(;(e===void 0||e-- >0)&&!(o=n.next()).done;)s.push(o.value)}catch(u){i={error:u}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(i)throw i.error}}return s}function $(r,e,t){if(t||arguments.length===2)for(var n=0,o=e.length,s;n<o;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return r.concat(s||Array.prototype.slice.call(e))}function it(r){var e=function(n){Error.call(n),n.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var B=it(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,o){return o+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function W(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var N=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,n,o,s;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var u=M(i),l=u.next();!l.done;l=u.next()){var a=l.value;a.remove(this)}}catch(b){e={error:b}}finally{try{l&&!l.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}else i.remove(this);var h=this.initialTeardown;if(v(h))try{h()}catch(b){s=b instanceof B?b.errors:[b]}var _=this._finalizers;if(_){this._finalizers=null;try{for(var m=M(_),S=m.next();!S.done;S=m.next()){var k=S.value;try{J(k)}catch(b){s=s??[],b instanceof B?s=$($([],U(s)),U(b.errors)):s.push(b)}}}catch(b){n={error:b}}finally{try{S&&!S.done&&(o=m.return)&&o.call(m)}finally{if(n)throw n.error}}}if(s)throw new B(s)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)J(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&W(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&W(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),ut=N.EMPTY;function ct(r){return r instanceof N||r&&"closed"in r&&v(r.remove)&&v(r.add)&&v(r.unsubscribe)}function J(r){v(r)?r():r.unsubscribe()}var Q={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},L={setTimeout:function(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var o=L.delegate;return o?.setTimeout?o.setTimeout.apply(o,$([r,e],U(t))):setTimeout.apply(void 0,$([r,e],U(t)))},clearTimeout:function(r){var e=L.delegate;return(e?.clearTimeout||clearTimeout)(r)},delegate:void 0};function St(r){L.setTimeout(function(){throw r})}function K(){}var q=null;function j(r){if(Q.useDeprecatedSynchronousErrorHandling){var e=!q;if(e&&(q={errorThrown:!1,error:null}),r(),e){var t=q,n=t.errorThrown,o=t.error;if(q=null,n)throw o}}else r()}var Y=function(r){g(e,r);function e(t){var n=r.call(this)||this;return n.isStopped=!1,t?(n.destination=t,ct(t)&&t.add(n)):n.destination=It,n}return e.create=function(t,n,o){return new H(t,n,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(N),wt=Function.prototype.bind;function F(r,e){return wt.call(r,e)}var Tt=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(n){O(n)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(n){O(n)}else O(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){O(t)}},r}(),H=function(r){g(e,r);function e(t,n,o){var s=r.call(this)||this,i;if(v(t)||!t)i={next:t??void 0,error:n??void 0,complete:o??void 0};else{var u;s&&Q.useDeprecatedNextContext?(u=Object.create(t),u.unsubscribe=function(){return s.unsubscribe()},i={next:t.next&&F(t.next,u),error:t.error&&F(t.error,u),complete:t.complete&&F(t.complete,u)}):i=t}return s.destination=new Tt(i),s}return e}(Y);function O(r){St(r)}function Et(r){throw r}var It={closed:!0,next:K,error:Et,complete:K},kt=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function qt(r){return r}function Ot(r){return r.length===0?qt:r.length===1?r[0]:function(t){return r.reduce(function(n,o){return o(n)},t)}}var Z=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,n){var o=this,s=Pt(e)?e:new H(e,t,n);return j(function(){var i=o,u=i.operator,l=i.source;s.add(u?u.call(s,l):l?o._subscribe(s):o._trySubscribe(s))}),s},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var n=this;return t=tt(t),new t(function(o,s){var i=new H({next:function(u){try{e(u)}catch(l){s(l),i.unsubscribe()}},error:s,complete:o});n.subscribe(i)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[kt]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Ot(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=tt(e),new e(function(n,o){var s;t.subscribe(function(i){return s=i},function(i){return o(i)},function(){return n(s)})})},r.create=function(e){return new r(e)},r}();function tt(r){var e;return(e=r??Q.Promise)!==null&&e!==void 0?e:Promise}function jt(r){return r&&v(r.next)&&v(r.error)&&v(r.complete)}function Pt(r){return r&&r instanceof Y||jt(r)&&ct(r)}function At(r,e,t,n,o){return new Ut(r,e,t,n,o)}var Ut=function(r){g(e,r);function e(t,n,o,s,i,u){var l=r.call(this,t)||this;return l.onFinalize=i,l.shouldUnsubscribe=u,l._next=n?function(a){try{n(a)}catch(h){t.error(h)}}:r.prototype._next,l._error=s?function(a){try{s(a)}catch(h){t.error(h)}finally{this.unsubscribe()}}:r.prototype._error,l._complete=o?function(){try{o()}catch(a){t.error(a)}finally{this.unsubscribe()}}:r.prototype._complete,l}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;r.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(Y),at={now:function(){return(at.delegate||Date).now()},delegate:void 0},$t=it(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),X=function(r){g(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var n=new et(this,this);return n.operator=t,n},e.prototype._throwIfClosed=function(){if(this.closed)throw new $t},e.prototype.next=function(t){var n=this;j(function(){var o,s;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var i=M(n.currentObservers),u=i.next();!u.done;u=i.next()){var l=u.value;l.next(t)}}catch(a){o={error:a}}finally{try{u&&!u.done&&(s=i.return)&&s.call(i)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var n=this;j(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var o=n.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;j(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var n=this,o=this,s=o.hasError,i=o.isStopped,u=o.observers;return s||i?ut:(this.currentObservers=null,u.push(t),new N(function(){n.currentObservers=null,W(u,t)}))},e.prototype._checkFinalizedStatuses=function(t){var n=this,o=n.hasError,s=n.thrownError,i=n.isStopped;o?t.error(s):i&&t.complete()},e.prototype.asObservable=function(){var t=new Z;return t.source=this,t},e.create=function(t,n){return new et(t,n)},e}(Z),et=function(r){g(e,r);function e(t,n){var o=r.call(this)||this;return o.destination=t,o.source=n,o}return e.prototype.next=function(t){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.next)===null||o===void 0||o.call(n,t)},e.prototype.error=function(t){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.error)===null||o===void 0||o.call(n,t)},e.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},e.prototype._subscribe=function(t){var n,o;return(o=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&o!==void 0?o:ut},e}(X),Ct=function(r){g(e,r);function e(t){var n=r.call(this)||this;return n._value=t,n}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var n=r.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},e.prototype.getValue=function(){var t=this,n=t.hasError,o=t.thrownError,s=t._value;if(n)throw o;return this._throwIfClosed(),s},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(X),R=function(r){g(e,r);function e(t,n,o){t===void 0&&(t=1/0),n===void 0&&(n=1/0),o===void 0&&(o=at);var s=r.call(this)||this;return s._bufferSize=t,s._windowTime=n,s._timestampProvider=o,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=n===1/0,s._bufferSize=Math.max(1,t),s._windowTime=Math.max(1,n),s}return e.prototype.next=function(t){var n=this,o=n.isStopped,s=n._buffer,i=n._infiniteTimeWindow,u=n._timestampProvider,l=n._windowTime;o||(s.push(t),!i&&s.push(u.now()+l)),this._trimBuffer(),r.prototype.next.call(this,t)},e.prototype._subscribe=function(t){this._throwIfClosed(),this._trimBuffer();for(var n=this._innerSubscribe(t),o=this,s=o._infiniteTimeWindow,i=o._buffer,u=i.slice(),l=0;l<u.length&&!t.closed;l+=s?1:2)t.next(u[l]);return this._checkFinalizedStatuses(t),n},e.prototype._trimBuffer=function(){var t=this,n=t._bufferSize,o=t._timestampProvider,s=t._buffer,i=t._infiniteTimeWindow,u=(i?1:2)*n;if(n<1/0&&u<s.length&&s.splice(0,s.length-u),!i){for(var l=o.now(),a=0,h=1;h<s.length&&s[h]<=l;h+=2)a=h;a&&s.splice(0,a+1)}},e}(X);function Dt(r){return xt(function(e,t){var n=!1,o=0;e.subscribe(At(t,function(s){return(n||(n=!r(s,o++)))&&t.next(s)}))})}function Nt(r,e,t,n){p.innerUse("devtool").publish(t)}function Bt(r=!1){return function(t,n,o,s){return t[n]!==o&&Nt(t,n,o),Reflect.set(t,n,o,s)}}const rt={get:function(r,e,t){return r[e]},set:Bt()},nt=Symbol("channelx");function Ft(r){return Rt(r)}function Rt(r){return r[nt]={queues:ot({},rt),emitters:ot({},rt),innerQueues:{},exchanges:[]},r[nt]}function ot(r,e){return new Proxy(r,e)}async function Vt(r){return fetch(r.url,r).then(e=>e.json())}function Mt(r){return Object.keys(r).length===0}var lt=(r=>(r.GET="GET",r.POST="POST",r.PUT="PUT",r.DELETE="DELETE",r))(lt||{});function Wt(r){const e={};return typeof r=="string"?(e.url=r,e.method=lt.GET):typeof r=="function"?e.func=r:(e.url=r.url,e.method=r.method,e.data=r.data,e.options=r.options),e}var z=(r=>(r.TEXT="text",r.NUMBER="number",r.ARRAY="array",r.OBJECT="object",r))(z||{}),T=(r=>(r.fanout="fanout",r.topic="topic",r.headers="headers",r.direct="direct",r))(T||{});class p{static INIT_VALUE=`INIT_VALUE${new Date().valueOf()}`;static _queues={};static classForTestsOnly(e,t,n){return new p(e,t,n)}get propsForTestsOnly(){return{queueName:this.queueName,queueContext:this.queueContext,subscriptions:this.subscriptions,operators:this.operators,builders:this.builders,tempData:this.tempData,queues:this.queues,emitters:this.emitters,exchangeName:this.exchangeName,exchangeType:this.exchangeType,httpInfo:this.httpInfo}}static publishTo(e,t){p.broker.queues[e]&&p.broker.queues[e].subject.next(t)}static consumeFrom(e){return p.broker.queues[e]?.subject}static broker=Ft(globalThis);static exchanges={};options;static get settings(){return{broker:p.broker,context:p.context}}static context=[];static refs=new Map;queueName;queueContext;subscriptions=[];operators;builders={};scope(e){return p.context.push(e),this}tempData;queues;emitters;exchangeName="default";exchangeType=T.fanout;httpInfo={url:"",func:null};static use(e,t){return new p(e,new R(20),t)}static useReplay(e,t){return new p(e,new R(20),t)}static innerUse(e,t){return new p(e,new R(20),{...t,inner:!0})}stash(e,t=z.TEXT,n=!0){const o=this.queues[this.queueName];switch(t){case z.TEXT:n?o.tempData=e:o.tempData+=e}}stashAndPublishWhen(){return""}flushAndPublish(){const e=this.queues[this.queueName],t=e?.tempData;t!==void 0&&this.publish(t,()=>e.tempData="")}context(e){return this.queueContext=e,this.queueContext.queueName=this.queueName,this}static getQueues(){return console.log("queues",p.broker.queues),p.broker.queues}static getExchanges(){return p.exchanges}assertExchange(e,t=T.fanout){return this.exchangeName=e,this.exchangeType=t,this}static subjectOptions={INIT_VALUE:Symbol("SUBJECT_INIT_VALUE"),BUFFER_SIZE:Number.POSITIVE_INFINITY,WINDOW_TIME:500};setQueues(e){return this.queues=e?p.broker.innerQueues:p.broker.queues,this.emitters=p.broker.emitters,this.queues}constructor(e,t,n){this.clearChannelData(),this.queues=this.setQueues(n?.inner),this.queues[e]?.subject||(this.queues[e]={subject:t,info:null,tempData:"",track:n?.track}),this.queueName=e,this.options=n}close(){p.clearSubscriptions(this.queueName)}clearChannelData(){this.exchangeName="default",this.operators=null,this.queueName="",this.exchangeType=T.fanout,this.httpInfo={url:""}}setEndpoint(e,t=!0){return this.httpInfo=Wt(e),t?this:this.httpInfo}pushToExchange(e,t){e.forEach(n=>{this.queues[n]?this.queues[n].subject.next(t):this.queues[n].subject=new Ct(t)})}pushToQueues(e,t){e?.length?this.pushToExchange(e,t):this.queues[this.queueName].subject.next(t)}pipeTransformers(e){return Object.keys(this.builders).map(n=>{const o=this.builders[n];return o.builder(e)(o.functionBody)})[0]}async getHttpResult(){let e="";return this.httpInfo?.func&&typeof this.httpInfo.func=="function"?e=await this.httpInfo.func():this.httpInfo?.url&&(e=await Vt(this.httpInfo)),e}async setMsg(e){let t=e;const n=await this.getHttpResult();return n&&e&&(n.channelMsg=e,t=n),t}async publish(e,t){return this.pushToQueues(p.exchanges[this.exchangeName],await this.setMsg(e)),t&&typeof t=="function"&&t(),this}pipe(e){return this.operators=e,this}tube(e,t){return this.builders[e.name]={builder:e,functionBody:t},this}funnel(){return this}static clearSubscriptions(e){p.refs.get(e).forEach(n=>n.unsubscribe())}createStream(e){return e.subject.pipe(Dt(t=>t===p.subjectOptions.INIT_VALUE))}consume(e,t=!0){let n=this.createStream(this.queues[this.queueName]),o;const s=this.operators;if(s&&(n=n.pipe(...s)),Mt(this.builders)||(n=this.pipeTransformers(n)),e)t?o=n.subscribe(e):e();else return n;return this.subscriptions.push(o),p.refs.set(this.queueName,this.subscriptions),this.queues[this.queueName].subject}bindExchange(e,t=T.fanout){return this.exchangeName=e,this.exchangeType=t,p.exchanges[e]=p.exchanges[e]||[],p.exchanges[e].push(this.queueName),this}}const pt=r=>r.charAt(0).toUpperCase()+r.slice(1),Lt=y({__name:"Channels",props:{content:{type:Object,required:!0}},setup(r){const e={consumers:{},publishers:{}},t=ht([]),n=p.getQueues();return Object.keys(n).forEach(o=>{const s=n[o].devtools.channels;Object.keys(s).forEach(i=>{const u=i;e[u][o]=e[u][o]||{},e[u][o]={queue:o,content:s[i]}})}),Object.keys(e).forEach(o=>{t.push({type:pt(o),content:e[o]})}),(o,s)=>(f(),P(G,{items:t},null,8,["items"]))}}),Ht={class:"components"},zt={class:"components__zone"},Qt=["onClick","onMouseleave","onMouseover"],Yt={class:"components__zone__item_sup"},Xt={class:"components__info"},Gt=y({__name:"Components",props:{content:{type:Object,required:!0}},emits:["component-info"],setup(r,{emit:e}){const t=r,n=E({}),o=E({}),s=E([{}]);ft(()=>{const a=t.content.components;n.value={...n.value,...a}});const i=a=>{const h=a.info.instance.channelx;s.value=Object.keys(h).map((_,m)=>({type:pt(_),content:h[_]})),s.value.push({type:"Http",content:a}),s.value.push({type:"Diagrams",content:a}),o.value=a,e("component-info",a)},u=a=>{if(!a)return;a.el.classList.add("overlay");const h=a.el.getBoundingClientRect();a.el.setAttribute("data-component-info",a.componentName.toUpperCase()+" ( "+(h.width%1?h.width.toFixed(2):h.width)+" X "+(h.height%1?h.height.toFixed(2):h.height)+" ) ")},l=a=>{a.el.classList.remove("overlay"),a.el.removeAttribute("data-component-info")};return(a,h)=>(f(),d("div",Ht,[c("div",zt,[(f(!0),d(C,null,D(n.value,(_,m,S)=>(f(),d("div",{class:st(["components__zone__item",{"components__zone__item--active":_===o.value}]),key:m,onClick:k=>i(_),onMouseleave:k=>l(_.info),onMouseover:k=>u(_.info)},[c("div",null,[dt(I(_.info.componentName),1),c("sup",Yt,I(_.uid),1)])],42,Qt))),128))]),c("div",Xt,[A(G,{items:s.value},null,8,["items"])])]))}});const x=(r,e)=>{const t=r.__vccOpts||r;for(const[n,o]of e)t[n]=o;return t},Jt=x(Gt,[["__scopeId","data-v-d5f43e71"]]),Kt=["onClick"],Zt=y({__name:"Consumers",props:{content:{type:Array,required:!0}},setup(r){const e=t=>{console.log("item",t)};return(t,n)=>(f(!0),d(C,null,D(r.content,o=>(f(),d("div",null,[c("div",{onClick:s=>e(o),class:"scope__boxes"},I(o?.queue||o),9,Kt)]))),256))}});const te=x(Zt,[["__scopeId","data-v-db6e940d"]]);const ee={},re=c("li",{head:"",on:"1"},"User",-1),ne=c("li",{head:"",on:"2"},"Page",-1),oe=c("li",{head:"",on:"3"},"Service Worker",-1),se=c("li",{head:"",on:"4"},"Server",-1),ie=c("li",{head:"",on:"5"},"Push Service",-1),ue=c("li",{from:"1",to:"4"},"Navigation",-1),ce=c("li",{back:"",from:"4",to:"2"},"Page Load",-1),ae=c("li",{from:"2",to:"3"},"register()",-1),le=c("li",{on:"3"},"Register Push Handler",-1),pe=c("li",{on:"3"},"Register Notification Click Handler",-1),he=c("li",{back:"",from:"3",to:"2"},"success",-1),fe=c("li",{back:"",from:"2",to:"1"},"Notification Permission Prompt",-1),de=c("li",{on:"3"},"Worker is suspended",-1),_e=c("li",{on:"1"},"permission granted",-1),be=c("li",{from:"1",to:"2"},"success",-1),ve=c("li",{on:"2"},"endpoint and key generated",-1),ye=c("li",{from:"2",to:"4"},"send endpoint & key",-1),me=c("li",{on:"2"},"page blur or closed",-1),ge=c("li",{break:""},"*time passes*",-1),xe=c("li",{on:"4"},"event!",-1),Se=c("li",{from:"4",to:"5"},"send message",-1),we=c("li",{back:"",from:"5",to:"3"},"push event",-1),Te=c("li",{on:"3"},"worker is resumed",-1),Ee=c("li",{back:"",from:"3",to:"1"},"display notification",-1),Ie=c("li",{on:"1"},"click on notification",-1),ke=c("li",{from:"1",to:"3"},"notificationclick event",-1),qe=c("li",{back:"",from:"3",to:"1"},"focus tab / open page",-1),Oe=[re,ne,oe,se,ie,ue,ce,ae,le,pe,he,fe,de,_e,be,ve,ye,me,ge,xe,Se,we,Te,Ee,Ie,ke,qe];function je(r,e){return f(),d("ol",null,Oe)}const Pe=x(ee,[["render",je]]),Ae=y({__name:"Diagrams",setup(r){return(e,t)=>(f(),P(Pe))}}),Ue=y({__name:"Http",props:{content:{type:Array,required:!0}},setup(r){const e=r;return _t(()=>{console.log("props",e)}),(t,n)=>"http"}}),$e=["onClick"],Ce=y({__name:"Publishers",props:{content:{type:Array,required:!0}},setup(r){const e=t=>{console.log("item",t)};return(t,n)=>(f(!0),d(C,null,D(r.content,o=>(f(),d("div",null,[c("div",{onClick:s=>e(o),class:"scope__boxes"},I(o?.queue||o),9,$e)]))),256))}});const De=x(Ce,[["__scopeId","data-v-798c746b"]]),Ne={Channels:Lt,Components:Jt,Consumers:te,Publishers:De,Diagrams:Ae,Http:Ue},Be={class:"tabs__content"},Fe=y({__name:"Tab",props:{type:{type:String,required:!0},content:{type:Object,required:!0}},setup(r){const e=r,t=Ne,n=bt(()=>t[e.type]),o=s=>{e.content.components[s.uid],console.log("component",s)};return(s,i)=>(f(),d("div",Be,[(f(),P(yt,null,[(f(),P(vt(w(n)),{onComponentInfo:o,content:r.content},null,40,["content"]))],1024))]))}});const Re=x(Fe,[["__scopeId","data-v-3effb95f"]]),Ve={class:"tabs__header"},Me=["onClick"],We=y({__name:"TabsHeader",props:{items:{type:Array,required:!0},activeTab:{type:Number,required:!0}},emits:["set-active-tab"],setup(r,{emit:e}){const t=n=>{console.log("index",n),e("set-active-tab",n)};return(n,o)=>(f(),d("div",Ve,[(f(!0),d(C,null,D(r.items,(s,i)=>(f(),d("div",{key:i,class:st(["tabs__header__tab",{"tabs__header__tab--active":i===r.activeTab}]),onClick:u=>t(i)},I(s?.toUpperCase()),11,Me))),128))]))}});const Le={class:"tabs"},He=y({__name:"Tabs",props:{items:{type:Array,required:!0}},setup(r){const e=r,t=E(0),n=s=>{t.value=s},o=mt(()=>e.items?.[t.value]||e.items[0]);return(s,i)=>(f(),d("div",Le,[A(w(We),{items:r.items.map(u=>u.type),"active-tab":t.value,onSetActiveTab:n},null,8,["items","active-tab"]),A(w(Re),{content:w(o).content,type:w(o).type},null,8,["content","type"])]))}});const G=x(He,[["__scopeId","data-v-2bb5b1be"]]),ze={class:"devtools-container"},Qe=y({__name:"Devtool",setup(r){const e=E([{}]);return p.innerUse("devtool").consume(t=>{setTimeout(()=>{e.value=[{type:"Components",content:t.devtools},{type:"Channels",content:t.devtools},{type:"Broker",content:t.devtools}]},0)}),(t,n)=>(f(),d("div",ze,[A(G,{items:e.value},null,8,["items"])]))}});const Xe=x(Qe,[["__scopeId","data-v-6f5886d3"]]);export{Xe as default};
//# sourceMappingURL=__federation_expose_Devtool.414da1d5.js.map
