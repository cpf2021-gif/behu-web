'use client';

import { Button } from "@/components/ui/button"
import { GoogleOutlined } from "@ant-design/icons"


export function GoogleoginButton() {
    const client_id = "688917827107-492dlsdpjrvf1qla4atam0ap873558ds.apps.googleusercontent.com"
    const redirect_uri = "http://localhost:3000/auth/google/callback"
    const scope = "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
    const response_type = "code"
    const include_granted_scopes = "true"
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=${response_type}&include_granted_scopes=${include_granted_scopes}`

    return (
        <Button
            onClick={
                () => {
                    window.location.href = url
                }
            }
            variant="outline"
            className="w-full">
            <div className="flex items-center space-x-2">
                <GoogleOutlined />
                <p>Google</p>
            </div>
        </Button>
    )
}
