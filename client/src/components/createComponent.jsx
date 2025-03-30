import { useActionState, useState } from "react"
import { useCreate } from "../api/carsApi"

function CreateComponent() {
  const [imageUrl, setImageUrl] = useState([1])
  const {createCar} = useCreate()


  const addImageUrl = () => {
    setImageUrl((prev) => [...prev, prev.length + 1])
  }

  const createSubmitHandler = (prevData, formData) => {
    const data = Object.fromEntries(formData)
    const imageUrls =[];
    imageUrl.map((url) => {
      const currnet = formData.get(`imageUrl ${url}`)
      imageUrls.push(currnet)
    })
    const brand = formData.get("brand")
    const model = formData.get("model")
    const year = formData.get("year")
    const power = formData.get("power")
    const fuel = formData.get("fuel")
    const price = formData.get("price")
    const mileage = formData.get("mileage")
    const description = formData.get("description")
    const newData = {
      brand,
      model,
      year,
      power,
      fuel,
      price,
      mileage,
      description,
      imageUrls
    }
    const result = createCar(newData)
    console.log(result);
  }

  const [values, createActionm, isPending] = useActionState(createSubmitHandler, {})
  return (<>
    {/* Форма за създаване на обява */}
    <section className="bg-grey-800 p-8 mt-8 mx-auto max-w-4xl shadow-lg shadow-black rounded-xl">
      <h2 className="text-3xl text-white font-semibold text-center mb-6">
        Създай нова обява
      </h2>
      <form action={createActionm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Марка"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            name="brand"
          />
          <input
            type="text"
            placeholder="Модел"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            name="model"
          />
          <input
            type="number"
            placeholder="Година"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            name="year"
          />
          <input
            type="text"
            placeholder="Мощност"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            name="power"
          />
          <select className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500" name="fuel">
            <option value="">Гориво</option>
            <option value="Diesel">Дизел</option>
            <option value="Petrol">Бензин</option>
          </select>
          <input
            type="number"
            placeholder="Цена ($)"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            name="price"
          />
          <input
            type="number"
            placeholder="Пробег (км)"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            name="mileage"
          />
        </div>
        <textarea
          placeholder="Описание"
          className="p-3 border rounded-lg w-full mt-4 h-32 focus:ring-2 focus:ring-blue-500"
          defaultValue={""}
          name="description"
        />
        {imageUrl.map((url) => <input
          type="text"
          placeholder="Добави снимка (URL)"
          className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          name={`imageUrl ${url}`}
          key = {url}
        />)}

        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
          type="button"
          onClick={addImageUrl}
        >+</button>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700"
          type="submit"
        >
          Публикувай
        </button>
      </form>
    </section>
  </>)
}

export default CreateComponent