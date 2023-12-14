import { NavBar } from "../../components/NavBar/NavBar"
import { LandingPageStyled } from "./LandingPage.style"
import { NavLink } from "react-router-dom"
//assets
import fotoLP from "../../assets/fotoLP.jpg"
import ornament from "../../assets/ornament.svg"
import { AtSymbolIcon, EnvelopeIcon, GlobeAltIcon, PhoneIcon } from "@heroicons/react/24/solid"

const LandingPage = () => {
    return (


        <LandingPageStyled className="lpContainer">

            <NavBar />

            <div>
                <div id="mainContent" className="mainContent">

                    <div className="lpFoto">
                        <img src={fotoLP} alt="" />
                    </div>
                    <div className="title">
                        <div>
                            <h1 className="MaluCosta">Malu Costa</h1>
                            <h3 className="Nutricionista">Nutricionista</h3>
                        </div>
                        <div>
                            <NavLink
                                to="/blogMaluCosta"
                                aria-label="Go to blog"
                                className="blog-btn">
                                Acesse meu blog
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="divider">
                    <img className="ornament" src={ornament} alt="" />
                </div>

                <div id="sobre-mim" className="about">
                    <div className="titleAbout">
                        <h1>Sobre mim</h1>
                    </div>
                    <div className="aboutText">
                        <p>
                            Malu Costa, celebrou sua graduação em Nutrição pela Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM) em 2022. Agora, como nutricionista, Malu está empenhada em aplicar suas habilidades recém-adquiridas para orientar pacientes na conquista de metas específicas de saúde por meio de práticas alimentares adequadas.
                        </p>
                        <p>
                            Profissional dedicada e entusiasta, Malu Costa busca criar um impacto positivo na vida das pessoas através de sua orientação nutricional de qualidade. Sua formação na UFVJM a equipou para abordar desafios nutricionais complexos, destacando-se não apenas por sua competência técnica, mas também por sua paixão em ajudar os outros a alcançar um estilo de vida mais saudável.
                        </p>
                    </div>
                </div>

                <div className="divider">
                    <img className="ornament" src={ornament} alt="" />
                </div>

                <div id="contatos" className="about">
                    <div className="titleAbout">
                        <h1>Contatos</h1>
                        <p className="Subtitle">
                            Entre em contato comigo
                        </p>
                    </div>
                    <div className="SocialsContainer">
                        <div className="bloco">
                            <div className="blocoContent">
                                <span className="blocoContentTitle">Facebook</span>
                                <div className="blocoContentIcon">
                                    <GlobeAltIcon width={20} />
                                    /malucostanutricionista
                                </div>
                            </div>
                            <div className="blocoContent">
                                <span className="blocoContentTitle">E-mail</span>
                                <div className="blocoContentIcon">
                                    <EnvelopeIcon width={20} />
                                    malucosta.nutri@gmail.com
                                </div>
                            </div>
                        </div>

                        <div className="bloco">
                            <div className="blocoContent">
                                <span className="blocoContentTitle">Instagram</span>
                                <div className="blocoContentIcon">
                                    <AtSymbolIcon width={20} />
                                    malucostanutri
                                </div>
                            </div>

                            <div className="blocoContent">
                                <span className="blocoContentTitle">Telefone</span>
                                <div className="blocoContentIcon">
                                    <PhoneIcon width={20} />
                                    {'(38) 9 9999-9999'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <p>Copyright ©2023 | by <a className="footerA" href="https://waspiderdev.netlify.app/">Waspider</a></p>

                </div>
            </div>



        </LandingPageStyled>


    )

}

export default LandingPage