import { useEffect, useState } from "react";
import { infoDeInicioDeSesion } from "../apiManager/api";

const UserData = () => {
    const [r,setR] = useState("")
    const [visita,setVisita] = useState("")
    useEffect(()=>{
        const funcion = async () => {
            const re = await infoDeInicioDeSesion();
            if (re.status){
                console.log("aca");
                setR(re.data.session.email)
                setVisita(re.data.session.visita)
            }else{
                setR(re.data.msg)
            }

        }
        funcion();
        
    },[])
    return(
        <section>
            <h1>InicoDeSesion</h1>
            <p>{r}</p>
            <p>{visita}</p>
        </section>

    )
}

export default UserData;