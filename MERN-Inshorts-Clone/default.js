import { data } from "./constants/data.js";
import News from "./models/news-schema.js";

const DefaultData = async() => {
    try {
       await News.insertMany(data)
       console.log("Data inserted");
    } catch (error) {
        console.log('Error', error.message);
    }
}

export default DefaultData;