import { NextResponse, type NextRequest } from "next/server";
import { getUrl } from "./lib/get-url";

export function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token');
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/_next/') || pathname.startsWith('/api/') || pathname.startsWith('/favicon.ico')) {
    return NextResponse.next();
  }

  if (pathname === '/auth' && token) {
    return NextResponse.redirect(new URL(getUrl('/app')));
  }

  if (pathname.includes('/app') && !token) {
    return NextResponse.redirect(new URL(getUrl('/auth')));
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
