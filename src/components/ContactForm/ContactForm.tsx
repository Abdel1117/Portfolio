"use client";

import { useState } from "react";
import Image from "next/image";
import Envelope from "../../../public/images/contact-icon.png";
import { useSendContactEmail } from "@/Hooks/useSendContactEmail";
type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export const ContactForm = () => {
  const { send, status, error, reset } = useSendContactEmail();

  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const isSubmitting = status === "loading";

  const validate = (values: FormData): FormErrors => {
    const next: FormErrors = {};
    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    if (!name) next.name = "Le nom est requis.";
    else if (name.length < 2)
      next.name = "Le nom doit contenir au moins 2 caractères.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) next.email = "L'email est requis.";
    else if (!emailRegex.test(email)) next.email = "L'email n'est pas valide.";

    if (!message) next.message = "Le message est requis.";
    else if (message.length < 10)
      next.message = "Le message doit contenir au moins 10 caractères.";

    return next;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }) as FormData);

    // enlève le message success/error dès qu'on retape
    reset();

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const ok = await send({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (ok) {
      setData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };
  return (
    <section className=" max-w-7xl px-1 pt-28 pb-16 sm:px-4 lg:px-10 mt-26 justify-items-center gap-5 mx-auto flex md:flex-nowrap flex-wrap ">
      <div className="rounded-lg overflow-hidden md:mr-10 p-1 relative">
        <div className="w-full ">
          <h2 className="text-center md:text-left text-3xl md:text-5xl lg:text-6xl font-bold text-green-light mb-6 ">
            Créons des solutions ensemble
          </h2>
        </div>
        <div className="relative flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 w-full">
          <div className="flex justify-center items-center min-w-[150px] md:min-w-[200px]  rounded-full">
            <div className="relative overflow-hidden">
              <Image
                src={Envelope}
                alt="Image d'une envelope pour raison décorative"
                className="rounded-full transition-all duration-300 shadow-sm border-amber-300  border-4"
              />
            </div>
          </div>
          <div>
            <p className="text-center md:text-left text-gray-light dark:text-white text-xl font-bold mb-4">
              Transformons votre idée en un produit concret grâce à une
              expérience utilisateur soignée, une ingénierie robuste et une
              stratégie de lancement conçue pour maximiser son impact.
            </p>
            <p className="text-center md:text-left text-gray-light dark:text-white text-base">
              Parlons de votre prochain grand projet!
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex-col md:ml-auto w-full p-4 md:p-8 mt-8 md:mt-0 border-3 border-amber-300 rounded-xl"
      >
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Message envoyé.
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            Erreur lors de l’envoi. Réessayez.
          </div>
        )}

        <div className="relative mb-8">
          <div className="mb-3">
            <label
              htmlFor="name"
              className="leading-7 mb-6 text-md text-gray-600 dark:text-white font-semibold"
            >
              Votre Nom
            </label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            aria-label="Entrer votre nom"
            placeholder="Entrer votre nom"
            aria-invalid={Boolean(errors.name)}
            className={`w-full bg-white dark:bg-[#020007] rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none dark:text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
              errors.name ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="relative mb-8">
          <div className="mb-3">
            <label
              htmlFor="email"
              className="leading-7 text-md text-gray-600 dark:text-white font-semibold"
            >
              Votre Email
            </label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            aria-label="Entrer votre email"
            placeholder="Entrer votre email"
            aria-invalid={Boolean(errors.email)}
            className={`w-full bg-white dark:bg-[#020007] rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none dark:text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out ${
              errors.email ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative mb-8">
          <div className="mb-3">
            <label
              htmlFor="message"
              className="leading-7 text-md text-gray-600 dark:text-white font-semibold"
            >
              Votre Messages
            </label>
          </div>
          <textarea
            id="message"
            name="message"
            value={data.message}
            onChange={handleChange}
            aria-label="Comment puis-je vous aidez ?"
            placeholder="Comment puis-je vous aidez"
            aria-invalid={Boolean(errors.message)}
            className={`w-full bg-white dark:bg-[#020007] rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-lg outline-none dark:text-white py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${
              errors.message ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-white bg-green-light border-0 py-2 px-6 focus:outline-none hover:scale-125 rounded text-lg duration-350 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </section>
  );
};
