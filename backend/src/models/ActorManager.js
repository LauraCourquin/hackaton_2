const AbstractManager = require("./AbstractManager");

class ActorManager extends AbstractManager {
  static table = "item";

  insert(item) {
    return this.connection.query(
      `insert into ${ActorManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ActorManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ActorManager;
