import mongoose from 'mongoose'

const Connection = async (URL) => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('connected to database successfully');
    } catch (error) {
        console.log('Error while connecting to database', error.message)
    }
}

export default Connection;