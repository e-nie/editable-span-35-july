import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    oldTitle: string
    callback: (newTitle: string) => void
}

const EditableSpan = (props: PropsType) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(props.oldTitle)


    const editHandler = () => {
        setEdit(!edit)
        if (edit) {
            updateTitle()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const updateTitle = () => {
        props.callback(newTitle)
    }

    return (
        edit
            ? <input value = {newTitle} onBlur = {editHandler} onChange = {onChangeHandler} autoFocus />
            : <span onDoubleClick = {editHandler}>{props.oldTitle}</span>

    );
};

export default EditableSpan;
