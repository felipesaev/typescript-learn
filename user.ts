// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
  id: number,
  name: string,
  email?: string
}

const account: AccountInfo = {
  id: 123,
  name: "Felipe"
}

type CharInfo = {
  nickname: string
  level: number
}

const char: CharInfo = {
  nickname: "mineiro",
  level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name: "felipe",
  nickname: "mineiro",
  level: 100
}