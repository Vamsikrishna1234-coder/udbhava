import { useState } from "react";

const styles = `

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600;700&family=DM+Sans:wght@300;400;500&display=swap');

.tm-wrap{
font-family:'DM Sans',sans-serif;
position:relative;
overflow:hidden;
background:#0e0d0b;
}



/* -----------------------------
   CARDS
------------------------------*/

.tm-slider{
display:flex;
gap:22px;
transition:transform .7s ease;
}

.tm-card{
min-width:calc(33.333% - 13px);
background:#fff;
border-radius:70px 0px 70px 0px;
padding:48px 28px;
box-sizing:border-box;
transition:.35s;
}

.tm-card:hover{
transform:translateY(-6px);
box-shadow:0 20px 50px rgba(0,0,0,0.35);
}

.tm-avatar{
width:68px;
height:68px;
border-radius:12px;
object-fit:cover;
}

.tm-btn{
width:50px;
height:50px;
border-radius:50%;
border:1px solid rgba(255,255,255,.3);
background:#d85b26;
color:white;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
transition:.25s;
}

.tm-btn:hover{
background:white;
color:#d85b26;
border-color:#d85b26;
transform:scale(1.08);
}

/* dots */

.tm-dot{
height:9px;
width:9px;
border-radius:6px;
background:rgba(255,255,255,.25);
border:none;
cursor:pointer;
transition:.3s;
}

.tm-dot.active{
background:#d85b26;
width:26px;
}

`;

const DATA = [
{ name:"Robert Fox",role:"Web Designer",img:"https://randomuser.me/api/portraits/men/32.jpg"},
{ name:"Floyd Miles",role:"Marketing Manager",img:"https://randomuser.me/api/portraits/men/44.jpg"},
{ name:"Annette Black",role:"UI/UX Designer",img:"https://randomuser.me/api/portraits/women/65.jpg"},
{ name:"Jerome Bell",role:"Product Manager",img:"https://randomuser.me/api/portraits/men/75.jpg"},
{ name:"Esther Howard",role:"Architect",img:"https://randomuser.me/api/portraits/women/44.jpg"},
{ name:"Cameron Williamson",role:"Interior Designer",img:"https://randomuser.me/api/portraits/men/55.jpg"},
{ name:"Dianne Russell",role:"Civil Engineer",img:"https://randomuser.me/api/portraits/women/22.jpg"},
{ name:"Wade Warren",role:"Landscape Designer",img:"https://randomuser.me/api/portraits/men/62.jpg"},
{ name:"Brooklyn Simmons",role:"Urban Planner",img:"https://randomuser.me/api/portraits/women/33.jpg"},
];

const TEXT="Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum viverra eget felis at interdum fusce odio lacus accumsan at sem vitae ullamcorper bibendum ligula.";

export default function Testimonials(){

const [index,setIndex]=useState(0);

const next=()=>{
setIndex(i=>(i+1)%DATA.length);
};

const prev=()=>{
setIndex(i=>(i-1+DATA.length)%DATA.length);
};

return(
<>
<style>{styles}</style>

<section className="tm-wrap px-6 py-24">



<div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:2}}>

{/* header */}

<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"50px",flexWrap:"wrap",gap:"20px"}}>

<div>
<p style={{color:"#d85b26",letterSpacing:"3px",fontSize:"16px",marginBottom:"8px"}}>Testimonials</p>

<h2 style={{color:"#fff",fontSize:"clamp(32px,4vw,46px)",fontWeight:"700",lineHeight:"1.1"}}>
Our Sweet Client<br/>Feedback
</h2>
</div>

<div style={{display:"flex",gap:"12px"}}>
<button className="tm-btn" onClick={prev}>←</button>
<button className="tm-btn" onClick={next}>→</button>
</div>

</div>

{/* slider */}

<div style={{overflow:"hidden"}}>

<div
className="tm-slider"
style={{
transform:`translateX(-${index*34}%)`
}}
>

{[...DATA,...DATA].map((t,i)=>(
<div key={i} className="tm-card">

<div style={{display:"flex",gap:"14px",marginBottom:"16px"}}>

<img src={t.img} className="tm-avatar"/>

<div>
<p style={{fontWeight:"600",fontSize:"15px"}}>{t.name}</p>
<p style={{color:"#999",fontSize:"12px"}}>{t.role}</p>
</div>

</div>

<div style={{height:"1px",background:"#eee",marginBottom:"14px"}}/>

<p style={{color:"#555",fontSize:"14px",lineHeight:"1.8"}}>
{TEXT}
</p>

</div>
))}

</div>

</div>

{/* dots */}

<div style={{display:"flex",justifyContent:"center",gap:"10px",marginTop:"35px"}}>

{[0,1,2].map(i=>(
<button
key={i}
className={`tm-dot ${index%3===i?"active":""}`}
onClick={()=>setIndex(i)}
></button>
))}

</div>

</div>

</section>
</>
);
}