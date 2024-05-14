import sqlite3 from 'sqlite3'

async function getUsers(db: any) {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM users', (error: any, rows: any) => {
      if (error) {
        reject(error)
      } else {
        resolve(rows)
      }
    })
  })
}

export default defineEventHandler(async (event) => {
  const db = new sqlite3.Database('./users.sqlite')
  console.log("xdd")

  let data = await getUsers(db)

  return data
})