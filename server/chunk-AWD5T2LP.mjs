import './polyfills.server.mjs';
import{a as He}from"./chunk-5MNFDAOZ.mjs";import{X as Ye,ba as Ze,d as Ue,e as Qe,m as j,o as We}from"./chunk-MAVYPGCP.mjs";import{A as xe,C as Ge,F as Ne,N as Ve,Qa as ze,Sa as H,Ta as Je,Z as Te,_ as Le,aa as Ae,ba as Oe,ca as qe,i as fe,k as Ee,la as ke,m as ge,ma as Be,n as d,o as ve,p as Se,q as Ce,ra as Me,s as Z,sa as je,ta as Pe,u as ye,ua as $e,v as Ie,va as Re,x as be,y as we,z as Fe}from"./chunk-LPZOA55Z.mjs";import{r as B,u as M,w as Y}from"./chunk-LLLXJOQE.mjs";import{Bb as r,Cb as t,Db as R,Hb as z,Kb as h,Mb as J,Rb as U,Sb as Q,Tb as W,Vb as n,Wb as C,Wc as ce,Xb as k,Xc as _e,Ya as l,Z as A,Za as g,bd as he,ga as O,ha as q,oa as c,pa as _,qb as f,rb as De,sb as p}from"./chunk-MPTJKU3H.mjs";import{a as I,h as de}from"./chunk-NDYDZJSS.mjs";function Ke(){return e=>{let o=new Date(e.value),E=new Date;return o>E?{invalidBirthDate:!0}:o.getFullYear()>E.getFullYear()?{invalidBirthDate:!0}:null}}function Xe(){return e=>{let o=e.value;return o?/^\d{9}$/.test(o)?Array.from(o,Number).reduce((u,a,i)=>{let m=a*(i%2+1);return u+(m>9?m-9:m)},0)%10!==0?{invalidIsraeliId:!0}:null:{invalidIsraeliId:!0}:null}}var y=function(e){return e[e.Single=0]="Single",e[e.Married=1]="Married",e[e.Divorced=2]="Divorced",e[e.Widowed=3]="Widowed",e}(y||{}),P=function(e){return e[e.Employed=0]="Employed",e[e.SelfEmployed=1]="SelfEmployed",e}(P||{}),S=function(e){return e[e.\u05DE\u05D7\u05D9\u05E8_\u05DC\u05DE\u05E9\u05EA\u05DB\u05DF=0]="\u05DE\u05D7\u05D9\u05E8_\u05DC\u05DE\u05E9\u05EA\u05DB\u05DF",e[e.New=1]="New",e[e.Old=2]="Old",e[e.Renovation=3]="Renovation",e[e.Other=4]="Other",e}(S||{}),$=function(e){return e[e.whatup=0]="whatup",e[e.email=1]="email",e}($||{}),b=function(e){return e[e.l=0]="l",e[e.c=1]="c",e[e.a=2]="a",e}(b||{});var ot=["stepper"];function nt(e,o){e&1&&n(0,"\u05D4\u05D2\u05D3\u05E8\u05EA \u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D5\u05E1\u05D9\u05E1\u05DE\u05D0")}function ut(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function at(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF"),t())}function st(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function mt(e,o){if(e&1&&(r(0,"li",43),n(1),t()),e&2){let E=o.$implicit;l(),k(" ",E," ")}}function lt(e,o){if(e&1&&(r(0,"li",44),n(1),t()),e&2){let E=o.$implicit;l(),k(" ",E," ")}}function pt(e,o){if(e&1&&(r(0,"div")(1,"p"),n(2,"\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05DC\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D6\u05E7\u05D4:"),t(),r(3,"ul"),f(4,mt,2,1,"li",41)(5,lt,2,1,"li",42),t()()),e&2){let E=J();l(4),p("ngForOf",E.passwordStrength.valid),l(),p("ngForOf",E.passwordStrength.invalid)}}function dt(e,o){e&1&&n(0,"\u05E2\u05D3\u05DB\u05D5\u05DF \u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD")}function Dt(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function ct(e,o){e&1&&(r(0,"mat-error"),n(1," \u05D9\u05E9 \u05DC\u05DB\u05EA\u05D5\u05D1 \u05D1\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05E8\u05E7 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA "),t())}function _t(e,o){if(e&1&&(r(0,"mat-option",45),n(1),t()),e&2){let E=o.$implicit;p("value",E.value),l(),C(E.label)}}function ht(e,o){if(e&1&&(r(0,"mat-option",45),n(1),t()),e&2){let E=o.$implicit;p("value",E.value),l(),C(E.label)}}function ft(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function Et(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function gt(e,o){if(e&1&&(r(0,"mat-option",45),n(1),t()),e&2){let E=o.$implicit;p("value",E.value),l(),C(E.label)}}function vt(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function St(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function Ct(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function yt(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function It(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D0\u05D9\u05DF \u05E7\u05E6\u05D1\u05D0\u05D5\u05EA \u05E0\u05D0 \u05DC\u05D4\u05E7\u05D9\u05E9 0"),t())}function bt(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D0\u05D9\u05DF \u05DE\u05D6\u05D5\u05E0\u05D5\u05EA \u05E0\u05D0 \u05DC\u05D4\u05E7\u05D9\u05E9 0"),t())}function wt(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D0\u05D9\u05DF \u05E2\u05D5\u05D3 \u05DE\u05E7\u05D5\u05E8 \u05E0\u05D0 \u05DC\u05D4\u05E7\u05D9\u05E9 0"),t())}function Ft(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D0\u05D9\u05DF \u05E0\u05D0 \u05DC\u05D4\u05E7\u05D9\u05E9 0"),t())}function xt(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D0\u05D9\u05DF \u05E0\u05D0 \u05DC\u05D4\u05E7\u05D9\u05E9 0"),t())}function Gt(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D0\u05D9\u05DF \u05E0\u05D0 \u05DC\u05D4\u05E7\u05D9\u05E9 0"),t())}function Nt(e,o){e&1&&n(0,"\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E0\u05DB\u05E1")}function Vt(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function Tt(e,o){if(e&1){let E=z();r(0,"mat-option",46),h("click",function(){let a=c(E).$implicit,i=J();return _(i.saveSelectionType(a.value))}),n(1),t()}if(e&2){let E=o.$implicit;p("value",E.value),l(),C(E.label)}}function Lt(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function At(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E0\u05D0 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E8\u05E7 \u05E1\u05E4\u05E8\u05D5\u05EA"),t())}function Ot(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}function qt(e,o){e&1&&(r(0,"mat-error"),n(1,"\u05E0\u05D0 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05E8\u05E7 \u05E1\u05E4\u05E8\u05D5\u05EA"),t())}function kt(e,o){if(e&1&&(r(0,"mat-option",45),n(1),t()),e&2){let E=o.$implicit;p("value",E.value),l(),C(E.label)}}function Bt(e,o){e&1&&(r(0,"mat-error",44),n(1,"\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4"),t())}var X=(()=>{let o=class o{constructor(u,a,i,m,D,s,w,F,x){this.loginservice=u,this.route=a,this.router=i,this._formBuilder=m,this.customerService=D,this.leadService=s,this.userService=w,this.documentType=F,this.customerTasks=x,this.user={id:0,userName:"",password:"",email:"",role:H.Customer,created_at:new Date(Date.now()),updated_at:new Date(Date.now())},this.currentStepIndex=0,this.isCustomer=!1,this.isLead=!1,this.isLinear=!0,this.isAddDocuments=!1,this.res="",this.lead_id=null,this.isDocsAdded=!1,this.uploadedFiles=[],this.showTable=!1,this.tableData=[],this.document={id:0,customer_Id:0,task_description:"",document_type_id:0,document_path:"",document_path2:"",status:0,status2:0,due_date:new Date(Date.now()),created_at:new Date(Date.now()),id2:0,updated_at:new Date(Date.now())},this.customerData={id:0,lead_id:this.lead_id,last_Name:"",first_Name:"",email:"",phone:"",connection:0,t_z:"",birthDate:new Date(Date.now()),family_status:0,number_of_people_in_house:0,address:"",job_status:0,customer_type:0,work_business_name:"",job_description:"",avarage_monthly_salary:0,years_in_current_position:0,income_rent:0,income_Government_Endorsement:0,income_other:0,expenses_rent:0,expenses_loans:0,expenses_other:0,property_city:"",transaction_type:0,estimated_price_by_customer:0,estimated_price_by_sales_agreement:0,has_other_properties:!1,amount_of_loan_requested:0,lastSynced:new Date(Date.now()),isArchived:!1,created_at:new Date(Date.now()),updated_at:new Date(Date.now()),userId:0},this.familyStatusOptions=[{value:y.Single,label:"\u05E8\u05D5\u05D5\u05E7"},{value:y.Married,label:"\u05E0\u05E9\u05D5\u05D9"},{value:y.Divorced,label:"\u05D2\u05E8\u05D5\u05E9"},{value:y.Widowed,label:"\u05D0\u05DC\u05DE\u05DF"}],this.jobStatusOptions=[{value:P.Employed,label:"\u05E9\u05DB\u05D9\u05E8"},{value:P.SelfEmployed,label:"\u05E2\u05E6\u05DE\u05D0\u05D9"}],this.transactiontypeOptions=[{value:S.\u05DE\u05D7\u05D9\u05E8_\u05DC\u05DE\u05E9\u05EA\u05DB\u05DF,label:"\u05DE\u05D7\u05D9\u05E8 \u05DC\u05DE\u05E9\u05EA\u05DB\u05DF"},{value:S.New,label:"\u05D9\u05D3 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4"},{value:S.Old,label:"\u05D9\u05D3 \u05E9\u05E0\u05D9\u05D4"},{value:S.Renovation,label:"\u05E9\u05D9\u05E4\u05D5\u05E6\u05D9\u05DD"},{value:S.Other,label:"\u05DC\u05DB\u05DC \u05DE\u05D8\u05E8\u05D4"}],this.connectionOptions=[{value:$.whatup,label:"\u05D5\u05D5\u05D0\u05E6\u05D0\u05E4"},{value:$.email,label:"\u05DE\u05D9\u05D9\u05DC"}],this.hasOtherProperties=[{value:!0,label:"\u05DB\u05DF"},{value:!1,label:"\u05DC\u05D0"}],this.passwordStrength={valid:[],invalid:[]},this.displayDocuments=!1,this.hidePassword=!0,this.passwordStrengthValidator=G=>{let v=G.value,N=/[A-Z]/.test(v),V=/[a-z]/.test(v),T=/[0-9]/.test(v),L=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(v);return this.passwordStrength.valid=[],this.passwordStrength.invalid=[],v&&v.length>=10?this.passwordStrength.valid.push("\u05D0\u05D5\u05E8\u05DA 10 \u05EA\u05D5\u05D5\u05D9\u05DD \u05DC\u05E4\u05D7\u05D5\u05EA"):this.passwordStrength.invalid.push("\u05D0\u05D5\u05E8\u05DA 10 \u05EA\u05D5\u05D5\u05D9\u05DD \u05DC\u05E4\u05D7\u05D5\u05EA"),N?this.passwordStrength.valid.push("\u05D0\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D4"):this.passwordStrength.invalid.push("\u05D0\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D4"),V?this.passwordStrength.valid.push("\u05D0\u05D5\u05EA \u05E7\u05D8\u05E0\u05D4"):this.passwordStrength.invalid.push("\u05D0\u05D5\u05EA \u05E7\u05D8\u05E0\u05D4"),T?this.passwordStrength.valid.push("\u05DE\u05E1\u05E4\u05E8"):this.passwordStrength.invalid.push("\u05DE\u05E1\u05E4\u05E8"),L?this.passwordStrength.valid.push("\u05EA\u05D5 \u05DE\u05D9\u05D5\u05D7\u05D3"):this.passwordStrength.invalid.push("\u05EA\u05D5 \u05DE\u05D9\u05D5\u05D7\u05D3"),this.passwordStrength.invalid.length===0?null:{passwordStrength:!0}},this.firstFormGroup=new Ce({userName:new Z({value:"\u05D4\u05DB\u05E0\u05E1 \u05DE\u05D9\u05D9\u05DC",disabled:!1},[d.required,d.email]),password:new Z({value:null,disabled:!1},[d.required,d.minLength(10),this.passwordStrengthValidator])}),this.secondFormGroup=this._formBuilder.group({last_Name:["",[d.pattern("^[a-zA-Z\u05D0-\u05EA ]*$"),d.required]],first_Name:[""],email:[""],phone:[""],connection:[""],t_z:["",[d.required,Xe()]],birthDate:["",[d.required,Ke()]],family_status:["",d.required],number_of_people_in_house:["",[d.pattern("^[0-9]*$"),d.required]],address:["",d.required],job_status:[""],customer_type:[""],work_business_name:["",d.required],job_description:["",d.required],avarage_monthly_salary:["",[d.pattern("^[0-9]*$"),d.required]],years_in_current_position:["",[d.pattern("^[0-9]*$"),d.required]],income_rent:["",[d.pattern("^[0-9]*$"),d.required]],income_Government_Endorsement:["",[d.pattern("^[0-9]*$"),d.required]],income_other:["",[d.pattern("^[0-9]*$"),d.required]],expenses_rent:["",[d.pattern("^[0-9]*$"),d.required]],expenses_loans:["",[d.pattern("^[0-9]*$"),d.required]],expenses_other:["",d.required]}),this.thirdFormGroup=this._formBuilder.group({property_city:["",d.required],transaction_type:["",d.required],estimated_price_by_customer:["",[d.pattern("^[0-9]*$"),d.required]],estimated_price_by_sales_agreement:["",[d.pattern("^[0-9]*$"),d.required]],has_other_properties:["",d.required],amount_of_loan_requested:["",[d.pattern("^[0-9]*$"),d.required]],userId:[""]}),this.fourthFormGroup=this._formBuilder.group({documents:["",d.required]})}ngOnInit(){this.route.paramMap.subscribe(D=>{this.lead_id=Number(D.get("id")),console.log("in ng oninit id=",this.lead_id),sessionStorage.setItem("lead_id",this.lead_id+"")}),localStorage.getItem("enterOrNot")===null&&localStorage.setItem("enterOrNot","false");let u=localStorage.getItem("userName"),a=localStorage.getItem("password");u!==null&&a!==null&&(this.firstFormGroup.setValue({userName:JSON.parse(u),password:JSON.parse(a)}),this.firstFormGroup.get("userName")?.disable(),this.firstFormGroup.get("password")?.disable()),this.customerId=+localStorage.getItem("customerId"),this.lead_id=+localStorage.getItem("lead_id"),this.userId=+localStorage.getItem("userId"),this.customerData.id=this.customerId,this.customerData.lead_id=this.lead_id,this.customerData.userId=this.userId;let i=localStorage.getItem("currentStep");i!==null&&(this.currentStepIndex=parseInt(i,10));let m=localStorage.getItem("tableData");m&&(this.tableData=JSON.parse(m)),this.loadFormData()}onStepChange(u){this.currentStepIndex=u.selectedIndex,localStorage.setItem("currentStep",this.currentStepIndex.toString())}ngAfterViewInit(){this.loadCurrentStep()}isReturningUser(){return localStorage.getItem("enterOrNot")==="true"}checkUserNameAndPassword(){if(console.log("id========"+this.lead_id),this.lead_id=+sessionStorage.getItem("lead_id"),this.leadService.getLeadById(this.lead_id).subscribe(u=>{u&&(this.customerData.phone=u.phone,this.customerData.email=u.email,this.customerData.first_Name=u.first_Name,this.secondFormGroup.value.phone=this.customerData.phone,this.secondFormGroup.value.email=this.customerData.email,this.secondFormGroup.value.first_Name=this.customerData.first_Name,console.log("\u05E4\u05E8\u05D8\u05D9 \u05D4\u05DC\u05E7\u05D5\u05D7 \u05D4\u05EA\u05E2\u05D3\u05DB\u05E0\u05D5 \u05D1\u05E4\u05E8\u05D8\u05D9 \u05D4\u05DC\u05D9\u05D3"))}),localStorage.getItem("enterOrNot")=="true"){this.stepper.next();return}this.user.id=0,this.user.userName=this.firstFormGroup.value.userName,this.user.password=this.firstFormGroup.value.password,this.user.email=this.firstFormGroup.value.userName,this.user.role=H.Customer,this.user.created_at=new Date(Date.now()),this.user.updated_at=new Date(Date.now()),this.userService.IsExist(this.user).subscribe(u=>{localStorage.setItem("userName",JSON.stringify(this.user.userName)),localStorage.setItem("password",JSON.stringify(this.user.password)),this.res=u,u==="200"?localStorage.getItem("enterOrNot")==="true"?this.stepper.next():alert("\u05D0\u05D9\u05D9\u05DE\u05D9\u05DC \u05D0\u05D5 \u05E1\u05D9\u05E1\u05DE\u05D0 \u05EA\u05E4\u05D5\u05E1\u05D9\u05DD \u05E0\u05D0 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05D0\u05D7\u05E8"):u==="404"&&this.user!==null&&this.user!==void 0&&this.user.password!==""&&this.user.userName!==""?(localStorage.setItem("enterOrNot","true"),this.stepper.next(),this.userService.createUserForLead(this.user,this.lead_id).subscribe({next:a=>{console.log("User created:",this.user),this.customerData.lead_id=this.lead_id,this.customerData.userId=a.id,console.log("customerData=====",this.customerData.id),this.secondFormGroup.value.userId=a.id,this.customerService.createCustomerForLead(this.customerData,this.lead_id).subscribe({next:i=>{this.customerId=i.id,localStorage.setItem("customerId",this.customerId+""),localStorage.setItem("lead_id",this.lead_id+""),localStorage.setItem("userId",this.userId+""),this.customerData.customer_type=b.c,this.customerData.id=i.id,this.secondFormGroup.value.customer_type=b.c,console.log("Customer created:",this.customerData),this.loginservice.login(this.user.email,this.user.password).subscribe(m=>{let D=JSON.parse(m);sessionStorage.setItem("token",D.token),console.log("customerid=",this.loginservice.GetCurrentUser().customerId)},m=>{console.log("Login failed",m)})},error:i=>console.error("Error creating customer:",i)})},error:a=>console.error("Error creating user:",a)})):console.error("Unexpected response:",u)},u=>{console.error("Error during user existence check:",u)})}saveFormData(){let u={firstFormGroup:this.firstFormGroup.value,secondFormGroup:this.secondFormGroup.value,thirdFormGroup:this.thirdFormGroup.value,fourthFormGroup:this.fourthFormGroup.value,uploadedFiles:this.uploadedFiles};localStorage.setItem("formData",JSON.stringify(u))}saveCurrentStep(){localStorage.setItem("currentStep",JSON.stringify(this.stepper.selectedIndex))}loadCurrentStep(){let u=localStorage.getItem("currentStep");u&&(this.stepper.selectedIndex=JSON.parse(u))}loadFormData(){let u=localStorage.getItem("formData");if(u){let i=JSON.parse(u);console.log("data",i),this.firstFormGroup.patchValue(i.firstFormGroup),this.secondFormGroup.patchValue(i.secondFormGroup),this.thirdFormGroup.patchValue(i.thirdFormGroup),this.fourthFormGroup.patchValue(i.fourthFormGroup),this.uploadedFiles=i.uploadedFiles||[],this.customerData.last_Name=this.secondFormGroup.value.last_Name,this.customerData.first_Name=this.secondFormGroup.value.first_Name,this.customerData.email=this.secondFormGroup.value.email,this.customerData.phone=this.secondFormGroup.value.phone,this.customerData.connection=this.secondFormGroup.value.connection.toISOString,this.customerData.t_z=this.secondFormGroup.value.t_z,this.customerData.birthDate=this.secondFormGroup.value.birthDate,this.customerData.family_status=this.secondFormGroup.value.family_status.toISOString,this.customerData.number_of_people_in_house=this.secondFormGroup.value.number_of_people_in_house.toISOString,this.customerData.address=this.secondFormGroup.value.address,this.customerData.job_status=this.secondFormGroup.value.job_status.toISOString,this.customerData.customer_type=this.secondFormGroup.value.customer_type.toISOString,this.customerData.work_business_name=this.secondFormGroup.value.work_business_name,this.customerData.job_description=this.secondFormGroup.value.job_description,this.customerData.avarage_monthly_salary=this.secondFormGroup.value.avarage_monthly_salary.toISOString,this.customerData.years_in_current_position=this.secondFormGroup.value.years_in_current_position.toISOString,this.customerData.income_rent=this.secondFormGroup.value.income_rent.toISOString,this.customerData.income_Government_Endorsement=this.secondFormGroup.value.income_Government_Endorsement.toISOString,this.customerData.income_other=this.secondFormGroup.value.income_other.toISOString,this.customerData.expenses_rent=this.secondFormGroup.value.expenses_rent,this.customerData.expenses_loans=this.secondFormGroup.value.expenses_loans,this.customerData.expenses_other=this.secondFormGroup.value.expenses_other,this.customerData.property_city=this.thirdFormGroup.value.property_city,this.customerData.transaction_type=this.thirdFormGroup.value.transaction_type,this.customerData.estimated_price_by_customer=this.thirdFormGroup.value.estimated_price_by_customer.toISOString,this.customerData.estimated_price_by_sales_agreement=this.thirdFormGroup.value.estimated_price_by_sales_agreement.toISOString,this.customerData.has_other_properties=this.thirdFormGroup.value.has_other_properties.toISOString,this.customerData.amount_of_loan_requested=this.thirdFormGroup.value.amount_of_loan_requested.toISOString,this.customerData.isArchived=this.thirdFormGroup.value.isArchived,this.customerData.userId=this.thirdFormGroup.value.userId}console.log("customerData",this.customerData);let a=localStorage.getItem("customerData")}onInputChange(u,a){let i=a.target.value;this.customerData[u]=i,this.saveFormData()}onSelectionChange(u,a){u=="family_status"?(this.customerData[u]=a,this.customerData.family_status=Number(this.customerData.family_status)):u=="job_status"?(this.customerData[u]=a,this.customerData.job_status=Number(this.customerData.job_status)):u=="transaction_type"?(this.customerData[u]=a,this.customerData.transaction_type=Number(this.customerData.transaction_type)):u=="has_other_properties"?(this.customerData[u]=a,this.customerData.has_other_properties=this.customerData.has_other_properties,a===!0?this.customerData[u]=!0:this.customerData[u]=!1):u=="connection"?(this.customerData[u]=a,this.customerData.connection=Number(this.customerData.connection)):this.customerData[u]=a,this.saveFormData()}saveSelectionType(u){localStorage.setItem("tableData",JSON.stringify(this.tableData))}save(){console.log("in save line 527");try{let u=I(I(I(I({},this.firstFormGroup.value),this.secondFormGroup.value),this.thirdFormGroup.value),this.fourthFormGroup.value);console.log("miri",u),this.customerService.updateCustomer(this.customerId,this.customerData).subscribe({next:a=>{this.getDocsByTransactionTypeAndAddTasks(),console.log("The response from update customer =",a),this.removeStorage(),this.router.navigate(["auth/login"])},error:a=>{console.log("Error in update")}})}catch(u){console.error("Error in the process",u)}}saveSecondStep(){try{this.customerData.customer_type=b.l,this.customerService.updateCustomer(this.customerId,this.customerData).subscribe(()=>{console.log("saved second step")})}catch(u){console.error("Error in the process",u)}}removeStorage(){console.log("step 4 created"),localStorage.removeItem("enterOrNot"),localStorage.removeItem("formData"),localStorage.removeItem("currentStep"),localStorage.removeItem("ifEnter"),localStorage.removeItem("currentStepIndex"),localStorage.removeItem("tableData"),localStorage.removeItem("isAddDocuments"),localStorage.removeItem("customerId"),localStorage.removeItem("lead_id"),localStorage.removeItem("username"),localStorage.removeItem("password"),this.router.navigate(["auth/login"])}getDocsByTransactionTypeAndAddTasks(){let u=Number(this.customerData.transaction_type);console.log("in getDocsByTransactionTypeAndAddTasks num=",u),this.documentType.getDocsByTransactionType(u).subscribe(a=>{this.tableData=a,localStorage.setItem("tableData",JSON.stringify(this.tableData)),console.log("in getDocsByTransactionTypeAndAddTasks, res=",a),this.addToCustomerTask(),this.stepper.next()},a=>{console.error("Error fetching documents:",a)})}addToCustomerTask(){return de(this,null,function*(){let u=this.tableData.map(a=>({id:0,id2:0,customer_Id:this.customerData.id,task_description:a.document_Name,document_type_id:Number(this.customerData.transaction_type),document_path:"",document_path2:"",status:0,status2:0,due_date:new Date(Date.now()),created_at:new Date(Date.now()),updated_at:new Date(Date.now())}));this.customerTasks.addDocuments(u).subscribe({next:a=>{console.log("Successfully added documents to customerTask"),this.isDocsAdded=!0,this.displayDocuments=!0,localStorage.setItem("isAddDocuments","true")},error:a=>{console.log("Failed to add documents to CustomerTask")}})})}};o.\u0275fac=function(a){return new(a||o)(g(Je),g(B),g(M),g(xe),g(Ue),g(j),g(We),g(Ye),g(Qe))},o.\u0275cmp=O({type:o,selectors:[["app-lead"]],viewQuery:function(a,i){if(a&1&&(U(Ze,5),U(ot,5)),a&2){let m;Q(m=W())&&(i.documentsListCustomer=m.first),Q(m=W())&&(i.stepper=m.first)}},decls:170,vars:41,consts:[["stepper",""],["myButton",""],["dir","rtl",3,"selectionChange","linear"],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],["matInput","","formControlName","userName","required","","matTooltip","\u05D4\u05DB\u05E0\u05E1 \u05DE\u05D9\u05D9\u05DC- \u05D1\u05E9\u05D1\u05D9\u05DC \u05D4\u05DB\u05E0\u05D9\u05E1\u05D5\u05EA \u05D4\u05D1\u05D0\u05D5\u05EA","matTooltipPosition","right"],[4,"ngIf"],["matInput","","formControlName","password","required","","matTooltip","\u05D4\u05DB\u05E0\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D0- \u05D1\u05E9\u05D1\u05D9\u05DC \u05D4\u05DB\u05E0\u05D9\u05E1\u05D5\u05EA \u05D4\u05D1\u05D0\u05D5\u05EA","matTooltipPosition","right",3,"type"],["matSuffix","",2,"cursor","pointer",3,"click"],["mat-button","",3,"click","disabled"],["matInput","","formControlName","last_Name",3,"input"],["matInput","","type","number","formControlName","connection",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","t_z",3,"input"],["matInput","","formControlName","birthDate","type","date",3,"input"],["formControlName","family_status",3,"selectionChange"],["matInput","","formControlName","number_of_people_in_house","type","number",3,"input"],["matInput","","formControlName","address","type","text",3,"input"],["formControlName","job_status",3,"selectionChange"],["matInput","","formControlName","work_business_name","type","text",3,"input"],["matInput","","formControlName","job_description","type","text",3,"input"],["matInput","","formControlName","avarage_monthly_salary","type","number",3,"input"],["matInput","","formControlName","years_in_current_position","type","number",3,"input"],["matInput","","formControlName","income_rent","type","number",3,"input"],["matInput","","formControlName","income_Government_Endorsement","type","number",3,"input"],["matInput","","formControlName","income_other","type","number",3,"input"],["matInput","","formControlName","expenses_rent","type","number",3,"input"],["matInput","","formControlName","expenses_loans","type","number",3,"input"],["matInput","","formControlName","expenses_other","type","number",3,"input"],["mat-button","","matStepperPrevious",""],["mat-button","","matStepperNext","",3,"click"],["matInput","","formControlName","property_city","type","text",3,"input"],["formControlName","transaction_type",3,"selectionChange"],[3,"value","click",4,"ngFor","ngForOf"],["matInput","","formControlName","estimated_price_by_customer","type","number",3,"input"],["matInput","","formControlName","estimated_price_by_sales_agreement","type","text",3,"input"],["formControlName","has_other_properties",3,"selectionChange"],["matInput","","formControlName","amount_of_loan_requested","type","number",3,"input"],["style","color: red;",4,"ngIf"],["mat-button","",3,"click"],["style","color: green;",4,"ngFor","ngForOf"],["style","color: red;",4,"ngFor","ngForOf"],[2,"color","green"],[2,"color","red"],[3,"value"],[3,"click","value"]],template:function(a,i){if(a&1){let m=z();r(0,"mat-horizontal-stepper",2,0),h("selectionChange",function(s){return c(m),_(i.onStepChange(s))}),r(2,"mat-step",3)(3,"form",4),f(4,nt,1,0,"ng-template",5),r(5,"mat-form-field")(6,"mat-label"),n(7,"\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC"),t(),R(8,"input",6),f(9,ut,2,0,"mat-error",7)(10,at,2,0,"mat-error",7),t(),r(11,"mat-form-field")(12,"mat-label"),n(13,"\u05E1\u05D9\u05E1\u05DE\u05D0"),t(),R(14,"input",8),r(15,"mat-icon",9),h("click",function(){return c(m),_(i.hidePassword=!i.hidePassword)}),n(16),t(),f(17,st,2,0,"mat-error",7),t(),f(18,pt,6,2,"div",7),r(19,"div")(20,"button",10,1),h("click",function(){return c(m),_(i.checkUserNameAndPassword())}),n(22,"\u05D4\u05D1\u05D0"),t()()()(),r(23,"mat-step",3)(24,"form",4),f(25,dt,1,0,"ng-template",5),r(26,"mat-form-field")(27,"mat-label"),n(28,"\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"),t(),r(29,"input",11),h("input",function(s){return c(m),_(i.onInputChange("last_Name",s))}),t(),f(30,Dt,2,0,"mat-error",7)(31,ct,2,0,"mat-error",7),t(),r(32,"mat-form-field")(33,"mat-label"),n(34,"\u05D7\u05D9\u05D1\u05D5\u05E8"),t(),r(35,"mat-select",12),h("selectionChange",function(s){return c(m),_(i.onSelectionChange("connection",s.value))}),f(36,_t,2,2,"mat-option",13),t()(),r(37,"mat-form-field")(38,"mat-label"),n(39,"\u05EA.\u05D6."),t(),r(40,"input",14),h("input",function(s){return c(m),_(i.onInputChange("t_z",s))}),t(),r(41,"mat-error"),n(42," \u05DE\u05E1\u05E4\u05E8 \u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF "),t()(),r(43,"mat-form-field")(44,"mat-label"),n(45,"\u05EA\u05D0\u05E8\u05D9\u05DA \u05DC\u05D9\u05D3\u05D4"),t(),r(46,"input",15),h("input",function(s){return c(m),_(i.onInputChange("birthDate",s))}),t(),r(47,"mat-error"),n(48," \u05E0\u05D0 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05EA\u05D0\u05E8\u05D9\u05DA \u05EA\u05E7\u05D9\u05DF \u05E2\u05D3 \u05DC\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 "),t()(),r(49,"mat-form-field")(50,"mat-label"),n(51,"\u05DE\u05E6\u05D1 \u05DE\u05E9\u05E4\u05D7\u05EA\u05D9"),t(),r(52,"mat-select",16),h("selectionChange",function(s){return c(m),_(i.onSelectionChange("family_status",s.value))}),f(53,ht,2,2,"mat-option",13),t()(),r(54,"mat-form-field")(55,"mat-label"),n(56,"\u05DE\u05E1\u05E4\u05E8 \u05D0\u05E0\u05E9\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA"),t(),r(57,"input",17),h("input",function(s){return c(m),_(i.onInputChange("number_of_people_in_house",s))}),t(),f(58,ft,2,0,"mat-error",7),t(),r(59,"mat-form-field")(60,"mat-label"),n(61,"\u05DB\u05EA\u05D5\u05D1\u05EA"),t(),r(62,"input",18),h("input",function(s){return c(m),_(i.onInputChange("address",s))}),t(),f(63,Et,2,0,"mat-error",7),t(),r(64,"h3"),n(65,"\u05E4\u05E8\u05D8\u05D9 \u05EA\u05E2\u05E1\u05D5\u05E7\u05D4"),t(),r(66,"mat-form-field")(67,"mat-label"),n(68,"\u05E1\u05D8\u05D8\u05D5\u05E1"),t(),r(69,"mat-select",19),h("selectionChange",function(s){return c(m),_(i.onSelectionChange("job_status",s.value))}),f(70,gt,2,2,"mat-option",13),t()(),r(71,"mat-form-field")(72,"mat-label"),n(73,"\u05DE\u05E7\u05D5\u05DD \u05E2\u05D1\u05D5\u05D3\u05D4"),t(),r(74,"input",20),h("input",function(s){return c(m),_(i.onInputChange("work_business_name",s))}),t(),f(75,vt,2,0,"mat-error",7),t(),r(76,"mat-form-field")(77,"mat-label"),n(78,"\u05EA\u05E4\u05E7\u05D9\u05D3"),t(),r(79,"input",21),h("input",function(s){return c(m),_(i.onInputChange("job_description",s))}),t(),f(80,St,2,0,"mat-error",7),t(),r(81,"mat-form-field")(82,"mat-label"),n(83,"\u05DE\u05E9\u05DB\u05D5\u05E8\u05EA \u05D7\u05D5\u05D3\u05E9\u05D9\u05EA \u05DE\u05DE\u05D5\u05E6\u05E2\u05EA \u05E0\u05D8\u05D5"),t(),r(84,"input",22),h("input",function(s){return c(m),_(i.onInputChange("avarage_monthly_salary",s))}),t(),f(85,Ct,2,0,"mat-error",7),t(),r(86,"mat-form-field")(87,"mat-label"),n(88,"\u05D5\u05EA\u05E7"),t(),r(89,"input",23),h("input",function(s){return c(m),_(i.onInputChange("years_in_current_position",s))}),t(),f(90,yt,2,0,"mat-error",7),t(),r(91,"h3"),n(92,"\u05D4\u05DB\u05E0\u05E1\u05D5\u05EA"),t(),r(93,"mat-form-field")(94,"mat-label"),n(95,"\u05E7\u05E6\u05D1\u05D0\u05D5\u05EA"),t(),r(96,"input",24),h("input",function(s){return c(m),_(i.onInputChange("income_rent",s))}),t(),f(97,It,2,0,"mat-error",7),t(),r(98,"mat-form-field")(99,"mat-label"),n(100,"\u05DE\u05D6\u05D5\u05E0\u05D5\u05EA"),t(),r(101,"input",25),h("input",function(s){return c(m),_(i.onInputChange("income_Government_Endorsement",s))}),t(),f(102,bt,2,0,"mat-error",7),t(),r(103,"mat-form-field")(104,"mat-label"),n(105,"\u05DE\u05E7\u05D5\u05E8 \u05D0\u05D7\u05E8"),t(),r(106,"input",26),h("input",function(s){return c(m),_(i.onInputChange("income_other",s))}),t(),f(107,wt,2,0,"mat-error",7),t(),r(108,"h3"),n(109,"\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA"),t(),r(110,"mat-form-field")(111,"mat-label"),n(112,"\u05E9\u05DB\u05E8 \u05D3\u05D9\u05E8\u05D4"),t(),r(113,"input",27),h("input",function(s){return c(m),_(i.onInputChange("expenses_rent",s))}),t(),f(114,Ft,2,0,"mat-error",7),t(),r(115,"mat-form-field")(116,"mat-label"),n(117,"\u05D4\u05DC\u05D5\u05D5\u05D0\u05D5\u05EA"),t(),r(118,"input",28),h("input",function(s){return c(m),_(i.onInputChange("expenses_loans",s))}),t(),f(119,xt,2,0,"mat-error",7),t(),r(120,"mat-form-field")(121,"mat-label"),n(122,"\u05DE\u05E7\u05D5\u05E8 \u05D0\u05D7\u05E8"),t(),r(123,"input",29),h("input",function(s){return c(m),_(i.onInputChange("expenses_other",s))}),t(),f(124,Gt,2,0,"mat-error",7),t(),r(125,"div")(126,"button",30),n(127,"\u05D7\u05D6\u05D5\u05E8"),t(),r(128,"button",31),h("click",function(){return c(m),_(i.saveSecondStep())}),n(129,"\u05D4\u05D1\u05D0"),t()()()(),r(130,"mat-step",3)(131,"form",4),f(132,Nt,1,0,"ng-template",5),r(133,"mat-form-field")(134,"mat-label"),n(135,"\u05D9\u05D9\u05E9\u05D5\u05D1"),t(),r(136,"input",32),h("input",function(s){return c(m),_(i.onInputChange("property_city",s))}),t(),f(137,Vt,2,0,"mat-error",7),t(),r(138,"mat-form-field")(139,"mat-label"),n(140,"\u05E1\u05D5\u05D2 \u05E2\u05E1\u05E7\u05D4"),t(),r(141,"mat-select",33),h("selectionChange",function(s){return c(m),_(i.onSelectionChange("transaction_type",s.value))}),f(142,Tt,2,2,"mat-option",34),t()(),r(143,"mat-form-field")(144,"mat-label"),n(145,"\u05E9\u05D5\u05D5\u05D9 \u05D4\u05E0\u05DB\u05E1 \u05DC\u05E4\u05D9 \u05D4\u05E2\u05E8\u05DB\u05EA \u05DC\u05D5\u05D5\u05D4"),t(),r(146,"input",35),h("input",function(s){return c(m),_(i.onInputChange("estimated_price_by_customer",s))}),t(),f(147,Lt,2,0,"mat-error",7)(148,At,2,0,"mat-error",7),t(),r(149,"mat-form-field")(150,"mat-label"),n(151,"\u05E9\u05D5\u05D5\u05D4 \u05D4\u05E0\u05DB\u05E1 \u05DC\u05E4\u05D9 \u05D4\u05E1\u05DB\u05DD \u05DE\u05DB\u05E8"),t(),r(152,"input",36),h("input",function(s){return c(m),_(i.onInputChange("estimated_price_by_sales_agreement",s))}),t(),f(153,Ot,2,0,"mat-error",7)(154,qt,2,0,"mat-error",7),t(),r(155,"mat-form-field")(156,"mat-label"),n(157,"\u05D9\u05E9 \u05E0\u05DB\u05E1\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DC\u05DC\u05D5\u05D5\u05D4"),t(),r(158,"mat-select",37),h("selectionChange",function(s){return c(m),_(i.onSelectionChange("has_other_properties",s.value))}),f(159,kt,2,2,"mat-option",13),t()(),r(160,"mat-form-field")(161,"mat-label"),n(162,"\u05E1\u05DB\u05D5\u05DD \u05D4\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4"),t(),r(163,"input",38),h("input",function(s){return c(m),_(i.onInputChange("amount_of_loan_requested",s))}),t(),f(164,Bt,2,0,"mat-error",39),t(),r(165,"div")(166,"button",30),n(167,"\u05D7\u05D6\u05D5\u05E8"),t(),r(168,"button",40),h("click",function(){return c(m),_(i.save())}),n(169,"\u05E9\u05DC\u05D7 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD"),t()()()()()}if(a&2){let m,D,s,w,F,x,G,v,N,V,T,L,ee,te,re,ie,oe,ne,ue,ae,se,me,le,pe;p("linear",i.isLinear),l(2),p("stepControl",i.firstFormGroup),l(),p("formGroup",i.firstFormGroup),l(6),p("ngIf",(m=i.firstFormGroup.get("userName"))==null?null:m.hasError("required")),l(),p("ngIf",(D=i.firstFormGroup.get("userName"))==null?null:D.hasError("email")),l(4),p("type",i.hidePassword?"password":"text"),l(),De("aria-label","Hide password")("aria-pressed",i.hidePassword),l(),k(" ",i.hidePassword?"visibility_off":"visibility"," "),l(),p("ngIf",(s=i.firstFormGroup.get("password"))==null?null:s.hasError("required")),l(),p("ngIf",(w=i.firstFormGroup.get("password"))==null?null:w.touched),l(2),p("disabled",i.firstFormGroup.invalid),l(3),p("stepControl",i.secondFormGroup),l(),p("formGroup",i.secondFormGroup),l(6),p("ngIf",(F=i.secondFormGroup.get("last_Name"))==null?null:F.hasError("required")),l(),p("ngIf",(x=i.secondFormGroup.get("last_Name"))==null?null:x.hasError("pattern")),l(5),p("ngForOf",i.connectionOptions),l(17),p("ngForOf",i.familyStatusOptions),l(5),p("ngIf",(G=i.secondFormGroup.get("number_of_people_in_house"))==null?null:G.hasError("required")),l(5),p("ngIf",(v=i.secondFormGroup.get("address"))==null?null:v.hasError("required")),l(7),p("ngForOf",i.jobStatusOptions),l(5),p("ngIf",(N=i.secondFormGroup.get("work_business_name"))==null?null:N.hasError("required")),l(5),p("ngIf",(V=i.secondFormGroup.get("job_description"))==null?null:V.hasError("required")),l(5),p("ngIf",(T=i.secondFormGroup.get("avarage_monthly_salary"))==null?null:T.hasError("required")),l(5),p("ngIf",(L=i.secondFormGroup.get("years_in_current_position"))==null?null:L.hasError("required")),l(7),p("ngIf",(ee=i.secondFormGroup.get("income_rent"))==null?null:ee.hasError("required")),l(5),p("ngIf",(te=i.secondFormGroup.get("income_Government_Endorsement"))==null?null:te.hasError("required")),l(5),p("ngIf",(re=i.secondFormGroup.get("income_other"))==null?null:re.hasError("required")),l(7),p("ngIf",(ie=i.secondFormGroup.get("expenses_rent"))==null?null:ie.hasError("required")),l(5),p("ngIf",(oe=i.secondFormGroup.get("expenses_loans"))==null?null:oe.hasError("required")),l(5),p("ngIf",(ne=i.secondFormGroup.get("expenses_other"))==null?null:ne.hasError("required")),l(6),p("stepControl",i.thirdFormGroup),l(),p("formGroup",i.thirdFormGroup),l(6),p("ngIf",(ue=i.thirdFormGroup.get("property_city"))==null?null:ue.hasError("required")),l(5),p("ngForOf",i.transactiontypeOptions),l(5),p("ngIf",(ae=i.thirdFormGroup.get("estimated_price_by_customer"))==null?null:ae.hasError("required")),l(),p("ngIf",(se=i.thirdFormGroup.get("estimated_price_by_customer"))==null?null:se.hasError("pattern")),l(5),p("ngIf",(me=i.thirdFormGroup.get("estimated_price_by_sales_agreement"))==null?null:me.hasError("required")),l(),p("ngIf",(le=i.thirdFormGroup.get("estimated_price_by_sales_agreement"))==null?null:le.hasError("pattern")),l(5),p("ngForOf",i.hasOtherProperties),l(5),p("ngIf",(pe=i.thirdFormGroup.get("amount_of_loan_requested"))==null?null:pe.hasError("required"))}},dependencies:[ce,_e,fe,Ve,Oe,Te,Le,Ae,qe,Ne,je,Me,Pe,$e,Re,ke,Ee,Be,ye,ge,Ie,ve,Se,Fe,be,we],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{margin-right:8px}h3[_ngcontent-%COMP%]{margin-top:20px}.invalid-requirement[_ngcontent-%COMP%]{color:red}.valid-requirement[_ngcontent-%COMP%]{color:green}mat-horizontal-stepper[_ngcontent-%COMP%]{width:50vw;margin:0 auto}#content[_ngcontent-%COMP%]{background-color:#ffffff9a;padding:25px;border-radius:40px;min-width:max-content;min-height:60vh}"]});let e=o;return e})();var et=(()=>{let o=class o{constructor(u,a,i){this.route=u,this.leadService=a,this.router=i,this.id=null,this.token=null,this.isNotValid=!1}ngOnInit(){console.log("in ngooninit of magic link"),this.route.queryParams.subscribe(u=>{this.id=u.id,this.token=u.token,console.log("ID:",this.id),console.log("Token:",this.token)}),this.id!=null&&this.leadService.checkToken(this.id).subscribe(u=>{u.status===200?this.router.navigate(["lead/lead",this?.id]):this.isNotValid=!0},u=>{console.error("Error checking token:",u),this.isNotValid=!0})}};o.\u0275fac=function(a){return new(a||o)(g(B),g(j),g(M))},o.\u0275cmp=O({type:o,selectors:[["app-magic-link"]],decls:2,vars:0,template:function(a,i){a&1&&(r(0,"p"),n(1,"magic-link works!"),t())}});let e=o;return e})();var Mt=[{path:"",component:X},{path:"lead/:id",component:X},{path:"magic-link",component:et}],tt=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=q({type:o}),o.\u0275inj=A({imports:[Y.forChild(Mt),Y]});let e=o;return e})();var jr=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=q({type:o}),o.\u0275inj=A({imports:[he,ze,Ge,tt,He]});let e=o;return e})();export{jr as a};
