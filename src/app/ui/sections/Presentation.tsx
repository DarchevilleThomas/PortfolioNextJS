const Presentation = () => {

    return (
        <section id="presentation" className="bg-dark-light w-full h-screen flex flex-col md:flex-row justify-center items-center gap-10 p-6">
            <div className="accueil-contenu max-w-lg text-center md:text-left">
                <h3 className="text-3xl font-bold">Bonjour, je m'appelle</h3>
                <h1 className="text-5xl font-bold text-primary mt-2">Thomas Darcheville</h1>
                <h3 className="text-3xl font-bold mt-4">Je suis étudiant dans le domaine de l'<span
                    className="text-primary">informatique</span></h3>
                <p className="text-lg mt-4 leading-relaxed">
                    Actuellement en 2ème année de BUT informatique à l'IUT de Lens, je suis activement à la recherche
                    d'une alternance pour janvier 2024.
                </p>

                <div className="social-media flex justify-center md:justify-start mt-6 space-x-4">
                    <a href="https://linkedin.com/in/thomas-darcheville" target="_blank"
                       className="w-12 h-12 flex justify-center items-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition">
                        <i className="bx bxl-linkedin text-2xl"></i>
                    </a>
                    <a href="https://github.com/DarchevilleThomas" target="_blank"
                       className="w-12 h-12 flex justify-center items-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition">
                        <i className="bx bxl-github text-2xl"></i>
                    </a>
                    <a href="mailto:darcheville.toma@gmail.com" target="_blank"
                       className="w-12 h-12 flex justify-center items-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition">
                        <i className="bx bxl-gmail text-2xl"></i>
                    </a>
                </div>

                <a href="/resources/CV-Darcheville-Thomas.pdf"
                   className="inline-block mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-none transition"
                   download="">
                    Télécharger mon CV
                </a>
            </div>

            <div className="accueil-photo">
                <img src="/images/photo.png" alt="Photo Accueil" className="w-80 rounded-full object-cover" />
            </div>
        </section>

    );
};

export default Presentation;