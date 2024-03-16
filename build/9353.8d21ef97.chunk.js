"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[9353],{29353:(us,K,s)=>{s.r(K),s.d(K,{default:()=>is});var e=s(74081),E=s(87006),i=s(59461),j=s(44328),f=s(27279),$=s(48102),T=s(10701),G=s(77970),A=s(32370),J=s(59082),I=s(71563),X=s(43433),b=s(61020),q=s(40464),ss=s(51447),es=s(73314),ts=s(59491),o=s(54629),os=s(66360),O=s(55535),c=s(78099),l=s(47706),ns=s(88181),Cs=s(64797),Ls=s(85811),ws=s(47599),Ts=s(15816),As=s(97442),Is=s(13576),Rs=s(87830),Ws=s(47184),ys=s(364),Bs=s(49204),Us=s(47853),ps=s(75719),Ks=s(74919),js=s(29206),xs=s(98934),Ss=s(8175),ks=s(52058),Fs=s(86961),Zs=s(10124),Hs=s(92249),Ns=s(51527),Ys=s(3243),zs=s(11745),Vs=s(6078),Qs=s(76368);function as(){const{workflowId:P}=(0,ss.UO)(),ls=(0,i.v9)(j.s),{formatMessage:n}=(0,b.Z)(),g=(0,i.I0)(),{put:rs}=(0,E.kY)(),{formatAPIError:_s}=(0,E.So)(),h=(0,E.lm)(),{isLoading:v,meta:u,workflows:C,refetch:ds}=(0,ns.u)(),{collectionTypes:x,singleTypes:S,isLoading:R}=(0,ts.u)(),Es=(0,i.v9)(o.j),gs=(0,i.v9)(o.a),r=(0,i.v9)(o.b),k=(0,i.v9)(o.k),F=(0,i.v9)(o.c),D=(0,i.v9)(o.s),{allowedActions:{canDelete:fs,canUpdate:W}}=(0,E.ss)(ls.settings["review-workflows"]),[L,w]=f.useState({}),{getFeature:cs,isLoading:Z}=(0,os.u)(),{isLoading:y,roles:H}=(0,es.u)(void 0,{retry:!1}),[N,M]=f.useState(!1),[Ms,Y]=f.useState(null),z=C.find(t=>t.id===parseInt(P,10)),V=C.filter(t=>t.id!==parseInt(P,10)).flatMap(t=>t.contentTypes),{mutateAsync:vs,isLoading:Ds}=(0,q.useMutation)(async({workflow:t})=>{const{data:{data:a}}=await rs(`/admin/review-workflows/workflows/${t.id}`,{data:t});return a},{onSuccess(){h({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),ms=async t=>{Y(null);try{return await vs({workflow:{...t,stages:t.stages.map(d=>{let m=!0;const U=Es.workflow.stages.find(p=>p.id===d?.id);return U&&(m=U.permissions?.length!==d.permission?.length||!U.permissions.every(p=>!!d.permissions.find(hs=>hs.role===p.role))),{...d,permissions:m?d.permissions:void 0}})}})}catch(a){return a.response.data?.error?.name==="ValidationError"&&a.response.data?.error?.details?.errors?.length>0&&Y(a.response.data?.error?.details?.errors.reduce((d,m)=>(X(d,m.path,m.message),d),{})),h({type:"warning",message:_s(a)}),null}},Q=async()=>{await ms(r),await ds(),w({})},Os=async()=>{await Q()},Ps=()=>{w({})},B=(0,I.TA)({enableReinitialize:!0,initialErrors:Ms,initialValues:r,async onSubmit(){const t=r.contentTypes.some(a=>V.includes(a));_?.[l.C]&&u?.workflowCount>parseInt(_[l.C],10)?M("workflow"):_?.[l.a]&&r.stages.length>parseInt(_[l.a],10)?M("stage"):k||t?(k&&w(a=>({...a,hasDeletedServerStages:!0})),t&&w(a=>({...a,hasReassignedContentTypes:!0}))):Q()},validate(t){return(0,o.v)({values:t,formatMessage:n})}});(0,o.u)(l.R,o.i);const _=cs("review-workflows");return f.useEffect(()=>(v||(g((0,o.l)({workflow:z})),g((0,o.d)({workflows:C}))),R||g((0,o.e)({collectionTypes:x,singleTypes:S})),y||g((0,o.f)(H)),g((0,o.g)(v||R||y)),()=>{g((0,o.r)())}),[x,g,R,v,y,H,S,z,C]),f.useEffect(()=>{!v&&!Z&&(_?.[l.C]&&u?.workflowCount>parseInt(_[l.C],10)?M("workflow"):_?.[l.a]&&r.stages.length>parseInt(_[l.a],10)&&M("stage"))},[r.stages.length,Z,v,_,u?.workflowCount,u.workflowsTotal]),f.useEffect(()=>{!D&&F.length===0&&h({blockTransition:!0,type:"warning",message:n({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[n,D,F,h]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O.D,{}),(0,e.jsx)(I.Hy,{value:B,children:(0,e.jsxs)(I.l0,{onSubmit:B.handleSubmit,children:[(0,e.jsx)(O.H,{navigationAction:(0,e.jsx)(O.B,{href:"/settings/review-workflows"}),primaryAction:W&&(0,e.jsx)($.z,{startIcon:(0,e.jsx)(J.Z,{}),type:"submit",size:"M",disabled:!gs,loading:!Object.keys(L).length>0&&Ds,children:n({id:"global.save",defaultMessage:"Save"})}),subtitle:!D&&n({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:r.stages.length}),title:r.name}),(0,e.jsx)(O.R,{children:D?(0,e.jsx)(T.k,{justifyContent:"center",children:(0,e.jsx)(G.a,{children:n({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})})}):(0,e.jsxs)(T.k,{alignItems:"stretch",direction:"column",gap:7,children:[(0,e.jsx)(o.W,{canUpdate:W}),(0,e.jsx)(o.S,{canDelete:fs,canUpdate:W,stages:B.values?.stages})]})})]})}),(0,e.jsx)(E.QH.Root,{isConfirmButtonLoading:D,isOpen:Object.keys(L).length>0,onToggleDialog:Ps,onConfirm:Os,children:(0,e.jsx)(E.QH.Body,{children:(0,e.jsxs)(T.k,{direction:"column",gap:5,children:[L.hasDeletedServerStages&&(0,e.jsx)(A.Z,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})}),L.hasReassignedContentTypes&&(0,e.jsx)(A.Z,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:V.filter(t=>r.contentTypes.includes(t)).length})}),(0,e.jsx)(A.Z,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,e.jsxs)(c.L,{isOpen:N==="workflow",onClose:()=>M(!1),children:[(0,e.jsx)(c.T,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,e.jsx)(c.B,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,e.jsxs)(c.L,{isOpen:N==="stage",onClose:()=>M(!1),children:[(0,e.jsx)(c.T,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,e.jsx)(c.B,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}function is(){const P=(0,i.v9)(j.s);return(0,e.jsx)(E.O4,{permissions:P.settings["review-workflows"].main,children:(0,e.jsx)(as,{})})}}}]);
