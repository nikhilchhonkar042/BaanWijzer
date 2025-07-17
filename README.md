# BaanWijzer

AI Career Coach

# 🧠 Personalized AI Career Coach

A full-stack web app that uses AI to guide users through personalized career advice based on their resume, skills, and career goals.

## 🔧 Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB Atlas
- **AI**: OpenAI GPT-4
- **Deployment**: Vercel (frontend), Render (backend)

## 🎯 Features

- Upload and parse resumes (PDF/DOCX)
- Analyze skill gaps and suggest improvements
- Get personalized learning paths and job suggestions
- GPT-powered mock interviews with feedback
- Dashboard for career tracking

## 📁 Updated Folder Structure

```
BaanWijzer/
├── .git/
├── .gitattributes
├── README.md
├── client/
│   ├── .gitignore
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   ├── README.md
│   └── src/
│       ├── App.css
│       ├── App.js
│       ├── App.jsx
│       ├── App.test.js
│       ├── assets/
│       ├── components/
│       │   ├── CareerPath.jsx
│       │   └── ResumeCard.jsx
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── pages/
│       │   ├── About.jsx
│       │   ├── Contact.jsx
│       │   ├── index.jsx
│       │   └── Login.jsx
│       ├── reportWebVitals.js
│       └── setupTests.js
├── server/
│   ├── .env.example
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── models/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── routes/
│   ├── services/
│   └── utils/
```

## 🏠 Landing Page

- The default landing page is now `client/src/pages/Login.jsx` (route `/`).
- The home page is available at `/home`.

## 🛠️ How to Build and Run

1. **Install dependencies:**
   ```sh
   cd client
   npm install
   ```
2. **Build the frontend:**
   ```sh
   npm run build
   ```
3. **Run the development server:**
   ```sh
   npm start
   ```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- Your Name - [@yourtwitterhandle](https://twitter.com/yourusername) - your.email@example.com
- Project Link: [https://github.com/yourusername/baanwijzer](https://github.com/yourusername/baanwijzer)

## Acknowledgements

- [OpenAI](https://openai.com/) for the GPT-4 model.
- [MongoDB](https://www.mongodb.com/) for the database.
- [Vercel](https://vercel.com/) and [Render](https://render.com/) for deployment.