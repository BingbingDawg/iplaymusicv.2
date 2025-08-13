"use client";

import { useActionState, useEffect } from "react";
import handleForm from "./handle-form";
import { toast } from "react-toastify";

export default function LoginForm() {
    const [formState, formAction, isPending] = useActionState(handleForm, {});

    useEffect(function() {
        if(formState?.success) {
            toast.success("You're now logged in!");
        }
    }, [formState]);

    /*useEffect(function (){
        if (formState.errors) {
            console.log(formState)
        }
    })*/

    return (
        <form className="max-w-[30%]" action={formAction} noValidate>
            <div className="flex flex-col">
                <label className="flex flex-col">
                    <span>Username</span>
                    <input type="text" name="username" className="border" defaultValue={formState?.data?.username} />
                </label>
                <span className="text-red-500">{formState?.properties?.username?.errors}</span>
            </div>
            <div className="flex flex-col">
                <label className="flex flex-col">
                    <span>Password</span>
                    <input type="text" name="password" className="border" defaultValue={formState?.data?.password}/>
                </label>
                <span className="text-red-500">{formState?.properties?.password?.errors}</span>
            </div>
            <button type="submit" disabled={isPending} className={`bg-green-400 px-8 py-2 disabled:bg-gray-400`}>Login</button>
        </form>
    )
}