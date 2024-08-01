import ky from 'ky'
import { redirect } from 'next/navigation'
export default async function Page({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    await ky.get(`http://localhost:8000/auth/github?code=${searchParams.code}`, { cache: 'no-store' })
    redirect("/userinfo")
}
