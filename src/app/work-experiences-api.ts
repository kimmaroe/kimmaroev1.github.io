export class WorkExperiencesAPI {
  work!:[
    {
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
  ]
}
