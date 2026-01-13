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
            {/* Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response. */}
            Entrez dans le cercle de l’enchantement et tissez vos mots dans la trame du cosmos. 
            Que vous cherchiez à susciter des collaborations, à percer des mystères ou simplement 
            à partager des récits d’aventure, vos messages sont des parchemins précieux dans ce royaume. 
            Utilisez le formulaire ci‑dessous pour envoyer vos missives à travers le réseau éthéré, 
            et attendez le murmure de la magie en retour.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
};

export default Contact;
