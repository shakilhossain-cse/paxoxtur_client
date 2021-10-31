import React from 'react'

const RideData = (props) => {
  const { name, price,image, _id } = props.ride;
  const deleteHandeler = (id) => {
    const del = window.confirm('Are you sure to delete')
    if (del) {     
      fetch(`http://localhost:5000/mainride/${id}`, {
        method: "DELETE",
  
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            props.deleteHandelerFromUi(id);
          }
        });
    };
    }
    return (
        <div className="lg:w-1/3 md:w-1/2 w-full bg-gray-50 p-4">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={ image}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            AMAZINGPARK
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {name}
          </h2>
          <p className="mt-1">${price}</p>
          <button onClick={()=>deleteHandeler(_id)} className="px-3 py-1 bg-red-500 text-white">Delete</button>
        </div>
      </div>
    )
}

export default RideData
