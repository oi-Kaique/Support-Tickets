export function index({ req, res, database }){
  const tickets = database.selecet("tickets")

  return res.end(JSON.stringify(tickets))

}