// boolean (true or false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// Array (type[])
let items: string[]
items = ["foo", "bar"]

let values: Array<number>
values = [
  1,
  2,
  3
]

// tutle
let title: [number, string, string]
title = [1, "foo", "bar"]

// enum
enum Colors {
  white = "#fff",
  black= "#000"
}

// any ( não é legal )

let coisa: any
coisa = [1]

// void ( vazio )
function logger(): void {
  console.log('foo')
}

// null | underfined
type Bla = string | undefined

// never
function error(): never {
  throw new Error('error')
}

// object 
let cart: object

cart = {
  key: 'f1'
}


// Type Inference
let nameTwo = "Felipe"

window.addEventListener("click", (e) => {

})

