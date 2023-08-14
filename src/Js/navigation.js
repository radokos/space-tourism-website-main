let hamburger = document.body.querySelector('.hamburger'),
    closeIcon = document.body.querySelector('.close'),
    exploreText = document.body.querySelector('.explore-button')

hamburger.addEventListener("click",function(event){
    event.preventDefault()
    document.body.querySelector('.top-nav').style.display="initial"
    if (exploreText){ exploreText.textContent = ""}
})    

closeIcon.addEventListener("click",function(event){
    event.preventDefault()
    document.body.querySelector('.top-nav').style.display="none"
    if (exploreText) {exploreText.textContent = "EXPLORE"}   
})

