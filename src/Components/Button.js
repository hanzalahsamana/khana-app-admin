import Button from '@mui/material/Button';


function PressButton(props) {
  const {name, className, icon , onClick , disabled} = props
    return  <Button  variant="outlined" disabled={disabled} startIcon={icon}  onClick={onClick} className={"btn btn-primary form-btn " + className}>{name} </Button>;
  }

export default PressButton