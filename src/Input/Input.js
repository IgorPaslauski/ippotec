import React from 'react';
import './Input.css';

const Input = ({ label, value, onChange, required = false, id = '', type = 'text', placeholder = '', maxLength = 99999999, minLength = 0 }) => {
    const labelRequired = required ? <span className="optional-text" title='Campo obrigatório'>*</span> : '';
    return (
        <div className="form-group">
            <label for={id}>{label} {labelRequired}</label>
            <input type={type} id={id} value={value} required={required} onChange={onChange} placeholder={placeholder} maxLength={maxLength}
                minLength={minLength}
            />
        </div>
    );
};

export default Input;
