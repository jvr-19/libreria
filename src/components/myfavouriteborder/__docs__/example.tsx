import React from "react";
//importamos nuestro componente MyFavouriteBorder y sus props
import MyFavouriteBorder, { MyFavouriteBorderProps } from "../myfavouriteborder";
//Creamos un componente Example al cual le pasaremos las props definidas
//en nuestro componente MyFavouriteBorder. Luego renderizamos nuestro componente
//<MyFavouriteBorder /> con esas props. La idea es que llamemos al componente Example
//con valores de las props para renderizar el componente <MyFavouriteBorder /> de diferentes
//maneras, es decir, crear una historia de renderizados de nusetro componente.
function Example(props: MyFavouriteBorderProps) {
    return (
        <MyFavouriteBorder
            color={props.color}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    )
}
export default Example;