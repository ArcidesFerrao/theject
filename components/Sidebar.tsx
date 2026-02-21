import { db } from "@/lib/db";
import { ColumnCard, ListSpan, RowCard } from "./Card";

export const Sidebar = async () => {
  const projects = await db.project.findMany();

  console.log(projects);
  return (
    <section className="sidebar p-4">
      <h5 className="label">Para Venda</h5>
      <ColumnCard />
      <ColumnCard />
      <hr></hr>
      <h5 className="label">Hierarquia de Verificacao</h5>
      <RowCard />
      <p className="info pt-2">
        Cada nível requer documentação adicional submetida ao painel de
        administração.
      </p>
      <hr></hr>
      <h5 className="label">Estado da Plataforma</h5>

      <div className="web-status">
        <div className="web-status-card">
          <span>{projects.length}</span>
          <p className="status-label">Projectos</p>
        </div>
        <div className="web-status-card">
          <span>2</span>
          <p className="status-label">Para Venda</p>
        </div>
        <div className="web-status-card">
          <span>3</span>
          <p className="status-label">Lucro Verif.</p>
        </div>
        <div className="web-status-card">
          <span>4</span>
          <p className="status-label">Blueprints</p>
        </div>
      </div>
      <hr></hr>
      <h5 className="label">Como Funciona</h5>
      <ListSpan />
    </section>
  );
};
