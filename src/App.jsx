import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Card from './Card'
import Navbar from './Navbar'
import Fsd from './fsd'
import Data from './data'
import Cyber from './cyber'
import Career from './career'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  let products = [
    {
      course: "Full Stack Development",
      image: "https://blog.hrflow.ai/content/images/2020/04/Full-Stack-Developer.jpg",
      time:"3 Months",
      lang:"All Languages",
      user:"19765"
    },
    {
      course: "Data Science",
      image: "https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg",
      time:"3 Months",
      lang:"All Languages",
      user:"22561"

    },
    {
      course: "Cyber Security",
      image: "https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg",
      lang:"All Languages",
      time:"3 Months",
      user:"13540",
    },
    {
      course: "Software Automation And Testing",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20230719151558/Software-Testing-and-Automation-Course-By-GeeksforGeeks.png",
      lang:"All Languages",
      time:"3 Months",
      user:"11984"
    },
    {
      course: "UI/UX Design",
      image: "https://graffersid.com/wp-content/uploads/2020/02/ux-ui-1024x529.png",
      lang:"All Languages",
      time:"3 Months",
      user:"36902"
    },
    {
      course: "Digital Marketing",
      image: "https://www.springboard.com/blog/wp-content/uploads/2022/06/what-is-digital-marketing.png",
      lang:"All Languages",
      time:"3 Months",
      user:"13621"
    },
    {
      course: "DevOps",
      image: "https://raygun.com/blog/images/best-devops-tools/feature-23.jpg",
      lang:"All Languages",
      time:"4 Months",
      user:"29649"
    },
    {
      course: "Cloud Coumputing",
      image: "https://www.idp.com/medias/Cloud-Computing-mob.jpg?context=bWFzdGVyfGltYWdlc3w5NTUzM3xpbWFnZS9qcGVnfGFHRTBMMmc0T0M4eE1UYzROREl5TnprME5qVXlOaTlEYkc5MVpDQkRiMjF3ZFhScGJtY3RiVzlpTG1wd1p3fGM3MTkyMzM0N2FjY2UxZGYzZjI1YWE4NjhkYjgzNjI5MjhkODQ3ZTk5NjYwNzY0ZTJhNDE4MjU0YzI3ZDVlMjI",
      lang:"All Languages",
      time:"5 Months",
      user:"11804"
    },
    {
      course: "Block Chain",
      image: "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
      lang:"All Languages",
      time:"3 Months",
      user:"28634"
    },
    {
      course: "Python",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*ycIMlwgwicqlO6PcFRA-Iw.png",
      lang:"All Languages",
      time:"12 Hrs",
      user:"55782"
    },
    {
      course: "Master Animation in Motion Graphics",
      image: "https://adtechinstitute.com/wp-content/uploads/2023/08/Motion-1.jpg",
      lang:"All Languages",
      time:"4 Months",
      user:"23150"
    },
    {
      course: "Java Automation Testing Program",
      image: "https://algoshack.com/wp-content/uploads/2022/10/Java-Test-Automation-blog-banner-1.jpg",
      lang:"All Languages",
      time:"3 Months",
      user:"21893"
    },
  ]
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Card/>}></Route>
        <Route path='/full stack development' element={<Fsd/>}></Route>
        <Route path='/data science' element={<Data/>}></Route>
        <Route path='/cyber security' element={<Cyber/>}></Route>
        <Route path='/career' element={<Career/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
