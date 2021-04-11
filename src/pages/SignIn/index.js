import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Logo from "../../assets/android-chrome-512x512.png";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

class SignIn extends Component {
    state = {
        username: "",
        password: "",
        error: ""
    };

    handleSignIn = async e => {
        e.preventDefault();
        const { username, password } = this.state;
        if (!username || !password) {
            this.setState({ error: "Preencha username e senha para continuar!" });
        } else {
            try {
                const response = await api.post("/auth", { username, password });
                login(response.data.access_token);
                this.props.history.push("/app");
            } catch (err) {
                this.setState({
                    error:
                        "Verifique suas credenciais e tente novamente!"
                });
            }
        }
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignIn}>
                    <img src={Logo} alt="SIGO" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="username"
                        placeholder="Username"
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Autenticar</button>
                </Form>
            </Container>
        );
    }
}

export default withRouter(SignIn);