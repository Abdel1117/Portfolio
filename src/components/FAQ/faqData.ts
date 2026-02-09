import { FAQItemData } from "./types";

/**
 * FAQ Data
 * Separation of Concerns: Data is separated from component logic
 * Easy to extend with new questions without modifying component code
 */
export const faqData: FAQItemData[] = [
  {
    id: "1",
    question: "Quels sont les services que vous proposez ?",
    answer:
      "Je propose des services de développement web front-end, incluant la création d'interfaces utilisateur modernes et responsive, l'intégration de designs, et le développement d'applications web avec React, Next.js et TypeScript. Je travaille également sur des projets de géomatique et d'analyse spatiale.",
  },
  {
    id: "2",
    question: "Quelles technologies maîtrisez-vous ?",
    answer:
      "Je maîtrise principalement React, Next.js, TypeScript, Tailwind CSS pour le front-end. J'ai également des compétences en analyse géospatiale, avec des outils comme QGIS et des bibliothèques JavaScript pour la cartographie interactive. Je suis constamment en apprentissage pour rester à jour avec les dernières technologies.",
  },
  {
    id: "3",
    question: "Combien de temps faut-il pour réaliser un projet ?",
    answer:
      "La durée d'un projet dépend de sa complexité et de ses exigences. Un site vitrine simple peut prendre 2-3 semaines, tandis qu'une application web plus complexe peut nécessiter 1-3 mois. Je fournis toujours un calendrier détaillé après l'analyse de vos besoins.",
  },
  {
    id: "4",
    question: "Travaillez-vous en freelance ou en tant qu'employé ?",
    answer:
      "Je suis actuellement étudiant en master de Géoinformatique Appliquée à l'Université de Salzbourg en Autriche, et je suis disponible pour des projets freelance. Je suis également ouvert à des opportunités d'emploi après l'obtention de mon diplôme.",
  },
  {
    id: "5",
    question: "Comment puis-je vous contacter pour un projet ?",
    answer:
      "Vous pouvez me contacter via le formulaire de contact sur mon portfolio, ou directement par email. Je réponds généralement dans les 24-48 heures. N'hésitez pas à me présenter votre projet, même si vous n'avez pas encore tous les détails.",
  },
  {
    id: "6",
    question: "Proposez-vous la maintenance après la livraison ?",
    answer:
      "Oui, je propose des services de maintenance et de support après la livraison du projet. Cela inclut les corrections de bugs, les mises à jour de sécurité, et les modifications mineures. Nous pouvons discuter d'un plan de maintenance adapté à vos besoins.",
  },
];
