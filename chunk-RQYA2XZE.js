import{a as q}from"./chunk-KNFXDZFY.js";import{a as J,b as K,c as Q,d as W,e as X,f as Z,g as tt,h as rt}from"./chunk-7T7UIH3B.js";import"./chunk-J2DAJJ3Q.js";import{a as H}from"./chunk-OJ2FJ2JU.js";import{a as V,d as $}from"./chunk-2YATXSRN.js";import{a as G,g as et,h as it,i as nt}from"./chunk-ERNOU7U2.js";import{L as z,O as Y,a as g}from"./chunk-5UU5PVIG.js";import{a as P}from"./chunk-VLF2AD56.js";import"./chunk-5IC5DNT2.js";import{$ as c,Ab as R,Fb as T,Gb as o,Hb as w,Ib as l,Jb as A,Na as C,Pb as F,Q as I,Qa as m,Qb as U,R as S,Rb as B,V as E,ea as b,fb as f,hb as p,i as _,kc as O,lc as j,ma as M,na as y,nc as N,pb as s,q as v,qb as e,r as x,rb as k,sb as D,vb as L,xb as h}from"./chunk-JL3DEBFA.js";var ot=(()=>{let i=class i{constructor(){this._http=c(P)}registerEvent(r){return this._http.post(g.REGISTER_EVENT,r).pipe(v(t=>t.message))}getRegisters(){return this._http.get(`${g.REGISTER_EVENT}`).pipe(v(r=>r.data))}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=E({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();function st(a,i){if(a&1&&(s(0,"mat-list-option",11),o(1),e()),a&2){let n=i.$implicit;p("value",n),m(),l(" ",n," ")}}function mt(a,i){if(a&1){let n=D();s(0,"div",2)(1,"div",3)(2,"div",4)(3,"mat-card")(4,"mat-card-header")(5,"mat-card-title"),o(6,"Register for Event"),e()(),k(7,"img",5),s(8,"mat-card-content")(9,"h2",6),o(10),e(),s(11,"p")(12,"strong"),o(13,"Description:"),e(),o(14),e(),s(15,"p")(16,"strong"),o(17,"Domain:"),e(),o(18),e(),s(19,"p")(20,"strong"),o(21,"Location:"),e(),o(22),e(),s(23,"p")(24,"strong"),o(25,"Date:"),e(),o(26),U(27,"date"),e(),s(28,"p")(29,"strong"),o(30,"Time:"),e(),o(31),e(),s(32,"div",7)(33,"h3"),o(34,"Select Your Interests"),e(),s(35,"mat-selection-list",null,0),f(37,st,2,2,"mat-list-option",8),e()()(),s(38,"mat-card-actions")(39,"button",9),L("click",function(){M(n);let t=T(36),d=h();return y(d.registerForEvent(t.selectedOptions.selected))}),o(40," Register "),e(),s(41,"button",10),o(42,"Cancel"),e()()()()()()}if(a&2){let n=h();m(7),R("alt",n.event.title),p("src",n.event.image,C),m(3),w(n.event.title),m(4),l(" ",n.event.description,""),m(4),l(" ",n.getDomainNameById(n.event.domainId),""),m(4),l(" ",n.event.location,""),m(4),l(" ",B(27,10,n.event.date,"MMM d, y"),""),m(5),A(" ",n.event.startTime," - ",n.event.endTime,""),m(6),p("ngForOf",n.getDomainInterestsById(n.event.domainId))}}var Tt=(()=>{let i=class i{constructor(){this.isLoading=!1,this._route=c(V),this._authService=c(H),this._eventsService=c(rt),this._snackbarService=c(q),this._domainsService=c(G),this._registerService=c(ot),this.domains=[],this.currentUser=null,this._unsubscribeAll=new _}ngOnInit(){this.isLoading=!0,this._route.paramMap.pipe(I(r=>{let t=r.get("eventId")??"";return x([this._authService.currentUserObs$,this._domainsService.domainsObs$,this._eventsService.getEvent(t)])}),S(this._unsubscribeAll)).subscribe({next:([r,t,d])=>{this.isLoading=!1,this.event=d,this.domains=t,this.currentUser=r}})}getDomainNameById(r){return this.domains.find(t=>t._id===r)?.name??"Unknown Domain"}getDomainInterestsById(r){return this.domains.find(t=>t._id===r)?.interests??[]}registerForEvent(r){let t=[];r.forEach(u=>t.push(u.value));let d={userId:this.currentUser.userId,eventId:this.event._id,interests:t,domainId:this.event.domainId};this._registerService.registerEvent(d).subscribe({next:u=>{this._snackbarService.open(u,"SUCCESS",{duration:3e3})}})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=b({type:i,selectors:[["app-register"]],standalone:!0,features:[F],decls:1,vars:1,consts:[["interestList",""],["class","container my-4",4,"ngIf"],[1,"container","my-4"],[1,"row","justify-content-center"],[1,"col-md-4"],["mat-card-image","","height","300",3,"src","alt"],[1,"mb-3"],[1,"mt-4"],["checkboxPosition","before",3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"click"],["mat-button","","routerLink","/"],["checkboxPosition","before",3,"value"]],template:function(t,d){t&1&&f(0,mt,43,13,"div",1),t&2&&p("ngIf",d.event)},dependencies:[j,O,nt,it,et,tt,J,W,Q,X,Z,K,N,Y,z,$]});let a=i;return a})();export{Tt as default};
