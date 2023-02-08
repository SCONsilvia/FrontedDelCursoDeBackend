const headers = (method="GET",body=undefined,contentType='application/json')=>{
    return {
        method: method,
        body: body ? JSON.stringify(body):body,
        credentials: "include",//cooki esta linea habilita las coockies con fetch (la de abajo tambien)
        headers: {
        'Access-Control-Allow-Origin': 'localhost:3000',// (cooki) aqui va la ruta del origen donde esta montada la pagina web
        'Content-Type': contentType,
      }
    }
}

//http://localhost:8080
//https://fantastic-paint-airport.glitch.me/
const server = "http://localhost:8080"

export const allProducts = () => {
    const resp = {data:0,error:null,status:false}
    return (fetch(`${server}/api/productos`,headers())
        .then(async response => {
            resp.status=true
            resp.data = await response.json(); 
            return resp
        }).catch(error => {
            resp.error=error
            return resp
        })
    )
}

export const postProducto = (producto) => {
    const resp = {data:0,error:null,status:false}
    return (fetch(`${server}/api/productos`,headers("POST", producto))
        .then(async response => {
            resp.status=true
            resp.data = await response.json(); 
            return resp
        }).catch(error => {
            resp.error=error
            return resp
        })
    )
}

export const allChat = () => {
    const resp = {data:0,error:null,status:false}
    return (fetch(`${server}/api/chat`,headers())
        .then(async response => {
            resp.status=true
            resp.data = await response.json(); 
            return resp
        }).catch(error => {
            resp.error=error
            return resp
        })
    )
}

export const InicioDeSesionback = (datos) => {
    const resp = {data:0,error:null,status:false}
    return (fetch(`${server}/api/login`,headers("POST", datos))
        .then(async response => {
            resp.data = await response.json(); 
            resp.status=true
            console.log(resp)
            console.log(datos);
            console.log(resp);
            return resp
        }).catch(error => {
            console.log("dfdfdffdfddffddf")
            resp.error=error
            return resp
        })
    )
}

export const infoDeInicioDeSesion = () => {
    const resp = {data:0,error:null,status:false}
    return (fetch(`${server}/api/login`,headers())
        .then(async response => {
            resp.data = await response.json(); 
            if (response.status === 401){
                return resp
            }
            resp.status=true
            return resp
        }).catch(error => {
            resp.error=error
            return resp
        })
    )
}