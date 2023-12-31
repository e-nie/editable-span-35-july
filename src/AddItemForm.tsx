import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type PropsType = {
    callback: (title: string) => void
}


const AddItemForm = (props:PropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.callback(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }


    // @ts-ignore

    return (
        <div>
            <input value = {title}
                   onChange = {onChangeHandler}
                   onKeyPress = {onKeyPressHandler}
                   className = {error ? "error" : ""}
            />
            <button onClick = {addItem}>+</button>
            {error && <div className = "error-message">{error}</div>}
        </div>
    );
};

export default AddItemForm;
