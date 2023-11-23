let socket: WebSocket

const saga = function* () {
  socket = new WebSocket("ws://localhost:8080")
  yield console.log(2)

  socket.addEventListener("open", (event) => {
    console.log("Connected to WS")
    socket.send("Hello Server!")
  })

  socket.addEventListener("message", (evt: any) => {
    console.log(evt)
    debugger
  })
}

export default saga
