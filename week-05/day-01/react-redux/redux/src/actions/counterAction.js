const set = (amount) => {
    return {
        type: 'SET',
        amount
    }
}

const reset = () => {
    return {
        type: 'RESET',
        amount: 0
    }
}

const increase = (amount) => {
    if (amount === undefined) {
        return {
            type: 'INCREASE',
            amount: 1
        }
    } else {
        return {
            type: 'INCREASE',
            amount
        }
    }
}

const decrease = (amount) => {
    if (amount === undefined) {
        return {
            type: 'DECREASE',
            amount: 1
        }
    } else {
        return {
            type: 'DECREASE',
            amount
        }
    }
}


const asyncIncreaseHelper = (num, sec) => {
    return (dispatch) => {
        setTimeout(function () { dispatch(asyncIncrease(num)); }, sec*1000);
    }



}

const asyncIncrease = (num) => {
    return {
        type: 'ASYNC_INCREASE',
        amount: num
    }
}

export { set, reset, increase, decrease, asyncIncreaseHelper }