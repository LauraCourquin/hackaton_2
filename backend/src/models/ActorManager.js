const AbstractManager = require("./AbstractManager");

class ActorManager extends AbstractManager {
  static table = "actor";

  insert(actor) {
    return this.connection.query(
      `insert into ${ActorManager.table} (title) values (?)`,
      [actor.title]
    );
  }

  update(actor) {
    return this.connection.query(
      `update ${ActorManager.table} set title = ? where id = ?`,
      [actor.title, actor.id]
    );
  }
}

module.exports = ActorManager;
