function OnChevronClick(price){
   let text = price;
   if(text.classList.contains("visible"))
   {
      text.classList.replace("visible","hidden");
   }
   else if(text.classList.contains("hidden"))
   {
      text.classList.replace("hidden","visible");
   }
   else
   {
      text.classList.add("visible");
   }
}
window.addEventListener("click",(e)=>
{
   let clicked = e.target;
  
  if(clicked.className === "price-header")
  {
     let parent  = clicked.parentNode;
     let price = parent.getElementsByClassName("price-text")[0];
     OnChevronClick(price);
  }
}
);