import React from 'react';
import classes from "./MySelect.module.css"

const MySelect = ({children, options, defaultValue, value, onChange}) => {
    return (
        <select className={classes.MySelect}
            value={value}
            onChange={event => onChange(event.target.value)}>
          <option value=''>{defaultValue}</option>
          {options.map(option => {
            return <option key={option.value} value={option.value}>
                {option.name}
                {children}
            </option>
          })}
        </select>
    );
};

export default MySelect;