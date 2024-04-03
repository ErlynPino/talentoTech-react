import {createSlice} from '@reduxjs/toolkit'

const users = [
    {
        "_id": "65d3ddfb3e75d61e43a5124f",
        "id": 1234,
        "name": "Erlyn",
        "lastname": "Pino",
        "email": "erlynpino@gmail.com",
        "password": "$2b$10$bhxT4lCQjB6I/S6591514eE/BmWownnCtfFNvGb5eWAUoecij4kea",        
    }
]

export const userSlice = createSlice({
    name: 'users',
    initialState: users,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer