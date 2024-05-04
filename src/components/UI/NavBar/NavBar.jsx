import React from "react";
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { Navbar, Navlink, Container, Nav, Button } from 'react-bootstrap'
import classes from './NavBar.module.css'
import { ADMIN_ROUTE, GAMES_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../../utils/consts";
import { userOutAction } from "../../../store/action-creators/action-creators";
import UserBar from "../UserBar/UserBar";


const NavBar = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.auth)
    const role = useSelector(state => state.user.role)
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(userOutAction())
    }

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light" className={classes.customContainer}>
                <Navbar.Brand
                    style={{cursor:'pointer'}}
                    onClick={() => navigate(SHOP_ROUTE)}>
                    Y-STORE
                </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate(GAMES_ROUTE)}>
                            Мои игры
                        </Nav.Link>
                        
                        <Nav.Link onClick={() => navigate(SHOP_ROUTE)}>
                            Магазин
                        </Nav.Link>
                    </Nav>
                    {isAuth && role === 'ADMIN' && (
                        <Nav className="ml-auto">
                            <Button
                                variant="outline-secondary"
                                style={{ marginRight: '10px' }}
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            <Button
                                variant="outline-secondary"
                                onClick={() => logOut()}
                            >
                                Выйти
                            </Button>
                        </Nav>
                    )}
                    {isAuth && role === 'USER' && (
                        <UserBar/>
                    )}
                    {!isAuth && (
                        <Nav className="ml-auto">
                            <Button variant="outline-secondary"
                                onClick={() => navigate(LOGIN_ROUTE)}
                            >
                                Войти
                            </Button>
                        </Nav>  
                    )}
            </Navbar>
        </div>
      );
}


export default NavBar;