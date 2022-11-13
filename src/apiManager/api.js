const headers = (method="GET",body=undefined,contentType='application/json')=>{
    return {
        method: method,
        body: body ? JSON.stringify(body):body,
        headers: {
        'Content-Type': contentType,
      }
    }
}

const server = "https://materialistic-tender-agreement.glitch.me/"

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