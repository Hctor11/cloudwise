"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormType = "sign-in" | "sign-up";

const AuthForm = ({ type }: { type: FormType }) => {

  const AuthFormSchema = z.object({
    email: z.string().email(),
    username:
    type === "sign-up"
        ? z.string().min(2).max(50)
        : z.string().optional(),
  });


  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof AuthFormSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
          <h1 className="form-title">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form-label">User Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter an username" {...field} />
                  </FormControl>
                  <FormMessage className="shad-form-message" />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form-label">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>

                <FormMessage className="shad-form-message" />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-brand" disabled={isLoading}>
            {type === "sign-in" ? "Sign In" : "Sign Up"}

            {isLoading && (
              <Image
                src="loading.svg"
                alt="loader"
                width={24}
                height={24}
                className="ml-2 animate-spin"
              />
            )}
          </Button>

          {errorMessage && (
            <p className="error-message" role="alert">
              *{errorMessage}
            </p>
          )}

          <div className="body-2 gap-1 text-gray-500 flex justify-center">
            <p>
              {type === "sign-in"
                ? "Don't have an account? "
                : "Already have an account? "}
            </p>
          <Link className="text-brand" href={type === "sign-in" ? "/sign-up" : "/sign-in"}>
          {" "}
          {type === "sign-in" ? " Sign Up" : " Sign In"}
            </Link>
          </div>


        </form>
      </Form>
    </>
  );
};

export default AuthForm;
