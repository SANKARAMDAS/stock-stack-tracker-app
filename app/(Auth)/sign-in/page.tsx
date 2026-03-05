'use client'
import React from 'react'
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";
import {signInWithEmail, signUpWithEmail} from "@/lib/actions/auth.actions";
import {toast} from "sonner";
import {signInEmail} from "better-auth/api";
import {useRouter} from "next/navigation";

const SignIn = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    });

    const onSubmit= async (data: SignInFormData) => {
        try {
            const result = await signInWithEmail(data);
            if(result.success) router.push('/');
        } catch (error) {
            console.log(error);
            toast.error('Sign In failed', {
                description: error instanceof Error ? error.message : 'An unexpected error occurred',
            })
        }
    };

    return (
        <>
            <h1 className='form-title'>Sign-In</h1>

            <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    name="email"
                    label="Email"
                    placeholder="contact@jsmastery.com"
                    register={register}
                    error={errors.email}
                    validation={{ required: 'Email address is required', pattern: { value: /^\w+@\w+\.\w+$/, message: 'Invalid email address' } }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required' }}
                />

                <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Signing In...' : 'Sign In'}
                </Button>

                <FooterLink text="Don't have an account? " linkText=' Sign Up' href='/sign-up' />
            </form>
        </>
    )
}
export default SignIn
