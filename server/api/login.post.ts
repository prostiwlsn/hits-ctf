import sqlite3 from 'sqlite3'

async function getUser(db: any, query: String) {
  return new Promise((resolve, reject) => {
    db.all(query, (error: any, rows: any) => {
      if (error) {
        reject(error)
      } else {
        resolve(rows)
      }
    })
  })
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const db = new sqlite3.Database('./users.sqlite')

  let data: any = await getUser(db, body.query)

  return data.length>0;
})