"use client";

import Node from "../../../public/svg/node-js-svgrepo.svg";
import React from "../../../public/svg/React.svg";
import Nginx from "../../../public/svg/NGINX.svg";
import Tailwind from "../../../public/svg/tailwind-svgrepo.svg";
import TypeScript from "../../../public/svg/typescript-official-svgrepo.svg";
import Docker from "../../../public/svg/Docker.svg";
import FastApi from "../../../public/svg/FastAPI.svg";
import Jenkins from "../../../public/svg/Jenkins.svg";
import GitLabs from "../../../public/svg/GitLab.svg";
import SQLAlchemy from "../../../public/svg/SQLAlchemy.svg";
import WordPress from "../../../public/svg/WordPress.svg";
import Elementor from "../../../public/icons/elementor.png";

import { ProjectCard } from "@/UI/Card/ProjectCard";

import Adsunga from "../../../public/images/projectsImages/Adsunga.png";
import Cloud_Campus from "../../../public/images/projectsImages/Cloud-campus.png";
import Space_Explorer from "../../../public/images/projectsImages/Space-Explorer.png";
import Secret from "../../../public/images/projectsImages/lock-svgrepo-com.png";

import { useRef } from "react";
import { useFadeFromLeftOnScroll } from "@/Hooks/useFadeFromLeftOnScroll";
import { useFadeFromRightOnScroll } from "@/Hooks/useFadeFromRightOnScroll";
export const MyProject = () => {
  const titleBlock = useRef<HTMLDivElement>(null);
  const gridBlock = useRef<HTMLDivElement>(null);

  useFadeFromLeftOnScroll(titleBlock, 0.2, 1);
  useFadeFromRightOnScroll(gridBlock, 0.2, 1);

  const iconsArray = [
    { icons: Tailwind, alt: "Tailwind" },
    { icons: TypeScript, alt: "TypeScript" },
    { icons: React, alt: "React" },
    { icons: Node, alt: "NodeJs" },
    { icons: Docker, alt: "Docker" },
    { icons: Nginx, alt: "Nginx" },
  ];
  const spaceExplorerIcons = [
    { icons: Tailwind, alt: "Tailwind" },
    { icons: React, alt: "React" },
    { icons: Node, alt: "NodeJs" },
    { icons: Docker, alt: "Docker" },
    { icons: Nginx, alt: "Nginx" },
  ];
  const pecaIconsArray = [
    { icons: Tailwind, alt: "Tailwind" },
    { icons: TypeScript, alt: "TypeScript" },
    { icons: React, alt: "React" },
    { icons: FastApi, alt: "Fast API" },
    { icons: SQLAlchemy, alt: "SQLAlchemy" },
    { icons: Jenkins, alt: "Jenkins" },
    { icons: GitLabs, alt: "GitLabs" },
  ];

  const cloudCampusIconsArray = [
    { icons: WordPress, alt: "WordPress" },
    { icons: Elementor, alt: "Elementor" },
  ];
  return (
    <section className="px-1 md:pt-28 md:pb-16 sm:px-4 lg:px-10 sm:max-w-7xl mx-auto">
      <div ref={titleBlock} className="flex items-center justify-center mb-12">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-green-light mb-6">
          Les projets auxquels j’ai contribué
        </h2>
      </div>

      <div
        ref={gridBlock}
        className=" grid lg:grid-cols-2 lg:grid-rows-2 gap-5"
      >
        <ProjectCard
          image={Secret}
          category={"Full-Stack / DevSecOps"}
          title={"Application interne – Crédit Agricole Assurances"}
          description={
            "Conception et développement d’une application interne visant à automatiser et centraliser des processus métier critiques. Développement de fonctionnalités ayant permis d’augmenter le volume de demandes batch de 65 %, réduction des temps de traitement (de 20s à 3s) et amélioration du suivi projet (80 % des projets à jour). Mise en place de tests unitaires (75–85 % de couverture) et refonte Back-End en appliquant les principes SOLID pour améliorer la maintenabilité."
          }
          icons={pecaIconsArray}
          takeTwoCol={true}
          link={""}
          isLinkNotAvailable={true}
          linkSourceCode={""}
          isLinkSourceCodeNotAvailable={true}
        />
        <ProjectCard
          image={Adsunga}
          category={"Full-Stack + DevOps."}
          title={"Adsunga"}
          description={
            "Développement d’un site vitrine avec système de gestion d’articles via CKEditor et interface d’administration dédiée. Mise en place d’un envoi automatique d’e-mails et d’une pipeline CI/CD avec déploiement sous Nginx."
          }
          icons={iconsArray}
          link="https://adsunga.com"
          isLinkNotAvailable={false}
          linkSourceCode={"https://github.com/Abdel1117/Adsunga_v2"}
          isLinkSourceCodeNotAvailable={false}
        />
        <ProjectCard
          image={Space_Explorer}
          category={"Full-Stack + DevOps."}
          title={"Space-Explorer"}
          description={
            "Application Full-Stack développée dans le cadre d’un projet de fin d’études : modules CRUD, gestion des rôles selon le principe du moindre privilège, forum et intégration de paiements Stripe. Couverture par tests unitaires et mise en place d’une pipeline CI/CD complète."
          }
          icons={spaceExplorerIcons}
          link="https://space-explorer.fr"
          isLinkNotAvailable={false}
          linkSourceCode={"https://github.com/Abdel1117/Space_Explorer_V2"}
          isLinkSourceCodeNotAvailable={false}
        />
        <ProjectCard
          image={Cloud_Campus}
          category={"Front-End / CMS"}
          title={"Cloud Campus"}
          description={
            "Conception d’un site WordPress pour l’École Live Campus avec Elementor. Optimisation SEO et mise en place d’un formulaire d’inscription avec envoi automatique des candidatures vers une boîte e-mail dédiée."
          }
          icons={cloudCampusIconsArray}
          takeTwoCol={true}
          link={"https://cloud-campus.fr"}
          isLinkNotAvailable={false}
          linkSourceCode={""}
          isLinkSourceCodeNotAvailable={true}
        />
      </div>
    </section>
  );
};
