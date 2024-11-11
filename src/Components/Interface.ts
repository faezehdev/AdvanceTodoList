
export enum priority {
  'LOW',
  'MEDIUM',
  'HIGHT'
}
export enum status {
  'TODO',
  'DOING',
  'DONE',
  'WARNING',
  'PENDING',
  'FAILD'
}
export interface TodoI{
    id: number,
    title: string,
    priority: priority,
    datetime: string,
    estimate: number,
    status:status,
    hash:string
}

export type Todoss ={
  id: number,
    title: string,
    priority: priority,
    datetime: string,
    estimate: number,
    status:status,
    hash:string 
}[]
