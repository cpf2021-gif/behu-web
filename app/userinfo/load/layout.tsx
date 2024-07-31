import { Suspense } from "react";
import Loading from "./loading";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </body>
      </html>
    );
}
