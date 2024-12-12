import { motion } from 'framer-motion'
import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

export const LogInCard = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signIn({
                email,
                password,
            });

            if (error) throw error;

            console.log("Login effettuato con successo", data);
            navigate('/admin-dashboard');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto"
        >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold text-white">
                        Benvenuto
                    </h1>
                    <p className="text-gray-400 mt-2">Accedi al tuo account</p>
                </motion.div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                            placeholder="Inserisci la tua email"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                            placeholder="Inserisci la tua password"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500 bg-white/5"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
                                Ricordami
                            </label>
                        </div>
                        <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                            Password dimenticata?
                        </a>
                    </motion.div>

                    <motion.button
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-3 px-4 bg-talentify text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                        {loading ? 'Accedi...' : 'Accedi'}
                    </motion.button>
                    {error && (
                        <p className="mt-2 text-center text-red-500 text-sm">{error}</p>
                    )}

                </form>


            </div>
        </motion.div>
    )
}