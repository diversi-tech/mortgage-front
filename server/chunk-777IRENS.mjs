import './polyfills.server.mjs';
import{a as le}from"./chunk-IKOI5QNJ.mjs";import{c as W}from"./chunk-LBIHHHMZ.mjs";import{a as K}from"./chunk-IL5CWF4W.mjs";import{a as oe,b as re,c as w}from"./chunk-B7G2L5XD.mjs";import{a as me}from"./chunk-MHCUQZFC.mjs";import{Y as ae,d as Q,da as se,e as ee,m as te,o as ie,p as ne}from"./chunk-KGUJETSC.mjs";import{Aa as J,B as _,C as $,F as q,Oa as M,Ra as E}from"./chunk-NW2DFKJ6.mjs";import{f as z,h as H,i as U,j as C,n as V,o as G,s as X,u as Y,v as Z,w as h}from"./chunk-MR55LIO3.mjs";import{Bb as u,Cb as d,Db as D,Fa as T,Mc as B,Vb as p,W as A,Z as g,Za as c,_ as s,_a as R,ab as O,bd as v,ca as P,cb as F,cc as j,da as S,eb as k,fb as N,ha as y,ia as m,ka as b,yc as L}from"./chunk-YZM5RFRX.mjs";var ue=(()=>{let e=class e{constructor(t){this.cdr=t}};e.\u0275fac=function(o){return new(o||e)(c(L))},e.\u0275cmp=y({type:e,selectors:[["page-not-found"]],standalone:!0,features:[j],decls:13,vars:0,consts:[[1,"page-not-found-container"],[1,"error-content"],[1,"error-title"],[1,"error-message"],[1,"error-image"],["src","assets/logo.png","alt","404 Error","width","300px","height","300px",2,"float","right"],[1,"error-actions"],["mat-raised-button","","color","primary","routerLink","/"]],template:function(o,n){o&1&&(u(0,"div",0)(1,"div",1)(2,"h1",2),p(3,":( 404 - \u05E2\u05DE\u05D5\u05D3 \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"),d(),u(4,"p",3),p(5,"\u05E0\u05E8\u05D0\u05D4 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05E0\u05E1\u05D4 \u05DC\u05D2\u05E9\u05EA \u05DC\u05E2\u05DE\u05D5\u05D3 \u05E9\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD."),d(),u(6,"p",3),p(7,"\u05D4\u05D3\u05E3 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05D7\u05E4\u05E9 \u05E4\u05E9\u05D5\u05D8 \u05E0\u05E2\u05DC\u05DD"),d(),u(8,"div",4),D(9,"img",5),d(),u(10,"div",6)(11,"button",7),p(12,"\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA"),d()()()())},dependencies:[h,Z,M,q,v],styles:[".page-not-found-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;text-align:center;background-color:#f5f5f5}.page-not-found-container[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;width:80vw!important;background:#fff;border-radius:10px;box-shadow:0 4px 8px #0000001a}.page-not-found-container[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%]{font-size:3rem;color:#333;margin-bottom:10px}.page-not-found-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{font-size:1.5rem;color:#666;margin-bottom:20px}.page-not-found-container[_ngcontent-%COMP%]   .error-image[_ngcontent-%COMP%]{margin-bottom:20px}.page-not-found-container[_ngcontent-%COMP%]   .error-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.page-not-found-container[_ngcontent-%COMP%]   .error-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;margin-right:10px}"]});let r=e;return r})();var De=[{path:"",redirectTo:"/auth/login",pathMatch:"full"},{path:"auth",loadChildren:()=>import("./chunk-PHVXPIVU.mjs").then(r=>r.AuthModule)},{path:"admin",loadChildren:()=>import("./chunk-CRHKVI4G.mjs").then(r=>r.AdminModule)},{path:"customer",loadChildren:()=>import("./chunk-E6T3QJHB.mjs").then(r=>r.CustomerModule)},{path:"lead",loadChildren:()=>import("./chunk-ILRT7S35.mjs").then(r=>r.LeadModule)},{path:"**",component:ue}],de=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=m({type:e}),e.\u0275inj=s({imports:[h.forRoot(De),h]});let r=e;return r})();var I=(()=>{let e=class e{constructor(t,o){this._snackBar=t,this.router=o,this.timeoutDuration=20*60*1e3,this.alertDuration=60*1e3,this.lastActivityTime=0,this.title="mortgage-client"}ngOnInit(){typeof window<"u"&&(this.resetTimer(),window.addEventListener("mousemove",()=>this.resetTimer()),window.addEventListener("click",()=>this.resetTimer()),window.addEventListener("keypress",()=>this.resetTimer()))}ngOnDestroy(){clearTimeout(this.timeoutId),clearInterval(this.intervalId)}resetTimer(){this.lastActivityTime=Date.now(),clearTimeout(this.timeoutId),clearInterval(this.intervalId),this.updateTimerDisplay(),this.timeoutId=setTimeout(()=>this.logout(),this.timeoutDuration)}logout(){alert("\u05D6\u05DE\u05DF \u05D4\u05EA\u05D5\u05E7\u05E3 \u05E4\u05D2 \u05D1\u05D2\u05DC\u05DC \u05D7\u05D5\u05E1\u05E8 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA."),window.sessionStorage!=null&&sessionStorage.removeItem("token"),this.router.navigate(["auth/login"])}updateTimerDisplay(){this.intervalId=setInterval(()=>{let t=Date.now()-this.lastActivityTime,o=this.timeoutDuration-t;o<=0?(clearInterval(this.intervalId),this.logout()):o<=this.alertDuration&&this.showAlert()},1e3)}showAlert(){this.openSnackBar("\u05D0\u05DD \u05DC\u05D0 \u05EA\u05DE\u05E9\u05D9\u05DA \u05D1\u05D2\u05DC\u05D9\u05E9\u05D4 \u05D1\u05D3\u05E7\u05D4 \u05D4\u05E7\u05E8\u05D5\u05D1\u05D4, \u05EA\u05D5\u05E6\u05D0 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D5\u05EA\u05D0\u05DC\u05E5 \u05DC\u05D4\u05DB\u05E0\u05E1 \u05DE\u05D7\u05D3\u05E9","\u05D1\u05D8\u05DC"),clearInterval(this.intervalId)}openSnackBar(t,o){this._snackBar.open(t,o,{duration:1e4,horizontalPosition:"center",verticalPosition:"top",direction:"rtl",panelClass:["custom-snackbar"]})}};e.\u0275fac=function(o){return new(o||e)(c(J),c(Y))},e.\u0275cmp=y({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(o,n){o&1&&D(0,"router-outlet")},dependencies:[X]});let r=e;return r})();var ve="@",Ce=(()=>{let e=class e{constructor(t,o,n,a,f){this.doc=t,this.delegate=o,this.zone=n,this.animationType=a,this.moduleImpl=f,this._rendererFactoryPromise=null,this.scheduler=S(O,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-ROK7CSLW.mjs").then(o=>o)).catch(o=>{throw new A(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc);let a=new n(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,o){let n=this.delegate.createRenderer(t,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new x(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(f=>{let ge=f.createRenderer(t,o);a.use(ge),this.scheduler?.notify(9)}).catch(f=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){R()},e.\u0275prov=g({token:e,factory:e.\u0275fac});let r=e;return r})(),x=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,t,o){this.delegate.insertBefore(e,i,t,o)}removeChild(e,i,t){this.delegate.removeChild(e,i,t)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,t,o){this.delegate.setAttribute(e,i,t,o)}removeAttribute(e,i,t){this.delegate.removeAttribute(e,i,t)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,t,o){this.delegate.setStyle(e,i,t,o)}removeStyle(e,i,t){this.delegate.removeStyle(e,i,t)}setProperty(e,i,t){this.shouldReplay(i)&&this.replay.push(o=>o.setProperty(e,i,t)),this.delegate.setProperty(e,i,t)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,t){return this.shouldReplay(i)&&this.replay.push(o=>o.listen(e,i,t)),this.delegate.listen(e,i,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(ve)}};function ce(r="animations"){return k("NgAsyncAnimations"),b([{provide:F,useFactory:(e,i,t)=>new Ce(e,i,t,r),deps:[B,V,N]},{provide:T,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var pe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=m({type:e}),e.\u0275inj=s({imports:[v,_,M,$,w,ne]});let r=e;return r})();var he=(()=>{let e=class e{constructor(t){this.loginService=t}intercept(t,o){let n=this.loginService.GetToken(),a=t.clone({headers:t.headers.set("Authorization",`Bearer ${n}`)});return o.handle(a)}};e.\u0275fac=function(o){return new(o||e)(P(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let r=e;return r})();var fe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=m({type:e,bootstrap:[I]}),e.\u0275inj=s({providers:[{provide:z,useClass:he,multi:!0},ce(),H(U()),Q,te,ee,ie,ae,oe,E,re],imports:[G,C,de,pe,le,se,me,K,w]});let r=e;return r})();var Me=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=m({type:e,bootstrap:[I]}),e.\u0275inj=s({imports:[fe,W,C]});let r=e;return r})();export{Me as a};