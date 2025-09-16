"use client";
import type React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
// import { motion } from "framer-motion"

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface TemplateParams {
  to_name: string;
  from_name: string;
  reply_to: string;
  message: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,            // ← NEW
    formState: { errors },
  } = useForm<FormData>();

  const sendEmail = async (params: TemplateParams) => {
  const toastId = toast.loading('Sending your message…');

  try {
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:    params.from_name,
        email:   params.reply_to,
        message: params.message,
      }),
    });

    if (!res.ok) throw new Error();

    toast.success('Message sent! I’ll get back to you soon.', { id: toastId });
    reset(); // ← NEW : vide le formulaire uniquement si succès
  } catch {
    toast.error('Something went wrong, please try again.', { id: toastId });
  }
};

  const onSubmit = (data: FormData): void => {
    const templateParams: TemplateParams = {
      to_name: "CodeBucks",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        // onSubmit={handleSubmit(sendEmail)} // on passe directement data
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <input
          //   variants={item}
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 characters long.",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 
          glass-effect custom-btn text-content-change"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}

        <input
          //   variants={item}
          type="email"
          placeholder="email"
          {...register("email", { required: "This field is required!" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50
          glass-effect custom-btn text-content-change"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}

        <textarea
          //   variants={item}
          placeholder="message"
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters",
            },
            minLength: {
              value: 50,
              message: "Message should be more than 50 characters",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50
          glass-effect custom-btn text-content-change"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <input
          //   variants={item}
          value="Cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      custom-btn text-content-change bg-background-btn-contact"
          type="submit"
        />
      </form>
    </>
  );
};

export default Form;
