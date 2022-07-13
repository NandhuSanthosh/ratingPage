let starIcon = `<div class="star-icon-container">
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 280.124 280.124" style="enable-background:new 0 0 280.124 280.124;" xml:space="preserve"  class="star-icon">
<g>
<path style="fill:#F4B459;" d="M280.124,106.914l-92.059-6.598L140.057,4.441l-48.55,95.874L0,106.914l61.282,74.015
l-17.519,94.754l96.294-43.614l96.294,43.606l-17.799-94.754C218.553,180.919,280.124,106.914,280.124,106.914z"/>
<polygon style="fill:#E3A753;" points="236.352,275.683 218.553,180.92 280.071,106.975 280.071,106.905 188.065,100.315 
140.057,4.441 140.057,232.068 	"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
</div>`
let reviewCountContainer = `<span>120</span>`

const reviews ={
    5: 120,
    4: 111,
    3: 89,
    2: 32,
    1: 2
}    
const container = document.getElementById('review-bar-container')
const avgRating = document.querySelector('[data-avg-rating]')
const totalRatingContainer = document.querySelector('[data-total-ratings]')
let totalStars = 0;
window.addEventListener('load',display)

function display(){
    Object.entries(reviews)
    .sort(([a],[b])=> b - a)
    .forEach(([key,value])=>{
        let starCount = document.createElement('div')
        starCount.classList = 'star-count-container'

        let starCountValue = document.createElement('div')
        starCountValue.classList='star-count'
        starCountValue.innerHTML = `<span id='count-value'>${key}</span>`

        let starIconContainer = document.createElement('div')
        starIconContainer.classList = 'star-icon-container'
        starIconContainer.innerHTML = starIcon

        starCount.appendChild(starCountValue)
        starCount.appendChild(starIconContainer)

        let bar = document.createElement('div')
        bar.classList = 'rating-bar'
        // bar.style.setProperty('--value','50px')
        bar.dataset.value = value
        // bar.setAttribute('data-reviewBar')


        let reviewCount = document.createElement('div')
        reviewCount.classList = 'star-rating-count'
        reviewCount.innerHTML = reviewCountContainer
         
        container.appendChild(starCount)
        container.appendChild(bar)
        container.appendChild(reviewCount)

        avgRating.innerText = 0;
        totalStars = totalStars + (key * value)
        
    })    
    update();
}    
function update(){
    let elements = document.querySelectorAll('.rating-bar')
    let total = totalFinder();
    elements.forEach((element)=>{
        element.style.setProperty('--value', `${(element.dataset.value/total)*100}%`)
    })
    console.log(totalStars)
    avgRating.innerText =parseFloat(totalStars/total).toFixed(2) 
    totalRatingContainer.innerText = total + ' ratings'
}

function totalFinder(){
    let total = 0;
    Object.entries(reviews).forEach(([key,value])=>{
        total =total + value;
    })
    return total;
}



