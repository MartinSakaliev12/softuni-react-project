import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router';
import { useGetOne } from '../api/carsApi';
import { UserContext } from '../context/authContext';

export default function Details() {
  const { carId } = useParams();
  const { car, setCar, selectedImage, setSelectedImage } = useGetOne(carId);

  const { email, password, accessToken, _id ,liked} = useContext(UserContext);
  
  const isOwner = _id === car._ownerId;
  const isLiked = liked?.includes(carId)
  console.log(isLiked)

  return (<>
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 shadow-lg shadow-black rounded-xl mt-10">
      <h1 className="text-3xl text-white font-bold mb-4">{car.brand}</h1>

      <div className="flex gap-4">
        <div className="w-3/4">
          <img src={selectedImage} alt={car?.brand} className="w-full h-96 object-cover rounded-lg" />
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
        <p className="text-white"><strong>Price:</strong> {car.price}€</p>
        <p className="text-white"><strong>Year:</strong> {car.year}</p>
        <p className="text-white"><strong>Fuel Type:</strong> {car.fuel}</p>
        <p className="text-white"><strong>Mileage:</strong> {car.mileage}</p>
        <p className="text-white"><strong>Power:</strong> {car.power}</p>
        <p className="text-white mt-4">{car.description}</p>
      </div>
      {email ?
        <div className="flex justify-center space-x-4 w-full max-w-md mx-auto">
          {isOwner ?
            <>
              <Link
                to={`/catalog/${car._id}/edit`}
                className="w-1/3 bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 text-center"
              >
                Edit
              </Link>
              <Link
                to={`/catalog/${car._id}/delete`}
                className="w-1/3 bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 text-center"
              >
                Delete
              </Link>
            </>

            : <>
            {
              !isLiked?
              <Link
              to={`/catalog/${car._id}/like`}
              className="w-1/3 bg-blue-600 text-white py-3 rounded-lg mt-4  text-center"
              
              >
              Like
            </Link>:
            <Link
            to={`/catalog/${car._id}/details`}
            className="w-1/3 bg-gray-400 cursor-not-allowed text-white py-3 rounded-lg mt-4 hover:bg-blue-700 text-center"
            
            >
              Like
            </Link>
                
              }
            </>
            



          }
        </div>
        : <></>}


    </div>
  </>)

}
