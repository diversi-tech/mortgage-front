import{a as J}from"./chunk-Y6C43CYZ.js";import{a as te,b as oe,c as E}from"./chunk-KIPPX2MS.js";import{a as le}from"./chunk-3RGTMFFT.js";import{a as se}from"./chunk-FEGEKQO2.js";import{Y as ne,d as K,da as ae,e as Q,m as ee,o as re,p as ie}from"./chunk-FOCA34K7.js";import{Sa as q,T as X,U as Y,X as $,eb as C,f as L,g as B,h as _,hb as M,i as z,j as U,k as H,l as V,o as G,p as Z,q as W,r as h}from"./chunk-GZYZNWGU.js";import{$c as v,Eb as m,Fb as u,Gb as D,La as A,Mc as j,Yb as p,aa as I,ab as c,bb as P,da as g,db as T,ea as s,fb as k,fc as F,hb as O,ia as b,ib as R,ja as S,na as y,oa as l,qa as x,zc as N}from"./chunk-IRQTURN7.js";var me=(()=>{let e=class e{constructor(t){this.cdr=t}};e.\u0275fac=function(o){return new(o||e)(c(N))},e.\u0275cmp=y({type:e,selectors:[["page-not-found"]],standalone:!0,features:[F],decls:13,vars:0,consts:[[1,"page-not-found-container"],[1,"error-content"],[1,"error-title"],[1,"error-message"],[1,"error-image"],["src","assets/logo.png","alt","404 Error","width","300px","height","300px",2,"float","right"],[1,"error-actions"],["mat-raised-button","","color","primary","routerLink","/"]],template:function(o,n){o&1&&(m(0,"div",0)(1,"div",1)(2,"h1",2),p(3,":( 404 - \u05E2\u05DE\u05D5\u05D3 \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"),u(),m(4,"p",3),p(5,"\u05E0\u05E8\u05D0\u05D4 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05E0\u05E1\u05D4 \u05DC\u05D2\u05E9\u05EA \u05DC\u05E2\u05DE\u05D5\u05D3 \u05E9\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD."),u(),m(6,"p",3),p(7,"\u05D4\u05D3\u05E3 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05D7\u05E4\u05E9 \u05E4\u05E9\u05D5\u05D8 \u05E0\u05E2\u05DC\u05DD"),u(),m(8,"div",4),D(9,"img",5),u(),m(10,"div",6)(11,"button",7),p(12,"\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA"),u()()()())},dependencies:[h,W,C,$,v],styles:[".page-not-found-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;text-align:center;background-color:#f5f5f5}.page-not-found-container[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;width:80vw!important;background:#fff;border-radius:10px;box-shadow:0 4px 8px #0000001a}.page-not-found-container[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%]{font-size:3rem;color:#333;margin-bottom:10px}.page-not-found-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{font-size:1.5rem;color:#666;margin-bottom:20px}.page-not-found-container[_ngcontent-%COMP%]   .error-image[_ngcontent-%COMP%]{margin-bottom:20px}.page-not-found-container[_ngcontent-%COMP%]   .error-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.page-not-found-container[_ngcontent-%COMP%]   .error-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;margin-right:10px}"]});let r=e;return r})();var De=[{path:"",redirectTo:"/auth/login",pathMatch:"full"},{path:"auth",loadChildren:()=>import("./chunk-VF7AEWC4.js").then(r=>r.AuthModule)},{path:"admin",loadChildren:()=>import("./chunk-3RYZSI4I.js").then(r=>r.AdminModule)},{path:"customer",loadChildren:()=>import("./chunk-DEPFK2HS.js").then(r=>r.CustomerModule)},{path:"lead",loadChildren:()=>import("./chunk-Y3Y2EDKW.js").then(r=>r.LeadModule)},{path:"**",component:me}],ue=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l({type:e}),e.\u0275inj=s({imports:[h.forRoot(De),h]});let r=e;return r})();var de=(()=>{let e=class e{constructor(t,o){this._snackBar=t,this.router=o,this.timeoutDuration=20*60*1e3,this.alertDuration=60*1e3,this.lastActivityTime=0,this.title="mortgage-client"}ngOnInit(){typeof window<"u"&&(this.resetTimer(),window.addEventListener("mousemove",()=>this.resetTimer()),window.addEventListener("click",()=>this.resetTimer()),window.addEventListener("keypress",()=>this.resetTimer()))}ngOnDestroy(){clearTimeout(this.timeoutId),clearInterval(this.intervalId)}resetTimer(){this.lastActivityTime=Date.now(),clearTimeout(this.timeoutId),clearInterval(this.intervalId),this.updateTimerDisplay(),this.timeoutId=setTimeout(()=>this.logout(),this.timeoutDuration)}logout(){alert("\u05D6\u05DE\u05DF \u05D4\u05EA\u05D5\u05E7\u05E3 \u05E4\u05D2 \u05D1\u05D2\u05DC\u05DC \u05D7\u05D5\u05E1\u05E8 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA."),window.sessionStorage!=null&&sessionStorage.removeItem("token"),this.router.navigate(["auth/login"])}updateTimerDisplay(){this.intervalId=setInterval(()=>{let t=Date.now()-this.lastActivityTime,o=this.timeoutDuration-t;o<=0?(clearInterval(this.intervalId),this.logout()):o<=this.alertDuration&&this.showAlert()},1e3)}showAlert(){this.openSnackBar("\u05D0\u05DD \u05DC\u05D0 \u05EA\u05DE\u05E9\u05D9\u05DA \u05D1\u05D2\u05DC\u05D9\u05E9\u05D4 \u05D1\u05D3\u05E7\u05D4 \u05D4\u05E7\u05E8\u05D5\u05D1\u05D4, \u05EA\u05D5\u05E6\u05D0 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D5\u05EA\u05D0\u05DC\u05E5 \u05DC\u05D4\u05DB\u05E0\u05E1 \u05DE\u05D7\u05D3\u05E9","\u05D1\u05D8\u05DC"),clearInterval(this.intervalId)}openSnackBar(t,o){this._snackBar.open(t,o,{duration:1e4,horizontalPosition:"center",verticalPosition:"top",direction:"rtl",panelClass:["custom-snackbar"]})}};e.\u0275fac=function(o){return new(o||e)(c(q),c(Z))},e.\u0275cmp=y({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(o,n){o&1&&D(0,"router-outlet")},dependencies:[G]});let r=e;return r})();var ve="@",Ce=(()=>{let e=class e{constructor(t,o,n,a,f){this.doc=t,this.delegate=o,this.zone=n,this.animationType=a,this.moduleImpl=f,this._rendererFactoryPromise=null,this.scheduler=S(T,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-SVZPZEJU.js").then(o=>o)).catch(o=>{throw new I(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc);let a=new n(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,o){let n=this.delegate.createRenderer(t,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new w(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(f=>{let ge=f.createRenderer(t,o);a.use(ge),this.scheduler?.notify(9)}).catch(f=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){P()},e.\u0275prov=g({token:e,factory:e.\u0275fac});let r=e;return r})(),w=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,t,o){this.delegate.insertBefore(e,i,t,o)}removeChild(e,i,t){this.delegate.removeChild(e,i,t)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,t,o){this.delegate.setAttribute(e,i,t,o)}removeAttribute(e,i,t){this.delegate.removeAttribute(e,i,t)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,t,o){this.delegate.setStyle(e,i,t,o)}removeStyle(e,i,t){this.delegate.removeStyle(e,i,t)}setProperty(e,i,t){this.shouldReplay(i)&&this.replay.push(o=>o.setProperty(e,i,t)),this.delegate.setProperty(e,i,t)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,t){return this.shouldReplay(i)&&this.replay.push(o=>o.listen(e,i,t)),this.delegate.listen(e,i,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(ve)}};function ce(r="animations"){return O("NgAsyncAnimations"),x([{provide:k,useFactory:(e,i,t)=>new Ce(e,i,t,r),deps:[j,U,R]},{provide:A,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var pe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l({type:e}),e.\u0275inj=s({imports:[v,X,C,Y,E,ie]});let r=e;return r})();var he=(()=>{let e=class e{constructor(t){this.loginService=t}intercept(t,o){let n=this.loginService.GetToken(),a=t.clone({headers:t.headers.set("Authorization",`Bearer ${n}`)});return o.handle(a)}};e.\u0275fac=function(o){return new(o||e)(b(M))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let r=e;return r})();var fe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l({type:e,bootstrap:[de]}),e.\u0275inj=s({providers:[{provide:L,useClass:he,multi:!0},ce(),B(_()),K,ee,Q,re,ne,te,M,oe],imports:[V,z,ue,pe,le,ae,se,J,E]});let r=e;return r})();if(typeof localStorage>"u"||localStorage===null){let r=(()=>{let e={},i=0;return{get length(){return i},key:t=>Object.keys(e)[t]||null,getItem:t=>e[t]||null,setItem:(t,o)=>{e[t]=o,i=Object.keys(e).length},removeItem:t=>{delete e[t],i=Object.keys(e).length},clear:()=>{e={},i=0}}})();global.localStorage=r}H().bootstrapModule(fe,{ngZoneEventCoalescing:!0}).catch(r=>console.log(r));
