import { Navigate, useNavigate, useParams } from "react-router";
import { useEdit, useGetOne } from "../api/carsApi";
import { useActionState, useContext, useState } from "react";
import { UserContext } from "../context/authContext";

const fuels = [

    { Diesel: "Дизел" },
    { Petrol: "Бензин" },

]
export default function Edit() {
    const { carId } = useParams();
    const { car, setCar, selectedImage, setSelectedImage, imageUrls, setImageUrls } = useGetOne(carId);
    const {editCar} = useEdit(carId)
    const navigate = useNavigate()

    const{_id} = useContext(UserContext)
    const isOwner = car?._ownerId==_id

    console.log(car)
   
    
    
    const editSubmitHandler = async (prevData, formData) => {
        console.log(Object.fromEntries(formData))
        const submitImageUrls = [];
        imageUrls.map((url, index) => {
            const current = formData.get(`imageUrl ${index}`)
            submitImageUrls.push(current)
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
            imageUrls: submitImageUrls
        }
        const response = await editCar(carId,{...newData, carId})
        console.log(response)
        navigate(`/catalog/${carId}/details`);
    }
    const [values, editAction, isPending] = useActionState(editSubmitHandler, {});
    if(car.brand){
        if(!isOwner){
                return<Navigate to="/catalog"/>
        }
    }
    return (<>
        <section className="bg-grey-800 p-8 mt-8 mx-auto max-w-4xl shadow-lg shadow-black rounded-xl">
            <h2 className="text-3xl text-white font-semibold text-center mb-6">
                Създай нова обява
            </h2>
            <form action={editAction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Марка"
                        className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                        name="brand"
                        defaultValue={car.brand}
                    />
                    <input
                        type="text"
                        placeholder="Модел"
                        className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                        name="model"
                        defaultValue={car.model}
                    />
                    <input
                        type="number"
                        placeholder="Година"
                        className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                        name="year"
                        defaultValue={car.year}
                    />
                    <input
                        type="text"
                        placeholder="Мощност"
                        className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                        name="power"
                        defaultValue={car.power}
                    />
                    <select className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500" name="fuel">
                        <option value="" >Гориво</option >

                        {fuels.map((fuel) => {
                            const [key, value] = Object.entries(fuel)[0];
                            if (key == car.fuel) {
                                return <option value={key} selected key={key}>{value}</option>
                            } else {
                                return <option value={key} key={key}>{value}</option>
                            }
                        }
                        )}

                    </select>
                    <input
                        type="number"
                        placeholder="Цена ($)"
                        className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                        name="price"
                        defaultValue={car.price}
                    />
                    <input
                        type="number"
                        placeholder="Пробег (км)"
                        className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                        name="mileage"
                        defaultValue={car.mileage}
                    />
                </div>
                <textarea
                    placeholder="Описание"
                    className="p-3 border rounded-lg w-full mt-4 h-32 focus:ring-2 focus:ring-blue-500"

                    name="description"
                    defaultValue={car.description}
                />
                {/* {imageUrl.map((url) => <input
          type="text"
          placeholder="Добави снимка (URL)"
          className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          name={`imageUrl ${url}`}
          key = {url}
        />)} */}
                {imageUrls.map((url, index) => (
                    <input
                        type="text"
                        placeholder="Добави снимка (URL)"
                        className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                        name={`imageUrl ${index}`}
                        defaultValue={url}
                        key={index}
                    />
                ))}

                <button
                    className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                    type="button"
                    onClick={() => {
                        const updatedImageUrls = [...imageUrls, ''];
                        setImageUrls(updatedImageUrls);
                    }}
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