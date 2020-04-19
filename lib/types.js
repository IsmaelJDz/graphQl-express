'use strict'

const errorHandle = require('./errorHandle')

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {

  // People es el unico campo que quiero resolver de la base de datos
  Course: {
    people: async ({ people }) => {
      let db
      let peopleData
      let ids

      try {
        db = await connectDb()
        ids = people ? people.map(id => ObjectID(id)) : []
        peopleData = ids.length > 0 ? 
          await db.collection('students').find(
            { _id: { $in: ids }}
          ).toArray() : []
      } catch (error) {
        errorHandler(error)
      }

      return peopleData;

    }
  }
        
}