import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import auth from './routes/auth'
import users from './routes/users'
import books from './routes/books'

dotenv.config()

const app=express()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URL)

app.use('/api/auth',auth)
app.use('/api/users',users)
app.use('/api/books',books)

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(8080,()=>{console.log('serving on 8080')})

// C:\Program Files\MongoDB\Server\3.6\bin>mongod.exe --dbpath /Users/Leano/bookworm-data