import React from "react";
//importamos nuestro componente MyButton y sus props
import MyFavourite, { MyFavouriteProps } from "../myfavourite";
//Creamos un componente Example al cual le pasaremos las props definidas
//en nuestro componente CustomButton. Luego renderizamos nuestro componente
//<MyButton /> con esas props. La idea es que llamemos al componente Example
//con valores de las props para renderizar el componente <MyButton /> de diferentes
//maneras, es decir, crear una historia de renderizados de nusetro componente.
function Example(props: MyFavouriteProps) {
    return (
        <MyFavourite
            color={props.color}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    )
}
export default Example;