import { NextResponse } from "next/server";

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams; 
    const queries = {};
    for (const [key, value] of searchParams.entries()) {
        queries[key] = value;
    }
    return NextResponse.json(data);
}