"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[3474],{63474:(R,a,t)=>{t.r(a),t.d(a,{HomePageEE:()=>f});var n=t(74081),o=t(49728),M=t(7199),D=t(27279),P=t(87006),l=t(364),i=t(44328),L=t(40464),d=t(64797),e=t(85811),s=t(47599),E=t(15816),I=t(97442),O=t(13576),A=t(87830),r=t(47184),v=t(59461),T=t(71563),_=t(49204),m=t(47853),U=t(75719),C=t(74919),c=t(29206),B=t(98934),K=t(43433),W=t(8175),u=t(59491),g=t(69439),h=t(66360);const f=()=>((0,M.u)(),(0,n.jsx)(o.HomePageCE,{}))},7199:(R,a,t)=>{t.d(a,{u:()=>e});var n=t(27279),o=t(87006),M=t(69439),D=t(61020),P=t(51447),l=t(66360);const i="strapi-notification-seat-limit",L="https://cloud.strapi.io/profile/billing",d="https://strapi.io/billing/request-seats",e=()=>{const{formatMessage:s}=(0,D.Z)(),{license:E,isError:I,isLoading:O}=(0,l.u)(),A=(0,o.lm)(),{pathname:r}=(0,P.TH)(),{enforcementUserCount:v,permittedSeats:T,licenseLimitStatus:_,isHostedOnStrapiCloud:m}=E;n.useEffect(()=>{if(I||O)return;const U=!M(T)&&!window.sessionStorage.getItem(`${i}-${r}`)&&(_==="AT_LIMIT"||_==="OVER_LIMIT");let C;_==="OVER_LIMIT"?C="warning":_==="AT_LIMIT"&&(C="softWarning"),U&&A({type:C,message:s({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:_}),title:s({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:_,enforcementUserCount:v,permittedSeats:T}),link:{url:m?L:d,label:s({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:m})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${r}`,"true")}})},[A,E,r,s,O,T,_,v,m,I])}},66360:(R,a,t)=>{t.d(a,{u:()=>D});var n=t(27279),o=t(87006),M=t(40464);function D({enabled:P}={enabled:!0}){const{get:l}=(0,o.kY)(),{data:i,isError:L,isLoading:d}=(0,M.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:E}}=await l("/admin/license-limit-information");return E},{enabled:P}),e=n.useMemo(()=>i??{},[i]),s=n.useCallback(E=>(e?.features??[]).find(O=>O.name===E)?.options??{},[e?.features]);return{license:e,getFeature:s,isError:L,isLoading:d}}}}]);
