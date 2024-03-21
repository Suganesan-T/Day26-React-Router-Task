import { CiGlobe } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";

function All({product}) {
  return (
        <div className="col-md-4">
                <div class="card" style={{ width: "18rem;" }}>
                    <img src={product.image} class="card-img-top" alt="..." />
                    <h5 class="card-title">{product.course}</h5>
                    <div class="card-body">
                        <p class="card-text"><CiClock2 /> {product.time} <CiGlobe /> {product.lang} <LuUsers2 /> {product.user} Enrolled</p>
                    </div>
                    <button type="button" class="btn btn-outline-success">Leran More</button>
                </div>
            </div>
  )
}

export default All