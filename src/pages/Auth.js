import React, { useState } from "react";
import { Button, Card, Container, Form} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { registration } from "../http/userAPI";
import { login } from "../http/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { userAuthAction } from "../store/action-creators/action-creators";


const Auth = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            dispatch(userAuthAction(data.role))
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

    return ( 
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 56}}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">

                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        type="password"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                        {isLogin ? 
                            <span style={{ display: "flex", alignItems: "center" }}>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{ marginLeft: "5px"}}>Зарегистрируйся</NavLink>
                            </span>
                        :
                            <span style={{ display: "flex", alignItems: "center" }}>
                                Есть аккаунт <NavLink to={LOGIN_ROUTE} style={{ marginLeft: "5px"}}>Войдите</NavLink>
                            </span>
                        }
                        <Button
                            variant="outline-secondary"
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регирстрация'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
     );
}
 
export default Auth;