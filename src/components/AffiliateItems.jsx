import React, { useState } from 'react';
import Affiliate from './Affiliate';

function AffiliateItems() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const items = [
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-18.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-14.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-15.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-17.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-2.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-3.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-7.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-8.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-9.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-26.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-22.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-23.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-24.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-27.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-28.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-29.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-30.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-31.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-35.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-37.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-38.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-43.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-44.png"},
        {company:"https://nsuyes.org/wp-content/uploads/2022/06/Affiliates-of-NSU-YES-45.png"},
        
    ]

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <div className='grid grid-cols-3 md:grid-cols-9 mt-6 w-11/12 mx-auto'>
                {items.map((item, index) => (
                    <Affiliate key={index} item={item} onClick={() => openModal(item.company)} />
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-4 rounded-lg"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <img src={selectedImage} alt="Affiliate" className="max-w-full h-auto" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default AffiliateItems;
