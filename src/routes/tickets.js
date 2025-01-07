export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: (req, res) => {
      res.end("Ticket created")
    }
  }
]