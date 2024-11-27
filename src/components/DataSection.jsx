export const DataSection = () => {
    return (
        <section className="bg-low-dark text-white py-16 px-4 rounded-2xl">
            <div className="max-w-6xl mx-auto">
                <p className="text-3xl md:text-4xl font-bold leading-snug mb-12">
                    La dura vita del freelance spiegata in numeri.
                </p>

                {/* Statistiche */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stat 1 */}
                    <div className="flex items-center">
                        <span className="text-6xl font-bold mr-4">32%</span>
                        <p className="text-gray-400">
                            non trova facilmente nuovi clienti
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-center">
                        <span className="text-6xl font-bold mr-4">25%</span>
                        <p className="text-gray-400">
                            non riesce a trasmettere il proprio valore.
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-center">
                        <span className="text-6xl font-bold mr-4">43%</span>
                        <p className="text-gray-400">
                            non è soddisfatto del proprio network.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};