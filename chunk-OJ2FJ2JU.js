import{c as h}from"./chunk-2YATXSRN.js";import{a as n}from"./chunk-5UU5PVIG.js";import{a as c}from"./chunk-VLF2AD56.js";import{$ as a,V as u,j as s}from"./chunk-JL3DEBFA.js";var x=(()=>{let o=class o{constructor(){this._token=null,this._router=a(h),this._http=a(c),this._currentUserSubject=new s(null),this.currentUserObs$=this._currentUserSubject.asObservable()}getToken(){return this._token}signInUser(t){return this._http.post(n.SIGNIN_USER,t).subscribe({next:e=>{this._token=e.data.token,this._currentUserSubject.next(e.data);let r=new Date,l=new Date(r.getTime()+e.data.expiresIn*1e3);this.saveAuthData(e.data.userId,this._token,l),this.setAuthTimer(e.data.expiresIn),this._router.navigate(["/"])}})}setAuthTimer(t){console.log("Setting timer: ",+t),this.tokenTimer=setTimeout(()=>{this.signOutUser()},t*1e3)}autoSignIn(){let t=this.getAuthData();if(t){let e=new Date,r=t.expiration.getTime()-e.getTime();r>0&&(this._token=t.token,this.setAuthTimer(r/1e3))}}signOutUser(){this._token=null,this._currentUserSubject.next(null),clearTimeout(this.tokenTimer),this.clearAuthData(),this._router.navigate(["/auth"])}saveAuthData(t,e,r){localStorage.setItem("userId",t),localStorage.setItem("token",e),localStorage.setItem("expiration",r.toISOString())}clearAuthData(){localStorage.removeItem("userId"),localStorage.removeItem("token"),localStorage.removeItem("expiration")}getAuthData(){let t=localStorage.getItem("userId"),e=localStorage.getItem("token"),r=localStorage.getItem("expiration");if(!(!e||!r||!t))return{token:e,userId:t,expiration:new Date(r)}}registerUser(t){return this._http.post(n.SIGNUP_USER,t).subscribe({next:e=>{this._router.navigate(["/auth"])}})}};o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=u({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();export{x as a};
