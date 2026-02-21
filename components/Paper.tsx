import { ListCard, ListingCard } from "./Card";
import { Sidebar } from "./Sidebar";

export const Paper = () => {
  return (
    <div className="paper">
      <section className="left-col">
        <h5 className="label">Em Destaque</h5>
        <ListCard />
        <ListCard />
        <hr></hr>
        <h5 className="label">Todas Listagens</h5>
        <ListingCard />
        <ListingCard />
      </section>
      <Sidebar />
    </div>
  );
};
