// type alias
type Uid = number | string

function logDetails(uid: Uid | string, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`A product with ${uid} has a title as ${user}`);
}

type Plataform = "Windows" | "Linux" | "Mac Os"

function renderPlataform(platform: Plataform) {
  return platform
}

renderPlataform("Linux")

logDetails(123, "sapato")
logInfo(123, "felipe")