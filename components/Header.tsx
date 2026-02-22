export const Header = () => {
  return (
    <header className="header">
      <TopBar />
      <Ticker />
    </header>
  );
};

const TopBar = () => {
  const date = new Date();

  const formatted = new Intl.DateTimeFormat("pt-MZ", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <div className="logo">
        The<span>Ject</span>
      </div>
      <span className="sub">{formatted}</span>
      <h5>Inteligência de Projectos Verificados · Moçambique</h5>
    </div>
  );
};

const Ticker = () => {
  return (
    <div className="ticker p-2">
      <div className="ticker__item">
        <em>▲</em>4 projectos activos
      </div>
      <div className="ticker__item">
        <em>▲</em>4 projectos activos
      </div>
      <div className="ticker__item">
        <em>◆</em>Lucro Verificado: InvoiceFlow, AgriConnect
      </div>
      <div className="ticker__item">
        <em>★</em>LegalDraft AI — Verificação Legal aprovada
      </div>
    </div>
  );
};
