import React from "react";
//importamos nuestro componente JavierRRProps y sus props
import JavierRR, { JavierRRProps } from "../javierrr";
//Creamos un componente Example al cual le pasaremos las props definidas
//en nuestro componente JavierRRProps. Luego renderizamos nuestro componente
//<JavierRRProps /> con esas props. La idea es que llamemos al componente Example
//con valores de las props para renderizar el componente <JavierRRProps /> de diferentes
//maneras, es decir, crear una historia de renderizados de nuestro componente.
function Example(props: JavierRRProps) {
    return (
        <JavierRR
            text={props.text}
            txtcolor={props.txtcolor}
            variant={props.variant}
        />
    )
}
export default Example;