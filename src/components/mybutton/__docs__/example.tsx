import React from "react";
//importamos nuestro componente MyButton y sus props
import MyButton, { MyButtonProps } from "../mybutton";
//Creamos un componente Example al cual le pasaremos las props definidas
//en nuestro componente CustomButton. Luego renderizamos nuestro componente
//<MyButton /> con esas props. La idea es que llamemos al componente Example
//con valores de las props para renderizar el componente <MyButton /> de diferentes
//maneras, es decir, crear una historia de renderizados de nusetro componente.
function Example(props: MyButtonProps) {
    return (
        <MyButton
            text={props.text}
            bgcolor={props.bgcolor}
            txtcolor={props.txtcolor}
            disabled={props.disabled}
            size={props.size}
            onClick={props.onClick}
            bordercolor={props.bordercolor}
            hverbgcolor={props.hverbgcolor}
            hvertxtcolor={props.hvertxtcolor}
            borderwidth={props.borderwidth}
        />
    )
}
export default Example;