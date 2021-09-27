import React from 'react';
import { Label, Input } from "reactstrap"
import FormText from 'reactstrap/lib/FormText';
import { validate } from './validate';

function Inputt({ label, inputType, inputName, value, handleChange, handleBlur }) {



    return (
        <React.Fragment>
            <Label>{label}</Label>
            <Input autoComplete="off" type={inputType} name={inputName} value={value} onBlur={handleBlur} onChange={handleChange} />



        </React.Fragment>
    );
}

export default React.memo(Inputt);