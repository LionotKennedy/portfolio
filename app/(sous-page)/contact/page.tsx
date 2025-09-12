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
            Send a message
          </h1>
          <p className="text-center font-light text-sm xs:text-base text-content-change">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
};

export default Contact;
