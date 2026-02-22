import { auth } from "@/lib/auth";
export const Hero = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div className="hero">
      <h1>
        Projectos Verificados. Inteligência Estruturada. Saídas Controladas.
      </h1>
      <span className="sub">
        Volume I — Registo de Projectos Verificados · Est. 2026 · Maputo,
        Moçambique
      </span>
    </div>
  );
};
