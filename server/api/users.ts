import sqlite3 from 'sqlite3'

export default defineEventHandler((event) => {
  const db = new sqlite3.Database('./users.sqlite')
  console.log("xdd")

  let data: unknown[] = []

  db.all('SELECT * FROM users', [], (err, rows) => {
    if(err){
      //console.error(err)
      console.log("xddd")
    }
    else{
      console.log(rows)
      data = rows
    }
  })

  db.close();

  return data
})