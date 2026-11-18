// 

   
const mockAPI = {
    getWeather: async function () {

        return [
            {
                city: "Karachi",
                temperature: 30,
                condition: "Sunny",
                humidity: 50,
                wind: 10
            },
            {
                city: "Lahore",
                temperature: 25,
                condition: "Cloudy",
                humidity: 60,
                wind: 15
            },
            {
                city: "Islamabad",
                temperature: 22,
                condition: "Rainy",
                humidity: 75,
                wind: 12
            }
        ];

    }
};

