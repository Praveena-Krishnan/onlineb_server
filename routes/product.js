import express from 'express';
import path from 'path'
import multer from 'multer';
import { productAdd, productList } from '../controllers/product.js';
const router = express.Router()
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },filename:(req,file,cb)=>{
        cb(null,file.fieldname + "_"+Date.now()+path.extname(file.originalname))
      }
    
})

 const upload = multer({
  storage:storage
})

router.get('/list',productList)
//http://localhost:5000/product/add
router.post('/add',upload.single('img'),productAdd)
export default router