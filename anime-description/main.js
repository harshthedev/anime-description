
const display=document.getElementById("disp");
const search=document.getElementById("search");
const card=document.getElementById("card");



const getanime=async text=>{
const res=await fetch("./anime.json");
const rs= await res.json();
 /*console.log(rs);*/

  let array=rs;



    let m=rs.filter(r=>{
    const regex=new RegExp(`^${text}`,`gi`);
    return r.studio.match(regex) || r.title.text.match(regex);
    
    
    });
    if(text.length===0){
        m=[];
        card.innerHTML='';
    }
    
    /*console.log(m);*/
    if(m.length>0){
    let ja=m.map(j=>
     `<div class="card card-body bg-success">${j.description}<div>`
     
     

    ).join('')

     card.innerHTML=ja;
    }





array=array.map(item=>{
const studio=item.studio;
const title=item.title.text;
return {studio,title}




})



const show=(array)=>{
const a=array.map(e=>`<div>${e.studio}  - ${e.title}</div>`).join('');


display.innerHTML=a;


}







show(array);





/*search.addEventListener("input",()=>dispval(search.value))*/
}

search.addEventListener('input',()=>getanime(search.value));