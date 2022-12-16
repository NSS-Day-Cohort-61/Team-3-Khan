import {  } from "./database.js"




const buildOrderListItem = (order) => {

    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()


    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    
    const foundSizes = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    
    const foundStyles = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    
    const totalCost = foundMetal.price + foundSizes.price + foundStyles.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}