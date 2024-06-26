import React, { useContext } from 'react';
import Context from '../../useContext/Context';
import HeaderLogged from '../../components/ComponentLogado/HeaderLogged/HeaderLogged';
import Footer from '../../components/Footer/Footer';
import DefaultTitle from '../../components/DefaultTitle/DefaultTitle';
import DefaultTitleNotFound from '../../components/DefaultTitle/DefaultTitleNotFound';
import CarComponent from './CarComponent';

const CarrosAlugados = ({}) => {
    const { rentcars } = useContext(Context);
    console.log(rentcars);

    const handleDevolution = (index) => {
        const updatedRentcars = [...rentcars];
        updatedRentcars.splice(index, 1);
        setRentcars(updatedRentcars);
    };

    return (
        <div>
            <HeaderLogged />
            <DefaultTitle>Carros alugados</DefaultTitle>
            <div className="carros-alugados-list">
                {rentcars.length > 0 ? (
                    rentcars.map((car, index) => (
                        <>
                        <div className=''>
                        <CarComponent key={index} car={car} onDevolution={() => handleDevolution(index)} />

                        </div>
                        </>
                    ))
                ) : (
                    <>
                    <DefaultTitleNotFound>Nenhum carro alugado encontrado</DefaultTitleNotFound>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default CarrosAlugados;
