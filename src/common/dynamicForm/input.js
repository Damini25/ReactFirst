import React from 'react';
import './input.css';

const inputElement = (props) => {
    let htmlElement = null;
    const inputClasses=[props.class , 'common'];
    switch (props.inputType) {

        case 'input':
            htmlElement = <input className={inputClasses.join(' ')} onChange={props.changed} {...props.elementConfig} value={props.elementValue} />
            break;

        case 'textarea':
            htmlElement = <textarea className="common"  onChange={props.changed}
                {...props.elementConfig} value={props.elementValue} ></textarea>
            break;

        case 'select':
            htmlElement = <select className="common" value={props.elementValue}  onChange={props.changed}>
                {props.elementConfig.options.map((elem) => {
                    return <option key={elem['value']} value={elem['value']}>
                        {elem['displayValue']}</option>
                })}
            </select>
            break;

        // case 'text':
        //     return <input type={props.inputType} {...props.elementConfig} value={props.elementValue} />
        // case 'text':
        //     return <input type={props.inputType} {...props.elementConfig} value={props.elementValue} />
        default:
            htmlElement = <input className="common"  {...props.elementConfig} value={props.elementValue} />

    }
    return (
        <div className="input">
            <label>{props.label}</label>
            {htmlElement}
        </div>
    );
}
export default inputElement;