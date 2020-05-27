const star=document.querySelector(".decoration").children;
let k;
for(let i=0;i<star.length;i++){
    star[i].addEventListener("mouseover",function(){
        for(let j=0;j<=i;j++){
            star[j].classList.remove("fa-star-o");
            star[j].classList.add("fa-star");
            star[j].classList.add("orange");
            star[j].classList.remove("golden");
        }
    });
    star[i].addEventListener("mouseout",function(){
        for(let j=0;j<=i;j++){
            star[j].classList.remove("fa-star");
            star[j].classList.add("fa-star-o");
            star[j].classList.remove("orange");
            star[j].classList.remove("golden");
        }    
    });
    star[i].addEventListener("click",function(){
        for(let j=0;j<=i;j++){
            star[j].classList.remove("fa-star-o");
            star[j].classList.add("fa-star");
            star[j].classList.add("golden");
            k=j;
        }
     /*    let h1=document.createElement("h1");
        h1.innerHTML=`${k+1}` */
/*         let text=document.createTextNode(k+1); */
        /* h1.setAttribute('id','rating'); */
   /*      h1.appendChild(text); */
        /* document.getElementById("box").append(h1); */
        document.getElementById("answer").innerHTML=`${k+1}`;
    });
}