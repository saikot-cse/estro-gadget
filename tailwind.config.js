module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/src/assets/login.jpg')",
        signup: "url('/src/assets/signup.jpg')",
        join: "url('/src/assets/join.jpg')",
        about: "url('/src/assets/about.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        corporate: {
          primary: "#0ea5e9",
          secondary: "#004466",
          accent: "#3D4451",
          neutral: "#1F2937",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        dark: {
          primary: "#bef264",
          secondary: "#0ea5e9",
          accent: "#bef264",
          neutral: "#4b5563",
          "base-100": "#374151",
          info: "#4b5563",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
