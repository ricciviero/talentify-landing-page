import { DefaultCard } from "./DeafultCard";

export const CardSection = () => {
    return (
        <>
            <section className="w-full min-h-[400px] py-16 pl-8 pr-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white text-center">
                            Immagina una community di{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                developer
                            </span>{" "}
                            pronta a connettersi con le migliori aziende.
                        </h2>
                        <p className="text-white/80 text-lg max-w-3xl mx-auto">
                            Talentify è molto più di un gruppo Whatsapp: è un ecosistema pensato per valorizzare le tue competenze e aprirti nuove opportunità.
                            Immagina di far parte di una community dove il tuo talento è il protagonista, un luogo in cui puoi connetterti con aziende innovative, collaborare con professionisti del tuo settore e accedere a risorse che ti permettono di crescere e migliorare ogni giorno.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                    <DefaultCard
                        emoticon="🚀"
                        label="Aumenta i tuoi clienti"
                        text="Connettiti con le aziende che cercano un talento come te."
                    />

                    <DefaultCard
                        emoticon="🤝"
                        label="Migliora il tuo network"
                        text="Connettiti con i professionisti del settore e costruisci relazioni durature."
                    />

                    <DefaultCard
                        emoticon="📈"
                        label="Cresci professionalmente"
                        text="Accedi a risorse esclusive per migliorare le tue competenze."
                    />

                </div>
            </section>
        </>
    );
};