# Basic REST API
Basic REST API built using `Express.js` for **Kontinentalist Intern Assignment**.

## Requirements:

**You need to have `Node.js` installed in order to run this project.**

To be able to get this server running, please make sure you have installed `Express.js`. You can do so using:
```
npm install express
```

## How to run
You can run the server using:
```
cd <project directory>
node .
```

## API Usage

### API Endpoints

1. GET `/posts`
   - Fetches all posts

2. GET `/posts/{id}`
   - Fetches the post with the id `{id}`

3. POST `/posts`
   - Creates a post with the given title and content
   - Request body must contain **both** of the fields `title` and `content`

4. PATCH `/posts/{id}`
   - Edits the post with the id `{id}` with new title and/or content
   - Request body must contain **at least one** of the fields `title` and `content`

5. DELETE `/posts/{id}`
   - Deletes the post with the id `{id}`
  
### Post Model
- `title` : string
- `content` : string

### API Request format

The body of the API request must be parsable to JSON, with all the required fields

### API Response format

The body of API response is a json consisting of the following fields:
1. `data` - contains the relevant data for the request, if any
2. `message` - contains the error message, if any
