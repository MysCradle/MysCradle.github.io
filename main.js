// console.log("neuhiahdfap")
const light = document.getElementById("light")

light.addEventListener('click', ()=>{
    if (document.body.classList.contains('tema--escuro')){
        document.body.classList.remove('tema--escuro')
        document.body.classList.add('tema--claro')
    }else{
        document.body.classList.remove('tema--claro')
        document.body.classList.add('tema--escuro')
    }
})

