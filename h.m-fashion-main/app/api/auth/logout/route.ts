import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getTokenCookieName } from '@/lib/auth/jwt';

export async function POST() {
  cookies().delete(getTokenCookieName());
  return NextResponse.json({ success: true, message: 'Signed out successfully' });
}
