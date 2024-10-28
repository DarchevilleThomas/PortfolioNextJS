import Image from "next/image";

const Presentation = () => {

    return (
        <div id="presentation" className="min-h-screen flex flex-col">
            {/* Permet de combler l'emplacement de la navbar */}
            <div className="h-16 py-12" />

            <section
                className="flex-grow w-full h-full flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-10 p-4 md:p-6">
                <div className="text-center lg:text-left">
                    <h3 className="text-3xl lg:text-6xl font-bold">Bonjour, je m'appelle</h3>
                    <h1 className="text-5xl lg:text-8xl font-bold text-primary mt-2">Thomas Darcheville</h1>
                    <h3 className="text-3xl lg:text-6xl font-bold mt-4">
                        Je suis <span className="text-primary">développeur web.</span>
                    </h3>
                    <p className="text-lg lg:text-2xl mt-4 leading-relaxed">
                        Actuellement en 3ème année de BUT informatique à l'IUT de Lens en alternance chez Primever.
                    </p>

                    {/* Réseaux sociaux */}
                    <div className="social-media flex justify-center lg:justify-start mt-6 space-x-4">
                        <a href="https://linkedin.com/in/thomas-darcheville" target="_blank"
                           className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 className="w-5 h-5 md:w-6 md:h-6 fill-current">
                                <path fill="currentColor"
                                      d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                            </svg>
                        </a>

                        <a href="https://github.com/DarchevilleThomas" target="_blank"
                           className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                 className="w-5 h-5 md:w-6 md:h-6">
                                <path
                                    d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.599.111.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.761-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.305-.536-1.53.117-3.18 0 0 1.008-.322 3.3 1.23a11.471 11.471 0 013.003-.403c1.02.004 2.048.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.65.242 2.875.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.371.814 1.103.814 2.222 0 1.606-.014 2.9-.014 3.293 0 .32.218.694.826.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        <a href="mailto:darcheville.toma@gmail.com" target="_blank"
                           className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 className="w-5 h-5 md:w-6 md:h-6 fill-current">
                                <path fill="currentColor"
                                      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64L12 9.548l6.545-4.91l1.528-1.145C21.69 2.28 24 3.434 24 5.457" />
                            </svg>
                        </a>
                    </div>

                    {/* Bouton de téléchargement du CV */}
                    <a href="/resources/CV-Darcheville-Thomas.pdf"
                       className="inline-block mt-6 px-8 py-4 bg-primary text-white lg:text-xl font-semibold rounded-full shadow-[0_0_1rem] shadow-primary hover:shadow-none transition lg:tracking-widest"
                       download="">
                        Télécharger mon CV
                    </a>
                </div>

                {/* Photo de profil */}
                <div>
                    <Image src="/images/photo.svg" alt="Photo Accueil" width={100} height={100}
                         className="w-40 md:w-60 lg:w-80 rounded-full object-cover" />
                </div>
            </section>
        </div>
    );
};

export default Presentation;
