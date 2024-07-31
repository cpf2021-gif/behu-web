import { type NextRequest } from 'next/server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('code')
    const queryStr = query ? query : ''

    cookies().set('github_code', queryStr)    
    // const json = await ky.get(`http://localhost:8000/auth/github?code=${query}`).json()

    redirect("/userinfo/load")
}
