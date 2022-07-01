const AbstractManager = require("./AbstractManager");

class SearchManager extends AbstractManager {
  static table = "actor";

  findSearch(search) {
    return this.connection.query(
      `SELECT * FROM project INNER JOIN actor ON project.acteur_id = actor.id where firstname like ?`,
      [`%${search}%`]
    );
  }
}

module.exports = SearchManager;
