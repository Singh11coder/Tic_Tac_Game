let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset_btn");
let new_btn=document.querySelector(".new_btn");
let msg=document.querySelector("#msg");
let msg_container=document.querySelector(".msg_container");
let turn0=true;
const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
let count=0;
const disablefun =()=>{
   for(box of boxes)
   {
     box.disabled=true;
   }
}
const enablefun=()=>{
   for(box of boxes)
   {
     box.disabled=false;
     box.innerText="";
   }

}
const showWinner=(winner)=>{
    disablefun();
    msg.innerText=`Congratulation to winner ${winner}`;
    msg_container.classList.remove("hide");
}
boxes.forEach((box) => {
   box.addEventListener("click",() =>{
       if(turn0)
       {
         box.innerText="O";
         turn0=false;
       }
       else{
        box.innerText="X";
         turn0=true;
       }
       count++
       box.disabled=true;
       checkWinner(count);
   });
   
});
const checkWinner = (count) =>{
    for(let pattern of winPatterns)
    {
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3)
            {
              showWinner(p1);
            }
        }
        if(count==9)
        {
          msg.innerText="The game was Draw";
          msg_container.classList.remove("hide");
        }
    }
}
const resetfun=()=>{
   turn0=true;
   enablefun();
   msg_container.classList.add("hide");
   count=0;
}

reset_btn.addEventListener("click",resetfun);
new_btn.addEventListener("click",resetfun);
