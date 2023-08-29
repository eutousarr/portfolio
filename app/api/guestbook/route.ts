import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";
export const GET = async () => {
    try {
      const guestbooks = await prisma.guestbook.findMany();
      return new NextResponse(JSON.stringify(guestbooks), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
}

export const POST = async (req: NextRequest) => {
    try {
      const body = await req.json();
      const guestbook = await prisma.guestbook.create({
        data: body,
      });
      return new NextResponse(JSON.stringify(guestbook), { status: 201 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  };

  