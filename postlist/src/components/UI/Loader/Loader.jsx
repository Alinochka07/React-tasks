import React from 'react';
import classes from "./Loader.module.css";

const Loader = ({children}) => {
    return (
        <div className={classes.loader}>
            {children}
        </div>
    );
};

export default Loader;