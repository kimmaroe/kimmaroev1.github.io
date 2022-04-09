export interface Project{
  name: string,
  description: string,
  url: string,
  highlights: [],
  keywords: [],
  roles: [],
  startDate: Date,
  endDate: Date,
  entity: string,
  type: string,
  displayName: string,
  website: string,
  summary: string,
  primaryLanguage: string,
  languages: string[],
  libraries: [],
  githubUrl: string,
  repositoryUrl: string,
  start: {
    year: number,
    month: number,
    day: number
  },
  end: {
    year: number,
    month: number,
    day: number
  },
  images: [
    {
      resolutions: {
        micro: {
          url: string,
          size: number,
          width: number,
          height: number
        },
        thumbnail: {
          url: string,
          size: number,
          width: number,
          height: number
        },
        mobile: {
          url: string,
          size: number,
          width: number,
          height: number
        },
        desktop: {
          url: string,
          size: number,
          width: number,
          height: number
        }
      }
    }
  ]

}
