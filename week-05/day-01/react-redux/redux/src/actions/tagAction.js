const add = (tag) => {
    return {
        type: 'ADD_TAG',
        tag: tag
    }
}

const removeTag = (tag) => {
    return {
        type: 'REMOVE_TAG',
        tag: tag
    }
}

const removeTags = () => {
    return {
        type: 'REMOVE_TAGS',
        tag: []
    }
}

export { add, removeTag, removeTags }