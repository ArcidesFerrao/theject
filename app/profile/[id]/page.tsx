import authCheck from "@/lib/authCheck";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

type Params = Promise<{ id: string }>;

export default async function ProfilePage(props: { params: Params }) {
  const session = await authCheck();

  if (!session) {
    redirect("/login");
  }

  const { id } = await props.params;

  const user = await db.user.findUnique({
    where: { id },
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      Profile Page for user ID: {id} {user.name} {user.email} {user.role}
    </div>
  );
}
