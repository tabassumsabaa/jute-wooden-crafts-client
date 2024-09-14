import { useEffect, useState } from "react";


const Artician = () => {
    const [artisans, setArtisans] = useState([]); 
    const [loading, setLoading] = useState(true); 
  
    // Fetch the artisans data
    useEffect(() => {
      fetch("http://localhost:5000/artiest") 
        .then((res) => res.json())
        .then((data) => {
          setArtisans(data);  
          setLoading(false);  
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); 
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>; 
    }
  
    return (
        <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Artisans</h1>
      <div className="flex flex-wrap justify-center gap-8 bg-rose-100 p-5">
        {artisans.length > 0 ? (
          artisans.map((artisan) => (
            <div key={artisan._id} className="card w-80 bg-white shadow-md p-5">
              <img src={artisan.image} alt={artisan.name} className="h-40 w-40 object-cover object-top rounded-full mb-4" />
              <h2 className="text-xl font-bold mb-2">{artisan.name}</h2>
              <p className="text-gray-700">{artisan.description}</p>
            </div>
          ))
        ) : (
          <div>No artisans found.</div>
        )}
      </div>
    </div>
    );
};

export default Artician;