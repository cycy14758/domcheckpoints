var btn1plus=document.getElementsByClassName("btn1+")
 console.log(btn1plus)
  var   btn1moin=document.getElementsByClassName("btn1-")
  console.log(btn1moin)
  var c1=document.getElementsByClassName("c1")
  console.log(c1)
  var hearts=document.getElementsByClassName("fa-solid ")
  console.log(hearts)
  
  var title=document.getElementsByClassName("card_title")
  console.log(title)





  var parent=document.getElementById("parent")
  console.log(parent)

  var newDiv = document.createElement('li');
  var newContent = document.createTextNode(title);
  newDiv.appendChild(newContent); 
  document.body.appendChild(newDiv, parent)








  for ( let i=0 ; i < hearts.length ; i++){
    hearts[i].addEventListener("click",function(){
if (hearts[i].style.color=="black"  )
{
hearts[i].style.color="red"  
}        
else 
hearts[i].style.color="black"  
}
  )}


  for ( let i=0 ; i < btn1plus.length ; i++){
    let compteur1=0;
  btn1plus[i].addEventListener("click", function ()  { 
    compteur1 += 1 ;
     c1[i].innerHTML = compteur1;
     console.log( c1[i]);
    })

          btn1moin[i].addEventListener("click", function ()   { 
            if (c1[i].innerHTML>0 ) 
        {    c1[i].innerHTML = compteur1;
            compteur1-= 1;
          ;}
            return  compteur1
          })
          if (c1[i].innerHTML>0) {
            var newContent = document.createTextNode(title[i])
            newDiv.appendChild(newContent); 
       document.body.appendChild(newDiv, parent)

          } 
        }
    


         