# React Posts Application / SystemRound/ReactJs-CodesForTommorow

This is a React-based web application created as part of the system round task for Codes For Tomorrow.

The application displays a list of posts fetched from an external API with pagination and delete functionality.

---

## Task Overview

- Fetch post data from the API  
  `https://jsonplaceholder.typicode.com/posts`
- Display **6 post cards at a time**
- Provide pagination with:
  - Next and Previous buttons
  - Direct page number navigation
- Allow removing a post using a red cross (❌) icon  
  - After removal, the view still shows 6 cards by shifting the next post
- Show **Loading...** for **5 seconds** on initial load
- Use **Context API** for global state management

---

## Features Implemented

- API integration using `fetch`
- Pagination logic (6 posts per page)
- Delete post from current view with automatic adjustment
- Global state management using React Context API
- Fixed 5-second loading screen on startup
- Clean and structured component-based architecture

---

## Tech Stack

- React.js
- Context API
- Tailwind CSS
- JavaScript
- Vite

---

## Project Structure 

src/
├── components/
│ ├── PostCard.jsx
│ ├── PostList.jsx
│ └── Pagination.jsx
├── context/
│ └── PostContext.jsx
├── App.jsx
└── main.jsx


---

## How to Run the Project Locally

1. Clone the repository => git clone https://github.com/pankajsinghx6104/systemround-cft
2. Install dependencies
3. Start the development server


---

## Notes

- The application strictly follows the task requirements.
- Context API is used instead of Redux for state management.
- The UI is kept simple and clean for better readability.

---

## Author

**Pankaj Mewada**



