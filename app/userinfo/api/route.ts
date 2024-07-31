import ky from 'ky'
import { type NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('code')

   await ky.get(`http://localhost:8000/auth/github?code=${query}`)

    redirect("/userinfo")
}
