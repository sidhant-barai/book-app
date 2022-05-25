export const increment =() => {
    return {
        type: 'INC'
    }
}

export const decrement =() => {
    return {
        type: 'DEC'
    }
}

export const loggedUser =(str) => {
    return {
        type: "UPDATE",
        payload: str
    }
}