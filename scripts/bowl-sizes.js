const bowlSizes = getBowlSizes()

document.addEventListener("change", (event) => {
    if (event.target.name === "bowlSize") {
        setEntrees(parseInt(event.target.value))
    }
})



export const bowlSizesDisplay = () => {
    let html = "ul"
    for (const bowlSize of bowlSizes) {
        html += `<li>
        <input type="radio" name="bowlSize" value="${bowlSize.id}"/> ${bowlSize.name}
        </li>`
    }
    html += "</ul>"
    return html
}