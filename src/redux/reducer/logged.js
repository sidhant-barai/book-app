const logged = (state="",action) => {
    switch(action.type){
        case "UPDATE": {
            return state.replace("", action.payload)
        }
        default:
            return state
    }
}

export default logged