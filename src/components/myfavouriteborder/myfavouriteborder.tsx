import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//Declaro la interface del componente.
export interface MyFavouriteBorderProps {
    color: string;
    disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; //prop onClick opcional y responde al
    //evento de picar el botón
}
//Defino mi componente MyFavouriteBorder y le digo que las props son las que definí arriba
function MyFavouriteBorder(props: MyFavouriteBorderProps) {
    //Paso el valor de las props a un objeto:
    const { color, disabled, onClick } = props
    return (
        <IconButton disabled={disabled} onClick={onClick}>
            <FavoriteBorderIcon sx={{ color: {color} }} />
        </IconButton>
    )
}
export default MyFavouriteBorder;