import type { Metadata } from "next";
import type { JSX } from "react/jsx-runtime";
import Form from "@/app/components/contact/Form";
import BackgroundHome from "@/app/components/BackgroundHome";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = (): JSX.Element => {
  return (
    <>
      <BackgroundHome />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            {/* summon the wizard */}
            {/* Send a message */}
            Envoyer un message
          </h1>
          <p className="text-center font-light text-sm xs:text-base text-content-change">
            Vous avez un projet en tête ou des besoins spécifiques ? Je serais ravi d'échanger avec vous pour en discuter. À l'écoute de toutes vos propositions de collaboration — que ce soit pour une mission freelance, hybride ou stage, ou toute autre opportunité — je m'engage à vous apporter des solutions adaptées à vos attentes. N'hésitez pas à me contacter via le formulaire ci-dessous ou par e-mail. Au plaisir d'échanger avec vous !
          </p>
        </div>
        <Form />
      </article>
    </>
  );
};

export default Contact;
