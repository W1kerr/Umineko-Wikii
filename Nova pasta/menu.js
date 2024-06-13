var menu = document.querySelectorAll('.itensmenu')

function selecionar(){
    menu.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')

}
menu.forEach((item)=>
    item.addEventListener('click', selecionar)
)