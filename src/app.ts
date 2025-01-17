import express, {Request, Response, NextFunction} from 'express'
import {console} from 'inspector'
import todoRoutes from './routes/todos'

const app = express()

app.use('./todo', todoRoutes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({message: error.message})
})

app.listen(3011, () => {
    console.log('Sever is started at http://localhost:3011')
})