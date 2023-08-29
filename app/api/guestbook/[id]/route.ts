import { prisma } from "@/db";
import { getAuthSession } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";



// GET SINGLE GUESTBOOK
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    const { id } = params;
  
    try {
      const guestbook = await prisma.guestbook.findUnique({
        where: {
          id: id,
        },
      });
  
      return new NextResponse(JSON.stringify(guestbook), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  };
// DELETE SINGLE GUESTBOOK
export const DELETE = async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ) => {
    const { id } = params;
    const session = await getAuthSession();
  
    if (session?.user.isAdmin) {
      try {
        await prisma.guestbook.delete({
          where: {
            id: id,
          },
        });
  
        return new NextResponse(JSON.stringify("Guestbook item has been deleted!"), {
          status: 200,
        });
      } catch (err) {
        console.log(err);
        return new NextResponse(
          JSON.stringify({ message: "Something went wrong!" }),
          { status: 500 }
        );
      }
    }
    return new NextResponse(JSON.stringify({ message: "You are not allowed!" }), {
      status: 403,
    });
  };
  