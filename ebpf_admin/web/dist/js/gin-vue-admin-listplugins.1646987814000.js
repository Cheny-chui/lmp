/*! 
 Build based on gin-vue-admin 
 Time : 1646987814000 */
var e=(e,t,l)=>new Promise(((a,o)=>{var i=e=>{try{s(l.next(e))}catch(t){o(t)}},n=e=>{try{s(l.throw(e))}catch(t){o(t)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,n);s((l=l.apply(e,t)).next())}));import{s as t,_ as l}from"../gva/gin-vue-admin-index.1646987814000.js";import a from"./gin-vue-admin-displayPluginDoc.1646987814000.js";import{k as o,o as i,i as n,j as s,r as d,s as u,u as p,I as r,B as c,d as g}from"./gin-vue-admin-vendor.1646987814000.js";const v={class:"code-box"};var f=l({name:"CodeBox",props:{codeContent:{type:String,default:""},codeType:{type:String,default:"text"}}},[["render",function(e,t,l,a,d,u){const p=o("highlightjs");return i(),n("div",v,[s(p,{language:l.codeType,code:l.codeContent},null,8,["language","code"])])}],["__scopeId","data-v-6a846831"]]);const m={class:"gva-table-box"},b=c("查看"),h=u("p",null,"确定要操作吗？",-1),y={style:{"text-align":"right","margin-top":"8px"}},w=c("取消"),x=c("确定"),C=c("加载"),_=c("卸载"),z={class:"gva-pagination"},k={name:"listPlugins"},I=Object.assign(k,{setup(l){d({pluginName:"",pluginPath:"",pluginType:0,intro:"empty",state:0});const c=d(1),v=d(0),k=d(10),I=d([]),j=e=>{k.value=e,T()},D=e=>{c.value=e,T()},T=()=>e(this,null,(function*(){const e=yield(l={page:c.value,pageSize:k.value},t({url:"/ebpf/ebpfList",method:"get",params:l}));var l;0===e.code&&(e.data.list.forEach((function(e){if(0===e.pluginType)e.typeText="BCC"})),I.value=e.data.list,v.value=e.data.total,c.value=e.data.page,k.value=e.data.pageSize,console.log("gettable"),console.dir(e))}));T();const P=d(!1),S=d(""),U=d("docs/index.html"),B=l=>e(this,null,(function*(){l.visible=!1;const e=yield(a={ID:l.ID},t({url:"/ebpf/ebpfContent",method:"post",data:a}));var a;0===e.code&&(S.value=e.data.ebpfPlugins.content,P.value=!0)})),L=()=>{P.value=!1};d(!1),d("");const V=l=>e(this,null,(function*(){l.visible=!1;let e={};var a;0==l.state?(e=yield(a={ID:l.ID},t({url:"/ebpf/loadebpf",method:"post",data:a})),console.log("load")):(e=yield(e=>t({url:"/ebpf/unloadebpf",method:"post",data:e}))({ID:l.ID}),console.log("unload")),0===e.code&&(g({type:"success",message:"加载成功"}),T())}));return(e,t)=>{const l=o("el-table-column"),d=o("el-button"),g=o("el-popover"),T=o("el-table"),N=o("el-pagination"),R=o("el-col"),E=o("el-row"),O=o("el-dialog");return i(),n("div",null,[u("div",m,[s(T,{data:I.value,style:{width:"100%"},"tooltip-effect":"dark"},{default:p((()=>[s(l,{type:"selection",width:"55"}),s(l,{align:"left",label:"插件名称",prop:"pluginName",width:"160"}),s(l,{align:"left",label:"插件说明",prop:"intro",width:"300"}),s(l,{align:"left",label:"插件类型",prop:"typeText",width:"100"}),s(l,{align:"left",label:"插件源码",width:"120"},{default:p((e=>[s(d,{type:"text",size:"mini",onClick:t=>B(e.row)},{default:p((()=>[b])),_:2},1032,["onClick"])])),_:1}),s(l,{align:"left",label:"操作","min-width":"160"},{default:p((e=>[s(g,{visible:e.row.visible,"onUpdate:visible":t=>e.row.visible=t,placement:"top",width:"200"},{reference:p((()=>[0==e.row.state?(i(),r(d,{key:0,type:"text",size:"mini"},{default:p((()=>[C])),_:1})):(i(),r(d,{key:1,type:"text",size:"mini"},{default:p((()=>[_])),_:1}))])),default:p((()=>[h,u("div",y,[s(d,{size:"mini",type:"text",onClick:t=>e.row.visible=!1},{default:p((()=>[w])),_:2},1032,["onClick"]),s(d,{size:"mini",type:"primary",onClick:t=>V(e.row)},{default:p((()=>[x])),_:2},1032,["onClick"])])])),_:2},1032,["visible","onUpdate:visible"])])),_:1})])),_:1},8,["data"]),u("div",z,[s(N,{"current-page":c.value,"page-size":k.value,"page-sizes":[10,30,50,100],total:v.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:D,onSizeChange:j},null,8,["current-page","page-size","total"])])]),s(O,{modelValue:P.value,"onUpdate:modelValue":t[0]||(t[0]=e=>P.value=e),"before-close":L,width:"95%",height:"60%"},{default:p((()=>[s(E,null,{default:p((()=>[s(R,{span:12},{default:p((()=>[s(f,{codeType:"python",codeContent:S.value},null,8,["codeContent"])])),_:1}),s(R,{span:12},{default:p((()=>[s(a,{docURL:U.value},null,8,["docURL"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}});export{I as default};