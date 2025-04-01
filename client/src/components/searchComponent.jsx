import { use, useActionState } from "react"
import "./css/search.css"
export default function SearchComponent(){

    function searchSubmithandler(previousData, formData){
        console.log(Object.fromEntries(formData))
    }

    const [values,searcgAction, isPending] = useActionState(searchSubmithandler)
    return(
        <>
           <>
  <section className="search-section">
    <h2>Търсене на автомобили</h2>
    <form id="filterForm" action={searcgAction}>
      <div className="search-grid">
      <div>
          <label htmlFor="year">Марка:</label>
          <input
            type="text"
            id="brand"
            name="year"
            className="input"
            min={1980}
            max={2025}
            placeholder="Напр. Mercedes"
          />
        </div>
        <div>
          <label htmlFor="year">Модел:</label>
          <input
            type="text"
            id="year"
            name="year"
            className="input"
            placeholder="Напр. s500"
          />
        </div>
        <div>
          <label htmlFor="year">Година:</label>
          <input
            type="number"
            id="year"
            name="year"
            className="input"
            min={1980}
            max={2025}
            placeholder="Напр. 2015"
          />
        </div>
        <div>
          <label htmlFor="price">Цена (макс):</label>
          <input
            type="number"
            id="price"
            name="price"
            min={0}
            className="input"
            step={500}
            placeholder="Напр. 50000"
          />
        </div>
      </div>
      <button type="submit" className="search-button">
        Търси
      </button>
    </form>
  </section>
 
</>

        </>
    )
}