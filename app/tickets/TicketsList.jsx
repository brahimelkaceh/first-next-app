import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

export const dynamicParams = true; // default val = true

export const generateStaticParams = async () => {
  const response = await fetch("http://localhost:4000/tickets");

  const tickets = response.json();
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
};
const getTickets = async () => {
  const response = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 30,
    },
  });
  if (!response.ok) {
    notFound();
  }

  return response.json();
};

const TicketsList = async () => {
  const tickets = await getTickets();
  return (
    <>
      {tickets?.map((ticket, index) => {
        return (
          <Link key={index} href={`/tickets/${ticket.id}`}>
            <div key={ticket.id} className="card my-5">
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </div>
          </Link>
        );
      })}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets,!</p>
      )}
    </>
  );
};

export default TicketsList;
