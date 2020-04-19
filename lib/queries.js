'use strict'

const connectdb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  
    getCourses: async () => {
      let db 
      let courses = []
      try {
        db = await connectdb()
        courses = await db.collection('courses').find().toArray()
      } catch (error) {
        console.log(error)
      }

      return courses
    },
    getCourse: async (root, { id }) => {
      let db 
      let course
      try {
        db = await connectdb()
        course = await db.collection('courses').findOne({ _id: ObjectID(id) })
      } catch (error) {
        console.log(error)
      }

      return course
    },

    getPeople: async () => {
      let db 
      let students = []
      try {
        db = await connectdb()
        students = await db.collection('students').find().toArray()
      } catch (error) {
        console.log(error)
      }

      return students
    },
    getPerson: async (root, { id }) => {
      let db 
      let student
      try {
        db = await connectdb()
        student = await db.collection('students').findOne({ _id: ObjectID(id) })
      } catch (error) {
        console.log(error)
      }

      return student
    }
}