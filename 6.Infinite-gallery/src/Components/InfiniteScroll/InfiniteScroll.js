import { useState, useEffect, useRef } from "react"
import "./InfiniteScroll.css"
import { v4 as uuidv4 } from "uuid"

export default function InfiniteScroll() {
  const [dataImg, setDataImg] = useState([[], [], []])
  const [pageIndex, setPageIndex] = useState(1)
  const [searchState, setSearchState] = useState("random")

  const infiniteFetchData = () => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=hcci5C3YAsOEjFOd1EBAS8vYhQk9pNXx3tDBMLXpWBs`
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        const imgsReceived = []
        data.results.forEach(img => {
          imgsReceived.push(img.urls.regular)
        })

        const newFreshState = [
          [...dataImg[0]],
          [...dataImg[1]],
          [...dataImg[2]],
        ]

        let index = 0
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 10; j++) {
            newFreshState[i].push(imgsReceived[index])
            index++
          }
        }

        setDataImg(newFreshState)
      })
  }
  console.log(dataImg)

  const handleSearch = e => {
    e.preventDefault()
  }
  useEffect(() => {
    infiniteFetchData()
  }, [])

  const inputRef = useRef()

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Votre recherche</label>
        <input type="text" ref={inputRef} id="search" />
      </form>
      <div className="card-list">
        <div>
          {dataImg[0].map(img => (
            <img key={uuidv4()} src={img} alt="img unsplash" />
          ))}
        </div>
        <div>
          {dataImg[1].map(img => (
            <img key={uuidv4()} src={img} alt="img unsplash" />
          ))}
        </div>
        <div>
          {dataImg[2].map(img => (
            <img key={uuidv4()} src={img} alt="img unsplash" />
          ))}
        </div>
      </div>
    </div>
  )
}
