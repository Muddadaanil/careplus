export const ordersData = [
  {
    id: "ORD-001",
    customer: {
      name: "Olivia Turner",
      email: "olivia@example.com",
      phone: "+1 202-555-0111",
    },
    date: "2026-03-01",
    status: "Delivered",
    items: [
      { id: 1, name: "Paracet Care 500mg", quantity: 2, price: 6.99 },
      { id: 4, name: "ColdRelief Syrup", quantity: 1, price: 11.75 },
    ],
    total: 25.73,
  },
  {
    id: "ORD-002",
    customer: {
      name: "Daniel Lewis",
      email: "daniel@example.com",
      phone: "+1 202-555-0139",
    },
    date: "2026-03-03",
    status: "Processing",
    items: [{ id: 2, name: "VitaMax Daily", quantity: 1, price: 14.5 }],
    total: 14.5,
  },
];
