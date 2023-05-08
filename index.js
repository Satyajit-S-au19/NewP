// iam learning dom manupilation

const btnEl=document.getElementById('bring')

const btnselects=document.querySelectorAll("button")
btnselects[1].onclick=deleteH;
btnEl.onclick=newOne;

function newOne(){
    const h2=document.createElement('h2')
    h2.innerText="this is innertext"
   document.body.append(h2)
}







function deleteH(){
    const h2=document.querySelector('h2')
    h2.remove();
}


//learning array method in javascript

let arr=[1,23,4,5,6,7]
let result =arr.map((v,i)=>{
    // console.log(v);
    return v;
}
);

console.log(result)

