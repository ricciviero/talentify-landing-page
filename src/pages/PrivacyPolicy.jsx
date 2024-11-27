export const PrivacyPolicy = () => {
    return (
        <div className="bg-low-dark text-white min-h-screen flex items-center justify-center px-6 py-12 rounded-2xl mt-10">
            <div className="max-w-4xl">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Privacy Policy
                </h1>
                <div className="text-gray-300 space-y-6">
                    <p>
                        <span>27 Novembre 2024</span>
                    </p>
                    <h2 className="text-xl font-semibold mt-6">Informazioni che raccogliamo</h2>
                    <p>
                        Non raccogliamo dati personali identificabili dai visitatori del nostro sito. L’unica metrica che monitoriamo riguarda il numero di visualizzazioni delle pagine attraverso strumenti di analisi. Questi dati:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Non includono informazioni personali come nome, email, o indirizzo IP.</li>
                        <li>Sono utilizzati esclusivamente per comprendere le performance del sito e migliorare l’esperienza dell’utente.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Strumenti di Analisi Utilizzati</h2>
                    <p>
                        Per monitorare il traffico del sito, utilizziamo il servizio di analytics integrato di **Vercel**. Questo strumento traccia esclusivamente il numero di visualizzazioni delle pagine senza raccogliere dati personali identificabili.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Collegamenti Esterni</h2>
                    <p>
                        Il nostro sito include un pulsante che consente agli utenti di unirsi a un gruppo su WhatsApp. Tieni presente che:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Quando clicchi sul pulsante, verrai reindirizzato a WhatsApp, che potrebbe raccogliere i tuoi dati in conformità con la loro politica sulla privacy.
                        </li>
                        <li>
                            Ti consigliamo di leggere attentamente la{" "}
                            <a
                                href="https://www.whatsapp.com/legal/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Privacy Policy di WhatsApp
                            </a>{" "}
                            per maggiori dettagli.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Tracciamento e Cookie</h2>
                    <p>
                        Non utilizziamo cookie o altre tecnologie di tracciamento per raccogliere dati personali o monitorare il comportamento degli utenti.
                        Non integriamo strumenti pubblicitari di terze parti o sistemi di retargeting.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Come proteggiamo i tuoi dati</h2>
                    <p>
                        Non essendo raccolti dati personali o sensibili attraverso il nostro sito, non memorizziamo alcuna informazione identificabile nei nostri sistemi.
                        Tuttavia, ci impegniamo a mantenere elevati standard di sicurezza per i servizi che utilizziamo, incluso il monitoraggio statistico delle pagine.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Contatti</h2>
                    <p>
                        Se hai domande sulla nostra Privacy Policy, puoi contattarci all’indirizzo email:{" "}
                        <a href="mailto:riccardo@riccardociviero.com" className="text-blue-500 underline">
                            riccardo@riccardociviero.com
                        </a>.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Modifiche alla Privacy Policy</h2>
                    <p>
                        Potremmo aggiornare questa Privacy Policy per riflettere eventuali modifiche nelle nostre pratiche o nei requisiti legali.
                        Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato.
                    </p>
                </div>
            </div>
        </div>
    );
};