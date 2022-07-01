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

  findSearch(search) {
    return this.connection.query(
      `
      SELECT * 
      FROM 
        project 
        INNER JOIN actor ON project.acteur_id = actor.id 
      where 
        mail like ?
        or firstname like ?
        or lastname like ?
        
        `,
      [`%${search}%`, `%${search}%`, `%${search}%`]
    );
  }
}

module.exports = ActorManager;
