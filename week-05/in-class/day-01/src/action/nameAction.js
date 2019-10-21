function changeNameAction(name) {
    return { type: 'change_name', name }
}
function resetNameAction() {
    return { type: 'change_name', name: '' }
}
export { changeNameAction, resetNameAction };