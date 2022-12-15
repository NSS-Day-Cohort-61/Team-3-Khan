import { getProteins, setProtein } from "./database.js";

const proteins = getProteins()

document.addEventListener("change", (event) => {
    if (event.target.name === "protein") {
        setProtein(parseInt(event.target.value))
    }
})

export const Proteins = () => {
    let html = `
        <ul>
            ${proteins.map(protein => {
                return `
                    <li>
                        <input type="radio" name="protein" value="${protein.id}"/>${protein.name} ${protein.price}
                    </li>
                    `
            }).join("")
            }
        </ul>
        `

        return html
}