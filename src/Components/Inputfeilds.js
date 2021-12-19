import TextField from '@mui/material/TextField';

function InputFeild(props) {
    return <TextField
    label={props.label}
    className={props.className}
    type  = {props.type}
    value = {props.value}
    onChange = {props.onChange}
  />;
  }

export default InputFeild