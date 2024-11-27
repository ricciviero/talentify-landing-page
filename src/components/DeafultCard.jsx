/* eslint-disable react/prop-types */

export const DefaultCard = ({ emoticon, label, text }) => {
    return (
        <div className="bg-gray-900 w-full max-w-md rounded-3xl shadow-lg p-8 flex items-center gap-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
            {/* Icona */}
            <div className="text-white flex items-center justify-center w-16 h-16">
                <span
                    className="text-4xl"
                    role="img"
                    aria-label={label}
                >
                    {emoticon}
                </span>
            </div>

            {/* Testo */}
            <div>
                <p className="text-xl font-semibold text-gray-100">{label}</p>
                <p className="text-sm text-gray-400 mt-2">
                    {text}
                </p>
            </div>
        </div>
    )
}