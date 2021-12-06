(this["webpackJsonpcapture-ui"]=this["webpackJsonpcapture-ui"]||[]).push([[0],{142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(68),i=a.n(n),l=(a(142),a(26)),r=a(27),o=a(40),d=a(39),b=(a(143),a(144),a(91)),j=a(71),x=a(74),u=a(75),h=a(113),p=a(76),O=a(222),g=a(78),m=a(79),v=a(80),f=a(81),N=a(114),w=a(82),C=a(23),I=a(218),_=a(219),P=a(220),y=a(4),D=function(){return Object(y.jsx)(j.a,{render:function(e){var t=e.isSideNavExpanded,a=e.onClickSideNavExpand;return Object(y.jsxs)(x.a,{"aria-label":"Carbon Tutorial",children:[Object(y.jsx)(u.a,{}),Object(y.jsx)(h.a,{"aria-label":"Open menu",onClick:a,isActive:t}),Object(y.jsx)(p.a,{element:C.b,to:"/",prefix:"IBM",children:"DataCap"}),Object(y.jsx)(O.a,{"aria-label":"DataCap",children:Object(y.jsx)(g.a,{element:C.b,to:"/DataCap",children:"Passports"})}),Object(y.jsx)(O.a,{"aria-label":"Invoices",children:Object(y.jsx)(g.a,{element:C.b,to:"/Invoices",children:"Invoices"})}),Object(y.jsx)(m.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(y.jsxs)(v.a,{children:[Object(y.jsx)(f.a,{children:Object(y.jsx)(g.a,{element:C.b,to:"/DataCap",children:"Passports"})}),Object(y.jsx)(f.a,{children:Object(y.jsx)(g.a,{element:C.b,to:"/Invoices",children:"Invoices"})})]})}),Object(y.jsxs)(N.a,{children:[Object(y.jsx)(w.a,{"aria-label":"Notifications",children:Object(y.jsx)(I.a,{})}),Object(y.jsx)(w.a,{"aria-label":"User Avatar",children:Object(y.jsx)(_.a,{})}),Object(y.jsx)(w.a,{"aria-label":"App Switcher",children:Object(y.jsx)(P.a,{})})]})]})}})},F=a(33),k=a(24),S=a(221),U=a(226),T=a(223),R=a(225),A=a(211),L={selected:0,role:"navigation"},M={role:"presentation",tabIndex:0},B=function(){return Object(y.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page",children:[Object(y.jsx)("div",{className:"bx--row landing-page__banner",children:Object(y.jsxs)("div",{className:"bx--col-lg-16",children:[Object(y.jsx)(S.a,{"aria-label":"Page navigation",children:Object(y.jsx)(U.a,{children:Object(y.jsx)("a",{href:"/",children:"Getting started"})})}),Object(y.jsx)("h1",{className:"landing-page__heading",children:"Capturing Document Information"})]})}),Object(y.jsx)("div",{className:"bx--row landing-page__r2",children:Object(y.jsx)("div",{className:"bx--col bx--no-gutter",children:Object(y.jsxs)(T.a,Object(k.a)(Object(k.a)({},L),{},{"aria-label":"Tab navigation",children:[Object(y.jsx)(R.a,Object(k.a)(Object(k.a)({},M),{},{label:"About",children:Object(y.jsx)("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width",children:Object(y.jsx)("div",{className:"bx--row landing-page__tab-content",children:Object(y.jsxs)("div",{className:"bx--col-md-4 bx--col-lg-7",children:[Object(y.jsx)("h2",{className:"landing-page__subheading",children:"What is Carbon?"}),Object(y.jsx)("p",{className:"landing-page__p",children:"Carbon is IBM\u2019s open-source design system for digital products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors."}),Object(y.jsx)(A.a,{children:"Learn more"})]})})})})),Object(y.jsx)(R.a,Object(k.a)(Object(k.a)({},M),{},{label:"Design",children:Object(y.jsx)("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width",children:Object(y.jsx)("div",{className:"bx--row landing-page__tab-content",children:Object(y.jsx)("div",{className:"bx--col-lg-16",children:"Rapidly build beautiful and accessible experiences. The Carbon kit contains all resources you need to get started."})})})})),Object(y.jsx)(R.a,Object(k.a)(Object(k.a)({},M),{},{label:"Develop",children:Object(y.jsx)("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width",children:Object(y.jsx)("div",{className:"bx--row landing-page__tab-content",children:Object(y.jsx)("div",{className:"bx--col-lg-16",children:"Carbon provides styles and components in Vanilla, React, Angular, and Vue for anyone building on the web."})})})}))]}))})}),Object(y.jsxs)("div",{className:"bx--row landing-page__r3",children:[Object(y.jsx)("div",{className:"bx--col-md-4 bx--col-lg-4",children:Object(y.jsx)("h3",{className:"landing-page__label",children:"The Principles"})}),Object(y.jsx)("div",{className:"bx--col-md-4 bx--col-lg-4",children:"Carbon is Open"}),Object(y.jsx)("div",{className:"bx--col-md-4 bx--col-lg-4",children:"Carbon is Modular"}),Object(y.jsx)("div",{className:"bx--col-md-4 bx--col-lg-4",children:"Carbon is Consistent"})]})]})},V=a(46),E=a(117),G=a.n(E).a.create({baseURL:"/api/documentunderstanding/",headers:{"Content-type":"application/json"}}),J=new(function(){function e(){Object(l.a)(this,e)}return Object(r.a)(e,[{key:"upload",value:function(e,t,a){var s=new FormData;return s.append("uploadFile",e),G.post("/uploadAndPrepare/"+t,s,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:a})}},{key:"executeRules",value:function(e,t,a,s,c){var n=new FormData,i="/executeRules/"+e+"/"+t+"/"+a+"/"+s+"/xml";return console.log(i),G.post(i,n,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:c})}},{key:"getFiles",value:function(){return G.get("/files")}}]),e}()),W=a(118),K=a.n(W),Y=a(228),q=a(227),z=a(224),H=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(y.jsxs)(z.e,{ariaLabel:"Structured list",children:[Object(y.jsx)(z.c,{children:Object(y.jsxs)(z.d,{head:!0,tabIndex:0,children:[Object(y.jsx)(z.b,{head:!0,children:"Name"}),Object(y.jsx)(z.b,{head:!0,children:"Value"})]})}),Object(y.jsx)(z.a,{children:this.props.results.map((function(e){return Object(y.jsxs)(z.d,{children:[Object(y.jsxs)(z.b,{children:[Object(y.jsx)("h5",{children:e.fieldName})," "]}),Object(y.jsxs)(z.b,{children:[" ",e.fieldValue]})]},e.fieldName)}))})]})}}]),a}(s.Component),Q=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).selectFile=s.selectFile.bind(Object(V.a)(s)),s.upload=s.upload.bind(Object(V.a)(s)),s.state={selectedFiles:void 0,currentFile:void 0,progress:0,message:"Please Upload Your Document",results:[],docUrls:[{fileData:""}],fileInfos:[],docUrl:void 0,docStatus:"Begin"},s}return Object(r.a)(a,[{key:"selectFile",value:function(e){var t=this,a=this.props.page;this.setState({selectedFiles:e.target.files});var s=e.target.files[0];J.upload(s,a,(function(e){t.setState({progress:Math.round(100*e.loaded/e.total)})})).then((function(e){console.log(e.data.transactionalId);var a=URL.createObjectURL(s);console.log(a),t.setState({transactionalId:e.data.transactionalId,message:"Uploaded Document",docUrl:"/api/documentunderstanding/getdoc/"+e.data.transactionalId+"/pdf"})}))}},{key:"upload",value:function(){var e=this,t=(this.state.selectedFiles[0],this.props.application),a=this.props.workflow,s=this.props.rules;console.log("upload"+this.state.transactionalId),this.setState({docStatus:"Processing"}),J.executeRules(this.state.transactionalId,t,a,s,(function(t){e.setState({progress:Math.round(100*t.loaded/t.total)})})).then((function(t){return console.log(t.data),e.setState({results:t.data.values,message:"Document Processed",transactionId:t.data.transactionalId,docStatus:"Done"}),console.log(e.state),"stuff"})),this.setState({selectedFiles:void 0})}},{key:"render",value:function(){var e=this.state,t=e.selectedFiles;e.currentFile,e.progress,e.message,e.fileInfos;return Object(y.jsx)("div",{children:Object(y.jsxs)("div",{class:"bx--grid--full-width",children:[Object(y.jsx)("div",{class:"bx--row",children:Object(y.jsxs)("div",{class:"bx--col-lg-16 bx--col-md-8 bx--col-sm-4",children:[Object(y.jsx)(S.a,{"aria-label":"Page navigation",children:Object(y.jsx)(U.a,{children:Object(y.jsxs)("a",{href:"/",children:[this.props.workflow,":",this.props.page,":",this.props.application,":",this.props.rules]})})}),Object(y.jsx)("h1",{className:"landing-page__heading",children:this.state.message})]})}),Object(y.jsx)("div",{class:"bx--row",children:Object(y.jsx)("div",{class:"bx--col-lg-16 bx--col-md-8 bx--col-sm-4",children:Object(y.jsx)(Y.a,{accept:[".jpg",".pdf"],onAddFiles:this.selectFile,buttonKind:"primary",buttonLabel:"Add files",filenameStatus:"edit",iconDescription:"Clear file",labelText:"Add File to this container",class:"fileuploader-dcap"})})}),Object(y.jsx)("div",{class:"bx--row",children:Object(y.jsx)("div",{class:"bx--col-lg-16 bx--col-md-8 bx--col-sm-4",children:Object(y.jsx)(A.a,{disabled:!t,onClick:this.upload,children:"Process Document"})})}),Object(y.jsxs)("div",{class:"bx--row",children:[Object(y.jsxs)("div",{class:"bx--col-lg-12 bx--col-md-6 bx--col-sm-1",children:["Processing"==this.state.docStatus&&Object(y.jsx)(q.a,{description:"Processing..."}),"Document Processed"==this.state.message&&Object(y.jsx)(H,{results:this.state.results})]}),Object(y.jsx)("div",{class:"bx--col-lg-4 bx--col-md-2 bx--col-sm-1",children:void 0!=this.state.docUrl&&Object(y.jsx)("div",{children:Object(y.jsx)(K.a,{fileType:"pdf",filePath:this.state.docUrl})})})]})]})})}}]),a}(s.Component),X=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(Q,{page:"Passport_Page",application:"dan",workflow:"dan",rules:"Documents,NormalOCR,GenerateText,PassportFields"})})},Z=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(Q,{page:"Invoice_Page",application:"dan",workflow:"dan",rules:"Documents,NormalOCR,GenerateText,InvoiceRules"})})},$=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={message:""},s}return Object(r.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(D,{}),Object(y.jsx)(b.a,{children:Object(y.jsxs)(F.c,{children:[Object(y.jsx)(F.a,{exact:!0,path:"/",component:B}),Object(y.jsx)(F.a,{path:"/DataCap",component:X}),Object(y.jsx)(F.a,{path:"/Invoices",component:Z})]})})]})}}]),a}(s.Component),ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,229)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};a(181),a(197),a(200),a(204),a(207);i.a.render(Object(y.jsxs)(c.a.StrictMode,{children:[Object(y.jsx)(C.a,{children:Object(y.jsx)($,{})}),","]}),document.getElementById("root")),ee()}},[[209,1,2]]]);
//# sourceMappingURL=main.137f9533.chunk.js.map