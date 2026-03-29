const { initDatabase, saveDatabase } = require("../config/database");

(async () => {
  const db = await initDatabase();

  try {
    db.run(`ALTER TABLE audit_logs ADD COLUMN answer TEXT;`);
  } catch (e) {}

  try {
    db.run(`ALTER TABLE audit_logs ADD COLUMN sources TEXT;`);
  } catch (e) {}

  saveDatabase();

  console.log("Migration done");
})();