function CreateComponent(){
    return(<>
        {/* Форма за създаване на обява */}
  <section className="bg-white p-8 mt-8 mx-auto max-w-4xl shadow-lg rounded-xl">
    <h2 className="text-3xl font-semibold text-center mb-6">
      Създай нова обява
    </h2>
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Марка"
          className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Модел"
          className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Година"
          className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Мощност"
          className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
        <select className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500">
          <option value="">Гориво</option>
          <option value="Diesel">Дизел</option>
          <option value="Petrol">Бензин</option>
        </select>
        <input
          type="number"
          placeholder="Цена ($)"
          className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Пробег (км)"
          className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <textarea
        placeholder="Описание"
        className="p-3 border rounded-lg w-full mt-4 h-32 focus:ring-2 focus:ring-blue-500"
        defaultValue={""}
      />
      <input type="file" className="mt-4" />
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700">
        Публикувай
      </button>
    </form>
  </section>
    </>)
}

export default CreateComponent