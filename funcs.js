
let contador = 1
setInterval(() => rolaslide(), 5000)

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
                console.log("feito" + i)
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
       console.log("slv")
    }
    else
    {
        console.log("oi")
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