import React, {useState} from 'react';
import HomeProductList from './HomeProductList';
import '../../styles/HomeProductContainer.css';

const HomeProductContainer = () => {
    const [onglets, setOnglets] = useState(1);
    const goNews = () => {setOnglets(1)};
    const goMonth = () => {setOnglets(2)};

    return (
        <div className='home'>
            <h2>À NE PAS MANQUER</h2>
            <div className="contBtn">
                <button
                onClick={goNews}
                className={`onglets ${onglets === 1 ? "active" : ""}`}
                >
                NOUVEAUTÉS
                </button>
                <button
                onClick={goMonth}
                className={`onglets round ${onglets === 2 ? "active" : ""}`}
                >
                PRODUITS DU MOIS
                </button>
            </div>
            <HomeProductList onglets={onglets}/>
        </div>
    )
};

export default HomeProductContainer;