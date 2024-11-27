import { DefaultButton } from "./DefaultButton";


export const Navbar = () => {
    return (
        <nav>
            <div className="bg-dark flex justify-between items-center px-4 mx-auto max-w-screen-xl">

                <div className="items-center flex">
                    <img
                        src="../public/icon.png"
                        alt="Talentify"
                        className="w-10 h-10 mr-2"
                    />
                    <h1 className="text-2xl font-bold"> Talentify </h1>
                </div>

                <div className="items-end flex-row">
                    <DefaultButton
                        label="Prenota una demo"
                    />

                </div>

            </div>






        </nav>
    );
};