import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Course from "../Components/Course"

function CoursePage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Course />
            </div>
            <Footer />
        </>
    )
}

export default CoursePage