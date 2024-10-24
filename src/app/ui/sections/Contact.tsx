'use client';

const Contact = () => {

    return (
        <div id="contact" className="min-h-screen w-full bg-dark-light flex flex-col items-center pt-28">
            <p className="text-3xl lg:text-5xl md:text-4xl font-bold">Me <span className="text-primary">contacter</span></p>

            <div className="w-full flex-1 flex justify-center items-center">
                <form action="https://formspree.io/f/mzblkaok" method="POST" className="flex-1 max-w-[80%] md:max-w-3xl mx-auto space-y-8">
                    <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                        <input
                            type="text"
                            name="nom"
                            placeholder="NOM Prénom"
                            className="w-full md:w-1/2 p-4 rounded-lg text-lg border border-dark focus:outline-none focus:ring-2 focus:ring-primary bg-dark"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Adresse e-mail"
                            className="w-full md:w-1/2 p-4 rounded-lg text-lg border border-dark focus:outline-none focus:ring-2 focus:ring-primary bg-dark"
                            required
                        />
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                        <input
                            type="number"
                            name="telephone"
                            placeholder="Numéro de téléphone"
                            className="w-full md:w-1/2 p-4 rounded-lg border text-lg border-dark focus:outline-none focus:ring-2 focus:ring-primary bg-dark spinner"
                        />
                        <input
                            type="text"
                            name="objet"
                            placeholder="Objet"
                            className="w-full md:w-1/2 p-4 rounded-lg  text-lg border-dark focus:outline-none focus:ring-2 focus:ring-primary bg-dark"
                        />
                    </div>

                    <textarea
                        name="message"
                        rows={6}
                        placeholder="Votre message"
                        className="w-full p-4 rounded-lg border text-lg border-dark focus:outline-none focus:ring-2 focus:ring-primary bg-dark resize-none"
                        required
                    ></textarea>

                    <input
                        type="submit"
                        value="Envoyer"
                        className="w-full bg-primary text-white font-semibold p-4 rounded-lg cursor-pointer shadow-[0_0_1rem] shadow-primary hover:shadow-none transition duration-300"
                    />
                </form>
            </div>
        </div>
    );
};

export default Contact;