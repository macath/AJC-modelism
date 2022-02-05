import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [controlPassword, setControlPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        const passwordConfirmError = document.querySelector(
            ".password-confirm.error"
        );
        passwordConfirmError.innerHTML = "";

        if (password !== controlPassword) {
            if (password !== controlPassword)
                passwordConfirmError.innerHTML =
                    "Les mots de passe ne correspondent pas";

        } else {
            await axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/user/register`,
                data: {
                    email,
                    password,
                },
            })
                .then((res) => {
                    console.log(res);
                    if (res.data.errors) {
                        emailError.innerHTML = res.data.errors.email;
                        passwordError.innerHTML = res.data.errors.password;
                    } else {
                        window.location = "/home";
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <>
            <form action="" onSubmit={handleRegister} id="sign-up-form">
                <label htmlFor="email">Email</label>
                <br />
                <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <div className="email error"></div>

                <br />

                <label htmlFor="password">Mot de passe</label>
                <br />
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <div className="password error"></div>

                <br />

                <label htmlFor="password-conf">Confirmer mot de passe</label>
                <br />
                <input
                    type="password"
                    name="password"
                    id="password-conf"
                    onChange={(e) => setControlPassword(e.target.value)}
                    value={controlPassword}
                />
                <div className="password-confirm error"></div>

                <br />

                <br />
                <input type="submit" value="Valider inscription" />
            </form>
        </>
    );
};

export default SignUpForm;