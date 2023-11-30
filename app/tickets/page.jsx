import { Suspense } from "react";
import TicketsList from "./TicketsList";
import "../globals.css";
import Loading from "../loading";
const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  );
};

export default Tickets;
