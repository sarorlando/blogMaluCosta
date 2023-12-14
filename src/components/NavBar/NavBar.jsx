//RRD imports
import { NavLink } from "react-router-dom"
//RRD imports

import { BoltIcon, ChartPieIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { NavBarStyled } from "./NavBar.style"


export const NavBar = () => {

    return (
        <NavBarStyled >
            <nav style={{
                backgroundColor: "#3A4118",
                height: "80px",
                width: "100vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                alignItems: "center",
                position: "fixed",
                padding: "0px 40px"
            }}>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "space-between",
                    gap: "10px"
                }}>
                    <div>
                        <a className="linkNav" href="#mainContent">
                            <span>Home</span>
                        </a>
                    </div>

                    <div>
                        <a className="linkNav" href="#sobre-mim">
                            <span>Sobre mim</span>
                        </a>
                    </div>
                    <div>
                        <a className="linkNav" href="#contatos">
                            <span>Contatos</span>
                        </a>
                    </div>
                    <div>
                        <NavLink
                            to="/blogMaluCosta"
                            aria-label="Go to blog"
                            className="nav--item"
                        >
                            <span>Blog</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/login"
                            aria-label="Go to login"
                            className="nav--item nav-login"
                        >
                            <span className="loginbtn">Login</span>
                        </NavLink>
                    </div>

                </div>
            </nav>
        </NavBarStyled >
    )
}