import React, {FC} from "react";

import classNames from "classnames";
import styles from './Input.module.css';

// type InputProps = {
//     type: string;
//     className?: string;
//     onChange: () => any;
// }

const Input: FC<any> = ({ onChange }) => {
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
    };
    return <input type="text" onChange={onInputChange} />   
}
export default Input;