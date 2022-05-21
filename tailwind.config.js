module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        corporate: {
          primary: "#3D4451",
          secondary: "#004466",
          accent: "#0ea5e9",
          neutral: "#0369a1",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        dark: {
          primary: "#FFFFFF",
          secondary: "#FDE68A",
          accent: "#0369a1",
          neutral: "#F3F4F6",
          "base-100": "#1F2937",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
