import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { DataTableItems } from "@/components/Shared/DataTableItems";

export default async function CrdeitCardPages() {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user.email
    },
    include:{
      elements:{
        where:{
          typeElement:"Tarjeta"
        },
        orderBy:{
          createdAt:"desc"
        }
      }
    }
  });

  if(!user || !user.elements) {
    return redirect('/')
  }

  console.log(user)

  return <div>
    <h1 className="text-xl md:text-3xl font-semibold">List od Credit Cards Elements</h1>
    <DataTableItems  elements={user.elements}/>
  </div>;
}