//Sale Components
import sale from "./images/sale img"
function Sale(){
    return(
        <div class="sale-image">
        <img src={sale} alt="sale"></img>
        <div class="sale-image__offer">
            <h2>Udemy flash sale 24hrs to save</h2>
            <p>Get the course for just 499.Just one day to save but a limited time offer</p>
        </div>
    </div>
    )
}
export default Sale