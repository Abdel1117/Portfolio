export const ConclusionBlock = () => {
  const handleStartConversation = () => {
    // Ajouter ici la logique pour démarrer une conversation (contact, email, etc.)
    console.log("Start conversation");
  };

  return (
    <section className="relative  max-w-7xl px-4 md:pt-28 md:pb-16 sm:px-6 lg:px-10 mx-auto overflow-hidden outline-2">
      <div className="relative w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Contenu texte */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white-light mb-4">
            Vous avez un Projet en tête ?
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-light mb-6">
            Construisons le ensemble...
          </h3>
          <p className="text-lg md:text-xl text-black dark:text-gray-light max-w-2xl">
            De la conception à la réalisation, je suis là pour vous aider à
            créer des expériences exceptionnelles qui laissent une impression
            durable
          </p>
        </div>

        {/* Bouton CTA */}
        <div className="flex-shrink-0">
          <button
            onClick={handleStartConversation}
            className="px-8 py-4 bg-green-light hover:bg-green-light/80 text-slate-light font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:cursor-pointer"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};
