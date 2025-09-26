import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import InvalidToken from "@/components/set-password/InvalidToken";

const validationSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
  confirmPassword: z.string().nonempty("Confirm password cannot be empty"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});

export default function SetPassword() {
  const [loading, setLoading] = useState(true);
  const [tokenIsInvalid, setTokenIsInvalid] = useState(true);
  const [success, setSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  
  const form = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const endpointsFunctions = {
    verifyToken: async (userId: string, token: string) =>
      axios.post(`https://api.kuditime.com/api/auth/verify-otp`, {
        userId: userId,
        otp: token,
      }),
    setNewPassword: async (userId: string, token: string, password: string) =>
      axios.post(`https://api.kuditime.com/api/auth/set-password`, {
        userId: userId,
        token: token,
        password,
      }),
  };

  const handleVerifyToken = useCallback(
    async (userId: string, token: string) => {
      try {
        await endpointsFunctions.verifyToken(userId, token);
        setTokenIsInvalid(false);
      } catch (error) {
        setTokenIsInvalid(true);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleSetNewPassword = async (userId: string, token: string, password: string) => {
    setLoading(true);
    try {
      await endpointsFunctions.setNewPassword(userId, token, password);
      setSuccess(true);
      setTokenIsInvalid(false);
    } catch (error) {
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = searchParams.get("token");
    const userId = searchParams.get("userId");
    
    if (token && userId) {
      handleVerifyToken(userId, token);
    } else {
      setLoading(false);
    }
  }, [searchParams, handleVerifyToken]);

  const onSubmit = (data: z.infer<typeof validationSchema>) => {
    const token = searchParams.get("token");
    const userId = searchParams.get("userId");
    if (userId && token) {
      handleSetNewPassword(userId, token, data.password);
    }
  };

  if (loading) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="inline-block bg-card p-6 rounded-lg shadow-lg max-w-sm">
          <div role="status" className="flex items-center">
            <svg
              className="w-8 h-8 mr-2 text-muted-foreground animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span>Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (tokenIsInvalid) {
    return <InvalidToken />;
  }

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="inline-block bg-card p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <div className="text-center">
          <img
            src="/src/assets/kudilogo.png"
            style={{marginTop: -40 , marginBottom: -30}}
            alt="Kuditime Logo"
            className="inline max-w-full h-auto w-[120px] "
          />
        </div>

        {success ? (
          <div className="bg-green-100 border-l-4 border-green-500 rounded text-green-900 px-4 py-3 shadow-md">
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-green-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Success</p>
                <p className="text-sm">
                  Your password has been reset successfully, you can now login
                  with the new password on your mobile app.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
