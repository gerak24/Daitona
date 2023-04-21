
window.addEventListener("load",()=>
{
   let price_texts = document.getElementsByClassName("price-text");
   let price_texts_height = [];
   for (let i = 0; i < price_texts.length; i++)
   {
      console.log(price_texts[i]);
      price_texts_height.push(price_texts[i].offsetHeight);
      price_texts[i].classList.add("hidden");
   }
   console.log(price_texts_height);
   function OnChevronClick(price,height){
      let text = price;
     
      if(text.classList.contains("visible"))
      {
         text.style.height = "0" + "px";
         text.classList.replace("visible","hidden");
      }
      else if(text.classList.contains("hidden"))
      {
         text.style.height = height + "px";
         text.classList.replace("hidden","visible");
      }
      else
      {
         text.style.height = height + "px";
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
             for (let i = 0; i < price_texts.length; i++) {
                if(price === price_texts[i])
                {
                   OnChevronClick(price,price_texts_height[i]);
                }
             }
            
          }
       }
   );
});
