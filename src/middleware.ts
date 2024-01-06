import {NextRequest} from "next/server";

export default async function middleware(req: NextRequest) {
  console.log(req.nextUrl.href);
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /_next/ (Next.js internals)
     * 2. /_static (inside /public)
     * 3. /_vercel (Vercel internals)
     * 4. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt, etc.)
     */
    "/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
