"use server";

import z from "zod";

export default async function handleForm(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    const schema = z.object({
        username: z.string().min(2,{ message: "Your username is not long enough"}).max(50, { message: "Your username is too long"}),
        password: z.string().min(3 , { message: "Your password is not long enough"})
    });

    const validated = schema.safeParse({
        username: username,
        password: password,
    });

    if (!validated.success) {
        return z.treeifyError(validated.error)
        
    }

    //oprette forbindelse til database
    // gem formularens data i databasen

    await new Promise((resolve) => setTimeout(() => resolve(), 3000))

    return validated
}