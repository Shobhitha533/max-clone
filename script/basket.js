let data=JSON.parse(localStorage.getItem("addtobasket"))||[]
    console.log(data)
    var total = data.reduce(function(sum,ele,index,arr){
       return sum+=Number(ele.price)
       console.log(total)
    },0)
    document.querySelector(".checktext4").innerText=`total price = ${total}`
    document.querySelector(".checktext5").innerText=`total price = ${total}`
    // function displaycart(){
      data.map(function (ele,index){
      let box=document.createElement("div")
      box.setAttribute("class","plbox")
      let imgdiv=document.createElement("div")
      let img=document.createElement("img")
      img.src=ele.image
      img.style.height="200px"
      img.style.width="200px"
      let pn=document.createElement("div")
      let price=document.createElement('h4')
      price.innerText=ele.price
      price.style.marginLeft="20px"
      let remove = document.createElement("button")
      remove.setAttribute("class","removeitem")
      remove.innerText="Remove"
    //   remove.style.backgroundColor="rgb(212, 39, 68)"
    //   remove.style.cursor="pointer"
    //   remove.style.height="30px"
    //   remove.style.width="100px"
    //   remove.style.color="white"
    //   remove.style.border="0px"
    //   remove.style.borderRadius="3px"
    //   remove.style.marginLeft="20px"

remove.addEventListener("click",function(){
    removeFromCart(ele,index);
})
      let name=document.createElement("p")
      name.innerText=ele.name
      name.style.fontFamily="'Times New Roman', Times, serif;"
      name.style.marginLeft="20px";
      imgdiv.append(img)
      pn.append(name,price,remove)
      box.append(imgdiv,pn)
      document.querySelector("#displaycart").append(box)
  });
// }
// displaycart()
function removeFromCart(ele,index){
    data.splice(index,1)
    console.log(ele)
    localStorage.setItem("addtobasket",JSON.stringify(data))
     window.location.reload();
}
