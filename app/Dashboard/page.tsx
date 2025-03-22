import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogPostCard } from "@/components/general/BlogpostCard";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

async function getData(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return data;
}

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Redirect to login if no user
  if (!user || !user.id) {
    redirect('/api/auth/login');
  }

  const data = await getData(user.id);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>

        <Link 
          className={buttonVariants({
            className: "font-[800] bg-[#ff0000b0] text-white hover:bg-[#ff0000b0]/90"
          })} 
          href="/Dashboard/create"
        >
          Create Post
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <BlogPostCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}