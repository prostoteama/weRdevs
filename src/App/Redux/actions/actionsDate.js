import {ADDDATE, CLOSEPOP} from '../vars/datReducerV'

export const addDate = (month, day) => ({  
    type: ADDDATE,
    cred: {
        month, day
    }
})

export const closePopup = () => ({  
    type: CLOSEPOP,
})

