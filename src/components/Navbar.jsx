import { DefaultButton } from "./DefaultButton";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <div className="bg-dark flex justify-between items-center px-4 mx-auto max-w-screen-xl">

                <div className="items-center flex">
                    <Link to="/">
                        <img
                            src="../public/icon.png"
                            alt="Talentify"
                            className="w-10 h-10 mr-2"
                        />
                    </Link>
                    <Link to="/">
                        <h1 className="text-2xl font-bold"> Talentify </h1>
                    </Link>
                </div>

                <div className="items-end flex-row">
                    <DefaultButton
                        label="Prenota una call"
                        onClick={() => {
                            window.open("https://cal.com/ricciviero/30min", "_blank", "noopener,noreferrer");
                        }}
                    />
                </div>

            </div>
        </nav>
    );
};