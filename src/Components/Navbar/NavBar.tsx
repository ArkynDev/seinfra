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
                <Link to="LoginPage"><Button children={`Entrar <LogIn />`} primary /></Link>
            </div>
        </header>
    )
} 