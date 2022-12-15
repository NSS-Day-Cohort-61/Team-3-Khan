import { getVegetables, setVeggie } from "./database"
const vegetables = getVegetables()

document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVeggie(parseInt(event.target.value))
    }
})

export const Vegetables = () => {
    let html = "<ul>"

    const listItems = vegetables.map(veggie => {
        return `<li>
            <input type="radio" name="vegetable" value="${veggie.id}"/> ${veggie.name} ${veggie.price}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}