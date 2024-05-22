import React from 'react';
import './homepage.css';

const HomePage = () => {
    return (
        <div className='homepage'>
            <h1>Welcome to the Pet Expo</h1>
            <div className='cards-container'>
                <div className='card'>
                    <h2>Explore Birds</h2>
                    <p>Discover the fascinating world of birds at our pet shop. From colorful parrots to melodious songbirds, we offer a wide variety of avian companions. Learn about bird care, training, and find the perfect feathered friend to brighten up your home.</p>
                </div>
                <div className='card'>
                    <h2>Discover Dogs</h2>
                    <p>Explore our collection of adorable dogs, from playful puppies to loyal companions. Whether you're looking for a small breed or a large one, we have the perfect match for your lifestyle. Join us in celebrating the unconditional love and joy that dogs bring into our lives.</p>
                </div>
                <div className='card'>
                    <h2>Cat Haven</h2>
                    <p>Indulge in the charm of our feline friends at our cat haven. Discover a range of breeds, from sleek Siamese to fluffy Persians. Our cat section offers everything you need to pamper your purring companion, from toys and treats to grooming essentials. Find your new cuddle buddy and experience the magic of cat ownership today!</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
