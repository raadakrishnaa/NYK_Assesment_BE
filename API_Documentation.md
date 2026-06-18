# Notes App Backend API Documentation

This document describes all available REST endpoints for the Notes App backend, including their HTTP methods, request payloads, response formats, and status codes.

---

## Base URLs
- **Local Development**: `http://localhost:5000`
- **Production (Vercel)**: `https://your-vercel-domain.vercel.app` (replace with your actual Vercel project URL)

---

## Endpoints

### 1. Root / Health Check
Verify if the backend server is running and accessible.

- **URL**: `/`
- **Method**: `GET`
- **Headers**: None
- **Body**: None
- **Response**:
  - **Status Code**: `200 OK`
  - **Body (Text)**: `"Notes App Backend is running!"`

---

### 2. Get All Notes
Retrieve a list of all notes, sorted by the creation date (newest first).

- **URL**: `/api/notes`
- **Method**: `GET`
- **Headers**: None
- **Body**: None
- **Response**:
  - **Status Code**: `200 OK`
  - **Body (JSON Array)**:
    ```json
    [
      {
        "id": 1,
        "title": "Shopping List",
        "content": "Buy milk, eggs, and coffee beans.",
        "created_at": "2026-06-19T01:15:30.000Z",
        "updated_at": "2026-06-19T01:15:30.000Z"
      }
    ]
    ```

---

### 3. Get Note by ID
Retrieve details of a single note using its unique identifier (`id`).

- **URL**: `/api/notes/:id`
- **Method**: `GET`
- **Headers**: None
- **Body**: None
- **Response (Success)**:
  - **Status Code**: `200 OK`
  - **Body (JSON)**:
    ```json
    {
      "id": 1,
      "title": "Shopping List",
      "content": "Buy milk, eggs, and coffee beans.",
      "created_at": "2026-06-19T01:15:30.000Z",
      "updated_at": "2026-06-19T01:15:30.000Z"
    }
    ```
- **Response (Not Found)**:
  - **Status Code**: `404 Not Found`
  - **Body (JSON)**:
    ```json
    {
      "error": "Note not found"
    }
    ```

---

### 4. Create a Note
Add a new note to the database.

- **URL**: `/api/notes`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body (JSON)**:
  ```json
  {
    "title": "Meeting Notes",
    "content": "Discuss deployment strategy with the team."
  }
  ```
- **Response (Success)**:
  - **Status Code**: `201 Created`
  - **Body (JSON)**:
    ```json
    {
      "id": 2,
      "title": "Meeting Notes",
      "content": "Discuss deployment strategy with the team.",
      "created_at": "2026-06-19T01:20:00.000Z",
      "updated_at": "2026-06-19T01:20:00.000Z"
    }
    ```
- **Response (Validation Error)**:
  - **Status Code**: `400 Bad Request`
  - **Body (JSON)**:
    ```json
    {
      "error": "Title and content are required"
    }
    ```

---

### 5. Update a Note
Modify the title or content of an existing note by its unique identifier (`id`).

- **URL**: `/api/notes/:id`
- **Method**: `PUT`
- **Headers**:
  - `Content-Type: application/json`
- **Body (JSON)**:
  ```json
  {
    "title": "Updated Meeting Notes",
    "content": "Discuss deployment strategy and Vercel hosting details."
  }
  ```
- **Response (Success)**:
  - **Status Code**: `200 OK`
  - **Body (JSON)**:
    ```json
    {
      "id": 2,
      "title": "Updated Meeting Notes",
      "content": "Discuss deployment strategy and Vercel hosting details.",
      "created_at": "2026-06-19T01:20:00.000Z",
      "updated_at": "2026-06-19T01:24:00.000Z"
    }
    ```
- **Response (Not Found)**:
  - **Status Code**: `404 Not Found`
  - **Body (JSON)**:
    ```json
    {
      "error": "Note not found"
    }
    ```

---

### 6. Delete a Note
Remove a note from the database by its unique identifier (`id`).

- **URL**: `/api/notes/:id`
- **Method**: `DELETE`
- **Headers**: None
- **Body**: None
- **Response (Success)**:
  - **Status Code**: `200 OK`
  - **Body (JSON)**:
    ```json
    {
      "message": "Note was deleted successfully"
    }
    ```
- **Response (Not Found)**:
  - **Status Code**: `404 Not Found`
  - **Body (JSON)**:
    ```json
    {
      "error": "Note not found"
    }
    ```
