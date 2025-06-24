# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: CHAITANYA PADALGADUTHURI

*INTERN ID*: CT08DM341

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 8 WEEKS

*MENTOR*: NEELA SANTOSH

# DESCRIPTION:

*Project Description – Real-Time Collaborative Document Editor using React, Node.js, Express, and Socket.IO*

A real-time collaborative document editor is a powerful productivity tool that allows multiple users to work on the same document simultaneously. This project demonstrates how to build such an application using modern web technologies: React for the frontend, Node.js with Express and Socket.IO for the backend, and React-Quill as a rich text editor interface. The application is also styled with Bootstrap for a clean, responsive user interface.

# Project Structure:
    📁 Collaborative-Editor 
    ├─ 📂 client (React.js Frontend) 
    │   ├─ 📂 src 
    │   │   ├─ 📂auth 
    │   │   │   ├─ Login.js
    │   │   │   ├─ Register.js          
    │   │   ├─ 📂 components 
    │   │   │   ├─ Editor.js 
    │   │   │   ├─ Toolbar.js 
    │   │   │   ├─ UserList.js 
    │   │   ├─ 📂 pages 
    │   │   │   ├─ Home.js 
    │   │   │   ├─ Document.js 
    │   │   ├─ 📂 utils 
    │   │   │   ├─ axiosConfig.js
    │   │   ├─ App.js 
    │   │   ├─ index.js 
    │   ├─ 📂 public
    │   │   ├── index.html
    │   ├─ 📂 node_modules
    │   ├─ package-lock.json 
    │   ├─ package.json  
    │    
    ├─ 📂 server (Node.js Backend) 
        ├─ 📂 controllers
        │   ├─ documentController.js
        │   ├─ userController.js
        ├─ 📂 database
        │   ├─ db.js
        ├─ 📂 middleware
        │   ├─ authMiddleware.js
        ├─ 📂 routes 
        │   ├─ documentRoutes.js
        │   ├─ userRoutes.js
        ├─ 📂 models 
        │   ├─ authModel.js
        │   ├─ documentModel.js 
        │   ├─ userModel.js 
        │   ├─ versionModel.js
        ├─ 📂 node_modules
        ├─ package-lock.json
        ├─ package.json
        ├─ server.js

# Used SQL Schema Script:

    CREATE DATABASE collaborative_editor;
    USE collaborative_editor;

    CREATE TABLE documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL
    );

# Technologies and Tools Used:


 # 1.Frontend Technologies:
   ->React.js: A powerful JavaScript library used for building the UI with reusable components and managing state using hooks like useState and useEffect.

   ->React-Quill: A rich-text editor component integrated into React to provide formatting tools (bold, italic, lists, headings, etc.) with live content editing.

   ->Axios: A promise-based HTTP client used to send and receive document data between the frontend and backend.

   ->Bootstrap 5: A CSS framework used for responsive and clean UI styling.

 # 2.Backend Technologies:
   ->Node.js: A runtime environment for executing JavaScript on the server, ideal for handling real-time apps.

  ->Express.js: A minimalist web framework used for routing and handling API endpoints like document fetch and save.

->Socket.IO: Enables real-time, bi-directional communication between client and server. It emits and listens for document updates to sync all users instantly.

# Features:

# 1.Real-Time Collaboration:
The editor allows multiple users to edit a document at the same time. As soon as one user types or formats text, the change is broadcast to all other connected users in real time via Socket.IO. This ensures a consistent and synchronized editing experience across all clients.

# 2.Rich Text Editing:
Using React-Quill, the frontend provides a feature-rich editing interface, including text formatting options like bold, italic, underline, font size, lists, alignment, and more. Undo and redo capabilities are also integrated, offering a better writing experience.

# 3.Document Persistence:
When a user makes changes, the current content is not only shared with other clients but also automatically saved to a backend database via Axios HTTP requests. This ensures that the document can be reloaded and restored after a page refresh or new session.

# 4.Authentication (Optional):
Each user is authenticated using JWT tokens. These tokens are stored in local storage and included in the headers of HTTP requests to secure access to the document APIs.

# 5.Bootstrap-Powered UI:
The frontend is built with Bootstrap 5, which provides a modern, responsive layout. The interface includes headings, buttons (like Save), and the editor itself, making it user-friendly and aesthetically clean across desktop and mobile devices.

# 6.Modular Architecture:
The project is cleanly split into client (React) and server (Express) folders. The backend handles socket communication and document storage logic, while the frontend handles the user interface and real-time updates.


# How It Works:
1.When a user opens the application, it retrieves the saved document content from the backend using an authenticated GET request.

2.The user starts editing the document using the React-Quill editor.

3.Each change is captured by an onChange handler, which updates the local state and:

4.Emits a Socket.IO event to share the change in real-time with all other clients.

5.Sends a POST request to persist the new content to the database.

6.When another client is connected, they receive the latest update instantly via a socket.on("documentUpdate") listener.

7.A Save button is also provided to manually save the current content if desired, though auto-save is typically handled in the background.

# Real-World Applications:
This collaborative editor mirrors the core functionality of tools like Notion, Google Docs, and Microsoft Word Online. It can be expanded into:

->Team note-taking or project planning tools.

->Online learning platforms where instructors and students share documents.

->Internal documentation tools for businesses.

->Real-time code-sharing platforms with editor extensions.


# Conclusion:
This project is a hands-on introduction to building a full-stack, real-time web application with modern tools. By combining React, React-Quill, Socket.IO, and Node.js, it demonstrates how to manage real-time data synchronization, user input, and server communication in a collaborative environment. It's not only an excellent learning experience for understanding web sockets and client-server architecture, but also serves as a strong base for more advanced real-time applications. With enhancements like user-specific documents, document history, and role-based access, this project can grow into a production-ready collaboration platform.


# OUT PUT:
