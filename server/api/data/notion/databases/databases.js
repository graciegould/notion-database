import Notion from '../notion.js';
class Databases extends Notion {
    constructor(id) {
        super();
        this.id = id;
    }
    static primaryKey = 'database_id';
    static objectType = 'database';
}

export default Databases;