(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Nt43:function(t,i,n){"use strict";n.r(i),n.d(i,"CompaniesModule",(function(){return I}));var c=n("tyNb"),e=n("fXoL"),o=n("iQ8y"),a=n("A5z7"),s=n("ofXK"),r=n("bTqV"),b=n("Xa2L"),m=n("Wp6s");function l(t,i){if(1&t){const t=e.Rb();e.Qb(0,"mat-chip",9),e.Xb("click",(function(){e.pc(t);const n=i.$implicit;return e.bc().onSelect(n)})),e.zc(1),e.Pb()}if(2&t){const t=i.$implicit,n=e.bc();e.ic("selected",t===n.selectedCity),e.zb(1),e.Ac(t)}}function p(t,i){1&t&&e.Lb(0,"mat-spinner")}const d=function(t){return["/companies",t]};function f(t,i){if(1&t&&(e.Qb(0,"a",10),e.Qb(1,"mat-card"),e.Qb(2,"mat-card-header"),e.Lb(3,"img",11),e.Qb(4,"mat-card-title"),e.zc(5),e.Pb(),e.Qb(6,"mat-card-subtitle"),e.zc(7),e.Pb(),e.Pb(),e.Pb(),e.Pb()),2&t){const t=i.$implicit;e.ic("routerLink",e.lc(5,d,t.slug)),e.zb(3),e.jc("alt",t.name),e.ic("src",t.logoUrl,e.qc),e.zb(2),e.Ac(t.name),e.zb(2),e.Bc("",t.city," ")}}let g=(()=>{class t{constructor(t){this.companiesService=t,this.cities=["Warszawa","Krak\xf3w","Wroc\u0142aw","Gda\u0144sk","Katowice","Poznan","\u0141\xf3d\u017a"],this.selectedCity="",this.isLoading=!1}ngOnInit(){this.fetchAllCompanies()}onSelect(t){this.selectedCity=t,this.isLoading=!0,this.companiesService.getCompaniesByCity(t).subscribe(t=>{this.companies=t,this.isLoading=!1})}onResetCities(){this.fetchAllCompanies(),this.selectedCity=""}fetchAllCompanies(){this.isLoading=!0,this.companiesService.getAllComapnies().subscribe(t=>{this.companies=t,this.isLoading=!1})}}return t.\u0275fac=function(i){return new(i||t)(e.Kb(o.a))},t.\u0275cmp=e.Eb({type:t,selectors:[["app-companies-list"]],decls:11,vars:3,consts:[[1,"companies-list"],[1,"container"],[1,"cities"],[3,"selected","click",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"reset-button",3,"click"],[1,"spinner-wrapper"],[4,"ngIf"],[1,"list"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"selected","click"],[3,"routerLink"],["mat-card-avatar","",3,"src","alt"]],template:function(t,i){1&t&&(e.Qb(0,"section",0),e.Qb(1,"div",1),e.Qb(2,"div",2),e.Qb(3,"mat-chip-list"),e.xc(4,l,2,2,"mat-chip",3),e.Pb(),e.Qb(5,"button",4),e.Xb("click",(function(){return i.onResetCities()})),e.zc(6," Reset "),e.Pb(),e.Pb(),e.Qb(7,"div",5),e.xc(8,p,1,0,"mat-spinner",6),e.Pb(),e.Qb(9,"div",7),e.xc(10,f,8,7,"a",8),e.Pb(),e.Pb(),e.Pb()),2&t&&(e.zb(4),e.ic("ngForOf",i.cities),e.zb(4),e.ic("ngIf",i.isLoading),e.zb(2),e.ic("ngForOf",i.companies))},directives:[a.b,s.j,r.a,s.k,a.a,b.b,c.d,m.a,m.e,m.c,m.h,m.g],styles:[".companies-list[_ngcontent-%COMP%]{padding:16px 0}.cities[_ngcontent-%COMP%]{display:flex;align-items:center}.reset-button[_ngcontent-%COMP%]{margin-left:16px}mat-chip[_ngcontent-%COMP%]{cursor:pointer}.list[_ngcontent-%COMP%]{padding:10px;display:grid;grid-template-columns:repeat(4,1fr);justify-content:center;grid-gap:1rem}mat-card[_ngcontent-%COMP%]{cursor:pointer;width:100%}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:50px}@media (max-width:700px){.list[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}.cities[_ngcontent-%COMP%]{flex-direction:column}.reset-button[_ngcontent-%COMP%]{margin-left:0;margin-top:16px}}@media (min-width:701px) and (max-width:1050px){.list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.cities[_ngcontent-%COMP%]{flex-direction:column}.reset-button[_ngcontent-%COMP%]{margin-left:0;margin-top:16px}}@media (min-width:1051px) and (max-width:1400px){.list[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}"]}),t})();var P=n("Oat2"),u=n("MutI"),h=n("NFeN");function _(t,i){if(1&t&&(e.Qb(0,"mat-chip",23),e.zc(1),e.Pb()),2&t){const t=i.$implicit;e.zb(1),e.Ac(t)}}function y(t,i){if(1&t&&(e.Qb(0,"div",24),e.Qb(1,"a",25),e.Lb(2,"i",26),e.Pb(),e.Pb()),2&t){const t=e.bc(2);e.zb(1),e.jc("href",t.company.website,e.qc)}}function z(t,i){if(1&t&&(e.Qb(0,"div",27),e.Qb(1,"a",25),e.Lb(2,"i",28),e.Pb(),e.Pb()),2&t){const t=e.bc(2);e.zb(1),e.jc("href",t.company.facebookLink,e.qc)}}function C(t,i){if(1&t&&(e.Qb(0,"div",29),e.Qb(1,"a",25),e.Lb(2,"i",30),e.Pb(),e.Pb()),2&t){const t=e.bc(2);e.zb(1),e.jc("href",t.company.linkedinLink,e.qc)}}function Q(t,i){if(1&t&&(e.Qb(0,"div",31),e.Qb(1,"a",25),e.Lb(2,"i",32),e.Pb(),e.Pb()),2&t){const t=e.bc(2);e.zb(1),e.jc("href",t.company.facebookLink,e.qc)}}function x(t,i){if(1&t&&(e.Qb(0,"mat-card",8),e.Qb(1,"mat-card-header"),e.Qb(2,"mat-card-title",9),e.Lb(3,"img",10),e.Qb(4,"div"),e.Qb(5,"h1"),e.zc(6),e.Pb(),e.Qb(7,"span",11),e.Qb(8,"mat-icon"),e.zc(9,"home"),e.Pb(),e.Qb(10,"p"),e.zc(11),e.Pb(),e.Pb(),e.Qb(12,"span",12),e.Qb(13,"mat-icon"),e.zc(14,"face"),e.Pb(),e.Qb(15,"p"),e.zc(16),e.Pb(),e.Pb(),e.Pb(),e.Pb(),e.Pb(),e.Qb(17,"mat-card-content"),e.Qb(18,"div",13),e.Qb(19,"h2",14),e.zc(20,"Description"),e.Pb(),e.Qb(21,"p",15),e.zc(22),e.Pb(),e.Pb(),e.Qb(23,"div",16),e.Qb(24,"h2",14),e.zc(25,"Technologies"),e.Pb(),e.Qb(26,"mat-chip-list"),e.xc(27,_,2,1,"mat-chip",17),e.Pb(),e.Pb(),e.Qb(28,"h2",14),e.zc(29,"Social Media & Website"),e.Pb(),e.Qb(30,"div",18),e.xc(31,y,3,1,"div",19),e.xc(32,z,3,1,"div",20),e.xc(33,C,3,1,"div",21),e.xc(34,Q,3,1,"div",22),e.Pb(),e.Pb(),e.Pb()),2&t){const t=e.bc();e.zb(3),e.ic("src",t.company.logoUrl,e.qc),e.zb(3),e.Ac(t.company.name),e.zb(5),e.Ac(t.company.city),e.zb(5),e.Ac(t.company.companySize),e.zb(6),e.Bc(" ",t.company.description," "),e.zb(5),e.ic("ngForOf",t.company.technologies),e.zb(4),e.ic("ngIf",t.company.website),e.zb(1),e.ic("ngIf",t.company.facebookLink),e.zb(1),e.ic("ngIf",t.company.linkedinLink),e.zb(1),e.ic("ngIf",t.company.instagramLink)}}function O(t,i){1&t&&e.Lb(0,"mat-spinner")}const M=function(t){return["/offers",t]};function k(t,i){if(1&t&&(e.Qb(0,"a",33),e.zc(1),e.Pb()),2&t){const t=i.$implicit;e.ic("routerLink",e.lc(2,M,t.slug)),e.zb(1),e.Ac(t.name)}}const v=[{path:"",component:g},{path:":slug",component:(()=>{class t{constructor(t,i,n){this.companiesService=t,this.route=i,this.offfersService=n,this.isLoading=!0}ngOnInit(){this.route.params.subscribe(t=>{this.companiesService.getCompanyBySlug(t.slug).subscribe(t=>{this.company=t,this.offfersService.getOfferByCompany(this.company._id).subscribe(t=>{this.offers=t,this.isLoading=!1})})})}}return t.\u0275fac=function(i){return new(i||t)(e.Kb(o.a),e.Kb(c.a),e.Kb(P.a))},t.\u0275cmp=e.Eb({type:t,selectors:[["app-company-item"]],decls:12,vars:4,consts:[[1,"company-item"],[1,"container"],["class","company-card",4,"ngIf"],[1,"spinner-wrapper"],[4,"ngIf"],[1,"company-offers"],[1,"offers-card"],["mat-list-item","",3,"routerLink",4,"ngFor","ngForOf"],[1,"company-card"],[1,"card-title"],[1,"company-logo",3,"src"],[1,"location","flexAlignCenter"],[1,"companySize","flexAlignCenter"],[1,"description","mb-10"],[1,"mat-h2"],[1,"mat-body"],[1,"technologies","mb-10"],["color","primary","selected","",4,"ngFor","ngForOf"],[1,"social"],["class","social__item social__item-website",4,"ngIf"],["class","social__item social__item--facebook",4,"ngIf"],["class","social__item social__item--linkedin",4,"ngIf"],["class","social__item social__item--instagram",4,"ngIf"],["color","primary","selected",""],[1,"social__item","social__item-website"],[3,"href"],[1,"fas","fa-external-link-alt"],[1,"social__item","social__item--facebook"],[1,"fab","fa-facebook"],[1,"social__item","social__item--linkedin"],[1,"fab","fa-linkedin"],[1,"social__item","social__item--instagram"],[1,"fab","fa-instagram-square"],["mat-list-item","",3,"routerLink"]],template:function(t,i){1&t&&(e.Qb(0,"section",0),e.Qb(1,"div",1),e.xc(2,x,35,10,"mat-card",2),e.Qb(3,"div",3),e.xc(4,O,1,0,"mat-spinner",4),e.Pb(),e.Qb(5,"div",5),e.Qb(6,"mat-card",6),e.Qb(7,"mat-card-title"),e.zc(8),e.Pb(),e.Qb(9,"mat-card-content"),e.Qb(10,"mat-list"),e.xc(11,k,2,4,"a",7),e.Pb(),e.Pb(),e.Pb(),e.Pb(),e.Pb(),e.Pb()),2&t&&(e.zb(2),e.ic("ngIf",!i.isLoading),e.zb(2),e.ic("ngIf",i.isLoading),e.zb(4),e.Bc("Offers from ",i.company.name,""),e.zb(3),e.ic("ngForOf",i.offers))},directives:[s.k,m.a,m.h,m.d,u.a,s.j,m.e,h.a,a.b,a.a,b.b,u.b,c.d],styles:[".company-card[_ngcontent-%COMP%]{margin:20px 20px 0}.card-title[_ngcontent-%COMP%]{display:flex;align-items:center}.card-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:25px}.company-logo[_ngcontent-%COMP%]{height:75px;width:auto;padding:5px;border:1px solid #ddd;margin-right:10px}.companySize[_ngcontent-%COMP%], .location[_ngcontent-%COMP%]{color:#4d4d4d;font-size:16px}.companySize[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}.social[_ngcontent-%COMP%]{display:flex}.social__item[_ngcontent-%COMP%]{margin-right:10px}.social__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:5px;border:1px solid #ddd;font-size:30px;color:#333;transition:all .3s ease}.social__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{background-color:#333;color:#fff}.offers-card[_ngcontent-%COMP%]{margin:0 20px 10px}@media (max-width:576px){.card-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px}}"]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=e.Ib({type:t}),t.\u0275inj=e.Hb({factory:function(i){return new(i||t)},imports:[[c.e.forChild(v)],c.e]}),t})();var w=n("PCNd");let I=(()=>{class t{}return t.\u0275mod=e.Ib({type:t}),t.\u0275inj=e.Hb({factory:function(i){return new(i||t)},imports:[[c.e,L,w.a]]}),t})()}}]);