const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "item";

  insert(item) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ProjectManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProjectManager;
