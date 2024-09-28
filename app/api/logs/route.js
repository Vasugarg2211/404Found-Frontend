import { NextResponse } from "next/server";

export async function GET(req) {
    // const searchParams = req.nextUrl.searchParams; 
    // const queries = {};
    // for (const [key, value] of searchParams.entries()) {
    //     queries[key] = value;
    // }

    const data = await fetch('http://localhost:8081/messages');
    const jsonData = await data.json();
    return NextResponse.json(jsonData);
}