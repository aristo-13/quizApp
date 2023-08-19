let question = document.querySelector(".question")
let options = Array.from(document.querySelectorAll(".option"))


let Fnum = 0
let Snum = 0
let results = 0

let username
window.onload = () =>{
    showpg("addition")
   let frandNum = Math.floor(Math.random() * 50)
   let srandNum = Math.floor(Math.random() * 50)
   Fnum = frandNum
   Snum = srandNum

   quest = `${Fnum} + ${Snum}`
   question.innerHTML = `<span class='first'>${Fnum}</span> + <span class='second'>${Snum}</span> = ? `
   results = eval(quest)
   console.log(results)

   for(let i = 0; i < options.length; i++){
     options[i].textContent =  Math.floor(Math.random() * 50)
    if( options[i].textContent == results){
        options[i].textContent += 3
    }
     
   }
   options[Math.floor(Math.random() * 3)].textContent = results


   let first = document.querySelector(".first")
      let sec = document.querySelector(".second")
      let colors = ['red','yellow','green','blue','yellowgreen','gold']
      first.style.color = colors[Math.floor(Math.random() * colors.length)
      ] 
      sec.style.color = colors[Math.floor(Math.random() * colors.length)
      ] 

      username = window.prompt('what is your name?') || 'User'
    
}
let points = 0
let counter = 0
options.forEach((option) => {
    option.addEventListener('click',() =>{
        counter++
        if( counter < 5){
            if(option.textContent == results){
                shuffleQuestNanswers()
                points+= 10
            }else{
                showWrongNote()
                points-= 5
            }
        }else{
            showScoreboard()
        }
    })
});

let feed = document.querySelector('.feedback')
let area = document.querySelector('.content-area')
function showScoreboard(){
    document.querySelector(".scoreBoard").style.left = "50%"
     let remark = (points < 15)? 'OOPS!':'CONGRATS!'
     
     feed.textContent = `${remark} ${username}`
      
    let mark = (points/50) * 100
     area.innerHTML += `<span class='questcount'>Question 5/5</span><br>
       <span class='percent'>${mark}% out of 100%</span><br>
       <button class='loadbtn' onclick='load()'>OK</button>
       <footer>@devAristo<footer/>
     `
}

function load(){
   location.reload()
}


function shuffleQuestNanswers(){
   
    let frandNum = Math.floor(Math.random() * 50)
    let srandNum = Math.floor(Math.random() * 50)
    Fnum = frandNum
    Snum = srandNum

    quest = `${Fnum} + ${Snum}`
    question.innerHTML = `<span class='first'>${Fnum}</span> + <span class='second'>${Snum}</span> = ? `
    results = eval(quest)
    console.log(results)
 
    for(let i = 0; i < options.length; i++){
        options[i].textContent =  Math.floor(Math.random() * 50)
       if( options[i].textContent == results){
           options[i].textContent += 3
       }
        
      }
      options[Math.floor(Math.random() * 3)].textContent = results
   

      let first = document.querySelector(".first")
      let sec = document.querySelector(".second")
      let colors = ['red','yellow','green','blue','yellowgreen','gold']
      first.style.color = colors[Math.floor(Math.random() * colors.length)
      ] 
      sec.style.color = colors[Math.floor(Math.random() * colors.length)
      ] 
    
}

function  showWrongNote(){
   const ssrc = 'buzzer-or-wrong-answer-20582.mp3'
   const audio = new Audio()
   audio.play(ssrc)
}

let links = document.querySelectorAll(".links li")
let pg = document.querySelectorAll(".pg")
function showpg(id){
  for(let i = 0; i < pg.length; i++){
    pg[i].style.display = 'none'
  }
 

  document.getElementById(id).style.display = 'block'
}

let link = document.querySelector(".links")
let hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("activee")
    link.classList.toggle("activee")
})

 