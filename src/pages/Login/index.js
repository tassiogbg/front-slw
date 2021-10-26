import React from "react";
import './login.css';

class Login extends React.Component {
constructor(props){
    super(props);
    this.state ={
        usuario: "",
        senha: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleClick() {
    this.handleSubmit();
    console.log("formulario enviado");
  }
  handleChange(event) {
    this.setState({ usuario: event.target.value });
    this.setState({ senha: event.target.value });
  }
  handleSubmit(event) {
    alert(`nome de usuario: ${this.state.usuario}`);
    alert(`senha é: ${this.state.senha}`);
  }

  render() {
    const { usuario} = this.state;
    const { senha} = this.state;

    return (
        <body>
            <div class='container'>
                <div class='login-box'>
                    <div class='login-logo'>
                    </div>
                    <div class='label-float'>
                        <label for='usuario'>Usuário</label>
                        <input type='text' id='usuario' placeholder='E-mail' onChange={this.handleChange}
              required />
                    </div>
                    <div class='label-float'>
                        <label for='senha'>Senha</label>
                        <input type='password' id='senha' placeholder='Senha' onChange={this.handleChange} 
                        required/>

                    </div>
                    <div class='justify-center'>
                        <button type="submit" onClick={this.handleClick}>Entrar</button>
                    </div>
                    <div class='justify-center'>
                        <hr />
                    </div>
                    <p>Não tem uma conta? <a href=''>Cadastre-se</a>
                    </p>
                </div>
            </div>
        </body>
    )
}
}
export default Login;