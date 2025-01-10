import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

const API_KEY = "c669a716dad8c9b7897c4729cf50c98b"
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjY5YTcxNmRhZDhjOWI3ODk3YzQ3MjljZjUwYzk4YiIsIm5iZiI6MTcyNDQzNDI4MC4xMjcsInN1YiI6IjY2YzhjNzY4OTg1YjIxNTRhZWIzMDQ1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ECJ2JDlrumvd8ROHQyRDVnPq1OeleEc47vd3A3zv4H0"

const sections = [
    {
        id: 1,
        title: "Releases in the Past Year"
    },
    {
        id: 2,
        title: "Continue Watching for Drashti"
    },
    {
        id: 3,
        title: "Suspenseful TV Shows "
    },
    {
        id: 4,
        title: "Selected for You Today"
    },
    {
        id: 5,
        title: "My List"
    },
    {
        id: 6,
        title: "New Releases"
    },
    {
        id: 7,
        title: "Ensemble TV Shows"
    },
    {
        id: 8,
        title: "Chilly Thrillers"

    },
    {
        id: 9,
        title: "Only on Netflix"


    },
]

export {
    width, height, API_KEY, token, sections
}

