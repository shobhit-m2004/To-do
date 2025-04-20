import styles from './Input.module.css';
import { useState } from 'react';

let Input = ({ HandleData }) => {
    let [text, setText] = useState("");
    let [Date, setDate] = useState("");


    // handle on chnage textual input

    let handleTextChange = (event) => {
        setText(event.target.value);
        console.log(text);
    }

    let handleDateChange = (event) => {
        setDate(event.target.value);
        console.log(Date);
    }


    let handleClick = () => {

        HandleData(text, Date);
        setText("");
        setDate("");

    }


    return (
        <div className={styles.input}>
            <div className={styles.text}>
                <input type="text"
                    placeholder="Enter your task"
                    onChange={handleTextChange}
                    value={text}
                    style={{ width: '200px', height: '40px', padding: '10px', borderRadius: '20px', }}



                />
            </div>
            <div className={styles.date}>
                <input
                    type="date"
                    placeholder="Enter your date"
                    onChange={handleDateChange}
                    value={Date}
                    style={{ width: '150px', height: '40px', padding: '10px', borderRadius: '20px' }}

                />
            </div>
            <div className="button">
                <button
                    className="btn btn-primary"
                    onClick={handleClick}
                    style={{ width: '40px', height: '40px', borderRadius: '20px' }}

                ><i class="bi bi-plus-circle-dotted"></i></button>
            </div>
        </div>
    );
};

export default Input;