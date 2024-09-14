

const Banner = () => {
    return (
      <div className="relative">
            <div className="carousel max-h-96 w-full relative">
                <div id="item1" className="carousel-item w-full relative">
                    <img src="https://i.ibb.co/ZK2dyj4/handmade-natural-jute-knitted-items-for-home-decoration-scandinavian-style-beige-tones-no-people-sus.jpg" className="w-full" alt="Jute Home Decor" />
                    <div className="absolute bottom-10 left-5 text-white bg-black bg-opacity-50 p-4 rounded-lg z-10">
                        <h1 className="text-2xl font-bold">Jute Home Craft</h1>
                        <p>Discover beautifully handmade jute items, perfect for home decoration and style.</p>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <img src="https://i.ibb.co/pj8zdmC/gray-sofa-living-room-with-copy-space-43614-926.jpg" className="w-full" alt="Wood Home Decor" />
                    <div className="absolute bottom-10 left-5 text-white bg-black bg-opacity-50 p-4 rounded-lg z-10">
                        <h1 className="text-2xl font-bold">Wood Home Decor Items</h1>
                        <p>Explore elegant wood decor items to enhance the beauty of your home interior.</p>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <img src="https://i.ibb.co/87m8nXL/photorealistic-wooden-house-interior-with-timber-decor-furnishings-23-2151263513.jpg" className="w-full" alt="Wood Kitchen Accessories" />
                    <div className="absolute bottom-10 left-5 text-white bg-black bg-opacity-50 p-4 rounded-lg z-10">
                        <h1 className="text-2xl font-bold">Wood Kitchen Accessories</h1>
                        <p>Find stylish wooden accessories to complement your kitchen's functionality and design.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;