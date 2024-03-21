import { CiGlobe } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";

function Data() {
  return (
        <div className="col-md-4">
                <div class="card" style={{ width: "18rem;" }}>
                    <img src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg" class="card-img-top" alt="..." />
                    <h5 class="card-title">Data Science</h5>
                    <div class="card-body">
                        <p class="card-text"><CiClock2 /> 3 Months <CiGlobe /> All Languages <LuUsers2 /> 22561 Enrolled</p>
                    </div>
                    <button type="button" class="btn btn-outline-success">Leran More</button>
                </div>
            </div>
  )
}

export default Data