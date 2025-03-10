import Notion from '../notion.js';

class Pages extends Notion {
    constructor(id) {
        super();
        this.id = id;
    }
    static objectType = 'page';
    static primaryKey = 'page_id';
}

export default Pages;