"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[5536],{90114:(H,u,e)=>{e.d(u,{A:()=>t,T:()=>a});const t="api-token",a="transfer-token"},8114:(H,u,e)=>{e.d(u,{T:()=>B});var t=e(74081),a=e(93415),U=e(4987),I=e(86967),A=e(93153),m=e(50086),P=e(32370),j=e(10701),i=e(87006),s=e(70627),h=e(61020),R=e(51447),W=e(27279),p=e(78665),k=e(98264),J=e(26784),z=e(72450);const S=({tokenName:n,onClickDelete:d,tokenType:D})=>{const{formatMessage:T}=(0,h.Z)(),{trackUsage:M}=(0,i.rS)(),[_,l]=(0,W.useState)(!1),g=()=>{l(!1),M("willDeleteToken",{tokenType:D}),d()};return(0,t.jsxs)(a.x,{paddingLeft:1,onClick:f=>f.stopPropagation(),children:[(0,t.jsx)(U.h,{onClick:()=>{l(!0)},label:T({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",noBorder:!0,icon:(0,t.jsx)(p.Z,{})}),(0,t.jsx)(i.QH,{onToggleDialog:()=>l(!1),onConfirm:g,isOpen:_})]})};S.propTypes={tokenName:s.string.isRequired,onClickDelete:s.func.isRequired,tokenType:s.string.isRequired};const G={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},X=(0,z.ZP)(i.rU)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,C=({tokenName:n,tokenId:d,buttonType:D,children:T})=>{const{formatMessage:M}=(0,h.Z)(),{location:{pathname:_}}=(0,R.k6)();return(0,t.jsx)(X,{to:`${_}/${d}`,title:M(G[D],{target:n}),children:T})};C.propTypes={tokenName:s.string.isRequired,tokenId:s.oneOfType([s.string,s.number]).isRequired,buttonType:s.string,children:s.node.isRequired},C.defaultProps={buttonType:"edit"};const N=({tokenName:n,tokenId:d})=>(0,t.jsx)(C,{tokenName:n,tokenId:d,buttonType:"read",children:(0,t.jsx)(k.Z,{})});N.propTypes={tokenName:s.string.isRequired,tokenId:s.oneOfType([s.string,s.number]).isRequired};const Z=({tokenName:n,tokenId:d})=>(0,t.jsx)(C,{tokenName:n,tokenId:d,children:(0,t.jsx)(J.Z,{})});Z.propTypes={tokenName:s.string.isRequired,tokenId:s.oneOfType([s.string,s.number]).isRequired};const B=({permissions:n,headers:d,contentType:D,isLoading:T,tokens:M,onConfirmDelete:_,tokenType:l})=>{const{canDelete:g,canUpdate:f,canRead:v}=n;return(0,t.jsx)(i.tM,{headers:d,contentType:D,rows:M,withBulkActions:g||f||v,isLoading:T,onConfirmDelete:_,children:(0,t.jsx)(x,{tokenType:l,permissions:n,onConfirmDelete:_})})};B.propTypes={tokens:s.array,permissions:s.shape({canRead:s.bool,canDelete:s.bool,canUpdate:s.bool}).isRequired,headers:s.arrayOf(s.shape({cellFormatter:s.func,key:s.string.isRequired,metadatas:s.shape({label:s.string.isRequired,sortable:s.bool}).isRequired,name:s.string.isRequired})),contentType:s.string.isRequired,isLoading:s.bool,onConfirmDelete:s.func,tokenType:s.string.isRequired},B.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};const x=({tokenType:n,permissions:d,rows:D,withBulkActions:T,onConfirmDelete:M})=>{const{canDelete:_,canUpdate:l,canRead:g}=d,[{query:f}]=(0,i.Kx)(),{formatMessage:v}=(0,h.Z)(),[,c]=f?f.sort.split(":"):"ASC",{push:O,location:{pathname:F}}=(0,R.k6)(),{trackUsage:L}=(0,i.rS)(),V=D.sort((o,E)=>{const y=o.name.localeCompare(E.name);return c==="DESC"?-y:y});return(0,t.jsx)(I.p,{children:V.map(o=>(0,t.jsxs)(A.Tr,{...(0,i.X7)({fn(){L("willEditTokenFromList",{tokenType:n}),O(`${F}/${o.id}`)},condition:l}),children:[(0,t.jsx)(m.Td,{maxWidth:(0,i.Q1)(250),children:(0,t.jsx)(P.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:o.name})}),(0,t.jsx)(m.Td,{maxWidth:(0,i.Q1)(250),children:(0,t.jsx)(P.Z,{textColor:"neutral800",ellipsis:!0,children:o.description})}),(0,t.jsx)(m.Td,{children:(0,t.jsx)(P.Z,{textColor:"neutral800",children:(0,t.jsx)(i.ij,{timestamp:new Date(o.createdAt)})})}),(0,t.jsx)(m.Td,{children:o.lastUsedAt&&(0,t.jsx)(P.Z,{textColor:"neutral800",children:(0,t.jsx)(i.ij,{timestamp:new Date(o.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:v({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),T&&(0,t.jsx)(m.Td,{children:(0,t.jsxs)(j.k,{justifyContent:"end",children:[l&&(0,t.jsx)(Z,{tokenName:o.name,tokenId:o.id}),!l&&g&&(0,t.jsx)(N,{tokenName:o.name,tokenId:o.id}),_&&(0,t.jsx)(S,{tokenName:o.name,onClickDelete:()=>M(o.id),tokenType:n})]})})]},o.id))})};x.defaultProps={rows:[],withBulkActions:!1},x.propTypes={rows:s.array,permissions:s.shape({canRead:s.bool,canDelete:s.bool,canUpdate:s.bool}).isRequired,onConfirmDelete:s.func.isRequired,tokenType:s.string.isRequired,withBulkActions:s.bool}},55536:(H,u,e)=>{e.r(u),e.d(u,{default:()=>v});var t=e(74081),a=e(87006),U=e(59461),I=e(44328),A=e(27279),m=e(73354),P=e(27875),j=e(74758),i=e(36938),s=e(29206),h=e(61020),R=e(40464),W=e(51447),p=e(90114),k=e(8114),J=e(64797),z=e(85811),S=e(47599),G=e(15816),X=e(97442),C=e(13576),N=e(87830),Z=e(47184),B=e(364),x=e(71563),n=e(49204),d=e(47853),D=e(75719),T=e(74919),M=e(98934),_=e(43433),l=e(8175);const g=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],f=()=>{(0,a.go)();const{formatMessage:c}=(0,h.Z)(),O=(0,a.lm)(),F=(0,U.v9)(I.s),{allowedActions:{canCreate:L,canDelete:V,canUpdate:o,canRead:E}}=(0,a.ss)(F.settings["transfer-tokens"]),{push:y}=(0,W.k6)(),{trackUsage:$}=(0,a.rS)(),{startSection:q}=(0,a.c1)(),b=(0,A.useRef)(q),{get:ee,del:te}=(0,a.kY)();(0,A.useEffect)(()=>{b.current&&b.current("transferTokens")},[]),(0,A.useEffect)(()=>{y({search:s.stringify({sort:"name:ASC"},{encode:!1})})},[y]);const se=g.map(r=>({...r,metadatas:{...r.metadatas,label:c(r.metadatas.label)}})),{data:K,status:Q,isFetching:ne,refetch:ae}=(0,R.useQuery)(["transfer-tokens"],async()=>{$("willAccessTokenList",{tokenType:p.T});const{data:{data:r}}=await ee("/admin/transfer/tokens");return $("didAccessTokenList",{number:r.length,tokenType:p.T}),r},{enabled:E,onError(r){r?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?O({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),w=E&&(Q!=="success"&&Q!=="error"||Q==="success"&&ne),oe=(0,R.useMutation)(async r=>{await te(`/admin/transfer/tokens/${r}`)},{async onSuccess(){await ae(["transfer-tokens"])},onError(r){r?.response?.data?.data?O({type:"warning",message:r.response.data.data}):r?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?O({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Y=K&&K?.length>0,re=E&&Y,ie=E&&!Y&&!L,de=E&&!Y&&L;return(0,t.jsxs)(m.o,{"aria-busy":w,children:[(0,t.jsx)(a.SL,{name:"Transfer Tokens"}),(0,t.jsx)(P.T,{title:c({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:c({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:L?(0,t.jsx)(a.Qj,{"data-testid":"create-transfer-token-button",startIcon:(0,t.jsx)(i.Z,{}),size:"S",onClick:()=>$("willAddTokenFromList",{tokenType:p.T}),to:"/settings/transfer-tokens/create",children:c({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})}):void 0}),(0,t.jsxs)(j.D,{children:[!E&&(0,t.jsx)(a.ZF,{}),re&&(0,t.jsx)(k.T,{permissions:{canRead:E,canDelete:V,canUpdate:o},headers:se,contentType:"trasfer-tokens",rows:K,isLoading:w,onConfirmDelete:r=>oe.mutateAsync(r),tokens:K,tokenType:p.T}),de&&(0,t.jsx)(a.dJ,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:(0,t.jsx)(a.Qj,{variant:"secondary",startIcon:(0,t.jsx)(i.Z,{}),to:"/settings/transfer-tokens/create",children:c({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"})})}),ie&&(0,t.jsx)(a.dJ,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},v=()=>{const c=(0,U.v9)(I.s);return(0,t.jsx)(a.O4,{permissions:c.settings["transfer-tokens"].main,children:(0,t.jsx)(f,{})})}}}]);
