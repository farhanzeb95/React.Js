const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log("The current state is: ")
    console.log(store.getState())
    console.log("The action is: ")
    console.log(action)
    console.log("The next state is: ")
    next(action)
    console.log(console.log(store.getState()))
    console.groupEnd()
}

export default logger