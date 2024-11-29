## LLM in a Box - Dashboard UI and Pricing Page
Overview
The LLM in a Box Dashboard UI is a responsive and modern user interface built with React and Material-UI. It features a clean and intuitive layout with a Pricing Page that showcases various subscription plans for the users of the platform.

Key Features:
Responsive Layout: Optimized for different screen sizes (mobile, tablet, desktop).
Dashboard UI: A central control panel with navigation to key areas of the platform.
Pricing Page: Displays multiple subscription plans, each with unique features and a distinct color scheme for better visual distinction.
Folder Structure
The project follows a clean and modular structure, where each component and page is organized for easy navigation and maintenance.

bash
Copy code
/src
  /components
    - DashboardUI.js       # Main Dashboard UI component
    - PricingPlan.js       # Pricing page component displaying plans
  /assets
    - Created AI Assistants.jpg  # Logo for the pricing page
    - llminaboxlogo.png          # Logo for the Dashboard UI
  /styles
    - theme.js              # Custom styles and theme for Material-UI components
  App.js                    # Main entry point for the React application
  index.js                  # ReactDOM render method for the root app
Installation
To set up and run the project locally, follow these steps:

Clone the repository to your local machine.

bash
Copy code
git clone <repository-url>
Navigate to the project directory.

bash
Copy code
cd llm-in-a-box-dashboard
Install the required dependencies.

bash
Copy code
npm install
Running the Application
Once the dependencies are installed, you can start the development server with the following command:

bash
Copy code
npm start
This will start the development server and open the application in your default web browser. The app will be available at:

arduino
Copy code
http://localhost:3000
Dashboard UI
Overview
The Dashboard UI provides the following features:

AppBar with Logo and Title: Displays the LLM in a Box logo and the title.
Navigation Links: Links to key pages such as Dashboard and Pricing.
User Profile Menu: Displays a menu with options like Critical Future, Support, and Log Out.
Key Components:
AppBar: A sticky top navigation bar with options for navigation and user settings.
Toolbar: Contains logo, title, and user profile dropdown.
IconButton and Menu: The user menu with account details and logout options.
Pricing Page
Overview
The Pricing Page displays different subscription plans with unique pricing and feature sets. There are three plans:

Monthly Plan: $89.99/month with premium features.
Annual Plan: $999.99/year, offering a discount for long-term subscriptions.
Enterprise Plan: Contact for pricing, designed for large-scale custom solutions.
Each plan has a distinct color theme to differentiate them:

Yellow for Monthly Plan
Cyan for Annual Plan
Smooth Pink for Enterprise Plan
Key Components:
Pricing Plan Cards: Displaying the title, price, description, and features of each plan.
Button Actions: Allows users to select the appropriate plan or contact for Enterprise pricing.
Responsive Grid Layout: Adjusts the layout for different screen sizes, ensuring an optimal experience across devices.
