import { FAQItemData } from "./types";

/**
 * FAQ Data
 * Separation of Concerns: Data is separated from component logic
 * Easy to extend with new questions without modifying component code
 */
export const faqData: FAQItemData[] = [
  {
    id: "1",
    question: "Recherchez-vous un CDI ?",
    answer:
      "Oui, je recherche une opportunité en CDI, idéalement sur un poste full-stack avec une forte sensibilité cybersécurité (Security by Design).",
  },
  {
    id: "2",
    question: "Êtes-vous mobile géographiquement ?",
    answer:
      "Je ne suis pas ouvert à une mobilité hors Île-de-France. Je suis ouvert à un modèle hybride ou remote selon l’organisation.",
  },
  {
    id: "3",
    question: "Quelle est votre disponibilité ?",
    answer: "Je suis disponible immédiatement pour démarrer.",
  },
  {
    id: "4",
    question: "Quels services / missions pouvez-vous prendre en charge ?",
    answer:
      "Développement full-stack : interfaces web modernes, intégration, API, base de données, authentification/autorisation, optimisation des performances, et mise en production (avec une approche sécurité dès la conception).",
  },
  {
    id: "5",
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "TypeScript, React, Next.js, Tailwind CSS, Bootstrap, Node.js, FastAPI, MySQL, MongoDB, PHP. Côté infra/ops : Nginx. Côté CI/CD : Jenkins, CircleCI (et pratiques d’automatisation build/test/deploy).",
  },
  {
    id: "6",
    question: "Quelle est votre approche en cybersécurité ?",
    answer:
      "Security by Design : bonnes pratiques OWASP, validation des entrées, gestion des secrets, contrôle d’accès, durcissement côté serveur, revue des risques, et attention particulière à la sécurité dans les pipelines CI/CD.",
  },
  {
    id: "7",
    question: "Êtes-vous à l’aise avec la mise en production et la CI/CD ?",
    answer:
      "Oui. Je peux intervenir sur la configuration et l’amélioration de pipelines (lint/tests/build/deploy), et sur les sujets de déploiement côté serveur (ex : Nginx) pour des releases plus fiables.",
  },
  {
    id: "8",
    question: "Proposez-vous de la maintenance / support après livraison ?",
    answer:
      "Oui : corrections de bugs, mises à jour, durcissement sécurité, améliorations mineures et accompagnement selon un plan défini.",
  },
  {
    id: "9",
    question: "Comment vous contacter ?",
    answer:
      "Via le formulaire de contact du portfolio ou par email. Je réponds généralement sous 24 à 48 heures.",
  },
];