import { CiGlobe } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";

function Cyber() {
  return (
        <div className="col-md-4">
                <div class="card" style={{ width: "18rem;" }}>
                    <img src="https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg" class="card-img-top" alt="..." />
                    <h5 class="card-title">Cyber Security</h5>
                    <div class="card-body">
                        <p class="card-text"><CiClock2 /> 3 Months <CiGlobe /> All Languages <LuUsers2 /> 13540 Enrolled</p>
                    </div>
                    <button type="button" class="btn btn-outline-success">Leran More</button>
                </div>
            </div>
  )
}

export default Cyber