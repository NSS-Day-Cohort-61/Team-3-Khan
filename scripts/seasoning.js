import { getSeasonings, setSeasonings } from "./database.js";

const seasonings = getSeasonings()

document.addEventListener("change", (event) => {
    if(event.target.name === "seasoning") {
        setSeasonings(parseInt(event.target.value))
    }
})

export const Seasonings = () => {
    let html = `
            <ul>
                ${seasonings.map(seasoning => {
                    return `
                        <li>
                            <input type="radio" name="seasoning" value="${seasoning.id}"/>${seasoning.name} ${seasoning.price}
                        </li>
                        `
                }).join("")
            }
        </ul>
        `

        return html
}