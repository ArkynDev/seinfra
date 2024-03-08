import { Link } from "react-router-dom"

import { LogIn } from 'lucide-react';

import { Button } from "../ui/Button";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <header>
            <p>Seinfra</p>
            <div>
                <nav>
                    <ul>
                        <Link to="/"><li>Inicio</li></Link>
                    </ul>
                </nav>
                <Link className="nav-link" to="LoginPage">
                    <Button 
                        aditionalStyle="login-nav-btn" 
                        children="Entrar"
                        type="button"
                        icon={<LogIn />} 
                        primary 
                    />
                </Link>
            </div>
        </header>
    )
} 