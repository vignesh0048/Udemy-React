//Popular Components
import five from "./images/d1.jpg"
import six from "./images/d2.jpg"
import seven from "./images/d3.jpg"
import eight from "./images/d4.jpg"
import nine from "./images/d5.jpg"
import ten from "./images/d6.jpg"
import eleven from "./images/d7.jpg"
import twele from "./images/d8.jpg"
function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__tittle">Most Popular</h1>
        <p class="popular__subtittle">Pick the best fit</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={five} alt="five"></img>
                <h3>2023 Python data visaulisation materclass</h3>
                <p>Col steele</p>
                <p>4.9⭐⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={six} alt="six"></img>
                <h3>2023 Web Development Bootcamp</h3>
                <p>Col steele</p>
                <p>4 ⭐⭐⭐⭐</p>
                <p>699 <del>2555</del></p>
            </div>

            <div class="course-card">
                <img src={seven} alt="seven"></img>
                <h3>Master ui/ux Designing with FIGMA</h3>
                <p>Col steele</p>
                <p>3.⭐⭐⭐</p>
                <p>999 <del>3999</del></p>
            </div>

            <div class="course-card">
                <img src={eight} alt="eight"></img>
                <h3>Basic to advance Programing with EMC</h3>
                <p>Col steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1999 <del>5999</del></p>
            </div>
            <div class="course-card">
                <img src={nine} alt="nine"></img>
                <h3>2023 Python data visaulisation materclass</h3>
                <p>Col steele</p>
                <p>4.9⭐⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={ten} alt="ten"></img>
                <h3>2023 Web Development Bootcamp</h3>
                <p>Col steele</p>
                <p>4 ⭐⭐⭐⭐</p>
                <p>699 <del>2555</del></p>
            </div>

            <div class="course-card">
                <img src={eleven} alt="eleven"></img>
                <h3>Master ui/ux Designing with FIGMA</h3>
                <p>Col steele</p>
                <p>3.⭐⭐⭐</p>
                <p>999 <del>3999</del></p>
            </div>

            <div class="course-card">
                <img src={twele} alt="twele"></img>
                <h3>Basic to advance Programing with EMC</h3>
                <p>Col steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1999 <del>5999</del></p>
            </div>

        </div>
    </div>
    )
}
export default Popular