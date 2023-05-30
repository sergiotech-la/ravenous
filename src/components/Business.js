import React from "react";

const businessList = [
    {imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90}
]

function Business() {
    return (
        <article className='Business'>
            <img className='business-image' src={businessList.imageSrc} alt={businessList.name} />
            <h3 className='business-title'>{businessList.name}</h3>
            <section className='business-info'>
                 <div className='business-card-column1'>
                    <p>{businessList.address}</p>
                    <p>{businessList.city}</p>
                    <p>{businessList.state} {businessList.zipCode}</p>
                 </div>
                 <div className="business-card-column2">
                    <h4>{businessList.category}</h4>
                    <p>{businessList.rating}</p>
                    <p>{businessList.reviewCount}</p>
                 </div>
            </section>
        </article>
    );
};

export default Business;