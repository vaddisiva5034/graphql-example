import { nanoid } from "nanoid"

class Course {
    constructor(id, { courseName,category,price,language,email,teachingAssists}) {
        this.id = id;
        this.courseName = courseName;
        this.price = price;
        this.category = category
        this.language = language;
        this.email = email;
        this.teachingAssists = teachingAssists;
    }
}

const courseContainer = {};
export const resolvers = {
    getCourse: ({ id }) => {
        return new Course(id, courseContainer[id]);
    },
    createCourse: ({ input }) => {
        let id = nanoid();
        courseContainer[id] = input;
        return new Course(id, input)
    }
}
