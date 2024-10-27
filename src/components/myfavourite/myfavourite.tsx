import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
//Declaro la interface del componente.
export interface MyFavouriteProps {
    color: string;
    disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; //prop onClick opcional y responde al
    //evento de picar el botón
}
//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function MyFavourite(props: MyFavouriteProps) {
    //Paso el valor de las props a un objeto:
    const { color, disabled, onClick } = props
    return (
        <IconButton disabled={disabled} onClick={onClick}>
            <FavoriteIcon sx={{ color: {color} }} />
        </IconButton>
    )
}
export default MyFavourite;