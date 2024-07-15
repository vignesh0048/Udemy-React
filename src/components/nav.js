
//Navbar Components
function Nav() {
    return (
        <div class="navbar">
            <div class="navbar__s1">
                <h1 class="navbar__s1__tittle">Udemy</h1>
            </div>

            <div class="navbar__s2">
                <i class="fa-solid fa-magnifying-glass" style={{color:"#000000"}}></i>
                <input type="text" placeholder="secarch for anything business, art,tech..."></input>
            </div>

            <div class="navbar__s3">
                <p>Courses</p>
                <p>My Learings</p>
                <div class="mylearning">
                    <p>My Learning</p>
                    <div class="mylearning__popup">
                        <p>You did not purchase anything yet</p>

                    </div>
                </div>
                <i class="fa-solid fa-magnifying-glass" style={{color: "#000000" }}></i>
                <i class="fa-solid fa-user" style={{ color: "#000000" }}></i>
                <i class="fa-regular fa-bell" style={{ color: "#000000" }}></i>
            </div>
            <div class="navbar__s4">
                <i class="fa-solid fa-bars"></i>
            </div>

        </div>
    )
}

export default Nav