import{_ as b}from"./Nav.fedcd70b.js";import{q as f,r as m,v as h,o as d,b as _,e as a,t as g,F as y,a as $,f as i}from"./entry.64158aec.js";const r={firestore:{add:e=>`/api/add?col=${e}`,delete:(e,t)=>`/api/delete?col=${e}&id=${t}`,query:e=>`/api/query?col=${e}`}},u=async e=>{try{const t=f(),{result:o}=await $fetch(r.firestore.query(e));t.value[e]=o}catch(t){return console.log(t.message),[]}},v=async(e,t)=>{try{const{result:o}=await $fetch(r.firestore.add(e),{method:"POST",body:t});return o}catch(o){console.log(o.message)}},w=async(e,t)=>{try{const{result:o}=await $fetch(r.firestore.delete(e,t));return o}catch(o){console.log(o.message)}},M=a("h1",null,"Members",-1),x={__name:"Member-component",setup(e){const t=m({Name:"Manish",Email:"Shrestha",game:"nothing game"});console.log(t.value.Name);const o=async()=>{await v("members",t.value),await u("members")},c=async()=>{await w("members","XOa2vfh7bx7ZVzc828bI"),await u("members")},n=m();return h(async()=>{const{result:s}=await $fetch("/api/query?col=members");console.log(s),n.value=s}),(s,l)=>(d(),_(y,null,[M,a("pre",null,g(n.value),1),a("button",{onClick:o},"Add To Firebase"),a("button",{onClick:c},"Delete")],64))}},F={name:"MembersPage"},q={class:"members"};function D(e,t,o,c,n,s){const l=b,p=x;return d(),_("div",null,[i(l),a("main",null,[a("div",q,[i(p)])])])}const k=$(F,[["render",D]]);export{k as default};
