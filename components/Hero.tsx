import { auth } from "@/lib/auth";
export const Hero = async () => {
  const session = await auth();

  console.log(session);

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
          <p className="welcome">Bem-vindo, {session.user.name}!</p>
        ) : (
          <a href="/login" className="signIn-btn px-4">
            Entrar
          </a>
        )}
      </div>
    </div>
  );
};
