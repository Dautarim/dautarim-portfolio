
let contador = 1
setInterval(() => rolaslide(), 10000)

function rolaslide()
{

    contador++
    if(contador>4)
    {
        contador = 1
    }
    document.querySelector("#slide"+contador).checked = true

    if (document.querySelector("#slide"+contador).checked == true)
    {
        for(let i = 1; i < 5; i++)
        {
            if(i == contador)
            {
                document.querySelector("#lbl"+i).classList.add("cx")
                // console.log("feito" + i)
            }
            else
            {
                document.querySelector("#lbl"+i).classList.remove("cx")
            }
        }
        
    }
}

addEventListener("scroll", () =>
{
    if(scrollY > 2)
    {
       document.querySelector(".navegador-alternativo").classList.remove("oculto")
    }
    else
    {
        document.querySelector(".navegador-alternativo").classList.add("oculto")
    }
})

function eucx(nummero)
{
    for(let i = 1; i < 5; i++)
    {
        if(i == nummero)
        {
            document.querySelector("#lbl"+i).classList.add("cx")
            console.log("feito" + i)
        }
        else
        {
            document.querySelector("#lbl"+i).classList.remove("cx")
        }
    }
}



var imputmail = document.querySelector("#endereco");
var assunt = document.querySelector("#assunto");
var message = document.querySelector("#mensagem")
const botenv = document.querySelector("#bot")

botenv.addEventListener("click", () => {
    var email = imputmail.value
    var ass = assunt.value
    var msg = message.value

    if(email && ass && msg)
    {
        window.location.href =`mailto:carvalhodeandrelino@gmail.com?CC=${email}&Subject=${ass}&Body=${msg}`
    }

})


function menutoogle()
{
    let botset = document.querySelector(".ativador")
    let menumesmo = document.querySelector(".navegador-alternativo > nav")

    botset.classList.toggle("aberto")
    menumesmo.classList.toggle("aberto")
}