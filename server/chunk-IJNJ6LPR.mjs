import './polyfills.server.mjs';
import{a as he}from"./chunk-GUR6WN7U.mjs";import{c as $}from"./chunk-3R3IJXUO.mjs";import{a as re}from"./chunk-75SGCFCO.mjs";import{a as se,b as me,c as E}from"./chunk-ZXS3DFOK.mjs";import{a as pe}from"./chunk-MOPF5JQC.mjs";import{G as ce,N as de,d as ie,e as ne,m as ae,o as le,p as ue}from"./chunk-QQ6DYRED.mjs";import{B as Q,Ba as oe,C as ee,F as te,Pa as M,Sa as w}from"./chunk-B3SZUYRB.mjs";import{f as V,h as W,i as X,j as C,n as Y,o as Z,s as q,u as J,v as K,w as g}from"./chunk-TIRFLIF6.mjs";import{$a as j,Cb as l,Db as u,Eb as h,Fa as R,Nc as H,W as T,Wb as f,Yc as _,Z as p,Za as F,_ as s,_a as d,bb as k,ca as b,cd as D,da as P,db as N,dc as U,fb as L,gb as B,ha as y,ia as m,ka as O,rb as G,tb as x,zc as z}from"./chunk-ZE4Y54UW.mjs";var S=(()=>{let e=class e{constructor(){this.showGeneral=!0}setShowGeneral(r){this.showGeneral=r}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var ge=(()=>{let e=class e{constructor(r,t){this.uiStateService=r,this.cdr=t}ngOnInit(){console.log(this.uiStateService.showGeneral),setTimeout(()=>{this.uiStateService.setShowGeneral(!1),this.cdr.detectChanges()},0)}};e.\u0275fac=function(t){return new(t||e)(d(S),d(z))},e.\u0275cmp=y({type:e,selectors:[["page-not-found"]],standalone:!0,features:[U],decls:13,vars:0,consts:[[1,"page-not-found-container"],[1,"error-content"],[1,"error-title"],[1,"error-message"],[1,"error-image"],["src","assets/logo.png","alt","404 Error","width","300px","height","300px",2,"float","right"],[1,"error-actions"],["mat-raised-button","","color","primary","routerLink","/"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"div",1)(2,"h1",2),f(3,":( 404 - \u05E2\u05DE\u05D5\u05D3 \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"),u(),l(4,"p",3),f(5,"\u05E0\u05E8\u05D0\u05D4 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05E0\u05E1\u05D4 \u05DC\u05D2\u05E9\u05EA \u05DC\u05E2\u05DE\u05D5\u05D3 \u05E9\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD."),u(),l(6,"p",3),f(7,"\u05D4\u05D3\u05E3 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05D7\u05E4\u05E9 \u05E4\u05E9\u05D5\u05D8 \u05E0\u05E2\u05DC\u05DD"),u(),l(8,"div",4),h(9,"img",5),u(),l(10,"div",6)(11,"button",7),f(12,"\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA"),u()()()())},dependencies:[g,K,M,te,D],styles:[".page-not-found-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;text-align:center;background-color:#f5f5f5}.page-not-found-container[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;width:80vw!important;background:#fff;border-radius:10px;box-shadow:0 4px 8px #0000001a}.page-not-found-container[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%]{font-size:3rem;color:#333;margin-bottom:10px}.page-not-found-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{font-size:1.5rem;color:#666;margin-bottom:20px}.page-not-found-container[_ngcontent-%COMP%]   .error-image[_ngcontent-%COMP%]{margin-bottom:20px}.page-not-found-container[_ngcontent-%COMP%]   .error-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.page-not-found-container[_ngcontent-%COMP%]   .error-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;margin-right:10px}"]});let o=e;return o})();var Se=[{path:"",redirectTo:"/auth/login",pathMatch:"full"},{path:"auth",loadChildren:()=>import("./chunk-JQC4TTFK.mjs").then(o=>o.AuthModule)},{path:"admin",loadChildren:()=>import("./chunk-ZVYERSX2.mjs").then(o=>o.AdminModule)},{path:"customer",loadChildren:()=>import("./chunk-2MQ5AHP2.mjs").then(o=>o.CustomerModule)},{path:"lead",loadChildren:()=>import("./chunk-RCMNZY4Z.mjs").then(o=>o.LeadModule)},{path:"**",component:ge}],ve=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m({type:e}),e.\u0275inj=s({imports:[g.forRoot(Se),g]});let o=e;return o})();function Ie(o,e){o&1&&(l(0,"div"),h(1,"router-outlet"),u())}function xe(o,e){o&1&&h(0,"router-outlet")}var I=(()=>{let e=class e{constructor(r,t,n){this.uiStateService=r,this._snackBar=t,this.router=n,this.timeoutDuration=20*60*1e3,this.alertDuration=60*1e3,this.lastActivityTime=0,this.title="mortgage-client"}ngOnInit(){typeof window<"u"&&(this.resetTimer(),window.addEventListener("mousemove",()=>this.resetTimer()),window.addEventListener("click",()=>this.resetTimer()),window.addEventListener("keypress",()=>this.resetTimer()))}ngOnDestroy(){clearTimeout(this.timeoutId),clearInterval(this.intervalId)}resetTimer(){this.lastActivityTime=Date.now(),clearTimeout(this.timeoutId),clearInterval(this.intervalId),this.updateTimerDisplay(),this.timeoutId=setTimeout(()=>this.logout(),this.timeoutDuration)}logout(){alert("\u05D6\u05DE\u05DF \u05D4\u05EA\u05D5\u05E7\u05E3 \u05E4\u05D2 \u05D1\u05D2\u05DC\u05DC \u05D7\u05D5\u05E1\u05E8 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA."),window.sessionStorage!=null&&sessionStorage.removeItem("token"),this.router.navigate(["auth/login"])}updateTimerDisplay(){this.intervalId=setInterval(()=>{let r=Date.now()-this.lastActivityTime,t=this.timeoutDuration-r;t<=0?(clearInterval(this.intervalId),this.logout()):t<=this.alertDuration&&this.showAlert()},1e3)}showAlert(){this.openSnackBar("\u05D0\u05DD \u05DC\u05D0 \u05EA\u05DE\u05E9\u05D9\u05DA \u05D1\u05D2\u05DC\u05D9\u05E9\u05D4 \u05D1\u05D3\u05E7\u05D4 \u05D4\u05E7\u05E8\u05D5\u05D1\u05D4, \u05EA\u05D5\u05E6\u05D0 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D5\u05EA\u05D0\u05DC\u05E5 \u05DC\u05D4\u05DB\u05E0\u05E1 \u05DE\u05D7\u05D3\u05E9","\u05D1\u05D8\u05DC"),clearInterval(this.intervalId)}openSnackBar(r,t){this._snackBar.open(r,t,{duration:1e4,horizontalPosition:"center",verticalPosition:"top",direction:"rtl",panelClass:["custom-snackbar"]})}get showGeneral(){return this.uiStateService.showGeneral}};e.\u0275fac=function(t){return new(t||e)(d(S),d(oe),d(J))},e.\u0275cmp=y({type:e,selectors:[["app-root"]],decls:2,vars:2,consts:[[4,"ngIf"]],template:function(t,n){t&1&&G(0,Ie,2,0,"div",0)(1,xe,1,0,"router-outlet",0),t&2&&(x("ngIf",n.showGeneral),F(),x("ngIf",!n.showGeneral))},dependencies:[_,q]});let o=e;return o})();var Ae="@",Te=(()=>{let e=class e{constructor(r,t,n,a,v){this.doc=r,this.delegate=t,this.zone=n,this.animationType=a,this.moduleImpl=v,this._rendererFactoryPromise=null,this.scheduler=P(k,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-JB2NPHOL.mjs").then(t=>t)).catch(t=>{throw new T(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:n})=>{this._engine=t(this.animationType,this.doc);let a=new n(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(r,t){let n=this.delegate.createRenderer(r,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new A(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(v=>{let we=v.createRenderer(r,t);a.use(we),this.scheduler?.notify(9)}).catch(v=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(t){j()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let o=e;return o})(),A=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,r,t){this.delegate.insertBefore(e,i,r,t)}removeChild(e,i,r){this.delegate.removeChild(e,i,r)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,r,t){this.delegate.setAttribute(e,i,r,t)}removeAttribute(e,i,r){this.delegate.removeAttribute(e,i,r)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,r,t){this.delegate.setStyle(e,i,r,t)}removeStyle(e,i,r){this.delegate.removeStyle(e,i,r)}setProperty(e,i,r){this.shouldReplay(i)&&this.replay.push(t=>t.setProperty(e,i,r)),this.delegate.setProperty(e,i,r)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,r){return this.shouldReplay(i)&&this.replay.push(t=>t.listen(e,i,r)),this.delegate.listen(e,i,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(Ae)}};function ye(o="animations"){return L("NgAsyncAnimations"),O([{provide:N,useFactory:(e,i,r)=>new Te(e,i,r,o),deps:[H,Y,B]},{provide:R,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var De=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m({type:e}),e.\u0275inj=s({imports:[D,Q,M,ee,E,ue]});let o=e;return o})();var Ce=(()=>{let e=class e{constructor(r){this.loginService=r}intercept(r,t){let n=this.loginService.GetToken(),a=r.clone({headers:r.headers.set("Authorization",`Bearer ${n}`)});return t.handle(a)}};e.\u0275fac=function(t){return new(t||e)(b(w))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let o=e;return o})();var Me=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m({type:e,bootstrap:[I]}),e.\u0275inj=s({providers:[{provide:V,useClass:Ce,multi:!0},ye(),W(X()),ie,ae,ne,le,ce,se,w,me],imports:[Z,C,ve,De,he,de,pe,re,E]});let o=e;return o})();var be=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m({type:e,bootstrap:[I]}),e.\u0275inj=s({imports:[Me,$,C]});let o=e;return o})();export{be as a};
