## DummyJSON User Dashboard

**Description:**

This project is a simple Node.js application that fetches and displays user data from the DummyJSON API. It includes functionality to view a list of all users and display detailed information about a specific user based on their ID. The project uses EJS templates for rendering views, Express for the server framework, and vanilla JavaScript for client-side interactions.

### Features:

- **View All Users:** Displays a card for each user with their basic information.
- **View Single User:** Provides detailed information about a user when their ID is entered.
- **Responsive Design:** Ensures a good user experience across different devices.
- **Error Handling:** Shows a modal with an error message if an invalid user ID is entered.

### Getting Started:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd dummyJSONProject
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Application:**

   ```bash
   npm start
   ```

5. **Visit the Application:**

   Open your web browser and go to `http://localhost:3000`.

### Using the Template for Other Endpoints:

This project is designed as a template that can be easily adapted to fetch and display data from different endpoints of the DummyJSON API. To use this template for other endpoints (such as products or carts), follow these steps:

1. **Modify the Endpoint:**

   Update the API endpoint URLs in the server-side code to point to the desired DummyJSON API endpoints.

2. **Update the EJS Templates:**

   Modify the EJS templates to display the relevant data fields based on the new endpoint's response structure.

3. **Adjust Client-Side Code:**

   Ensure that any client-side JavaScript code is updated to handle the new data format and functionality.

### Example Endpoints:

- **Products Endpoint:** `/products` - Fetch and display a list of products.
- **Cart Endpoint:** `/carts` - Fetch and display cart information.

Feel free to contribute to this project by creating new features or adapting it for other API endpoints!

### License:

This project is licensed under the MIT License.

---
