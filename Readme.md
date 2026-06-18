# Notes App Backend Setup Walkthrough

I have set up the simple Notes App backend locally in your `d:\NYK_Assesment_BE` directory. 

## Files Created
- `package.json`: Contains the metadata and necessary dependencies (`express`, `pg`, `cors`, `dotenv`) and dev dependency (`nodemon`).
- `.env`: Holds the PostgreSQL credentials and server port based on the information you provided.
- `database.sql`: A script containing the SQL commands needed to set up your PostgreSQL `notes` table and timestamps.
- `config/db.js`: Contains the PostgreSQL connection pool logic.
- `controllers/notesController.js`: Implements full CRUD operations for your notes.
- `routes/notesRoutes.js`: Exposes RESTful endpoints for the app.
- `index.js`: The Express entry point, tying everything together.

## Instructions to Run the Application

Since I cannot directly run terminal commands or interact with your local PostgreSQL instance on Windows through the environment, you will need to perform the following steps to start the application.

> [!IMPORTANT]
> ### 1. Install Dependencies
> Open a terminal in your project directory (`d:\NYK_Assesment_BE`) and run:
> ```bash
> npm install
> ```

> [!IMPORTANT]
> ### 2. Set Up the Database
> 1. Open `pgAdmin` or your preferred PostgreSQL client.
> 2. Create a new database named `notes_db`.
> 3. Connect to `notes_db` and execute the SQL script found in `d:\NYK_Assesment_BE\database.sql`. This will create the `notes` table and set up the automatic `updated_at` timestamp trigger.

> [!TIP]
> ### 3. Start the Server
> In your terminal (`d:\NYK_Assesment_BE`), run:
> ```bash
> npm run dev
> ```
> The server will start and you should see `Server is running on port 5000`.

## Endpoints to Test (Using Postman)
You can now open Postman and test the following endpoints:

- **Create a Note**: `POST http://localhost:5000/api/notes`
  - Body (JSON): `{"title": "My First Note", "content": "This is the content."}`
- **Get All Notes**: `GET http://localhost:5000/api/notes`
- **Get a Note by ID**: `GET http://localhost:5000/api/notes/:id`
- **Update a Note**: `PUT http://localhost:5000/api/notes/:id`
  - Body (JSON): `{"title": "Updated Title", "content": "Updated content."}`
- **Delete a Note**: `DELETE http://localhost:5000/api/notes/:id`
