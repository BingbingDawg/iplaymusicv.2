import LoginForm from "@/app/components/login-form";
import Heading from "../../components/heading";
import Link from "next/link";

export default function LoginValidationpage() {
    return (
       <>
            <Heading level={2}> Login </Heading>
            <div className="min-h-[30rem] items-center flex justify-center">
                <Link href={
                    `https://accounts.spotify.com/authorize?`
                    + `response_type=code`
                    + `&client_id=${process.env.CLIENT_ID}`
                    + `&scope=user-read-private%20user-read-email`
                    + `&redirect_uri=${process.env.CALLBACK_URL}`
                    }>Login with Spotify</Link>
                </div>

       </>
    )
}