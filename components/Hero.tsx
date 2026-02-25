import { auth } from "@/lib/auth";
import Link from "next/link";

export const Hero = async () => {
  const session = await auth();

  // console.log(session);

  return (
    <div className="hero">
      <h1>
        Projectos Verificados. Inteligência Estruturada. Saídas Controladas.
      </h1>
      <div className="flex justify-between items-center">
        <span className="sub">
          Volume I — Registo de Projectos Verificados · Est. 2026 · Maputo,
          Moçambique
        </span>
        {session?.user ? (
          <p className="sub">
            Bem-vindo,{" "}
            <Link
              className="hover:underline"
              href={`/profile/${session.user.id}`}
            >
              {session.user.name}
            </Link>
            !
          </p>
        ) : (
          <a href="/login" className="signIn-btn px-4">
            Entrar
          </a>
        )}
      </div>
    </div>
  );
};
