import { getCarbs, setCarbs } from "./database.js"

const carbs = getCarbs()

document.addEventListener(
    'change',
    (newEvent) => {
        if (newEvent.target.name === 'carbo') {
            setCarbs(parseInt(newEvent.target.value))
        }
    }
)

export const Carbs = () => {
    let html = "<ul>"

    const listItems = carbs.map((carb) => {
        return `<li>
            <input value="${carb.id}" name="carbo" type="radio" />${carb.name}
        </li>`    
    })
    
    html += listItems.join("")
    html += "</ul>"

    return html
}