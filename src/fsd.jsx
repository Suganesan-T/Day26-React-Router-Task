import { CiGlobe } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
function Fsd() {
  return (
        <div className="col-md-4">
                <div class="card" style={{ width: "18rem;" }}>
                    <img src="https://blog.hrflow.ai/content/images/2020/04/Full-Stack-Developer.jpg" class="card-img-top" alt="..." />
                    <h5 class="card-title">Full Stack Development</h5>
                    <div class="card-body">
                        <p class="card-text"><CiClock2 /> 3 Month <CiGlobe /> All Languages <LuUsers2 /> 19765 Enrolled</p>
                    </div>
                    <button type="button" class="btn btn-outline-success">Leran More</button>
                </div>
            </div>
  )
}

export default Fsd