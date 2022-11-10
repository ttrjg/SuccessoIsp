/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                solarCard: "url('/src/assets/bgSolarService.jpg')",
                eletricCard: "url('/src/assets/bgEletService.jpg')",
                mecCard: "url('/src/assets/bgMecService.jpg')",
                netCard: "url('src/assets/slides/NetSlide.png')",
                project1: "url('/src/assets/SolarProjects/UsinaARTSUL.png')",
                project2: "url('/src/assets/SolarProjects/UsinaJaperi.png')",
                project3: "url('/src/assets/SolarProjects/UsinaHakme.png')",
                project4: "url('/src/assets/SolarProjects/UsinaBelinati.png')",
                project5:
                    "url('/src/assets/SolarProjects/UsinaFlorestopolis.png')",
                project6: "url('/src/assets/SolarProjects/Usinaaviario.png')",
                project7: "url('/src/assets/SolarProjects/UsinaSolo.png')",
                project8: "url('/src/assets/SolarProjects/UsinaKim.png')",
                project9: "url('/src/assets/SolarProjects/UsinaCasa.png')"
            }
        }
    },
    plugins: []
}
