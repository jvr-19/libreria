import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
//Declaro la interface del componente.
export interface MyButtonProps {
    text: string; //prop text de tipo string. Es el texto del botón
    txtcolor: string; //prop txtcolor de tipo string. Es el color del texto del botón
    bgcolor: string; //prop bgcolor de tipo string. Es el color del botón
    bordercolor: string; //prop bordercolor de tipo string. Es el color del borde del botón
    borderwidth: string; //prop borderwidth de tipo string. Es el ancho del boton.
    size?: "small" | "medium" | "large"; //prop size. El ? quiere decir que la prop es opcional. Además
    //le digo los posibles valores. Se entiende que es string.
    hvertxtcolor: string; //prop hvertxtcolor de tipo string. Es el color del texto de cuando le hacemos hover
    hverbgcolor: string; //prop hverbgcolor de tipo string. Es el color del boton de cuando le hacemos hover
    disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; //prop onClick opcional y responde al
    //evento de picar el botón
}
//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function MyButton(props: MyButtonProps) {
    //Paso el valor de las props a un objeto:
    const { bgcolor, text, txtcolor, disabled, onClick, size, bordercolor, hverbgcolor, hvertxtcolor, borderwidth } = props
    return (
        //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
        <Button
            type='button'
            onClick={onClick}
            disabled={disabled}
            size={size}
            sx={{ 
                backgroundColor: bgcolor,
                color: txtcolor,
                border: `${borderwidth} solid ${bordercolor}`,
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                    backgroundColor: hverbgcolor,
                    color: hvertxtcolor
                },
            }}
        >
            {text}
        </Button>
    )
}
export default MyButton;