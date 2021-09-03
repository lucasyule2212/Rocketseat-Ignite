import { Client } from "faunadb";
//require('dotenv').config();

export const fauna = new Client({
  secret:process.env.FAUNADB_KEY,
  domain:'db.us.fauna.com'
})