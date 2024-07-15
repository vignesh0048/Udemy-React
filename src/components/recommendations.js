//Recommendations Components
import one from "./images/c1.jpg"
import two from "./images/c2.jpg"
import three from "./images/c3.jpg"
import four from "./images/c4.jpg"

function Recommendations(){
    return(
        <div class="recommended">
        <h1 class="recommended__tittle">Recommended For You</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={one} alt="one"></img>
                <h3>2023 Python data visaulisation materclass</h3>
                <p>Col steele</p>
                <p>4.9⭐⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={two} alt="two"></img>
                <h3>2023 Web Development Bootcamp</h3>
                <p>Col steele</p>
                <p>4 ⭐⭐⭐⭐</p>
                <p>699 <del>2555</del></p>
            </div>

            <div class="course-card">
                <img src={three} alt="three"></img>
                <h3>Master ui/ux Designing with FIGMA</h3>
                <p>Col steele</p>
                <p>3.⭐⭐⭐</p>
                <p>999 <del>3999</del></p>
            </div>

            <div class="course-card">
                <img src={four} alt="four"></img>
                <h3>Basic to advance Programing with EMC</h3>
                <p>Col steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1999 <del>5999</del></p>
            </div>

        </div>
    </div>

    )
}
export default Recommendations