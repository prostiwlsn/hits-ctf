import sqlite3 from 'sqlite3'

async function getUser(db: any, login: String, password: String) {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM users WHERE login='"+login+"' AND password='"+password+"'", (error: any, rows: any) => {
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

  let data: any = await getUser(db, body.login, body.password)

  return data.length>0;
})