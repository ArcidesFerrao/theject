import { auth } from "@/lib/auth";

export default async function authCheck() {
  const session = await auth()

  if (!session?.user) {
    return null;
  }

  return session;
}