import axios from 'axios'
import _ from 'lodash'

const Helpers = {

    //returns a list of books from the api
    getList: async (query: any, startIndex: number) => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}`, {
                params: {
                    key: process.env.REACT_APP_API_KEY
                }
            })
            return response.data
        } catch (err) {
            console.error(err)
            return false;
        }
    },

    //generates a string that will be used as query
    makeQuery: (state: any) => {
        let query = ""

        for (let key in state) {
            if (state[key] !== "" && key !== "searchResults" && key !== "loading" && key !== "startIndex" && key !== "totalItems")
                query += `+${key}:${state[key]}`
        }

        return query.substring(1)
    },

    addOrSubtract: (value: any, operand: any) => {
        if (operand === "add")
            return value += 10
        return value -= 10
    },

    //returns the details of a book
    getId: async (id: string) => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`, {
                params: {
                    key: process.env.REACT_APP_API_KEY
                }
            })
            return _.get(response, "data.volumeInfo")
        } catch (err) {
            console.error(err)
            return false;
        }
    }
}

export default Helpers