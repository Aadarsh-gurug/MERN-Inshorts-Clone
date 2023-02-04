import express from 'express'
import { getNews } from '../controller/news-controller.js';
const route = new express.Router()


route.get('/get',getNews)


export default route; 