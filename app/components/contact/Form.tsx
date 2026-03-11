"use client";

import type React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('Contact.form');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const sendEmail = async (params: TemplateParams) => {
    const toastId = toast.loading(t('toast.sending'));

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: params.from_name,
          email: params.reply_to,
          message: params.message,
        }),
      });

      if (!res.ok) throw new Error();

      toast.success(t('toast.success'), { id: toastId });
      reset();
    } catch {
      toast.error(t('toast.error'), { id: toastId });
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
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <input
          type="text"
          placeholder={t('name')}
          {...register("name", {
            required: t('errors.required'),
            minLength: {
              value: 3,
              message: t('errors.nameMinLength'),
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 
          glass-effect custom-btn text-content-change"
        />
        {errors.name && (
          <span className="inline-block self-start text-red-500">
            {errors.name.message}
          </span>
        )}

        <input
          type="email"
          placeholder={t('email')}
          {...register("email", { required: t('errors.required') })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50
          glass-effect custom-btn text-content-change"
        />
        {errors.email && (
          <span className="inline-block self-start text-red-500">
            {errors.email.message}
          </span>
        )}

        <textarea
          placeholder={t('message')}
          {...register("message", {
            required: t('errors.required'),
            maxLength: {
              value: 500,
              message: t('errors.messageMaxLength'),
            },
            minLength: {
              value: 50,
              message: t('errors.messageMinLength'),
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50
          glass-effect custom-btn text-content-change"
        />
        {errors.message && (
          <span className="inline-block self-start text-red-500">
            {errors.message.message}
          </span>
        )}

        <input
          value={t('submit')}
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