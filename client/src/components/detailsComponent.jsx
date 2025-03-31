import { useState } from 'react';
import { useParams } from 'react-router';
import { useGetOne } from '../api/carsApi';

export default function Details() {
    const { carId } = useParams();
    const {car, setCar,selectedImage,setSelectedImage} = useGetOne(carId);
    console.log(car);
   return(<>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-3xl font-bold mb-4">{car.brand}</h1>
      
      <div className="flex gap-4">
        <div className="w-3/4">
          <img src={selectedImage} alt={car.brand} className="w-full h-96 object-cover rounded-lg" />
        </div>
        <div className="w-40 h-96 overflow-y-auto space-y-2 p-4">
          {car.imageUrls?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Car ${index}`}
              className="w-full h-32 object-cover rounded-lg"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-gray-700"><strong>Price:</strong> {car.price}</p>
        <p className="text-gray-700"><strong>Year:</strong> {car.year}</p>
        <p className="text-gray-700"><strong>Fuel Type:</strong> {car.fuel}</p>
        <p className="text-gray-700"><strong>Mileage:</strong> {car.mileage}</p>
        <p className="text-gray-700"><strong>Power:</strong> {car.power}</p>
        <p className="text-gray-700 mt-4">{car.description}</p>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700">
        Buy Now
      </button>
    </div>
   </>)
   
}
