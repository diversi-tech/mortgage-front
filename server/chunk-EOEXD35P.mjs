import './polyfills.server.mjs';
import{H as We,I as Ue,J as ze,L as Re,M as je,N as Le,a as w,b as Oe,c as Ie,d as U,f as Ne,g as ke,p as Te,q as Ae,r as Fe,s as Ve}from"./chunk-BKPXFWQF.mjs";import{$ as ge,C as le,Ea as Me,F as ce,Fa as ve,Ga as ye,Ia as Ee,Ja as we,Ka as Se,M as A,Oa as Pe,Ra as E,Y as pe,Z as fe,aa as De,ba as he,k as ne,ka as Ce,la as _e,m as oe,o as re,p as ae,r as se,t as me,u as de,va as F,wa as V,xa as W,ya as be,z as ue,za as xe}from"./chunk-NW2DFKJ6.mjs";import{q as ie,r as k,u as T,w as S}from"./chunk-MR55LIO3.mjs";import{$b as C,$c as ee,Bb as r,Cb as n,Db as M,Hb as J,Kb as z,Mb as K,Ua as q,Ub as Q,Vb as d,Vc as Z,Wb as v,Wc as y,Xb as N,Xc as $,Ya as m,Za as p,_ as O,_b as h,ac as _,bd as te,ec as R,gc as X,ha as b,ia as I,ic as Y,pa as g,qa as D,qb as x,sb as l,z as H}from"./chunk-YZM5RFRX.mjs";import{a as B,h as G}from"./chunk-NDYDZJSS.mjs";var j=(()=>{let e=class e{constructor(a){this.loginService=a,this.componentArrayOfCustomer=[new w("\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD",`/customer/document-list/${this.loginService.GetCurrentUser().customerId}`,"description"),new w("\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD",`/customer/customer-details/${this.loginService.GetCurrentUser().customerId}`,"description"),new w("\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF \u05DE\u05E9\u05DB\u05E0\u05EA\u05D0\u05D5\u05EA","/customer/calculator","calculate"),new w("\u05DE\u05D9\u05DC\u05D5\u05DF \u05E2\u05D6\u05E8 \u05DC\u05DE\u05E9\u05DB\u05E0\u05EA\u05D0","mortgage-helper","help_outline"),new w("\u05D4\u05EA\u05E8\u05D0\u05D5\u05EA",`/customer/notifications/${this.loginService.GetCurrentUser().customerId}`,"notifications")]}};e.\u0275fac=function(o){return new(o||e)(p(E))},e.\u0275cmp=b({type:e,selectors:[["app-customer-portal"]],decls:4,vars:1,consts:[["id","mainPage"],[3,"componentsList"]],template:function(o,i){o&1&&(r(0,"div",0),M(1,"app-toolbar")(2,"navigation-menu",1)(3,"app-footer"),n()),o&2&&(m(2),l("componentsList",i.componentArrayOfCustomer))},dependencies:[Oe,ke,Ie],styles:["#mainPage[_ngcontent-%COMP%]{background-color:transparent;min-height:max-content 100vh;background-image:url(/assets/background.jpg);background-size:cover}"]});let t=e;return t})();function Qe(t,e){if(t&1&&(r(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),d(3),n()(),r(4,"p"),d(5),n()()),t&2){let c=e.$implicit;m(3),N(" ",c.title," "),m(2),v(c.description)}}var He=(()=>{let e=class e{constructor(){this.tips=[{title:"\u05D4\u05D7\u05D6\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 ",description:"\u05D4\u05D4\u05D7\u05D6\u05E8 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05D4\u05D5\u05D0 \u05D4\u05E1\u05DB\u05D5\u05DD \u05E9\u05D0\u05EA\u05D4 \u05DE\u05E9\u05DC\u05DD \u05DC\u05DE\u05DC\u05D5\u05D5\u05D4 \u05D1\u05DB\u05DC \u05D7\u05D5\u05D3\u05E9 \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05E9\u05DC\u05DA, \u05D5\u05D4\u05D5\u05D0 \u05DB\u05D5\u05DC\u05DC \u05D0\u05EA \u05D4\u05E7\u05E8\u05DF (\u05D4\u05E1\u05DB\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9 \u05E9\u05DC\u05E7\u05D7\u05EA \u05D1\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4) \u05D5\u05D0\u05EA \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05E9\u05E0\u05E6\u05D1\u05E8\u05D4 \u05E2\u05DC \u05D4\u05E7\u05E8\u05DF. \u{1F3E6} \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D7\u05E9\u05D1 \u05D0\u05EA \u05D4\u05D4\u05D7\u05D6\u05E8 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05DE\u05E8\u05D0\u05E9 \u05D5\u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05D5\u05D0 \u05EA\u05D5\u05D0\u05DD \u05DC\u05D9\u05DB\u05D5\u05DC\u05EA \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05E9\u05DC\u05DA. \u05EA\u05E9\u05DC\u05D5\u05DD \u05D7\u05D5\u05D3\u05E9\u05D9 \u05D2\u05D1\u05D5\u05D4 \u05DE\u05D3\u05D9 \u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05DB\u05D1\u05D9\u05D3 \u05E2\u05DC \u05D4\u05EA\u05E7\u05E6\u05D9\u05D1 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05E9\u05DC\u05DA \u05D5\u05DC\u05E4\u05D2\u05D5\u05E2 \u05D1\u05D9\u05E6\u05D9\u05D1\u05D5\u05EA \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA. \u05EA\u05DB\u05E0\u05D5\u05DF \u05E0\u05DB\u05D5\u05DF \u05D9\u05DB\u05D5\u05DC \u05DC\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DA \u05DC\u05D4\u05D9\u05DE\u05E0\u05E2 \u05DE\u05E2\u05D5\u05DE\u05E1\u05D9\u05DD \u05DB\u05DC\u05DB\u05DC\u05D9\u05D9\u05DD \u05D5\u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05E9\u05D4\u05D7\u05D6\u05E8\u05D9 \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05DC\u05D0 \u05D9\u05D4\u05E4\u05DB\u05D5 \u05DC\u05DE\u05E2\u05DE\u05E1\u05D4 \u05D1\u05DC\u05EA\u05D9 \u05E0\u05E1\u05D1\u05DC\u05EA. \u{1F4C8}"},{title:"\u05E8\u05D9\u05D1\u05D9\u05EA \u05E7\u05D1\u05D5\u05E2\u05D4 ",description:"\u05E8\u05D9\u05D1\u05D9\u05EA \u05E7\u05D1\u05D5\u05E2\u05D4 \u05D4\u05D9\u05D0 \u05E9\u05D9\u05E2\u05D5\u05E8 \u05E8\u05D9\u05D1\u05D9\u05EA \u05E9\u05E0\u05E9\u05D0\u05E8 \u05E7\u05D1\u05D5\u05E2 \u05DC\u05D0\u05D5\u05E8\u05DA \u05DB\u05DC \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4. \u{1F31F} \u05D4\u05D9\u05EA\u05E8\u05D5\u05DF \u05E9\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA \u05E7\u05D1\u05D5\u05E2\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D4\u05D9\u05D0 \u05DE\u05E1\u05E4\u05E7\u05EA \u05D9\u05E6\u05D9\u05D1\u05D5\u05EA \u05D5\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF, \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05D4\u05D4\u05D7\u05D6\u05E8\u05D9\u05DD \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA \u05DC\u05D0 \u05DE\u05E9\u05EA\u05E0\u05D9\u05DD, \u05D2\u05DD \u05D0\u05DD \u05E9\u05D5\u05E7 \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05DE\u05E9\u05EA\u05E0\u05D4. \u05D6\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DA \u05DC\u05EA\u05DB\u05E0\u05DF \u05D0\u05EA \u05D4\u05EA\u05E7\u05E6\u05D9\u05D1 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05D3\u05D5\u05D9\u05E7\u05EA \u05D5\u05DC\u05E7\u05D1\u05DC \u05EA\u05DE\u05D5\u05E0\u05D4 \u05D1\u05E8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05D4\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9\u05D5\u05EA. \u{1F512} \u05E2\u05DD \u05D6\u05D0\u05EA, \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05D4\u05E7\u05D1\u05D5\u05E2\u05D4 \u05EA\u05D4\u05D9\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05D4\u05EA\u05D7\u05DC\u05D4 \u05D1\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4 \u05DC\u05E8\u05D9\u05D1\u05D9\u05EA \u05DE\u05E9\u05EA\u05E0\u05D4, \u05D0\u05DA \u05D4\u05D9\u05D0 \u05DE\u05E6\u05D9\u05E2\u05D4 \u05D4\u05D2\u05E0\u05D4 \u05DE\u05E4\u05E0\u05D9 \u05E2\u05DC\u05D9\u05D5\u05EA \u05E4\u05EA\u05D0\u05D5\u05DE\u05D9\u05D5\u05EA \u05D1\u05E8\u05D9\u05D1\u05D9\u05EA. \u{1F6E1}\uFE0F"},{title:"\u05E8\u05D9\u05D1\u05D9\u05EA \u05DE\u05E9\u05EA\u05E0\u05D4 ",description:"\u05E8\u05D9\u05D1\u05D9\u05EA \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D4\u05D9\u05D0 \u05E9\u05D9\u05E2\u05D5\u05E8 \u05E8\u05D9\u05D1\u05D9\u05EA \u05E9\u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D1\u05E9\u05D5\u05E7 \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA. \u{1F4B9} \u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05E9\u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05E9\u05DC\u05DA \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05E9\u05EA\u05E0\u05D5\u05EA \u05DC\u05D0\u05D5\u05E8\u05DA \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4, \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05E9\u05D9\u05E2\u05D5\u05E8 \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05D4\u05DB\u05DC\u05DC\u05D9 \u05D1\u05E9\u05D5\u05E7. \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05EA\u05E7\u05D5\u05E4\u05D4, \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05D4\u05DE\u05E9\u05EA\u05E0\u05D4 \u05E2\u05E9\u05D5\u05D9\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05E0\u05DE\u05D5\u05DB\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05E8\u05D9\u05D1\u05D9\u05EA \u05E7\u05D1\u05D5\u05E2\u05D4, \u05DE\u05D4 \u05E9\u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D5\u05D1\u05D9\u05DC \u05DC\u05D4\u05D7\u05D6\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05E0\u05DE\u05D5\u05DA \u05D9\u05D5\u05EA\u05E8. \u{1F4A1} \u05E2\u05DD \u05D6\u05D0\u05EA, \u05D9\u05E9 \u05DC\u05E7\u05D7\u05EA \u05D1\u05D7\u05E9\u05D1\u05D5\u05DF \u05D0\u05EA \u05D4\u05E1\u05D9\u05DB\u05D5\u05DF \u05DC\u05DB\u05DA \u05E9\u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05E2\u05E9\u05D5\u05D9\u05D4 \u05DC\u05E2\u05DC\u05D5\u05EA \u05D1\u05E2\u05EA\u05D9\u05D3, \u05DE\u05D4 \u05E9\u05D9\u05D5\u05D1\u05D9\u05DC \u05DC\u05E2\u05DC\u05D9\u05D9\u05D4 \u05D1\u05D4\u05D7\u05D6\u05E8 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9. \u05D6\u05D5 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05E9\u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05DC\u05DE\u05D9 \u05E9\u05DE\u05D5\u05DB\u05DF \u05DC\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3 \u05E2\u05DD \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D4\u05D0\u05E4\u05E9\u05E8\u05D9\u05D9\u05DD \u05D1\u05E8\u05D9\u05D1\u05D9\u05EA. \u{1F4C9}"},{title:"\u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 ",description:"\u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05D4\u05D9\u05D0 \u05E4\u05E8\u05E7 \u05D4\u05D6\u05DE\u05DF \u05E9\u05D1\u05D5 \u05D0\u05EA\u05D4 \u05E0\u05D3\u05E8\u05E9 \u05DC\u05D4\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05E9\u05DC\u05DA. \u23F3 \u05EA\u05E7\u05D5\u05E4\u05D5\u05EA \u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D5\u05EA \u05D9\u05D5\u05EA\u05E8 \u05DE\u05E7\u05D8\u05D9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D4\u05D7\u05D6\u05E8 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05D0\u05EA\u05D4 \u05E4\u05D5\u05E8\u05E9 \u05D0\u05EA \u05D4\u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD \u05E2\u05DC \u05E4\u05E0\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05D6\u05DE\u05DF, \u05D0\u05D1\u05DC \u05D1\u05E1\u05D5\u05E4\u05D5 \u05E9\u05DC \u05D3\u05D1\u05E8, \u05D0\u05EA\u05D4 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05E9\u05DC\u05DD \u05D9\u05D5\u05EA\u05E8 \u05E8\u05D9\u05D1\u05D9\u05EA. \u{1F9EE} \u05DE\u05E6\u05D3 \u05E9\u05E0\u05D9, \u05EA\u05E7\u05D5\u05E4\u05D5\u05EA \u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05E7\u05E6\u05E8\u05D5\u05EA \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D5\u05D1\u05D9\u05DC\u05D5\u05EA \u05DC\u05D4\u05D7\u05D6\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05D2\u05D1\u05D5\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05D0\u05DA \u05DE\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05DA \u05DC\u05E9\u05DC\u05DD \u05E4\u05D7\u05D5\u05EA \u05E8\u05D9\u05D1\u05D9\u05EA \u05D1\u05E1\u05DA \u05D4\u05DB\u05DC. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D1\u05D7\u05D5\u05E8 \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05E9\u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05DC\u05D9\u05DB\u05D5\u05DC\u05EA \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05E9\u05DC\u05DA \u05D5\u05DC\u05D9\u05E2\u05D3\u05D9\u05DD \u05D4\u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA. \u{1F3AF}"},{title:"\u05E2\u05E8\u05DA \u05D4\u05E0\u05DB\u05E1 ",description:"\u05E2\u05E8\u05DA \u05D4\u05E0\u05DB\u05E1 \u05D4\u05D5\u05D0 \u05D4\u05DE\u05D7\u05D9\u05E8 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05E9\u05DC \u05D4\u05E0\u05DB\u05E1 \u05E9\u05DC\u05DA, \u05D5\u05D4\u05D5\u05D0 \u05E0\u05E7\u05D1\u05E2 \u05E2\u05DC \u05E4\u05D9 \u05D4\u05E2\u05E8\u05DB\u05EA \u05E9\u05D5\u05D5\u05D9 \u05D0\u05D5 \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA \u05D3\u05D5\u05DE\u05D5\u05EA \u05D1\u05E9\u05D5\u05E7. \u{1F3E1} \u05E2\u05E8\u05DA \u05D4\u05E0\u05DB\u05E1 \u05DE\u05E9\u05E4\u05D9\u05E2 \u05E2\u05DC \u05E1\u05DB\u05D5\u05DD \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05E9\u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E7\u05D1\u05DC \u05D5\u05E2\u05DC \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05E9\u05EA\u05E9\u05DC\u05DD. \u05D4\u05DE\u05DC\u05D5\u05D5\u05D4 \u05D1\u05D5\u05D3\u05E7 \u05D0\u05EA \u05E2\u05E8\u05DA \u05D4\u05E0\u05DB\u05E1 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E2\u05E8\u05D9\u05DA \u05D0\u05EA \u05D4\u05E1\u05D9\u05DB\u05D5\u05DF \u05E9\u05DC\u05D5 \u05D5\u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05DC\u05DE\u05E6\u05D1 \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9 \u05E9\u05DC\u05DA. \u{1F4CF} \u05E2\u05D3\u05DB\u05D5\u05DF \u05E7\u05D1\u05D5\u05E2 \u05E9\u05DC \u05E2\u05E8\u05DA \u05D4\u05E0\u05DB\u05E1 \u05E9\u05DC\u05DA \u05D7\u05E9\u05D5\u05D1 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05D4\u05E6\u05E2\u05D5\u05EA \u05D4\u05D8\u05D5\u05D1\u05D5\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05DE\u05DC\u05D5\u05D5\u05D4. \u05D6\u05D4 \u05D2\u05DD \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DA \u05DC\u05D4\u05D1\u05D9\u05DF \u05D0\u05EA \u05E2\u05DE\u05D3\u05EA\u05DA \u05D4\u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05EA \u05D5\u05DC\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D8\u05D5\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05E2\u05DD \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D1\u05E9\u05D5\u05E7. \u{1F4BC}"},{title:"\u05D9\u05D7\u05E1 \u05D7\u05D5\u05D1 \u05DC\u05D4\u05DB\u05E0\u05E1\u05D4 ",description:"\u05D9\u05D7\u05E1 \u05D7\u05D5\u05D1 \u05DC\u05D4\u05DB\u05E0\u05E1\u05D4 \u05D4\u05D5\u05D0 \u05DE\u05D3\u05D3 \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9 \u05E9\u05DE\u05D7\u05E9\u05D1 \u05D0\u05EA \u05D4\u05D7\u05D6\u05E8 \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05E9\u05DC\u05DA \u05D1\u05D9\u05D7\u05E1 \u05DC\u05D4\u05DB\u05E0\u05E1\u05D4 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9\u05EA \u05E9\u05DC\u05DA. \u{1F4CA} \u05D4\u05D5\u05D0 \u05DE\u05E1\u05D9\u05D9\u05E2 \u05DC\u05D4\u05E2\u05E8\u05D9\u05DA \u05D0\u05EA \u05D9\u05E6\u05D9\u05D1\u05D5\u05EA\u05DA \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05D5\u05DE\u05E6\u05D1\u05D9\u05E2 \u05E2\u05DC \u05DB\u05DE\u05D5\u05EA \u05DE\u05D4\u05DB\u05E0\u05E1\u05EA\u05DA \u05D4\u05DE\u05D5\u05E7\u05D3\u05E9\u05EA \u05DC\u05D4\u05D7\u05D6\u05E8 \u05D4\u05DC\u05D5\u05D5\u05D0\u05D5\u05EA. \u05D9\u05D7\u05E1 \u05D7\u05D5\u05D1 \u05DC\u05D4\u05DB\u05E0\u05E1\u05D4 \u05E0\u05DE\u05D5\u05DA \u05DE\u05E6\u05D1\u05D9\u05E2 \u05E2\u05DC \u05D9\u05E6\u05D9\u05D1\u05D5\u05EA \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05D5\u05DE\u05E4\u05D7\u05D9\u05EA \u05D0\u05EA \u05D4\u05E1\u05D9\u05DB\u05D5\u05DF \u05DC\u05D0\u05D9 \u05D9\u05DB\u05D5\u05DC\u05EA \u05DC\u05D4\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D5\u05EA \u05D1\u05E2\u05EA\u05D9\u05D3. \u{1F4AA} \u05D4\u05DE\u05D8\u05E8\u05D4 \u05D4\u05D9\u05D0 \u05DC\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05D9\u05D7\u05E1 \u05E0\u05DE\u05D5\u05DA \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05E9\u05D0\u05EA\u05D4 \u05DC\u05D0 \u05DC\u05D5\u05E7\u05D7 \u05E2\u05DC \u05E2\u05E6\u05DE\u05DA \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D1 \u05D1\u05D9\u05D7\u05E1 \u05DC\u05D4\u05DB\u05E0\u05E1\u05D5\u05EA\u05D9\u05DA, \u05D5\u05DB\u05DA \u05DC\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05D9\u05E6\u05D9\u05D1\u05D5\u05EA \u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05D5\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9. \u{1F6E1}\uFE0F"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=b({type:e,selectors:[["mortgage-helper"]],decls:10,vars:1,consts:[[1,"mainAll"],[1,"helper-card"],[4,"ngFor","ngForOf"]],template:function(o,i){o&1&&(r(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),d(4,"\u05E2\u05D5\u05D6\u05E8 \u05D0\u05D9\u05E9\u05D9 \u05DC\u05DE\u05E9\u05DB\u05E0\u05EA\u05D0\u05D5\u05EA"),n(),r(5,"mat-card-subtitle")(6,"pre"),d(7,"\u05DE\u05D9\u05D3\u05E2 \u05D5\u05D8\u05D9\u05E4\u05D9\u05DD \u05E9\u05D9\u05E2\u05D6\u05E8\u05D5 \u05DC\u05DA \u05DC\u05E0\u05D4\u05DC \u05D0\u05EA \u05D4\u05DE\u05E9\u05DB\u05E0\u05EA\u05D0 \u05E9\u05DC\u05DA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D4\u05D8\u05D5\u05D1\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8\u{1F4A1}"),n()()(),r(8,"mat-card-content"),x(9,Qe,6,2,"mat-expansion-panel",2),n()()()),o&2&&(m(9),l("ngForOf",i.tips))},dependencies:[y,F,W,xe,be,V,Ee,we,Se],styles:[".helper-card[_ngcontent-%COMP%]{width:60vw;margin:20px auto;padding:20px}mat-card-header[_ngcontent-%COMP%]{background-color:#f5f5f5;text-align:center}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem}mat-card-content[_ngcontent-%COMP%]{margin-top:20px}mat-card-subtitle[_ngcontent-%COMP%]{font-size:1rem;color:#757575}mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:10px}mat-panel-title[_ngcontent-%COMP%]{font-weight:700}"]});let t=e;return t})();function $e(t,e){if(t&1&&(r(0,"mat-option",19)(1,"mat-icon"),d(2),n(),d(3),n()),t&2){let c=e.$implicit;l("value",c.value),m(2),v(c.icon),m(),N(" ",c.viewValue," ")}}var L=(()=>{let e=class e{constructor(a,o,i,u){this.customerService=a,this.route=o,this.router=i,this.loginService=u,this.formData={first_Name:"",last_Name:"",email:"",phone:"",address:"",connection:0,t_z:"",lead_id:0,birthDate:void 0,family_status:void 0,number_of_people_in_house:void 0,job_status:void 0,work_business_name:void 0,customer_type:void 0,job_description:void 0,years_in_current_position:void 0,avarage_monthly_salary:void 0,income_rent:void 0,income_Government_Endorsement:void 0,income_other:void 0,expenses_rent:void 0,expenses_loans:void 0,expenses_other:void 0,property_city:void 0,transaction_type:void 0,estimated_price_by_customer:void 0,estimated_price_by_sales_agreement:void 0,has_other_properties:!1,amount_of_loan_requested:void 0,lastSynced:void 0,isArchived:void 0},this.options=[{value:0,viewValue:"WhatsApp",icon:"message"},{value:1,viewValue:"Email",icon:"email"}],this.customerId=this.loginService.GetCurrentUser().customerId}ngOnInit(){let a=this.loginService.GetCurrentUser().customerId;a?this.customerService.getById(a).subscribe({next:o=>{this.formData=B({},o),this.formData.birthDate=this.formatDateToISO(o.birthDate)},error:o=>{console.error("Error creating customer:",o)}}):console.log("No Customer ID")}formatDateToISO(a){let o=Ve(a);return Fe(o,"yyyy-MM-dd")}submitForm(){this.customerService.updateCustomer(this.customerId,this.formData).subscribe({}),this.router.navigate(["/customer"])}cancel(){this.router.navigate(["/customer"])}};e.\u0275fac=function(o){return new(o||e)(p(U),p(k),p(T),p(E))},e.\u0275cmp=b({type:e,selectors:[["customer-update-detailes"]],decls:50,vars:11,consts:[["picker",""],[1,"mainAll"],[1,"lead-edit-card"],[3,"submit"],["appearance","fill",1,"mat-form-field"],["readonly","","matInput","","name","firstName",3,"ngModelChange","ngModel"],["readonly","","matInput","","name","lastName",3,"ngModelChange","ngModel"],["matInput","","name","phone",3,"ngModelChange","ngModel"],["matInput","","name","email",3,"ngModelChange","ngModel"],["matInput","","name","adress",3,"ngModelChange","ngModel"],["matInput","","name","id",3,"ngModelChange","ngModel"],["appearance","fill"],["matInput","","name","birthDate","required","",3,"ngModelChange","matDatepicker","ngModel"],["matSuffix","",3,"for"],["placeholder","Select your option","name","connection",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"button-group"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(o,i){if(o&1){let u=J();r(0,"div",1)(1,"mat-card",2)(2,"mat-card-title"),d(3,"\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD"),n(),r(4,"mat-card-content")(5,"form",3),z("submit",function(){return g(u),D(i.submitForm())}),r(6,"mat-form-field",4)(7,"mat-label"),d(8," \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"),n(),r(9,"input",5),_("ngModelChange",function(s){return g(u),C(i.formData.first_Name,s)||(i.formData.first_Name=s),D(s)}),n(),r(10,"mat-error"),d(11,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D9\u05E0\u05D5 \u05D7\u05D5\u05D1\u05D4"),n()(),r(12,"mat-form-field",4)(13,"mat-label"),d(14,"\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"),n(),r(15,"input",6),_("ngModelChange",function(s){return g(u),C(i.formData.last_Name,s)||(i.formData.last_Name=s),D(s)}),n()(),r(16,"mat-form-field",4)(17,"mat-label"),d(18,"\u05D8\u05DC\u05E4\u05D5\u05DF"),n(),r(19,"input",7),_("ngModelChange",function(s){return g(u),C(i.formData.phone,s)||(i.formData.phone=s),D(s)}),n()(),r(20,"mat-form-field",4)(21,"mat-label"),d(22,"\u05DE\u05D9\u05D9\u05DC"),n(),r(23,"input",8),_("ngModelChange",function(s){return g(u),C(i.formData.email,s)||(i.formData.email=s),D(s)}),n()(),M(24,"br"),r(25,"mat-form-field",4)(26,"mat-label"),d(27,"\u05DB\u05EA\u05D5\u05D1\u05EA "),n(),r(28,"input",9),_("ngModelChange",function(s){return g(u),C(i.formData.address,s)||(i.formData.address=s),D(s)}),n()(),r(29,"mat-form-field",4)(30,"mat-label"),d(31,"\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"),n(),r(32,"input",10),_("ngModelChange",function(s){return g(u),C(i.formData.t_z,s)||(i.formData.t_z=s),D(s)}),n()(),r(33,"mat-form-field",11)(34,"mat-label"),d(35,"\u05EA\u05D0\u05E8\u05D9\u05DA \u05DC\u05D9\u05D3\u05D4"),n(),r(36,"input",12),_("ngModelChange",function(s){return g(u),C(i.formData.birthDate,s)||(i.formData.birthDate=s),D(s)}),n(),M(37,"mat-datepicker-toggle",13)(38,"mat-datepicker",null,0),n(),r(40,"mat-form-field",4)(41,"mat-label"),d(42,"\u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA"),n(),r(43,"mat-select",14),_("ngModelChange",function(s){return g(u),C(i.formData.connection,s)||(i.formData.connection=s),D(s)}),x(44,$e,4,3,"mat-option",15),n()(),r(45,"div",16)(46,"button",17),d(47,"\u05E9\u05DE\u05D5\u05E8"),n(),r(48,"button",18),z("click",function(){return g(u),D(i.cancel())}),d(49,"\u05D1\u05D9\u05D8\u05D5\u05DC"),n()()()()()()}if(o&2){let u=Q(39);m(9),h("ngModel",i.formData.first_Name),m(6),h("ngModel",i.formData.last_Name),m(4),h("ngModel",i.formData.phone),m(4),h("ngModel",i.formData.email),m(5),h("ngModel",i.formData.address),m(4),h("ngModel",i.formData.t_z),m(4),l("matDatepicker",u),h("ngModel",i.formData.birthDate),m(),l("for",u),m(6),h("ngModel",i.formData.connection),m(),l("ngForOf",i.options)}},dependencies:[y,F,W,V,A,De,pe,fe,ge,he,ce,Ce,ne,Me,ve,ye,de,oe,re,ae,ue,me,se],styles:[".lead-edit-card[_ngcontent-%COMP%]{max-width:800px;margin:auto;padding:20px;box-shadow:0 0 20px #000000b3}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:20px}.mat-form-field[_ngcontent-%COMP%]{margin:10px!important;width:12vw}#content[_ngcontent-%COMP%]{background-color:#ffffff9a;padding:25px;border-radius:40px;min-width:max-content;height:70vh}.mat-mdc-form-field[_ngcontent-%COMP%]{width:23vh}.is-properties-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:25vh}.inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}#is-properties-lable[_ngcontent-%COMP%]{color:var(--mdc-filled-text-field-label-text-color);font-family:var(--mdc-filled-text-field-label-text-font);font-size:var(--mdc-filled-text-field-label-text-size);font-weight:var(--mdc-filled-text-field-label-text-weight);letter-spacing:var(--mdc-filled-text-field-label-text-tracking);margin-bottom:3vh;padding-left:16px}#devider[_ngcontent-%COMP%]{margin-bottom:2vh}#job-description[_ngcontent-%COMP%]{width:49vh}@media screen and (max-width: 900px){.mat-form-field[_ngcontent-%COMP%]{margin:10px!important;width:15vw;font-size:small;height:70px}mat-label[_ngcontent-%COMP%]{font-size:small}}"]});let t=e;return t})();var et=t=>({"message-bubble-unread":t}),tt=t=>({unread:t});function it(t,e){t&1&&(r(0,"mat-icon",11),d(1,"drafts"),n())}function nt(t,e){t&1&&(r(0,"mat-icon",11),d(1,"markunread"),n())}function ot(t,e){if(t&1&&(r(0,"div",3)(1,"div",4)(2,"div",5),M(3,"img",6),n(),r(4,"div",7),x(5,it,2,0,"mat-icon",8)(6,nt,2,0,"mat-icon",8),n(),M(7,"div",9),r(8,"div",10),d(9),X(10,"date"),n()()()),t&2){let c=e.$implicit;m(),l("ngClass",R(10,et,!c.isRead))("matTooltip",c.isRead?"":"\u05D4\u05D5\u05D3\u05E2\u05D4 \u05DC\u05D0 \u05E0\u05E7\u05E8\u05D0\u05D4"),m(4),l("ngIf",c.isRead),m(),l("ngIf",!c.isRead),m(),l("innerHTML",c.message,q)("ngClass",R(12,tt,!c.isRead)),m(2),v(Y(10,7,c.created_at,"short"))}}function rt(t,e){if(t&1&&(r(0,"div"),x(1,ot,11,14,"div",2),n()),t&2){let c=K();m(),l("ngForOf",c.notifications)}}function at(t,e){t&1&&(r(0,"div"),d(1," \u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7\u05D5 \u05D4\u05EA\u05E8\u05D0\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7 \u05D6\u05D4 "),n())}var qe=(()=>{let e=class e{constructor(a,o,i,u,f){this.notificationService=a,this.route=o,this.customerService=i,this.router=u,this.loginService=f,this.customerId=0,this.notifications=[],this.unreadCount=0,this.unreadNotifications=[],this.showNotifications=!1}ngOnInit(){return G(this,null,function*(){this.customerId=+this.route.snapshot.paramMap.get("id"),this.route.paramMap.subscribe(a=>{let o=a.get("id");o&&(this.customerId=parseInt(o,10),isNaN(this.customerId)?console.error("Invalid ID in URL"):this.loadNotifications())}),this.customer=this.customerService.getCustomerById(this.customerId),this.routerSubscription=this.router.events.pipe(H(a=>a instanceof ie)).subscribe(()=>{})})}ngOnDestroy(){this.routerSubscription&&this.routerSubscription.unsubscribe()}loadNotifications(){this.notificationService.getNotificationsByCustomerId(this.customerId).subscribe({next:a=>{this.notifications=a,console.log(a),this.updateChatStatusToRead(),this.unreadCount=this.notifications.filter(o=>!o.isRead).length},error:a=>{console.error("Error fetching notifications",a)}})}updateChatStatusToRead(){let a=this.loginService.GetCurrentUser();if(!a||!a.id){console.error("\u05D0\u05D9\u05DF \u05DE\u05E9\u05EA\u05DE\u05E9 \u05DE\u05D7\u05D5\u05D1\u05E8 \u05D0\u05D5 \u05D7\u05E1\u05E8 ID");return}let o=a.id;if(console.log("User ID:",o),this.unreadNotifications=this.notifications.filter(i=>i.isRead===!1),this.unreadNotifications.length===0){console.log("\u05D0\u05D9\u05DF \u05D4\u05D5\u05D3\u05E2\u05D5\u05EA \u05DC\u05D0 \u05E0\u05E7\u05E8\u05D0\u05D5\u05EA \u05DC\u05E2\u05D3\u05DB\u05D5\u05DF");return}this.notificationService.updateNotificationsStatus(this.unreadNotifications).subscribe({next:i=>{console.log("Notifications updated successfully"),this.unreadCount=0,this.notificationService.hasUnreadNotifications=!1,this.notificationService.unreadNotificationsCount=0},error:i=>{console.error("Error updating notifications status",i)}})}};e.\u0275fac=function(o){return new(o||e)(p(Ne),p(k),p(U),p(T),p(E))},e.\u0275cmp=b({type:e,selectors:[["notifications"]],decls:5,vars:2,consts:[[1,"history-section"],[4,"ngIf"],["class","notification-item",4,"ngFor","ngForOf"],[1,"notification-item"],["matTooltipPosition","above",1,"message-bubble",3,"ngClass","matTooltip"],[1,"profile-picture"],["src","assets/profile.png","alt","Profile Picture"],[1,"message-icons"],["class","icon",4,"ngIf"],[1,"message-text",3,"innerHTML","ngClass"],[1,"message-timestamp"],[1,"icon"]],template:function(o,i){o&1&&(r(0,"div",0)(1,"h2"),d(2,"\u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05EA \u05D4\u05D5\u05D3\u05E2\u05D5\u05EA"),n(),x(3,rt,2,1,"div",1)(4,at,2,0,"div",1),n()),o&2&&(m(3),l("ngIf",i.notifications.length),m(),l("ngIf",!i.notifications.length))},dependencies:[Z,y,$,A,_e,ee],styles:[".notifications-list[_ngcontent-%COMP%]{position:absolute;top:100%;right:0;border:1px solid #ccc;background:#fff;max-height:200px;overflow-y:auto;z-index:1000}.notifications-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:10px;cursor:pointer}.notifications-list[_ngcontent-%COMP%]   div.unread[_ngcontent-%COMP%]{font-weight:700;background:#f0f0f0}.notification-item[_ngcontent-%COMP%]{padding:10px;margin-bottom:10px;border:1px solid #ddd;border-radius:5px;background-color:#fff;display:flex;justify-content:space-between;align-items:center}.message-bubble-unread[_ngcontent-%COMP%]{background-color:#fee8e8;border-color:#333}.message-text[_ngcontent-%COMP%]{font-size:16px;color:#333}.message-timestamp[_ngcontent-%COMP%]{font-size:12px;color:#888}.no-notifications[_ngcontent-%COMP%]{text-align:center;color:#888;font-style:italic}.container[_ngcontent-%COMP%]{width:80vw;background-color:#ffffff90;border:5px rgba(128,128,128,.306) solid;border-radius:15px;margin:10px auto}.notification-card[_ngcontent-%COMP%]{margin:50px auto;width:75vw;padding:16px;background-color:#fffffff1;border:5px rgba(128,128,128,.197) solid;border-radius:5px}.mat-card-header[_ngcontent-%COMP%]{background-color:#f5f5f5;border-bottom:1px solid #ddd}.mat-card-title[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-form-field[_ngcontent-%COMP%]{width:100%}textarea.mat-input-element[_ngcontent-%COMP%]{font-size:1rem;padding:12px}mat-form-field[_ngcontent-%COMP%]{display:inline-block;width:40vw}.actions[_ngcontent-%COMP%]{margin-top:16px;text-align:right}.notification-item[_ngcontent-%COMP%]{margin-top:16px}.message-bubble[_ngcontent-%COMP%]{position:relative;background:#d3edfe;border-radius:10px;padding:16px;max-width:50%;margin:8px 0;word-wrap:break-word;overflow-wrap:break-word;display:flex;box-shadow:5px 5px 10px #0003}.message-text[_ngcontent-%COMP%]:hover{cursor:default}.message-timestamp[_ngcontent-%COMP%]{position:absolute;bottom:8px;left:16px;font-size:.8rem;color:#666}.message-actions[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;display:flex;gap:8px}.message-bubble-unread[_ngcontent-%COMP%]{position:relative;border-radius:10px;padding:20px;max-width:50%;margin:8px 0;background-color:#fed3d4;display:flex;box-shadow:5px 5px 10px #0003}.menu[_ngcontent-%COMP%]{display:none;position:absolute;left:1px;top:1px}[_ngcontent-%COMP%]:is(.message-bubble-unread:hover, .message-bubble[_ngcontent-%COMP%]:hover)   .menu[_ngcontent-%COMP%]{display:block}.message-section[_ngcontent-%COMP%], .history-section[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:8px;padding:16px;background-color:#f9f9f9;width:50vw;margin:10px auto}.message-section[_ngcontent-%COMP%], .history-section[_ngcontent-%COMP%]{box-shadow:0 2px 4px #0000001a}h2[_ngcontent-%COMP%]{margin:0 0 16px;font-size:1.2rem;font-weight:700;color:#333}img[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;box-shadow:3px 3px 7px #00000057;background-color:#f3f4f5;margin-left:10px}.icon[_ngcontent-%COMP%]{float:right;font-size:15px;margin-top:-5px;margin-right:-58px}.statistics-section[_ngcontent-%COMP%]{position:absolute;top:60px;left:20px;width:300px;background-color:#fff;border:1px solid #ddd;border-radius:8px;padding:16px;box-shadow:0 2px 4px #0000001a}.notification-item[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:16px}.profile-picture[_ngcontent-%COMP%]{margin-right:16px}.message-content[_ngcontent-%COMP%]{flex:1}.message-bubble[_ngcontent-%COMP%]{background:#e3f2fd;border-radius:10px;padding:16px;position:relative;word-wrap:break-word;overflow-wrap:break-word;width:100%}.message-text[_ngcontent-%COMP%]{font-size:1rem;margin:5px}.message-timestamp[_ngcontent-%COMP%]{font-size:.8rem;color:#666}.message-actions[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px}.unread[_ngcontent-%COMP%]{font-weight:700}.message-bubble-unread[_ngcontent-%COMP%]{background-color:#d3edfe}"]});let t=e;return t})();var st=[{path:"",component:j,canActivate:[Re],children:[{path:"customer-portal",component:j},{path:"document-list/:id",component:je},{path:"user-details",component:Te},{path:"lead-details",component:Ae},{path:"customer-details/:id",component:L},{path:"document-type-details",component:We},{path:"document-type-list",component:Ue},{path:"calculator",component:ze},{path:"mortgage-helper",component:He},{path:"customer-detailes/:id",component:L},{path:"notifications/:id",component:qe}]}],Je=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=I({type:e}),e.\u0275inj=O({imports:[S.forChild(st),S]});let t=e;return t})();var _i=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=I({type:e}),e.\u0275inj=O({imports:[te,Pe,Le,Je,le,S]});let t=e;return t})();export{_i as a};
