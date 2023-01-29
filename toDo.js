function todo(){
    let u = document.getElementById("u")
    /*console.log(u)
    let elem = document.querySelector('input').value
    let new_elem_li = document.createElement('li')
    new_elem_li.innerHTML = `<input type = 'checkbox'>${elem}`
    u.append(new_elem_li)*/


    let div = document.createElement('div')
    div.className = 'ups' //Даем класс
    div.textContent = 'как дела'
    u.insertAdjacentHTML('',`<h1>Как дела</h1>`)
}


let temp = prompt('Введите температуру ')
let x = prompt('Это температура в цельясиях или в фаренгейтах c/f')

if(x=='c'){
    let new_temp = prompt('Хочешь ли ты перевести эту температуру в фаренгейты? д/н')
    if(new_temp=='д'){
        console.log( (temp*1.8) + 32)
    }
    else{
        console.log('Ладно оставим так')
    }

}

else{
    let new_temp = prompt('Хочешь ли ты перевести эту температуру в цельсии? д/н')
    if(new_temp=='д'){
        console.log( (temp+32) / 1.8)
    }
    else{
        console.log('Ладно оставим так')
    }
}


let new_x = 20 //Number
let name_user = 'Tima' //String
let isDead = false // Boolean
let man; // undefined
isDead = null // null

console.log(5>3 && 1==0) //false
console.log(2>4 && 1==1) // false
console.log(1==1 && 2!=3) //true
console.log(2==3 || 1>0) //true
console.log(2!=5 || 1==2) //true
/*  


// append  - во внутрь в конец
// prepend - во внутрь в начало
// before - до элемента не во внутрь
// after после элемента не во внутрь