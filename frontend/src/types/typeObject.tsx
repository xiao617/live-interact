export type userBody = {
  name: string
  _id?: string
  score?: number
  status?: string
  password: string
  verification_code: string
}
export type optionBody = {
  id: string
  option: string
  isAnswer: boolean
  selectedList: Array<userBody>
}
export type questionBody = {
  id: string
  question: string
  isActive: boolean
  choices: Array<optionBody>
}
export type roomBody = {
  owner: string
  questions: Array<questionBody>
  roomId: string
  roomName: string
  roomPassword: string
  _id?: string
}
export type paramBody = {
  roomId: string
}

export type userState = {
  name: string
  id?: string
  score: number
  status: string
}
export type responseBody = {
  result: boolean
  name: string
  _id: string
}
export type chartBody = {
  labels: Array<string>
  datasets: Array<chartInfoBody>
}
export type chartInfoBody = {
  data: Array<number>
  backgroundColor: Array<string>
  hoverBackgroundColor: Array<string>
}