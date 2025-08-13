import { NextResponse } from "next/server";

export default async function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname.includes("/login") || pathname.includes("/api")) {
        return;
    }

    if (!request.cookies.has("iplaymusic_access_token")) {
        console.log("middleware: No access token")
        if (!request.cookies.has("iplaymusic_refresh_token")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }


    const response = await fetch("https://accounts.spotify.com/api/token", { 
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET)}`
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: request.cookies.get("iplaymusic_refresh_token").value,
                client_id: process.env.CLIENT_ID
            })
    });
    
    const data = await response.json();
    const res = NextResponse.next();
    res.cookies.set("iplaymusic_access_token", data.access_token, {
        maxAge: data.expires_in
    })
    return res;
    }

    return;
}

export const config = {
    matcher: ["/", "/categories", "/albums/:path*"]
};