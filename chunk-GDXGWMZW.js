import{A as z,D as S,E as c,F as M,G as y,L as F,O as k,P as I,R as B,Sa as A,T as V,W as G,Y as $,ca as U,eb as W,hb as T,m as b,o as x,oa as Z,pa as H,q as h,ra as J,sa as K,ta as Q,z as q}from"./chunk-JGQ5AMLS.js";import{Bb as g,Fb as u,Gb as i,Hb as w,Ob as E,Qb as v,Wc as L,Zb as a,_b as j,ab as s,ad as R,bb as m,ea as _,na as C,oa as P,ub as p,wb as d}from"./chunk-OXRAAKGA.js";function re(t,o){t&1&&(u(0,"div"),a(1,"Email is required."),i())}function ne(t,o){t&1&&(u(0,"div"),a(1,"\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF."),i())}function ue(t,o){if(t&1&&(u(0,"mat-error"),p(1,re,2,0,"div",8)(2,ne,2,0,"div",8),i()),t&2){let r=v();s(),d("ngIf",r.email==null||r.email.errors==null?null:r.email.errors.required),s(),d("ngIf",r.email==null||r.email.errors==null?null:r.email.errors.email)}}function ae(t,o){t&1&&(u(0,"div"),a(1,"\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),i())}function se(t,o){t&1&&(u(0,"div"),a(1,"\u05D4\u05E1\u05D9\u05E1\u05DE\u05D0 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05DB\u05D9\u05DC \u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD"),i())}function le(t,o){t&1&&(u(0,"div"),a(1,"\u05D4\u05E1\u05D9\u05E1\u05DE\u05D0 \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC \u05E8\u05D5\u05D5\u05D7\u05D9\u05DD"),i())}function de(t,o){if(t&1&&(u(0,"mat-error"),p(1,ae,2,0,"div",8)(2,se,2,0,"div",8)(3,le,2,0,"div",8),i()),t&2){let r=v();s(),d("ngIf",r.password==null||r.password.errors==null?null:r.password.errors.required),s(),d("ngIf",r.password==null||r.password.errors==null?null:r.password.errors.minlength),s(),d("ngIf",r.password==null||r.password.errors==null?null:r.password.errors.pattern)}}var N=(()=>{let o=class o{constructor(l,n,e,f,D){this.route=l,this.loginService=n,this.fb=e,this.snackBar=f,this.router=D,this.color="rgba(255, 255, 255, 0.553)",this.hidePassword=!0,this.loginForm=this.fb.group({email:["",[c.required,c.email]],password:["",[c.required,c.minLength(6),c.pattern(/^\S*$/)]]})}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}submit(){if(this.loginForm.valid){let{email:l,password:n}=this.loginForm.value;this.loginService.login(l,n).subscribe(e=>{this.userByToken=this.loginService.decodeToken(e),console.log("what the user and role",this.userByToken,this.userByToken.role),String(this.userByToken.role)=="Admin"?(console.log("admin"),sessionStorage.setItem("token",e),this.router.navigate(["/admin"]),console.log("after navigate")):String(this.userByToken.role)=="Customer"&&(console.log("customer"),sessionStorage.setItem("token",e),this.loginService.CurrentcustomerId=this.userByToken.customerId,this.router.navigate(["/customer"]))},e=>{console.log("Login failed",e),this.snackBar.open("\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 \u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA","Close",{duration:8e3,panelClass:["error-snackbar"]})})}}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}forgotPassword(){if(!this.loginForm.value.email)this.snackBar.open("\u05D1\u05D1\u05E7\u05E9\u05D4 \u05EA\u05DB\u05E0\u05D9\u05E1 \u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA \u05D4\u05E9\u05DE\u05D5\u05E8\u05D4 \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA","Close",{duration:7e3});else{let l=this.loginForm.get("email").value;this.loginService.resetPassword(l).subscribe(n=>{this.snackBar.open("\u05E0\u05E9\u05DC\u05D7 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05E9\u05DC\u05DA","Close",{duration:7e3})},n=>{this.snackBar.open("\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 \u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA. \u05D1\u05D1\u05E7\u05E9\u05D4 \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.","Close",{duration:7e3}),console.log(n),console.log(n.error.errors)})}}};o.\u0275fac=function(n){return new(n||o)(m(b),m(T),m(B),m(A),m(x))},o.\u0275cmp=C({type:o,selectors:[["app-login"]],decls:29,vars:6,consts:[[1,"login-container"],[1,"login-card"],[1,"card-title"],[3,"ngSubmit","formGroup"],[1,"form-group"],["appearance","outline","dir","rtl",1,"full-width"],[1,"material-icons"],["matInput","","type","email","formControlName","email","placeholder","you@example.com"],[4,"ngIf"],["matInput","","formControlName","password","placeholder","Password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["mat-button","","mat-raised-button","","color","primary","type","submit",1,"submit-btn",3,"disabled"],[1,"forgot-password"],["dir","rtl",1,"text-muted",3,"click"]],template:function(n,e){n&1&&(u(0,"div",0)(1,"div",1)(2,"h3",2),a(3," \u05D4\u05D9\u05E8\u05E9\u05DD \u05DC\u05DB\u05E0\u05D9\u05E1\u05D4 "),i(),u(4,"form",3),E("ngSubmit",function(){return e.submit()}),u(5,"div",4)(6,"mat-form-field",5)(7,"mat-label")(8,"i",6),a(9,"email"),i(),a(10," \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05DE\u05D9\u05D9\u05DC"),i(),w(11,"input",7),p(12,ue,3,2,"mat-error",8),i()(),u(13,"div",4)(14,"mat-form-field",5)(15,"mat-label")(16,"i",6),a(17,"lock"),i(),a(18," \u05E1\u05D9\u05E1\u05DE\u05D4"),i(),w(19,"input",9),u(20,"button",10),E("click",function(){return e.togglePasswordVisibility()}),u(21,"mat-icon"),a(22),i()(),p(23,de,4,3,"mat-error",8),i()(),u(24,"button",11),a(25,"\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA"),i()(),u(26,"div",12)(27,"a",13),E("click",function(){return e.forgotPassword()}),a(28,"\u05E9\u05DB\u05D7\u05EA \u05E1\u05D9\u05E1\u05DE\u05D0?"),i()()()()),n&2&&(s(4),d("formGroup",e.loginForm),s(8),d("ngIf",(e.email==null?null:e.email.invalid)&&((e.email==null?null:e.email.dirty)||(e.email==null?null:e.email.touched))),s(7),d("type",e.hidePassword?"password":"text"),s(3),j(e.hidePassword?"visibility_off":"visibility"),s(),d("ngIf",(e.password==null?null:e.password.invalid)&&((e.password==null?null:e.password.dirty)||(e.password==null?null:e.password.touched))),s(),d("disabled",e.loginForm.invalid))},dependencies:[L,q,U,K,Z,H,J,Q,G,$,F,S,M,y,k,I],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background-color:#f5f5f5}.login-card[_ngcontent-%COMP%]{text-align:right;background-color:#fff;border-radius:20px;padding:20px;box-shadow:0 8px 40px #0000001a;width:100%;max-width:400px}.card-title[_ngcontent-%COMP%]{text-align:center;font-size:1.5rem;margin-bottom:20px;color:#333}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}.full-width[_ngcontent-%COMP%], .mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:5px}.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#4285f4}.mat-icon-button[_ngcontent-%COMP%]{cursor:pointer}.submit-btn[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:1.1rem}.text-danger[_ngcontent-%COMP%]{font-size:.875em;color:red}.forgot-password[_ngcontent-%COMP%]{text-align:center;margin-top:15px}.text-muted[_ngcontent-%COMP%]{color:#6c757d}.text-muted[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]{background-color:transparent}"]});let t=o;return t})();function me(t,o){t&1&&(u(0,"div"),a(1," \u05E0\u05D3\u05E8\u05E9\u05EA \u05E1\u05D9\u05E1\u05DE\u05D0 \u05D7\u05D3\u05E9\u05D4"),i())}function ce(t,o){t&1&&(u(0,"div"),a(1,"\u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD."),i())}function pe(t,o){t&1&&(u(0,"div"),a(1,"\u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05DB\u05D9\u05DC \u05D0\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D4, \u05D0\u05D5\u05EA \u05E7\u05D8\u05E0\u05D4, \u05DE\u05E1\u05E4\u05E8 \u05D5\u05EA\u05D5 \u05DE\u05D9\u05D5\u05D7\u05D3."),i())}function fe(t,o){if(t&1&&(u(0,"div",9),p(1,me,2,0,"div")(2,ce,2,0,"div")(3,pe,2,0,"div"),i()),t&2){let r=v();s(),g(!(r.newPassword==null||r.newPassword.errors==null)&&r.newPassword.errors.required?1:-1),s(),g(!(r.newPassword==null||r.newPassword.errors==null)&&r.newPassword.errors.minlength?2:-1),s(),g(!(r.newPassword==null||r.newPassword.errors==null)&&r.newPassword.errors.pattern?3:-1)}}function De(t,o){t&1&&(u(0,"div"),a(1,"\u05D0\u05D9\u05E9\u05D5\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05E0\u05D3\u05E8\u05E9."),i())}function ge(t,o){t&1&&(u(0,"div"),a(1,"\u05D4\u05E1\u05D9\u05E1\u05DE\u05D0\u05D5\u05EA \u05D0\u05D9\u05E0\u05DF \u05EA\u05D5\u05D0\u05DE\u05D5\u05EA."),i())}function we(t,o){if(t&1&&(u(0,"div",9),p(1,De,2,0,"div")(2,ge,2,0,"div"),i()),t&2){let r=v();s(),g(!(r.confirmPassword==null||r.confirmPassword.errors==null)&&r.confirmPassword.errors.required?1:-1),s(),g(!(r.confirmPassword==null||r.confirmPassword.errors==null)&&r.confirmPassword.errors.mustMatch?2:-1)}}var X=(()=>{let o=class o{constructor(l,n,e,f,D){this.fb=l,this.loginService=n,this.snackBar=e,this.route=f,this.router=D,this.user={},this.forgotPasswordForm=this.fb.group({newPassword:["",[c.required,c.minLength(6),c.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+-/'.,><_=^#])[A-Za-z\d@$!%*?&]{6,}$/)]],confirmPassword:["",c.required]},{validator:this.mustMatch("newPassword","confirmPassword")})}ngOnInit(){let l=this.route.snapshot.paramMap.get("id");l?(this.id=+l,console.log("Userid",this.id)):console.log("cant take id from url")}get newPassword(){return this.forgotPasswordForm.get("newPassword")}get confirmPassword(){return this.forgotPasswordForm.get("confirmPassword")}mustMatch(l,n){return e=>{let f=e.controls[l],D=e.controls[n];D.errors&&!D.errors.mustMatch||(f.value!==D.value?D.setErrors({mustMatch:!0}):D.setErrors(null))}}submit(){if(this.forgotPasswordForm.valid){let l=this.forgotPasswordForm.get("newPassword").value;this.loginService.updatePassword(l,this.id).subscribe(n=>{console.log("response from put",n),this.snackBar.open("\u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05E2\u05D5\u05D3\u05DB\u05E0\u05D4 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4","Close",{duration:5e3}),this.router.navigate(["/login"])},n=>{this.snackBar.open("Failed to update password. Please try again.","Close",{duration:5e3}),console.log(n),console.log(n.error.errors)})}}};o.\u0275fac=function(n){return new(n||o)(m(B),m(T),m(A),m(b),m(x))},o.\u0275cmp=C({type:o,selectors:[["forgot-password"]],decls:25,vars:4,consts:[[1,"forgot-password-container"],[1,"forgot-password-card"],[1,"card-title",2,"font-size","40px"],[1,"material-icons",2,"font-size","30px","float","none"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","newPassword"],[1,"material-icons"],["type","password","id","newPassword","formControlName","newPassword","placeholder","\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D3\u05E9\u05D4",1,"form-input"],[1,"text-danger"],["for","confirmPassword"],["type","password","id","confirmPassword","formControlName","confirmPassword","placeholder","\u05D0\u05E9\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4",1,"form-input"],["type","submit",1,"submit-btn",3,"disabled"]],template:function(n,e){n&1&&(u(0,"p"),a(1,"forgot-password works!"),i(),u(2,"div",0)(3,"div",1)(4,"h3",2)(5,"i",3),a(6,"lock_open"),i(),a(7," \u05E9\u05DB\u05D7\u05EA\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D4 "),i(),u(8,"form",4),E("ngSubmit",function(){return e.submit()}),u(9,"div",5)(10,"label",6)(11,"i",7),a(12,"lock"),i(),a(13," \u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D3\u05E9\u05D4"),i(),w(14,"input",8),p(15,fe,4,3,"div",9),i(),u(16,"div",5)(17,"label",10)(18,"i",7),a(19,"lock"),i(),a(20," \u05D0\u05E9\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4"),i(),w(21,"input",11),p(22,we,3,2,"div",9),i(),u(23,"button",12),a(24,"\u05E9\u05DE\u05D5\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4"),i()()()()),n&2&&(s(8),d("formGroup",e.forgotPasswordForm),s(7),g(e.newPassword!=null&&e.newPassword.invalid&&(e.newPassword!=null&&e.newPassword.dirty||e.newPassword!=null&&e.newPassword.touched)?15:-1),s(7),g(e.confirmPassword!=null&&e.confirmPassword.invalid&&(e.confirmPassword!=null&&e.confirmPassword.dirty||e.confirmPassword!=null&&e.confirmPassword.touched)?22:-1),s(),d("disabled",e.forgotPasswordForm.invalid))},dependencies:[F,S,M,y,k,I],styles:[".forgot-password-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.forgot-password-card[_ngcontent-%COMP%]{width:400px;padding:20px;border-radius:10px;box-shadow:0 0 15px #0003}.card-title[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}.form-input[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:5px}.submit-btn[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#3f51b5;color:#fff;border:none;border-radius:5px;cursor:pointer}.submit-btn[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}.text-danger[_ngcontent-%COMP%]{color:red;font-size:12px;margin-top:5px}"]});let t=o;return t})();var Ee=[{path:"",component:N},{path:"login",component:N},{path:"forgot-password/:id",component:X}],Y=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=P({type:o}),o.\u0275inj=_({imports:[h.forChild(Ee),h]});let t=o;return t})();var Qe=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=P({type:o}),o.\u0275inj=_({imports:[R,W,V,h,z,Y]});let t=o;return t})();export{Qe as a};
