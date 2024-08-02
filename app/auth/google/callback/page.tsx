import ky from 'ky'
import { redirect } from 'next/navigation'
export default async function Page({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const code = decodeURIComponent(searchParams.code as string)
    console.log(code)
    await ky.get(`http://localhost:8000/auth/google?code=${code}`, { cache: 'no-store' })
    redirect("/userinfo")
}
