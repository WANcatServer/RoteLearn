import { Query } from "./query";

export interface Logic {
  random ( q :Query ) :GenerateAssertionCallback
  queue ( q :Query ) :GenerateAssertionCallback
  list ( q :Query ) :GenerateAssertionCallback
}