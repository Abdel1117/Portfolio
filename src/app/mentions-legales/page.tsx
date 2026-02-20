export default function MentionsLegalesPage() {
  return (
    <main>
      <div className="px-1 md:pt-28 md:pb-16 sm:px-4 lg:px-10 sm:max-w-7xl max-w-7xl mx-auto">
        <section aria-labelledby="mentions-legales-content">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h1
              id="mentions-legales-content"
              className="text-3xl font-semibold"
            >
              Mentions légales
            </h1>
            <p className="mt-3 text-sm opacity-80">
              Dernière mise à jour :{" "}
              <time dateTime="2026-02-16">16 février 2026</time>
            </p>

            <div className="mt-10 space-y-10">
              <section aria-labelledby="editeur">
                <h2 id="editeur" className="text-xl font-semibold">
                  1) Éditeur du site
                </h2>
                <p className="mt-3 opacity-90">
                  Nom / Prénom : <strong>Adjali Abderahmane</strong>
                  <br />
                  Statut :{" "}
                  <strong>Particulier (site personnel / portfolio)</strong>
                  <br />
                  Adresse :{" "}
                  <strong>
                    Non communiquée (site édité à titre personnel)
                  </strong>
                  <br />
                  Email : <strong>abderahmane.adjali@live.fr</strong>
                </p>
              </section>

              <section aria-labelledby="publication">
                <h2 id="publication" className="text-xl font-semibold">
                  2) Directeur de la publication
                </h2>
                <p className="mt-3 opacity-90">
                  <strong>Adjali Abderahmane</strong>
                </p>
              </section>

              <section aria-labelledby="hebergeur">
                <h2 id="hebergeur" className="text-xl font-semibold">
                  3) Hébergement
                </h2>
                <p className="mt-3 opacity-90">
                  Hébergeur : <strong>Vercel Inc.</strong>
                  <br />
                  Adresse :{" "}
                  <strong>
                    440 N Barranca Ave #4133, Covina, CA 91723, USA
                  </strong>
                  <br />
                  Site web :{" "}
                  <a
                    className="underline underline-offset-4"
                    href="https://vercel.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://vercel.com
                  </a>
                </p>
              </section>

              <section aria-labelledby="propriete">
                <h2 id="propriete" className="text-xl font-semibold">
                  4) Propriété intellectuelle
                </h2>
                <p className="mt-3 opacity-90">
                  L’ensemble des contenus présents sur ce site (textes, images,
                  logos, éléments graphiques, code, etc.) est protégé par le
                  droit d’auteur et, le cas échéant, par le droit des marques.
                  Toute reproduction, représentation, modification, publication,
                  adaptation, totale ou partielle, quel que soit le moyen ou le
                  procédé utilisé, est interdite sans autorisation préalable de
                  l’éditeur, sauf exceptions prévues par la loi.
                </p>
              </section>

              <section aria-labelledby="responsabilite">
                <h2 id="responsabilite" className="text-xl font-semibold">
                  5) Responsabilité
                </h2>
                <p className="mt-3 opacity-90">
                  L’éditeur s’efforce de fournir sur le site des informations
                  aussi précises que possible. Toutefois, il ne pourra être tenu
                  responsable des omissions, des inexactitudes et des carences
                  dans la mise à jour, qu’elles soient de son fait ou du fait
                  des tiers partenaires.
                </p>
              </section>

              <section aria-labelledby="donnees">
                <h2 id="donnees" className="text-xl font-semibold">
                  6) Données personnelles
                </h2>
                <p className="mt-3 opacity-90">
                  Les informations éventuellement recueillies via le formulaire
                  de contact (ex. nom, email, contenu du message) sont utilisées
                  uniquement pour répondre à votre demande. Elles ne sont pas
                  vendues ni cédées à des tiers.
                </p>

                <ul className="mt-3 list-disc space-y-2 pl-6 opacity-90">
                  <li>
                    <strong>Finalité</strong> : répondre aux demandes envoyées
                    via le formulaire.
                  </li>
                  <li>
                    <strong>Base légale</strong> : intérêt légitime (répondre
                    aux sollicitations) et/ou mesures précontractuelles si
                    applicable.
                  </li>
                  <li>
                    <strong>Prestataire</strong> : le formulaire s’appuie sur{" "}
                    <strong>EmailJS</strong> pour l’envoi des messages.
                  </li>
                  <li>
                    <strong>Durée de conservation</strong> : le temps nécessaire
                    au traitement de la demande (puis suppression/archivage
                    limité si besoin pour le suivi).
                  </li>
                  <li>
                    <strong>Exercice des droits</strong> : vous pouvez demander
                    l’accès, la rectification ou la suppression en contactant :{" "}
                    <strong>abderahmane.adjali@live.fr</strong>.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="cookies">
                <h2 id="cookies" className="text-xl font-semibold">
                  7) Cookies
                </h2>
                <p className="mt-3 opacity-90">
                  Le site peut utiliser des cookies/traceurs nécessaires au
                  fonctionnement et/ou à la mesure d’audience. Vous pouvez
                  configurer votre navigateur pour refuser les cookies ou être
                  alerté lors de leur dépôt.
                </p>
              </section>

              <section aria-labelledby="contact">
                <h2 id="contact" className="text-xl font-semibold">
                  8) Contact
                </h2>
                <p className="mt-3 opacity-90">
                  Pour toute question, vous pouvez écrire à :{" "}
                  <strong>abderahmane.adjali@live.fr</strong>
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
