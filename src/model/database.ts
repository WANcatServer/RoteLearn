import { Query } from "./query";

export interface Database {
  insert ( q :Query ) :Promise<Query>
  update ( q :Query ) :Promise<Query>
  get ( q :Query ) :Promise<Query>
  remove ( q :Query ) :Promise<Query>
}