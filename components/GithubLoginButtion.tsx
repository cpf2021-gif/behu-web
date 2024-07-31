'use client';

import { Button } from "@/components/ui/button"

export function GithubLoginButton() {
    return (
        <Button
            onClick={() => {
                window.location.href = "https://github.com/login/oauth/authorize?client_id=Ov23ctUw3Kr2Lfyl6E6S&scope=read:user%20user:email"}
            }
            variant="outline"
            className="w-full">
            Login with Github
        </Button>
    )
}