import { NextResponse } from 'next/server';

export async function GET() {
  const location = {
    long: 19.0532484,
    lat: 47.4986567,
  };

  return NextResponse.json({ location: location }, { status: 200 });
}
