import "./globals.css";

import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header>
      <div>
        <Link href="/">
          <h1 className="text-2xl font-bold">Pool's Blog</h1>
        </Link>
        <p>Welcome to my tech blog</p>
        <br />
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div>
        <br />
        <h1>Developed by Luis</h1>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      {/* <head /> */}
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
