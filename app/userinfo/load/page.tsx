import ky from 'ky'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
    const code = cookies().get('github_code')

    await ky.get(`http://localhost:3000/userinfo/api?code=${code?.value}`, { cache: 'no-store' })
    redirect("/userinfo")
}