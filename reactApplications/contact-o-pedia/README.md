# Contact-O-Pedia 📇

A modern, user-friendly contact management application built with React and Vite. This application allows users to efficiently manage their contacts with features like adding, organizing, marking favorites, and discovering new contacts via an external API.

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)

## About the Project

Contact-O-Pedia is a responsive web application designed to simplify contact management. Whether you're organizing personal contacts, marking important ones as favorites, or discovering new random contacts, this application provides a seamless and intuitive user experience.

## ✨ Features

- **Add Contacts**: Easily add new contacts with name, email, and phone number
- **View Contacts**: Display all contacts in an organized list format
- **Favorite Contacts**: Mark important contacts as favorites for quick access
- **Filter Contacts**: Switch between viewing favorite and general contacts
- **Add Random Contacts**: Generate random contacts from the RandomUser API to expand your network
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Instant UI updates when adding or modifying contacts

## 🛠️ Technologies Used

- **React 19.2**: Modern JavaScript library for building user interfaces with hooks
- **Vite 8.0**: Lightning-fast build tool and development server
- **Axios 1.16**: Promise-based HTTP client for making API requests
- **ESLint**: Code quality and consistency enforcement
- **JavaScript (ES Modules)**: Modern JavaScript with module support
- **CSS**: Styling for responsive and attractive UI

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd contact-o-pedia
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

## 🚀 Usage

### Adding a Contact

1. Click on the "Add Contact" button
2. Fill in the contact details (name, email, phone)
3. Click submit to add the contact to your list

### Marking as Favorite

- Click the star/heart icon on any contact to mark it as favorite
- Favorite contacts will appear in the Favorite Contacts section

### Filtering Contacts

- Use the filter options to switch between:
  - **All Contacts**: View all your contacts
  - **Favorite Contacts**: View only marked favorites
  - **General Contacts**: View non-favorite contacts

### Add Random Contacts

- Click "Add Random Contact" to fetch a random user from the RandomUser API
- The new contact will be automatically added to your contact list

## 📁 Project Structure

```
contact-o-pedia/
├── src/
│   ├── components/
│   │   ├── contactPages/
│   │   │   ├── AddContact.jsx          # Form for adding new contacts
│   │   │   ├── AddRandomContact.jsx    # Button for random contact generation
│   │   │   ├── Contact.jsx             # Individual contact card component
│   │   │   ├── ContactList.jsx         # Main contact list container
│   │   │   ├── FavoriteContact.jsx     # Favorite contacts display
│   │   │   └── GeneralContact.jsx      # General contacts display
│   │   └── utility/
│   │       └── AddRandomContactAPI.jsx # API service for RandomUser
│   ├── layout/
│   │   ├── Header.jsx                  # Application header
│   │   └── Footer.jsx                  # Application footer
│   ├── images/                         # Static images
│   ├── main.jsx                        # React entry point
│   └── index.html                      # HTML entry point
├── package.json                        # Dependencies and scripts
├── vite.config.js                      # Vite configuration
├── eslint.config.js                    # ESLint rules
└── README.md                           # Project documentation
```

## 📜 Available Scripts

### `npm run dev`

Starts the development server with hot module reloading (HMR)

```bash
npm run dev
```

### `npm run build`

Creates an optimized production build

```bash
npm run build
```

### `npm run lint`

Runs ESLint to check code quality and fix issues

```bash
npm run lint
```

### `npm run preview`

Preview the production build locally before deployment

```bash
npm run preview
```

## 💡 Key Learnings & Implementation Highlights

- **State Management with Hooks**: Utilized React useState for managing contacts and UI state
- **Component Composition**: Built reusable components for flexibility and maintainability
- **API Integration**: Integrated external RandomUser API using Axios for data fetching
- **Responsive UI**: Created a user-friendly interface with proper styling and layout
- **Code Quality**: Implemented ESLint for consistent code standards

## 🔮 Future Enhancements

- Persistent storage using localStorage or backend database
- Search and filter functionality
- Contact edit and delete operations
- User authentication
- Contact groups/categories
- Export contacts feature
- Dark mode support

## 📝 License

This project is open source and available for personal and educational use.

## 👨‍💻 Author

Created as a React learning project to demonstrate modern web development practices and best practices.

---

**Ready to explore?** Get started by running `npm install` and `npm run dev`!
