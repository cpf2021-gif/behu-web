'use client';

import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export function GithubLoginButton() {
    return (
        <Button
            onClick={() => {
                window.location.href = "https://github.com/login/oauth/authorize?client_id=Ov23ctUw3Kr2Lfyl6E6S&scope=read:user%20user:email"
            }
            }
            variant="outline"
            className="w-full">
            <div className="flex items-center space-x-2">
                <GitHubLogoIcon />
                <p>Github</p>
            </div>
        </Button>
    )
}
