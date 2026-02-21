import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <TopBar />
      <Ticker />
    </header>
  );
};

const TopBar = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <div className="logo">
        The<span>Ject</span>
      </div>
      <span className="sub">sexta-feira, 20 de fevereiro de 2026</span>
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
