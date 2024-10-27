import Typography, { TypographyProps } from '@mui/material/Typography';
//Declaro la interface del componente.
export interface JavierRRProps {
    text: string;
    txtcolor: string;
    variant?: TypographyProps['variant'];
}
//Defino mi componente JavierRR y le digo que las props son las que definí arriba
function JavierRR(props: JavierRRProps) {
    //Paso el valor de las props a un objeto:
    const { text, txtcolor, variant } = props
    return (
        <Typography
            variant={variant}
            sx={{
                color: txtcolor,
            }}
        >
            {text}
        </Typography>
    )
}
export default JavierRR;