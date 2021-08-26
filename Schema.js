import { buildSchema } from "graphql"

export const mySchema = buildSchema(`
type Course{
    id:ID
    courseName : String
    category : String
    price : Int
    language : String
    email : String
    teachingAssists : [TeachAssist]
}
type TeachAssist{
     firstName: String
     lastName : String
     experience : Int
}

type Query
{
    getCourse(id : ID) : Course
}

input CourseInput{
    id:ID
    courseName : String
    category : String
    price : Int
    language : String
    email : String
    teachingAssists : [TeachAssistInput]
}

input TeachAssistInput{
    firstName: String
    lastName : String
    experience : Int
}

type Mutation{
    createCourse(input : CourseInput) : Course
}
`)