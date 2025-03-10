import { Client } from '@notionhq/client';

class Notion {
    static notion = new Client({ auth: process.env.NOTION_API_KEY });
    static objectType = 'page';
    static primaryKey = 'page_id';
    static async getAll() {
        try {
            const response = await this.notion.search({
                filter: {
                    property: 'object',
                    value: this.objectType
                }
            })
            return response.results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    static async getSingle(id) {
        try {
            console.log("pimary key", this.primaryKey);
            const response = await this.notion[this.objectType+'s'].retrieve({ [this.primaryKey]: id });
            return response;
        } catch (error) {
            console.error('Error retrieving page:', error);
            throw error;
        }
    }


    static async fromSearchTerm(term) {
        try {
            const response = await this.notion.search({
                query: term,
                filter: {
                    property: 'object',
                    value: this.objectType
                }
            });
            return response.results;
        } catch (error) {
            console.error('Error retrieving page:', error);
            throw error;
        }
    }

    async getWorkspace() {
        try {
            const response = await this.notion.workspaces.list();
            return response.results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default Notion;