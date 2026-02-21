export const ListCard = () => {
  return (
    <div className="list-card">
      <div className="flex gap-2">
        <span className="tag">Fintech</span>
        <span className="tag">SaaS</span>
      </div>
      <div className="describe py-2">
        <h2 className="paper-title">Invoice Flow</h2>
        <p>
          Plataforma automatizada de facturação para PMEs africanas com
          integrações M-Pesa e bancos locais.
        </p>
      </div>
      <div className="stats-card-list">
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
      <div className="tag-row flex flex-wrap items-center gap-2 pt-2">
        <span className=" tier">Verificação de Lucro</span>
      </div>
    </div>
  );
};
export const ListingCard = () => {
  return (
    <div className="listing-card">
      <div className="flex gap-2">
        <span className="tag">Fintech</span>
        <span className="tag">SaaS</span>
      </div>
      <div className="my-2 listing">
        <h3 className="paper-title">AgriConnect</h3>
        <p>
          Plataforma digital que conecta pequenos agricultores a compradores de
          commodities com preços em tempo real.
        </p>
      </div>
      <div className="tag-row flex flex-wrap items-center gap-2">
        <span className="tier">Verificação de Lucro</span>
      </div>
    </div>
  );
};
export const HeaderCard = () => {
  return <div></div>;
};
export const ColumnCard = () => {
  return (
    <div className="column-card flex flex-col gap-1 py-2 items-start">
      <span className="tag">Fintech</span>
      <h3 className="paper-title">Invoice Flow</h3>
      <p className="tag-price">MZN 35 000</p>
    </div>
  );
};
export const RowCard = () => {
  return (
    <div className="verification-list">
      <div className="row-card flex gap-2">
        <span className="roman-number p-2">I</span>
        <div className="row-body flex flex-col gap-1">
          <h4>Verificacao Legal</h4>
          <p>Empresa legalmente constituida</p>
        </div>
      </div>
      <div className="row-card flex gap-2">
        <span className="roman-number p-2">II</span>
        <div className="row-body flex flex-col gap-1">
          <h4>Verificação de Receita</h4>
          <p>Receita documentada e activa</p>
        </div>
      </div>
      <div className="row-card flex gap-2">
        <span className="roman-number p-2">III</span>
        <div className="row-body flex flex-col gap-1">
          <h4>Verificação de Lucro</h4>
          <p>Lucratividade declarada</p>
        </div>
      </div>
    </div>
  );
};

export const ListSpan = () => {
  return (
    <>
      <div className="list-span flex gap-2 items-center ">
        <span className="title-number p-2">01</span>
        <p>Candidata-te para listar o teu projecto verificado</p>
      </div>
      <div className="list-span flex gap-2 items-center ">
        <span className="title-number p-2">02</span>
        <p>Submete documentação de verificação</p>
      </div>
      <div className="list-span flex gap-2 items-center ">
        <span className="title-number p-2">03</span>
        <p>Recebe badge de verificação por nível</p>
      </div>
      <div className="list-span flex gap-2 items-center ">
        <span className="title-number p-2">04</span>
        <p>Atrai compradores ou construtores qualificados</p>
      </div>
    </>
  );
};

export const StatsCard = () => {
  return (
    <div className="stats-card">
      <h2>4 000 MZN </h2>
      <div className="stats-label">mrr</div>
    </div>
  );
};
