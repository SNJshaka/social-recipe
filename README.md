🍽️ Recipe Sharing App
This is a simple recipe sharing application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

✨ Features
📝 Users can create an account and log in to share their recipes.
❤️ Users can view, like, and comment on recipes shared by others.
📱 Responsive design for a seamless experience across devices.
📁 Project Structure
The project consists of two main folders:

Server: Contains the backend code responsible for handling requests, managing the database, and serving the API endpoints.
Package.json:
json
Copy code
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "type": "module",
  "scripts": {
    "start": "NODE_OPTIONS='--experimental-specifier-resolution=node' nodemon src/index.js"
  }
}
Usage:
bash
Copy code
cd server
npm install
npm start
Client: Contains the frontend code built with React.js for the user interface of the application.
Package.json:
json
Copy code
{
  "name": "client",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "type": "module",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
Usage:
bash
Copy code
cd client
npm install
npm start
🚀 Installation
Clone this repository:
bash
Copy code
git clone https://github.com/your-username/your-repo.git
Install dependencies for the server and client:
bash
Copy code
cd your-repo/server
npm install

cd ../client
npm install
Set up a MongoDB account for Atlas and connect it to Compass:
Create a MongoDB account on 📊 MongoDB Atlas.
Set up a new cluster.
Obtain your connection string from Atlas.
Open MongoDB Compass and connect to your cluster using the connection string.
Start the server and client (in separate terminal windows):
bash
Copy code
cd your-repo/server
npm start

cd ../client
npm start
Access the application at http://localhost:3000 in your browser.
📄 License
This project is licensed under the MIT License. See the LICENSE file for details.
