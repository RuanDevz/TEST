import React from 'react';
import Jaguar from './Images/Jaguar.png';
import Audi from './Images/Audi.png';
import BMW from './Images/BMW.png';
import Lamborghini from './Images/Lamborghini.png';
import Passageiro from './Images/user.png';
import Marcha from './Images/Marcha.png';
import Arcondicionado from './Images/Frozen.png';
import Portas from './Images/Portas.png';
import Star from './Images/Star.png';
import Button from '../Button/Button';
import Arrow from './Images/Arrow.png'

const Cars = () => {
    const cars = [
        {
            img: Jaguar,
            name: 'Jaguar XE L P250',
            nota: '4.8',
            reviews: '2436',
            passageiros: '4',
            marcha: 'Auto',
            arcondicionado: 'Air Conditioning',
            portas: '4',
            price: '1,800'
        },
        {
            img: Audi,
            name: 'Audi A4',
            nota: '4.5',
            reviews: '1978',
            passageiros: '5',
            marcha: 'Auto',
            arcondicionado: 'Air Conditioning',
            portas: '4',
            price: '1,600'
        },
        {
            img: BMW,
            name: 'BMW 5 Series',
            nota: '4.7',
            reviews: '2150',
            passageiros: '5',
            marcha: 'Auto',
            arcondicionado: 'Air Conditioning',
            portas: '4',
            price: '1,700'
        },
        {
            img: Lamborghini,
            name: 'Lamborghini Huracan',
            nota: '5.0',
            reviews: '305',
            passageiros: '2',
            marcha: 'Auto',
            arcondicionado: 'Air Conditioning',
            portas: '2',
            price: '4,500'
        }
    ];

    return (
        <div>
            <main data-aos="zoom-in" className='mt-60'>
                <section className='flex flex-col mx-auto items-center py-5'>
                    <p className='text-primary font-medium py-3 px-10 bg-blue-100 rounded mb-10 w-64 text-center whitespace-nowrap'>POPULAR RENTAL DEALS</p>
                    <h1 className=' text-center lg:font-primary font-medium text-4xl max-w-xl pb-20'>Most popular cars rental deals</h1>
                </section>
                <section className='flex flex-col justify-center items-center lg:flex lg:justify-between lg:flex-row max-w-6xl  mx-auto pb-52'>
                    {cars.map((car, index) => (
                        <div className='max-w-64 font-primary rounded-lg shadow-2xl p-4 mb-4' key={index}>
                            <img className='pb-5' src={car.img} alt={car.name} />
                            <h1 className='font-medium text-lg'>{car.name}</h1>
                            <div className='flex items-center pb-4'>
                                <img src={Star} alt="Star" />
                                <span>{car.nota}</span>
                                <p className='text-xs text-gray-500'>({car.reviews} reviews)</p>
                            </div>
                            <div className='flex gap-2 flex-wrap items-end gap-5 border-b border-gray-300'>
                                <div className='flex py-1'>
                                    <img src={Passageiro} alt="Passageiro" />
                                    <p className='text-xs text-gray-500'>{car.passageiros} Passagers</p>
                                </div>
                                <div className='flex gap-2 py-1'>
                                    <img src={Marcha} alt="Marcha" />
                                    <p className='text-xs text-gray-500'>{car.marcha}</p>
                                </div>
                                <div className='flex gap-2 py-1 pb-6'>
                                    <img src={Arcondicionado} alt="Arcondicionado" />
                                    <p className='text-xs text-gray-500'>{car.arcondicionado}</p>
                                </div>
                                <div className='flex gap-2 py-1 pb-6'>
                                    <img src={Portas} alt="Portas" />
                                    <p className='text-xs text-gray-500'>{car.portas} Doors</p>
                                </div>
                            </div>
                            <div className='flex justify-between pt-5 font-primary'>
                                <p>Price</p>
                                <p><strong>${car.price}</strong> <span className='text-gray-500'>/day</span></p>
                            </div>
                            <div className='flex justify-center items-center mt-6'>
                            <Button Children='Rent Now'/>
                            </div>
                        </div>
                    ))}
                </section>
                <div className='flex justify-center items-center border border-gray-300 border-3 max-w-56 mx-auto p-3 rounded-md mb-20'>
  <button className='font-medium text-base'>Show all vehicles</button></div>
            </main>
        </div>
    );
};

export default Cars;