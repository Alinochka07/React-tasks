import React from 'react';
import classes from "./MyInput.module.css"

const MyInput = (props) => {
    return (
        <input className={classes.MyInput} {...props}/>
    );
};

export default MyInput;

// Когда неуправляемый компонент инпута
// const MyInput = React.forwardRef((props, ref) => {
//     return (
//         <input ref={ref} className={classes.MyInput} {...props}/>
//     );
// });