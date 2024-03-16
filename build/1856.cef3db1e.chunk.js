"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[1856],{31856:(S,M,s)=>{s.r(M),s.d(M,{default:()=>Y});var t=s(74081),a=s(87006),m=s(59461),P=s(51447),B=s(44328),R=s(27279),_=s(93415),r=s(10701),c=s(32370),L=s(48102),I=s(23298),h=s(74577),l=s(12881),T=s(39708),U=s(73354),f=s(27875),W=s(74758),Z=s(76827),E=s(71563),u=s(61020),K=s(73314),x=s(68902),D=s(70627),F=s(47853),as=s(40464),es=s(64797),ns=s(85811),is=s(47599),os=s(15816),_s=s(97442),ds=s(13576),rs=s(87830),ls=s(47184),Es=s(364),Ms=s(49204),Ps=s(75719),Ds=s(74919),Os=s(29206),ms=s(98934),cs=s(43433),hs=s(8175),gs=s(10131),vs=s(10124),Rs=s(8243),Ls=s(63799),us=s(51943),As=s(39738),Cs=s(3243);const j=({disabled:d,role:e,values:i,errors:o,onChange:A,onBlur:g})=>{const{formatMessage:n}=(0,u.Z)();return(0,t.jsx)(_.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(r.k,{justifyContent:"space-between",children:[(0,t.jsxs)(_.x,{children:[(0,t.jsx)(_.x,{children:(0,t.jsx)(c.Z,{fontWeight:"bold",children:e?e.name:n({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(_.x,{children:(0,t.jsx)(c.Z,{textColor:"neutral500",variant:"pi",children:e?e.description:n({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(L.z,{disabled:!0,variant:"secondary",children:n({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:e.usersCount})})]}),(0,t.jsxs)(I.r,{gap:4,children:[(0,t.jsx)(h.P,{col:6,children:(0,t.jsx)(l.o,{disabled:d,name:"name",error:o.name&&n({id:o.name}),label:n({id:"global.name",defaultMessage:"Name"}),onChange:A,onBlur:g,required:!0,value:i.name||""})}),(0,t.jsx)(h.P,{col:6,children:(0,t.jsx)(T.g,{disabled:d,label:n({id:"global.description",defaultMessage:"Description"}),id:"description",error:o.name&&n({id:o.name}),onChange:A,onBlur:g,children:i.description||""})})]})]})})};j.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},j.propTypes={disabled:D.bool,errors:D.object.isRequired,onBlur:D.func.isRequired,onChange:D.func.isRequired,role:D.object,values:D.object};const N=F.Ry().shape({name:F.Z_().required(a.I0.required)}),H=()=>{const d=(0,a.lm)(),{formatMessage:e}=(0,u.Z)(),{params:{id:i}}=(0,P.$B)("/settings/roles/:id"),{put:o}=(0,a.kY)(),[A,g]=(0,R.useState)(!1),n=(0,R.useRef)(),{lockApp:J,unlockApp:Q}=(0,a.o1)(),{trackUsage:V}=(0,a.rS)(),{formatAPIError:X}=(0,a.So)(),{isLoading:G,data:b}=(0,x.u)(i,{cacheTime:0}),{roles:[O={}],isLoading:p,refetch:w}=(0,K.u)({id:i},{cacheTime:0}),{permissions:k,isLoading:z}=(0,x.a)({id:i},{cacheTime:0}),q=async C=>{try{J(),g(!0);const{permissionsToSend:v,didUpdateConditions:y}=n.current.getPermissions();await o(`/admin/roles/${i}`,C),O.code!=="strapi-super-admin"&&(await o(`/admin/roles/${i}/permissions`,{permissions:v}),y&&V("didUpdateConditions")),n.current.setFormAfterSubmit(),await w(),d({type:"success",message:{id:"notification.success.saved"}})}catch(v){d({type:"warning",message:X(v)})}finally{g(!1),Q()}},$=!p&&O.code==="strapi-super-admin";return(0,t.jsxs)(U.o,{children:[(0,t.jsx)(a.SL,{name:"Roles"}),(0,t.jsx)(E.J9,{enableReinitialize:!0,initialValues:{name:O.name,description:O.description},onSubmit:q,validationSchema:N,validateOnChange:!1,children:({handleSubmit:C,values:v,errors:y,handleChange:ss,handleBlur:ts})=>(0,t.jsxs)("form",{onSubmit:C,children:[(0,t.jsx)(f.T,{primaryAction:(0,t.jsx)(r.k,{gap:2,children:(0,t.jsx)(L.z,{disabled:O.code==="strapi-super-admin",onClick:C,loading:A,size:"L",children:e({id:"global.save",defaultMessage:"Save"})})}),title:e({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:e({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(a.rU,{startIcon:(0,t.jsx)(Z.Z,{}),to:"/settings/roles",children:e({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(W.D,{children:(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(j,{isLoading:p||z,disabled:$,errors:y,values:v,onChange:ss,onBlur:ts,role:O}),!G&&!p&&!z?(0,t.jsx)(_.x,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(x.P,{isFormDisabled:$,permissions:k,ref:n,layout:b})}):(0,t.jsx)(_.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(a.dO,{})})]})})]})})]})},Y=()=>{const d=(0,m.v9)(B.s),{isLoading:e,allowedActions:{canRead:i,canUpdate:o}}=(0,a.ss)({read:d.settings.roles.read,update:d.settings.roles.update});return e?(0,t.jsx)(a.dO,{}):!i&&!o?(0,t.jsx)(P.l_,{to:"/"}):(0,t.jsx)(H,{})}},73314:(S,M,s)=>{s.d(M,{u:()=>B});var t=s(27279),a=s(87006),m=s(61020),P=s(40464);const B=(R={},_={})=>{const{id:r="",...c}=R,{get:L}=(0,a.kY)(),{locale:I}=(0,m.Z)(),h=(0,a.Xe)(I,{sensitivity:"base"}),{data:l,error:T,isError:U,isLoading:f,refetch:W}=(0,P.useQuery)(["roles",r,c],async()=>{const{data:E}=await L(`/admin/roles/${r??""}`,{params:c});return E},_);return{roles:t.useMemo(()=>{let E=[];return l&&(Array.isArray(l.data)?E=l.data:E=[l.data]),[...E].sort((u,K)=>h.compare(u.name,K.name))},[l,h]),error:T,isError:U,isLoading:f,refetch:W}}},76827:(S,M,s)=>{s.d(M,{Z:()=>m});var t=s(74081);const a=P=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...P,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),m=a}}]);
