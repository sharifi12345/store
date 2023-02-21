let messagebox = document.querySelector('.messagebox')
let textarea = document.querySelector('.textarea')
let btn = document.querySelector('.sent-message')
let inputName = document.querySelector('.inputName')

function sendMessage(event){
    console.log(event)
    event.preventDefault()

    newImg = document.createElement('img')
     newImg.setAttribute('src','img/c2f1cb294fa3aa7f0fd7eb54120c8759.png')
     newImg.classList='rounded-full m-2 '

    let newName= document.createElement('span')
     let inputNameValue = inputName.value
     newName.innerHTML=inputNameValue

     let newdiv2 = document.createElement('div')
     newdiv2.append(newImg,newName)
     newdiv2.classList='mb-3'
    
    let messge = document.createElement('p')
    let textareaValue = textarea.value
    messge.innerHTML = textareaValue

    let newDiv = document.createElement('div')

    newDiv.classList='mb-3  box-nazrat bg-light shadow mb-5'

    newDiv.append(newdiv2,messge)
    messagebox.append(newDiv)


    textarea.value=''
    inputName.value=''


}

btn.addEventListener('click',sendMessage)