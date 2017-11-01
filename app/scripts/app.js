//injecting sass directly into js not html with:
// require('../styles/style.sass')

// const component = require('./component')
// document.write( `Well hello, ${component}` )

// console.log('this is the app.js')

//download data in the console as soon as page loads
/*
let myreq = new XMLHttpRequest()
myreq.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
myreq.onload = function() {
  let mydata = JSON.parse(myreq.responseText)
  // console.log(myreq.responseText)
  console.log(mydata[0])
}
myreq.send()
*/

let pageCounter = 1
let animalInfo = document.getElementById('animal-info')
let btn = document.getElementById('btn')

btn.addEventListener("click", function(){
  let myreq = new XMLHttpRequest()
  myreq.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter +'.json')
  myreq.onload = function() {
    // console.log(myreq.responseText)
    var mydata = JSON.parse(myreq.responseText)
    console.log(mydata)
    renderHTML(mydata);
  }
  myreq.send()
  pageCounter++
  if (pageCounter > 3) {
    btn.classList.add('hide-me')
  }
})

function renderHTML(data) {
  let htmlString = ""

  for(let i=0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + "is a " + data[i].species + 'that likes to eat '
    for (let ii=0; ii < data[i].foods.likes.length; ii++) {
      if(ii == 0) {
        htmlString += data[i].foods.likes[ii]
      } else {
        htmlString += " and " + data[i].foods.likes[ii]
      }
    }

    htmlString += ' and dislikes '

    for (let ii=0; ii < data[i].foods.dislikes.length; ii++) {
      if(ii == 0) {
        htmlString += data[i].foods.dislikes[ii]
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii]
      }
    }

    htmlString += '.</p>'
  }

  animalInfo.insertAdjacentHTML('beforeend', htmlString)
}
