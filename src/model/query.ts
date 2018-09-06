
export interface Query {
  title :string
  date :Date
  question :string[]
  answer :string[]
}

export function makeQuery (title :string, date :Date, question :string[], answer :string[]) :Query {
  return new QueryImpl(title, date, question, answer)
}

class QueryImpl implements Query {
  constructor ( public title :string, public date :Date, public question :string[], public answer :string[]) {

  }
}