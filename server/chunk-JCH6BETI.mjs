import './polyfills.server.mjs';
import{C as de,D as pe,F as se,G as ce,H as fe,J as ge,K as De,L as Ce,M as he,a as _,b as re,c as me,d as le,g as ue}from"./chunk-5SJ3KLJD.mjs";import{Aa as te,C as q,F as J,Ja as ne,Ka as ie,La as oe,N as K,Pa as ae,Sa as O,Z as Q,_ as X,ba as Y,ca as Z,k,la as $,m as B,o as z,p as G,r as R,t as H,u as V,wa as x,xa as P,ya as I,za as ee}from"./chunk-ZZWANYAU.mjs";import{q as L,t as j,v as h}from"./chunk-2R3VLJD7.mjs";import{$b as p,Cb as i,Db as o,Eb as v,Lb as W,Wb as m,Xb as b,Xc as S,Yb as w,Za as l,_ as M,_a as f,ac as s,bc as c,cd as U,ha as C,ia as E,rb as y,tb as g}from"./chunk-RV6CGP3N.mjs";import{a as F}from"./chunk-NDYDZJSS.mjs";var N=(()=>{let e=class e{constructor(u){this.loginService=u,this.componentArrayOfCustomer=[new _("\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD","/customer/document-list","description"),new _("\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD",`/customer/customer-details/${this.loginService.CurrentcustomerId}`,"description"),new _("\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF \u05DE\u05E9\u05DB\u05E0\u05EA\u05D0\u05D5\u05EA","/customer/calculator","calculate"),new _("\u05DE\u05D9\u05DC\u05D5\u05DF \u05E2\u05D6\u05E8 \u05DC\u05DE\u05E9\u05DB\u05E0\u05EA\u05D0","mortgage-helper","help_outline")]}};e.\u0275fac=function(r){return new(r||e)(f(O))},e.\u0275cmp=C({type:e,selectors:[["app-customer-portal"]],decls:4,vars:1,consts:[["id","mainPage"],[3,"componentsList"]],template:function(r,t){r&1&&(i(0,"div",0),v(1,"app-toolbar")(2,"navigation-menu",1)(3,"footer"),o()),r&2&&(l(2),g("componentsList",t.componentArrayOfCustomer))},dependencies:[re,ue,me],styles:["#mainPage[_ngcontent-%COMP%]{background-color:transparent;min-height:max-content 100vh;background-image:url(/assets/background.jpg);background-size:cover}"]});let a=e;return a})();function be(a,e){if(a&1&&(i(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),m(3),o()(),i(4,"p"),m(5),o()()),a&2){let D=e.$implicit;l(3),w(" ",D.title," "),l(2),b(D.description)}}var _e=(()=>{let e=class e{constructor(){this.tips=[{title:"\u05D4\u05D7\u05D6\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 ",description:"\u05D4\u05D4\u05D7\u05D6\u05E8 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05D4\u05D5\u05D0 \u05D4\u05E1\u05DB\u05D5\u05DD \u05E9\u05D0\u05EA\u05D4 \u05DE\u05E9\u05DC\u05DD \u05DC\u05DE\u05DC\u05D5\u05D5\u05D4 \u05D1\u05DB\u05DC \u05D7\u05D5\u05D3\u05E9 \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05E9\u05DC\u05DA, \u05D5\u05D4\u05D5\u05D0 \u05DB\u05D5\u05DC\u05DC \u05D0\u05EA \u05D4\u05E7\u05E8\u05DF (\u05D4\u05E1\u05DB\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9 \u05E9\u05DC\u05E7\u05D7\u05EA \u05D1\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4) \u05D5\u05D0\u05EA \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05E9\u05E0\u05E6\u05D1\u05E8\u05D4 \u05E2\u05DC \u05D4\u05E7\u05E8\u05DF. \u{1F3E6} \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D7\u05E9\u05D1 \u05D0\u05EA \u05D4\u05D4\u05D7\u05D6\u05E8 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05DE\u05E8\u05D0\u05E9 \u05D5\u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05D5\u05D0 \u05EA\u05D5\u05D0\u05DD \u05DC\u05D9\u05DB\u05D5\u05DC\u05EA \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05E9\u05DC\u05DA. \u05EA\u05E9\u05DC\u05D5\u05DD \u05D7\u05D5\u05D3\u05E9\u05D9 \u05D2\u05D1\u05D5\u05D4 \u05DE\u05D3\u05D9 \u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05DB\u05D1\u05D9\u05D3 \u05E2\u05DC \u05D4\u05EA\u05E7\u05E6\u05D9\u05D1 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05E9\u05DC\u05DA \u05D5\u05DC\u05E4\u05D2\u05D5\u05E2 \u05D1\u05D9\u05E6\u05D9\u05D1\u05D5\u05EA \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA. \u05EA\u05DB\u05E0\u05D5\u05DF \u05E0\u05DB\u05D5\u05DF \u05D9\u05DB\u05D5\u05DC \u05DC\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DA \u05DC\u05D4\u05D9\u05DE\u05E0\u05E2 \u05DE\u05E2\u05D5\u05DE\u05E1\u05D9\u05DD \u05DB\u05DC\u05DB\u05DC\u05D9\u05D9\u05DD \u05D5\u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05E9\u05D4\u05D7\u05D6\u05E8\u05D9 \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05DC\u05D0 \u05D9\u05D4\u05E4\u05DB\u05D5 \u05DC\u05DE\u05E2\u05DE\u05E1\u05D4 \u05D1\u05DC\u05EA\u05D9 \u05E0\u05E1\u05D1\u05DC\u05EA. \u{1F4C8}"},{title:"\u05E8\u05D9\u05D1\u05D9\u05EA \u05E7\u05D1\u05D5\u05E2\u05D4 ",description:"\u05E8\u05D9\u05D1\u05D9\u05EA \u05E7\u05D1\u05D5\u05E2\u05D4 \u05D4\u05D9\u05D0 \u05E9\u05D9\u05E2\u05D5\u05E8 \u05E8\u05D9\u05D1\u05D9\u05EA \u05E9\u05E0\u05E9\u05D0\u05E8 \u05E7\u05D1\u05D5\u05E2 \u05DC\u05D0\u05D5\u05E8\u05DA \u05DB\u05DC \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4. \u{1F31F} \u05D4\u05D9\u05EA\u05E8\u05D5\u05DF \u05E9\u05DC \u05E8\u05D9\u05D1\u05D9\u05EA \u05E7\u05D1\u05D5\u05E2\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D4\u05D9\u05D0 \u05DE\u05E1\u05E4\u05E7\u05EA \u05D9\u05E6\u05D9\u05D1\u05D5\u05EA \u05D5\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF, \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05D4\u05D4\u05D7\u05D6\u05E8\u05D9\u05DD \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA \u05DC\u05D0 \u05DE\u05E9\u05EA\u05E0\u05D9\u05DD, \u05D2\u05DD \u05D0\u05DD \u05E9\u05D5\u05E7 \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05DE\u05E9\u05EA\u05E0\u05D4. \u05D6\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DA \u05DC\u05EA\u05DB\u05E0\u05DF \u05D0\u05EA \u05D4\u05EA\u05E7\u05E6\u05D9\u05D1 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05D3\u05D5\u05D9\u05E7\u05EA \u05D5\u05DC\u05E7\u05D1\u05DC \u05EA\u05DE\u05D5\u05E0\u05D4 \u05D1\u05E8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05D4\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05E2\u05EA\u05D9\u05D3\u05D9\u05D5\u05EA. \u{1F512} \u05E2\u05DD \u05D6\u05D0\u05EA, \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05D4\u05E7\u05D1\u05D5\u05E2\u05D4 \u05EA\u05D4\u05D9\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05D4\u05EA\u05D7\u05DC\u05D4 \u05D1\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4 \u05DC\u05E8\u05D9\u05D1\u05D9\u05EA \u05DE\u05E9\u05EA\u05E0\u05D4, \u05D0\u05DA \u05D4\u05D9\u05D0 \u05DE\u05E6\u05D9\u05E2\u05D4 \u05D4\u05D2\u05E0\u05D4 \u05DE\u05E4\u05E0\u05D9 \u05E2\u05DC\u05D9\u05D5\u05EA \u05E4\u05EA\u05D0\u05D5\u05DE\u05D9\u05D5\u05EA \u05D1\u05E8\u05D9\u05D1\u05D9\u05EA. \u{1F6E1}\uFE0F"},{title:"\u05E8\u05D9\u05D1\u05D9\u05EA \u05DE\u05E9\u05EA\u05E0\u05D4 ",description:"\u05E8\u05D9\u05D1\u05D9\u05EA \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D4\u05D9\u05D0 \u05E9\u05D9\u05E2\u05D5\u05E8 \u05E8\u05D9\u05D1\u05D9\u05EA \u05E9\u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D1\u05E9\u05D5\u05E7 \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA. \u{1F4B9} \u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05E9\u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05E9\u05DC\u05DA \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05E9\u05EA\u05E0\u05D5\u05EA \u05DC\u05D0\u05D5\u05E8\u05DA \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4, \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05E9\u05D9\u05E2\u05D5\u05E8 \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05D4\u05DB\u05DC\u05DC\u05D9 \u05D1\u05E9\u05D5\u05E7. \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05EA\u05E7\u05D5\u05E4\u05D4, \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05D4\u05DE\u05E9\u05EA\u05E0\u05D4 \u05E2\u05E9\u05D5\u05D9\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05E0\u05DE\u05D5\u05DB\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05E8\u05D9\u05D1\u05D9\u05EA \u05E7\u05D1\u05D5\u05E2\u05D4, \u05DE\u05D4 \u05E9\u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D5\u05D1\u05D9\u05DC \u05DC\u05D4\u05D7\u05D6\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05E0\u05DE\u05D5\u05DA \u05D9\u05D5\u05EA\u05E8. \u{1F4A1} \u05E2\u05DD \u05D6\u05D0\u05EA, \u05D9\u05E9 \u05DC\u05E7\u05D7\u05EA \u05D1\u05D7\u05E9\u05D1\u05D5\u05DF \u05D0\u05EA \u05D4\u05E1\u05D9\u05DB\u05D5\u05DF \u05DC\u05DB\u05DA \u05E9\u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05E2\u05E9\u05D5\u05D9\u05D4 \u05DC\u05E2\u05DC\u05D5\u05EA \u05D1\u05E2\u05EA\u05D9\u05D3, \u05DE\u05D4 \u05E9\u05D9\u05D5\u05D1\u05D9\u05DC \u05DC\u05E2\u05DC\u05D9\u05D9\u05D4 \u05D1\u05D4\u05D7\u05D6\u05E8 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9. \u05D6\u05D5 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05E9\u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05DC\u05DE\u05D9 \u05E9\u05DE\u05D5\u05DB\u05DF \u05DC\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3 \u05E2\u05DD \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D4\u05D0\u05E4\u05E9\u05E8\u05D9\u05D9\u05DD \u05D1\u05E8\u05D9\u05D1\u05D9\u05EA. \u{1F4C9}"},{title:"\u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 ",description:"\u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05D4\u05D9\u05D0 \u05E4\u05E8\u05E7 \u05D4\u05D6\u05DE\u05DF \u05E9\u05D1\u05D5 \u05D0\u05EA\u05D4 \u05E0\u05D3\u05E8\u05E9 \u05DC\u05D4\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05E9\u05DC\u05DA. \u23F3 \u05EA\u05E7\u05D5\u05E4\u05D5\u05EA \u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D5\u05EA \u05D9\u05D5\u05EA\u05E8 \u05DE\u05E7\u05D8\u05D9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D4\u05D7\u05D6\u05E8 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05D0\u05EA\u05D4 \u05E4\u05D5\u05E8\u05E9 \u05D0\u05EA \u05D4\u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD \u05E2\u05DC \u05E4\u05E0\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05D6\u05DE\u05DF, \u05D0\u05D1\u05DC \u05D1\u05E1\u05D5\u05E4\u05D5 \u05E9\u05DC \u05D3\u05D1\u05E8, \u05D0\u05EA\u05D4 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05E9\u05DC\u05DD \u05D9\u05D5\u05EA\u05E8 \u05E8\u05D9\u05D1\u05D9\u05EA. \u{1F9EE} \u05DE\u05E6\u05D3 \u05E9\u05E0\u05D9, \u05EA\u05E7\u05D5\u05E4\u05D5\u05EA \u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05E7\u05E6\u05E8\u05D5\u05EA \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D5\u05D1\u05D9\u05DC\u05D5\u05EA \u05DC\u05D4\u05D7\u05D6\u05E8 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05D2\u05D1\u05D5\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05D0\u05DA \u05DE\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05DA \u05DC\u05E9\u05DC\u05DD \u05E4\u05D7\u05D5\u05EA \u05E8\u05D9\u05D1\u05D9\u05EA \u05D1\u05E1\u05DA \u05D4\u05DB\u05DC. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D1\u05D7\u05D5\u05E8 \u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05E9\u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05DC\u05D9\u05DB\u05D5\u05DC\u05EA \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05E9\u05DC\u05DA \u05D5\u05DC\u05D9\u05E2\u05D3\u05D9\u05DD \u05D4\u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05D9\u05DD \u05E9\u05DC\u05DA. \u{1F3AF}"},{title:"\u05E2\u05E8\u05DA \u05D4\u05E0\u05DB\u05E1 ",description:"\u05E2\u05E8\u05DA \u05D4\u05E0\u05DB\u05E1 \u05D4\u05D5\u05D0 \u05D4\u05DE\u05D7\u05D9\u05E8 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05E9\u05DC \u05D4\u05E0\u05DB\u05E1 \u05E9\u05DC\u05DA, \u05D5\u05D4\u05D5\u05D0 \u05E0\u05E7\u05D1\u05E2 \u05E2\u05DC \u05E4\u05D9 \u05D4\u05E2\u05E8\u05DB\u05EA \u05E9\u05D5\u05D5\u05D9 \u05D0\u05D5 \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA \u05D3\u05D5\u05DE\u05D5\u05EA \u05D1\u05E9\u05D5\u05E7. \u{1F3E1} \u05E2\u05E8\u05DA \u05D4\u05E0\u05DB\u05E1 \u05DE\u05E9\u05E4\u05D9\u05E2 \u05E2\u05DC \u05E1\u05DB\u05D5\u05DD \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05E9\u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E7\u05D1\u05DC \u05D5\u05E2\u05DC \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D4\u05E8\u05D9\u05D1\u05D9\u05EA \u05E9\u05EA\u05E9\u05DC\u05DD. \u05D4\u05DE\u05DC\u05D5\u05D5\u05D4 \u05D1\u05D5\u05D3\u05E7 \u05D0\u05EA \u05E2\u05E8\u05DA \u05D4\u05E0\u05DB\u05E1 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E2\u05E8\u05D9\u05DA \u05D0\u05EA \u05D4\u05E1\u05D9\u05DB\u05D5\u05DF \u05E9\u05DC\u05D5 \u05D5\u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05DC\u05DE\u05E6\u05D1 \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9 \u05E9\u05DC\u05DA. \u{1F4CF} \u05E2\u05D3\u05DB\u05D5\u05DF \u05E7\u05D1\u05D5\u05E2 \u05E9\u05DC \u05E2\u05E8\u05DA \u05D4\u05E0\u05DB\u05E1 \u05E9\u05DC\u05DA \u05D7\u05E9\u05D5\u05D1 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05D4\u05E6\u05E2\u05D5\u05EA \u05D4\u05D8\u05D5\u05D1\u05D5\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05DE\u05DC\u05D5\u05D5\u05D4. \u05D6\u05D4 \u05D2\u05DD \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DA \u05DC\u05D4\u05D1\u05D9\u05DF \u05D0\u05EA \u05E2\u05DE\u05D3\u05EA\u05DA \u05D4\u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05EA \u05D5\u05DC\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D8\u05D5\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05E2\u05DD \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D1\u05E9\u05D5\u05E7. \u{1F4BC}"},{title:"\u05D9\u05D7\u05E1 \u05D7\u05D5\u05D1 \u05DC\u05D4\u05DB\u05E0\u05E1\u05D4 ",description:"\u05D9\u05D7\u05E1 \u05D7\u05D5\u05D1 \u05DC\u05D4\u05DB\u05E0\u05E1\u05D4 \u05D4\u05D5\u05D0 \u05DE\u05D3\u05D3 \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9 \u05E9\u05DE\u05D7\u05E9\u05D1 \u05D0\u05EA \u05D4\u05D7\u05D6\u05E8 \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9 \u05E9\u05DC\u05DA \u05D1\u05D9\u05D7\u05E1 \u05DC\u05D4\u05DB\u05E0\u05E1\u05D4 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9\u05EA \u05E9\u05DC\u05DA. \u{1F4CA} \u05D4\u05D5\u05D0 \u05DE\u05E1\u05D9\u05D9\u05E2 \u05DC\u05D4\u05E2\u05E8\u05D9\u05DA \u05D0\u05EA \u05D9\u05E6\u05D9\u05D1\u05D5\u05EA\u05DA \u05D4\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05D5\u05DE\u05E6\u05D1\u05D9\u05E2 \u05E2\u05DC \u05DB\u05DE\u05D5\u05EA \u05DE\u05D4\u05DB\u05E0\u05E1\u05EA\u05DA \u05D4\u05DE\u05D5\u05E7\u05D3\u05E9\u05EA \u05DC\u05D4\u05D7\u05D6\u05E8 \u05D4\u05DC\u05D5\u05D5\u05D0\u05D5\u05EA. \u05D9\u05D7\u05E1 \u05D7\u05D5\u05D1 \u05DC\u05D4\u05DB\u05E0\u05E1\u05D4 \u05E0\u05DE\u05D5\u05DA \u05DE\u05E6\u05D1\u05D9\u05E2 \u05E2\u05DC \u05D9\u05E6\u05D9\u05D1\u05D5\u05EA \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05D5\u05DE\u05E4\u05D7\u05D9\u05EA \u05D0\u05EA \u05D4\u05E1\u05D9\u05DB\u05D5\u05DF \u05DC\u05D0\u05D9 \u05D9\u05DB\u05D5\u05DC\u05EA \u05DC\u05D4\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D5\u05EA \u05D1\u05E2\u05EA\u05D9\u05D3. \u{1F4AA} \u05D4\u05DE\u05D8\u05E8\u05D4 \u05D4\u05D9\u05D0 \u05DC\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05D9\u05D7\u05E1 \u05E0\u05DE\u05D5\u05DA \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05E9\u05D0\u05EA\u05D4 \u05DC\u05D0 \u05DC\u05D5\u05E7\u05D7 \u05E2\u05DC \u05E2\u05E6\u05DE\u05DA \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D3\u05D9 \u05D7\u05D5\u05D1 \u05D1\u05D9\u05D7\u05E1 \u05DC\u05D4\u05DB\u05E0\u05E1\u05D5\u05EA\u05D9\u05DA, \u05D5\u05DB\u05DA \u05DC\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05D9\u05E6\u05D9\u05D1\u05D5\u05EA \u05DB\u05DC\u05DB\u05DC\u05D9\u05EA \u05D5\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9. \u{1F6E1}\uFE0F"}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=C({type:e,selectors:[["mortgage-helper"]],decls:10,vars:1,consts:[[1,"mainAll"],[1,"helper-card"],[4,"ngFor","ngForOf"]],template:function(r,t){r&1&&(i(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),m(4,"\u05E2\u05D5\u05D6\u05E8 \u05D0\u05D9\u05E9\u05D9 \u05DC\u05DE\u05E9\u05DB\u05E0\u05EA\u05D0\u05D5\u05EA"),o(),i(5,"mat-card-subtitle")(6,"pre"),m(7,"\u05DE\u05D9\u05D3\u05E2 \u05D5\u05D8\u05D9\u05E4\u05D9\u05DD \u05E9\u05D9\u05E2\u05D6\u05E8\u05D5 \u05DC\u05DA \u05DC\u05E0\u05D4\u05DC \u05D0\u05EA \u05D4\u05DE\u05E9\u05DB\u05E0\u05EA\u05D0 \u05E9\u05DC\u05DA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D4\u05D8\u05D5\u05D1\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8\u{1F4A1}"),o()()(),i(8,"mat-card-content"),y(9,be,6,2,"mat-expansion-panel",2),o()()()),r&2&&(l(9),g("ngForOf",t.tips))},dependencies:[S,x,I,te,ee,P,ne,ie,oe],styles:[".helper-card[_ngcontent-%COMP%]{width:60vw;margin:20px auto;padding:20px}mat-card-header[_ngcontent-%COMP%]{background-color:#f5f5f5;text-align:center}mat-card-title[_ngcontent-%COMP%]{font-size:1.5rem}mat-card-content[_ngcontent-%COMP%]{margin-top:20px}mat-card-subtitle[_ngcontent-%COMP%]{font-size:1rem;color:#757575}mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:10px}mat-panel-title[_ngcontent-%COMP%]{font-weight:700}"]});let a=e;return a})();function we(a,e){if(a&1&&(i(0,"mat-option",16)(1,"mat-icon"),m(2),o(),m(3),o()),a&2){let D=e.$implicit;g("value",D.value),l(2),b(D.icon),l(),w(" ",D.viewValue," ")}}var T=(()=>{let e=class e{ngOnInit(){let u=this.loginService.GetCurrentUser().customerId;u?this.customerService.getById(u).subscribe({next:r=>{this.formData=F({},r)},error:r=>{console.error("Error creating customer:",r)}}):console.log("No Customer ID")}constructor(u,r,t,d){this.customerService=u,this.route=r,this.router=t,this.loginService=d,this.formData={first_Name:"",last_Name:"",email:"",phone:"",address:"",connection:0,t_z:"",lead_id:0,birthDate:void 0,family_status:void 0,number_of_people_in_house:void 0,job_status:void 0,work_business_name:void 0,customer_type:void 0,job_description:void 0,years_in_current_position:void 0,avarage_monthly_salary:void 0,income_rent:void 0,income_Government_Endorsement:void 0,income_other:void 0,expenses_rent:void 0,expenses_loans:void 0,expenses_other:void 0,property_city:void 0,transaction_type:void 0,estimated_price_by_customer:void 0,estimated_price_by_sales_agreement:void 0,has_other_properties:!1,amount_of_loan_requested:void 0,lastSynced:void 0,isArchived:void 0},this.options=[{value:0,viewValue:"WhatsApp",icon:"message"},{value:1,viewValue:"Email",icon:"email"}],this.customerId=this.loginService.GetCurrentUser().customerId}submitForm(){this.customerService.updateCustomer(this.customerId,this.formData).subscribe({}),this.router.navigate(["/customer"])}cancel(){this.router.navigate(["/customer"])}};e.\u0275fac=function(r){return new(r||e)(f(le),f(L),f(j),f(O))},e.\u0275cmp=C({type:e,selectors:[["customer-update-detailes"]],decls:47,vars:9,consts:[[1,"mainAll"],[1,"lead-edit-card"],[3,"submit"],["appearance","fill",1,"mat-form-field"],["readonly","","matInput","","name","firstName",3,"ngModelChange","ngModel"],["readonly","","matInput","","name","lastName",3,"ngModelChange","ngModel"],["matInput","","name","phone",3,"ngModelChange","ngModel"],["matInput","","name","email",3,"ngModelChange","ngModel"],["matInput","","name","adress",3,"ngModelChange","ngModel"],["matInput","","name","id",3,"ngModelChange","ngModel"],["matInput","","type","date","name","birthDate",3,"ngModelChange","ngModel"],["placeholder","Select your option","name","connection",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"button-group"],["mat-raised-button","","color","primary","type","submit"],["mat-raised-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(r,t){r&1&&(i(0,"div",0)(1,"mat-card",1)(2,"mat-card-title"),m(3,"\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD"),o(),i(4,"mat-card-content")(5,"form",2),W("submit",function(){return t.submitForm()}),i(6,"mat-form-field",3)(7,"mat-label"),m(8," \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"),o(),i(9,"input",4),c("ngModelChange",function(n){return s(t.formData.first_Name,n)||(t.formData.first_Name=n),n}),o(),i(10,"mat-error"),m(11,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D9\u05E0\u05D5 \u05D7\u05D5\u05D1\u05D4"),o()(),i(12,"mat-form-field",3)(13,"mat-label"),m(14,"\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"),o(),i(15,"input",5),c("ngModelChange",function(n){return s(t.formData.last_Name,n)||(t.formData.last_Name=n),n}),o()(),i(16,"mat-form-field",3)(17,"mat-label"),m(18,"\u05D8\u05DC\u05E4\u05D5\u05DF"),o(),i(19,"input",6),c("ngModelChange",function(n){return s(t.formData.phone,n)||(t.formData.phone=n),n}),o()(),i(20,"mat-form-field",3)(21,"mat-label"),m(22,"\u05DE\u05D9\u05D9\u05DC"),o(),i(23,"input",7),c("ngModelChange",function(n){return s(t.formData.email,n)||(t.formData.email=n),n}),o()(),v(24,"br"),i(25,"mat-form-field",3)(26,"mat-label"),m(27,"\u05DB\u05EA\u05D5\u05D1\u05EA "),o(),i(28,"input",8),c("ngModelChange",function(n){return s(t.formData.address,n)||(t.formData.address=n),n}),o()(),i(29,"mat-form-field",3)(30,"mat-label"),m(31,"\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"),o(),i(32,"input",9),c("ngModelChange",function(n){return s(t.formData.t_z,n)||(t.formData.t_z=n),n}),o()(),i(33,"mat-form-field",3)(34,"mat-label"),m(35,"\u05EA\u05D0\u05E8\u05D9\u05DA \u05DC\u05D9\u05D3\u05D4"),o(),i(36,"input",10),c("ngModelChange",function(n){return s(t.formData.birthDate,n)||(t.formData.birthDate=n),n}),o()(),i(37,"mat-form-field",3)(38,"mat-label"),m(39,"\u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA"),o(),i(40,"mat-select",11),c("ngModelChange",function(n){return s(t.formData.connection,n)||(t.formData.connection=n),n}),y(41,we,4,3,"mat-option",12),o()(),i(42,"div",13)(43,"button",14),m(44,"\u05E9\u05DE\u05D5\u05E8"),o(),i(45,"button",15),W("click",function(){return t.cancel()}),m(46,"\u05D1\u05D9\u05D8\u05D5\u05DC"),o()()()()()()),r&2&&(l(9),p("ngModel",t.formData.first_Name),l(6),p("ngModel",t.formData.last_Name),l(4),p("ngModel",t.formData.phone),l(4),p("ngModel",t.formData.email),l(5),p("ngModel",t.formData.address),l(4),p("ngModel",t.formData.t_z),l(4),p("ngModel",t.formData.birthDate),l(4),p("ngModel",t.formData.connection),l(),g("ngForOf",t.options))},dependencies:[S,x,I,P,K,Y,Q,X,Z,J,$,k,V,B,z,G,H,R],styles:[".lead-edit-card[_ngcontent-%COMP%]{max-width:800px;margin:auto;padding:20px;box-shadow:0 0 20px #000000b3}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:20px}.mat-form-field[_ngcontent-%COMP%]{margin:10px!important;width:12vw}#content[_ngcontent-%COMP%]{background-color:#ffffff9a;padding:25px;border-radius:40px;min-width:max-content;height:70vh}.mat-mdc-form-field[_ngcontent-%COMP%]{width:23vh}.is-properties-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:25vh}.inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}#is-properties-lable[_ngcontent-%COMP%]{color:var(--mdc-filled-text-field-label-text-color);font-family:var(--mdc-filled-text-field-label-text-font);font-size:var(--mdc-filled-text-field-label-text-size);font-weight:var(--mdc-filled-text-field-label-text-weight);letter-spacing:var(--mdc-filled-text-field-label-text-tracking);margin-bottom:3vh;padding-left:16px}#devider[_ngcontent-%COMP%]{margin-bottom:2vh}#job-description[_ngcontent-%COMP%]{width:49vh}@media screen and (max-width: 900px){.mat-form-field[_ngcontent-%COMP%]{margin:10px!important;width:15vw;font-size:small;height:70px}mat-label[_ngcontent-%COMP%]{font-size:small}}"]});let a=e;return a})();var Se=[{path:"",component:N,canActivate:[ge],children:[{path:"customer-portal",component:N},{path:"document-list",component:Ce},{path:"user-details",component:de},{path:"lead-details",component:pe},{path:"customer-details/:id",component:T},{path:"document-type-details",component:se},{path:"document-type-list",component:ce},{path:"calculator",component:fe},{path:"mortgage-helper",component:_e},{path:"customer-detailes/:id",component:T},{path:"task-edit/:id",component:De}]}],Me=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=E({type:e}),e.\u0275inj=M({imports:[h.forChild(Se),h]});let a=e;return a})();var bt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=E({type:e}),e.\u0275inj=M({imports:[U,ae,he,Me,q,h]});let a=e;return a})();export{bt as a};
