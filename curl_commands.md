# Notes App Backend curl Commands Cheatsheet

This document provides a set of `curl` commands to test your API endpoints. 

Replace `https://nyk-assesment-be.vercel.app` with `http://localhost:5000` if you are testing locally.

---

## 1. Root / Health Check
Verify the server is running.

```bash
curl -X GET https://nyk-assesment-be.vercel.app/
```

---

## 2. Get All Notes
Fetch all notes from the database.

```bash
curl -X GET https://nyk-assesment-be.vercel.app/api/notes
```

---

## 3. Get Note by ID
Retrieve a specific note by its ID (replace `1` with the actual note ID).

```bash
curl -X GET https://nyk-assesment-be.vercel.app/api/notes/1
```

---

## 4. Create a Note

### For Bash / Git Bash / Linux / macOS:
```bash
curl -X POST https://nyk-assesment-be.vercel.app/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "Hello from curl", "content": "This note was created using a curl command!"}'
```

### For Windows PowerShell:
*(Note: PowerShell handles JSON quotes differently; use backslashes to escape double quotes)*
```powershell
curl -X POST https://nyk-assesment-be.vercel.app/api/notes -H "Content-Type: application/json" -d "{\"title\": \"Hello from curl\", \"content\": \"This note was created using a curl command!\"}"
```

---

## 5. Update a Note
Modify an existing note (replace `1` with the actual note ID).

### For Bash / Git Bash / Linux / macOS:
```bash
curl -X PUT https://nyk-assesment-be.vercel.app/api/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "content": "This content has been updated via curl!"}'
```

### For Windows PowerShell:
```powershell
curl -X PUT https://nyk-assesment-be.vercel.app/api/notes/1 -H "Content-Type: application/json" -d "{\"title\": \"Updated Title\", \"content\": \"This content has been updated via curl!\"}"
```

---

## 6. Delete a Note
Remove a note by its ID (replace `1` with the actual note ID).

```bash
curl -X DELETE https://nyk-assesment-be.vercel.app/api/notes/1
```
