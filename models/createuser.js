import mongoose  from 'mongoose'


const userSchema = mongoose.Schema({
   
   name:{
        type:'string',
        require: true
    },password:{
        type:'string',
        require:true
    },email:{
        type:'string',
        require:true
    },createdAt:{
        type:Date,
        default:new Date()
    }
})

const Users = mongoose.model('Users',userSchema)

export default Users