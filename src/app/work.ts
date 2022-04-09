export interface Work{
  name: string,
  location: string,
  description: string,
  position: string,
  isCurrentRole: boolean,
  start:{
    year: number,
    month: number
  },
  end:{
    year?: number,
    month?: number
  },
  company: string,
  summary: string
}
