"use client";

import Python from "../../../public/svg/python-svgrepo.svg";
import Node from "../../../public/svg/node-js-svgrepo.svg";
import NextJs from "../../../public/svg/nextjs-fill-svgrepo.svg";
import Tailwind from "../../../public/svg/tailwind-svgrepo.svg";
import TypeScript from "../../../public/svg/typescript-official-svgrepo.svg";
import Django from "../../../public/svg/Django.svg";
import FastApi from "../../../public/svg/FastAPI.svg";
import Docker from "../../../public/svg/Docker.svg";
import Git from "../../../public/svg/Git.svg";
import GitHub_Actions from "../../../public/svg/GitHub Actions.svg";
import GitLab from "../../../public/svg/GitLab.svg";
import Java from "../../../public/svg/Java.svg";
import Spring from "../../../public/svg/Spring.svg";
import Jenkins from "../../../public/svg/Jenkins.svg";
import Jira from "../../../public/svg/Jira.svg";
import Linux from "../../../public/svg/Linux.svg";
import NGINX from "../../../public/svg/NGINX.svg";
import WordPress from "../../../public/svg/WordPress.svg";
import PHP from "../../../public/svg/PHP.svg";
import React from "../../../public/svg/React.svg";
import Bootstrap from "../../../public/svg/icons8-bootstrap.svg";
import Css3 from "../../../public/svg/icons8-css3.svg";
import Hhtml from "../../../public/svg/icons8-html-5.svg";
import Ansible from "../../../public/svg/Ansible.svg";
import Terraformer from "../../../public/svg/icons8-terraformer.svg";

import { Canvas } from "../Canvas/Canvas";
import { useRef } from "react";
import { useFadeFromLeftOnScroll } from "@/Hooks/useFadeFromLeftOnScroll";
import { useFadeFromRightOnScroll } from "@/Hooks/useFadeFromRightOnScroll";

export const StackList = () => {
  const titleBlock = useRef<HTMLDivElement>(null);
  const canvasBlock = useRef<HTMLDivElement>(null);

  useFadeFromLeftOnScroll(titleBlock, 0.2, 1);
  useFadeFromRightOnScroll(canvasBlock, 0.2, 1);

  const iconsArray = [
    { icons: Css3, alt: "CSS3" },
    { icons: Hhtml, alt: "HTML5" },
    { icons: Bootstrap, alt: "Bootstrap" },
    { icons: Tailwind, alt: "Tailwind" },
    { icons: TypeScript, alt: "TypeScript" },
    { icons: React, alt: "React" },
    { icons: NextJs, alt: "NextJs" },
    { icons: Node, alt: "NodeJs" },
    { icons: Python, alt: "Python" },
    { icons: FastApi, alt: "FastAPI" },
    { icons: Django, alt: "Django" },
    { icons: Java, alt: "Java" },
    { icons: Spring, alt: "Spring" },
    { icons: PHP, alt: "PHP" },
    { icons: Docker, alt: "Docker" },
    { icons: NGINX, alt: "NGINX" },
    { icons: GitLab, alt: "GitLab" },
    { icons: Git, alt: "Git" },
    { icons: GitHub_Actions, alt: "GitHub Actions" },
    { icons: Jenkins, alt: "Jenkins" },
    { icons: Linux, alt: "Linux" },
    { icons: WordPress, alt: "WordPress" },
    { icons: Jira, alt: "Jira" },
    { icons: Ansible, alt: "Ansible" },
    { icons: Terraformer, alt: "Terraformer" },
  ];
  return (
    <section className="px-1 py-24 md:pt-28 md:pb-16 sm:px-4 my-14 mx-auto">
      <div ref={titleBlock}>
        <h2 className="text-2xl lg:text-5xl font-bold text-center mt-2 mb-14">
          Mes Stacks Techniques:
        </h2>
      </div>
      <div ref={canvasBlock}>
        <Canvas icons={iconsArray} />
      </div>
    </section>
  );
};
