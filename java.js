const imgfeatrue = document.querySelector(".img-featrue")
const  listimg = document.querySelectorAll(".list-img img")
const prev = document.querySelector(".control-prev")
const next = document.querySelector(".control-next")


var  currenIndex = 0;
function updateElementIndex (index){
   
    document.querySelectorAll(".list-img div").forEach(function(item){
       item.classList.remove("active")
    })


    currenIndex = index
    imgfeatrue.src = listimg[index].getAttribute("src")
    listimg[index].parentElement.classList.add("active")
}


listimg.forEach((imgElement, index) => {
    
     imgElement.addEventListener("click", function(e){
       updateElementIndex(index)

        
     })  

})

prev.addEventListener("click", function(e){
    if (currenIndex == 0){
        currenIndex = listimg.length - 1
    }else{
        currenIndex--
    }
    updateElementIndex(currenIndex)

})
    next.addEventListener("click", function(e){
        if ( currenIndex == listimg.length - 1){
            currenIndex = 0
        }else{
            currenIndex ++
        }
        updateElementIndex(currenIndex)

})

