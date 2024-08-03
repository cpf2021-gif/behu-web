import ky from 'ky'
import { redirect, notFound } from 'next/navigation'
export default async function Page({
    searchParams,
    params
  }: {
    searchParams: { [key: string]: string | string[] | undefined },
    params : { slug: string } }
  ) {

    if (params.slug !== "github" && params.slug !== "google") {
        notFound()
    }

    await ky.get(`http://localhost:8000/auth/${params.slug}?code=${searchParams.code}`, { cache: 'no-store' })
    redirect("/userinfo")
}