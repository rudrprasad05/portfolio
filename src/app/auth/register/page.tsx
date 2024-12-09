"use client";

import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSession } from "@/hooks/useSession";

const loginSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const { login, register: registerUser } = useSession();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      //   login(data);
      registerUser(data);
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Unexpected error occurred");
    }
  };

  return (
    <div className="w-full h-full grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full px-48"
      >
        <div>
          <h1 className="text-xl">Login</h1>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            //   type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input id="name" placeholder="Name" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Page;
