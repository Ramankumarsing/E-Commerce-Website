let slide = document.querySelectorAll(".slidecard");
let card = document.querySelectorAll(".card");
let count = 0 ;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++
    if(count == slide.length){
        count=0;
    }
    myFun();
}, 2000); 

// card detail

card.forEach(function(card) {
    card.addEventListener("click", function() {
      console.log(card.firstElementChild.src);
      document.querySelector(".container").style.display="none";
      let div = document.createElement("div");
      div.classList.add("cardDetail");
      div.innerHTML = `
        <img src=${card.firstElementChild.src} alt="">
        <div class="cardText">
          <h2> Top Trending Wear </h2>
          <h2>Upto 30% off Hurry..</h2>
          <p>lorem ipsum dolar sit, amet consectetur adipisicing doloremque eaque.</p>
          <p>lorem ipsum dolar sit, amet consectetur adipisicing doloremque eaque.</p>
          <p>lorem ipsum dolar sit, amet consectetur adipisicing doloremque eaque.</p>
          <p>lorem ipsum dolar sit, amet consectetur adipisicing doloremque eaque.</p>
          <button>Buy Now</button>
          <button>Add To Cart</button>
          <a href="">Back</a>
        </div>
        `;
      document.querySelector("body").appendChild(div);
    });
  });
  