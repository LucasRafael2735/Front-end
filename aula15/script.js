/* const sayHello = () => console.log("Hello") 

function execute(fn) {
    fn();
}

execute(sayHello) 
 */ 

/* function olaMundo() {
   let ola = document.getElementById('ola')

    ola.innerHTML = 'Olá Mundo'
     let newDiv = document.createElement('div');
     newDiv.textContent ="Seja Bem vindo";
     newDiv.style.backgroundColor ="aliceblue";
     newDiv.style.border ="1px solid black";
     newDiv.style.margin ="10px";

     ola.appendchild(newDiv)
} */

function createUnorderedlist() {
    let body = document.querySelector("body")

    let newDiv = document.createElement("div")

    let lista = document.createElement("ul")

    let newUl = document.createElement('ul')
    for (let i =1; i <=4; i++) {
        let newLi = document.createElement("li")
        newLi.textContent = 'item' + x
        newUl.appendChild(newLi)
    }

    newDiv.appendChild(lista)
    body.appendChild(newDiv)
}

