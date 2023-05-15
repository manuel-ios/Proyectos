// var objectos  =  new Object()
// objectos.nombre = "Manuel"

// console.log(objectos.nombre)

setTimeout(()=>{
    console.log("Hola amor ")
},2000)

var miTimepo = () => {

    console.log("Hola estoy dentro de la const miTimepo")
}
// console.log(miTimepo)
let b = document.createElement("p")

//Reloj//
function HrExacta(){
    let local  =  new Date()
    let min = local.getMinutes()
    let hr = local.getHours()
    let seg = local.getSeconds()
    min =  min<=9 ? "0"+min: min 
    seg =  seg<=9 ? "0"+seg:seg
    hr = hr <=9 ? "0"+hr:hr
    let aux = hr +":"+ min +":"+ seg
  
    b.textContent = aux
 
    // console.log("holA"+aux)
    setTimeout(()=>{
        HrExacta()
    },500)
}
HrExacta()
document.body.append(b)



let getShape  = shape =>{
    return new Promise((resolve, reject)=>{
        if(shape === 'Triangle'){
            resolve("Triangle")
        }else{
            reject("not Valied")
        }
    })

}

getShape('Triangle')
.then(shape => console.log(shape))
.catch(error => console.log(error))



const fun = MiCompiesto =>{
    return new Promise((resolve,reject)=>{
        if(MiCompiesto === 'Cuadrado'){
            b.textContent = "Estoy dentro de la primesa "
            document.body.style = "background :Red"
        }
        if(MiCompiesto === "Cuadrad"){
            document.body.style =  "background: yellow"

        }
        else{
            reject("No valido")
            document.body.style = "background:green"
        }
    })

}
fun("Cuadrad")
.then(MiCompiesto => console.log("Mi compi"))
.catch(error => console.log("erro"))