export default function PolitiqueDeConfidentialitePage() {
  return (
    <main>
      <div className="px-1 md:pt-28 md:pb-16 sm:px-4 lg:px-10 sm:max-w-7xl max-w-7xl mx-auto">
        <section aria-labelledby="politique-confidentialite-content">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h1
              id="politique-confidentialite-content"
              className="text-3xl font-semibold"
            >
              Politique de confidentialité
            </h1>

            <p className="mt-3 text-sm opacity-80">
              Dernière mise à jour :{" "}
              <time dateTime="2026-02-16">16 février 2026</time>
            </p>

            <div className="mt-10 space-y-10">
              <section aria-labelledby="intro">
                <h2 id="intro" className="text-xl font-semibold">
                  1) Objet
                </h2>
                <p className="mt-3 opacity-90">
                  Cette politique de confidentialité explique comment les
                  données personnelles sont traitées lorsque vous utilisez ce
                  site portfolio, notamment via le formulaire de contact.
                </p>
              </section>

              <section aria-labelledby="responsable">
                <h2 id="responsable" className="text-xl font-semibold">
                  2) Responsable du traitement
                </h2>
                <p className="mt-3 opacity-90">
                  Responsable du traitement :{" "}
                  <strong>Adjali Abderahmane</strong>
                  <br />
                  Contact : <strong>abderahmane.adjali@live.fr</strong>
                </p>
              </section>

              <section aria-labelledby="donnees-collectees">
                <h2 id="donnees-collectees" className="text-xl font-semibold">
                  3) Données collectées
                </h2>
                <p className="mt-3 opacity-90">
                  Selon votre usage du site, les catégories de données pouvant
                  être traitées sont :
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 opacity-90">
                  <li>
                    <strong>Données de contact</strong> : nom/prénom (si saisi),
                    email, contenu du message.
                  </li>
                  <li>
                    <strong>Données techniques</strong> : informations
                    nécessaires au chargement/bon fonctionnement du site (ex.
                    journaux techniques standard côté hébergeur).
                  </li>
                  <li>
                    <strong>Cookies/traceurs</strong> : selon les services
                    activés sur le site (voir section Cookies).
                  </li>
                </ul>
              </section>

              <section aria-labelledby="finalites">
                <h2 id="finalites" className="text-xl font-semibold">
                  4) Finalités du traitement
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 opacity-90">
                  <li>Répondre aux demandes envoyées via le formulaire.</li>
                  <li>Assurer le bon fonctionnement et la sécurité du site.</li>
                  <li>
                    Mesurer l’audience et améliorer l’expérience (si un outil
                    d’analyse est utilisé).
                  </li>
                </ul>
              </section>

              <section aria-labelledby="base-legale">
                <h2 id="base-legale" className="text-xl font-semibold">
                  5) Base légale
                </h2>
                <p className="mt-3 opacity-90">
                  Les traitements reposent principalement sur :
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 opacity-90">
                  <li>
                    <strong>Intérêt légitime</strong> : répondre aux messages,
                    assurer la sécurité et le bon fonctionnement du site.
                  </li>
                  <li>
                    <strong>Consentement</strong> : pour les cookies/traceurs
                    non essentiels, le cas échéant.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="prestataires">
                <h2 id="prestataires" className="text-xl font-semibold">
                  6) Prestataires (sous-traitants)
                </h2>
                <p className="mt-3 opacity-90">
                  Le site s’appuie sur des prestataires techniques pouvant
                  traiter certaines données pour le compte du responsable :
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6 opacity-90">
                  <li>
                    <strong>Hébergement</strong> : Vercel (Vercel Inc.).
                  </li>
                  <li>
                    <strong>Formulaire de contact</strong> : EmailJS (envoi des
                    messages).
                  </li>
                </ul>
              </section>

              <section aria-labelledby="conservation">
                <h2 id="conservation" className="text-xl font-semibold">
                  7) Durée de conservation
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 opacity-90">
                  <li>
                    <strong>Messages de contact</strong> : conservés le temps
                    nécessaire au traitement de la demande, puis suppression ou
                    archivage limité si besoin pour le suivi des échanges.
                  </li>
                  <li>
                    <strong>Données techniques</strong> : selon les durées de
                    conservation du prestataire d’hébergement et les besoins de
                    sécurité.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="securite">
                <h2 id="securite" className="text-xl font-semibold">
                  8) Sécurité
                </h2>
                <p className="mt-3 opacity-90">
                  Des mesures techniques et organisationnelles raisonnables sont
                  mises en œuvre pour protéger les données (ex. limitation des
                  accès, bonnes pratiques de sécurité, hébergement chez un
                  prestataire reconnu).
                </p>
              </section>

              <section aria-labelledby="cookies">
                <h2 id="cookies" className="text-xl font-semibold">
                  9) Cookies / traceurs
                </h2>
                <p className="mt-3 opacity-90">
                  Le site peut utiliser des cookies nécessaires au
                  fonctionnement et, selon la configuration, des cookies de
                  mesure d’audience. Vous pouvez gérer les cookies via les
                  paramètres de votre navigateur.
                </p>
              </section>

              <section aria-labelledby="droits">
                <h2 id="droits" className="text-xl font-semibold">
                  10) Vos droits
                </h2>
                <p className="mt-3 opacity-90">
                  Conformément à la réglementation applicable, vous pouvez
                  demander l’accès, la rectification, l’effacement, la
                  limitation ou l’opposition au traitement de vos données,
                  lorsque cela s’applique.
                </p>
                <p className="mt-3 opacity-90">
                  Pour exercer vos droits :{" "}
                  <strong>abderahmane.adjali@live.fr</strong>.
                </p>
              </section>

              <section aria-labelledby="modifications">
                <h2 id="modifications" className="text-xl font-semibold">
                  11) Modifications
                </h2>
                <p className="mt-3 opacity-90">
                  Cette politique peut être mise à jour. La date de “Dernière
                  mise à jour” indique la version en vigueur.
                </p>
              </section>

              <section aria-labelledby="contact">
                <h2 id="contact" className="text-xl font-semibold">
                  12) Contact
                </h2>
                <p className="mt-3 opacity-90">
                  Pour toute question :{" "}
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
