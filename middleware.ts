import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const response = NextResponse.next();
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  return response;
}
