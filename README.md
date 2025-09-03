# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# PopXAssign

A React project Tailwindcss with Vite.

---

### 1. **Project Initialization**
- Initialized the project using Vite with React template.
- Set up basic folder structure: `src/components/pages`, `src/assets`, etc.

### 2. **Created Main Pages**
- **HomePage.jsx**: Landing page with navigation to Create Account and Login.
- **CreateAccount.jsx**: User registration form to collect full name and email.
- **ProfilePage.jsx**: Displays user profile information after registration.
- **Login.jsx**: (If implemented) User login form.

### 3. **Assets**
- **profile.png**: Default profile image.
- **camera.png**: Camera icon for profile picture section.

### 4. **Routing**
- Used `react-router-dom` for navigation between pages.

### 5. **State Management**
- Used `localStorage` to persist user data (full name and email) between pages.

---

## 📁 File Structure

```
src/
  assets/
    profile.png
    camera.png
  components/
    pages/
      HomePage.jsx
      CreateAccount.jsx
      ProfilePage.jsx
      Login.jsx
  App.jsx
  main.jsx
```

---

## 🛠️ How to Run the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:5173/
   ```

---

## 📄 File Descriptions

- **HomePage.jsx**: Welcome page with navigation links.
- **CreateAccount.jsx**: Form to create a new user account and save data to localStorage.
- **ProfilePage.jsx**: Displays the user's name and email from localStorage.
- **Login.jsx**: (Optional) Login form for existing users.
- **App.jsx**: Main app component with routing.
- **main.jsx**: Entry point for the React app.

---

## 📝 Notes

- User data is stored in localStorage for demo purposes.
- You can expand the project by adding authentication, validation, and more features.

---

Feel free to update this README as your project evolves!