import React, { useState } from 'react';
import Input from '../Input/Input';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('username: ' + username);
        console.log('password: ' + password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input label='Usuário' id='txtUsuario' required={true} placeholder='Informe o usuário' onChange={(e) => setUsername(e.target.value)}></Input>
            <Input type='password' id='txtSenha' required={true} label='Senha:' placeholder='Informe a senha' onChange={(e) => setPassword(e.target.value)}></Input>
            <div className="form-group">
                <Input type='checkbox' label='Lembrar senha?' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}></Input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;
