# notion-database

## Overview

This project is a Node.js API for interacting with Notion databases and pages. It uses the Notion SDK to perform various operations such as retrieving all pages or databases, retrieving a single page or database by ID, and searching for pages or databases by a search term.

## API Routes

### Get All Databases
- **Endpoint:** `/databases`
- **Method:** `GET`
- **Description:** Retrieves all databases.
- **Response:**
    ```json
    [
        {
            "id": "database_id",
            "title": "Database Title",
            ...
        }
    ]
    ```

### Get Database by ID
- **Endpoint:** `/databases/:id`
- **Method:** `GET`
- **Description:** Retrieves a database by its ID.
- **Parameters:**
    - `id` (string): The ID of the database.
- **Response:**
    ```json
    {
        "id": "database_id",
        "title": "Database Title",
        ...
    }
    ```

### Get All Pages
- **Endpoint:** `/pages`
- **Method:** `GET`
- **Description:** Retrieves all pages.
- **Response:**
    ```json
    [
        {
            "id": "page_id",
            "title": "Page Title",
            ...
        }
    ]
    ```

### Get Page by ID
- **Endpoint:** `/pages/:id`
- **Method:** `GET`
- **Description:** Retrieves a page by its ID.
- **Parameters:**
    - `id` (string): The ID of the page.
- **Response:**
    ```json
    {
        "id": "page_id",
        "title": "Page Title",
        ...
    }
    ```

### Search Pages or Databases
- **Endpoint:** `/search`
- **Method:** `GET`
- **Description:** Searches for pages or databases by a search term.
- **Parameters:**
    - `query` (string): The search term.
- **Response:**
    ```json
    [
        {
            "id": "result_id",
            "title": "Result Title",
            ...
        }
    ]
    ```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/notion-database.git
    ```
2. Navigate to the project directory:
    ```sh
    cd notion-database
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root directory and add your Notion API key:
    ```env
    NOTION_API_KEY=your_notion_api_key
    ```

## Running the Server

To start the server, run:
```sh
npm start
