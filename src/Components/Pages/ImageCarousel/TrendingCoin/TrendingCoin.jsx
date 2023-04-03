import React from 'react';

const TrendingCoin = ({crypto}) => {
    console.log(crypto);
    let profit = crypto?.price_change_percentage_24h >= 0;
    return (
        <div className='flex flex-col justify-center w-full gap-2 text-center'>
            <img className='w-20 mx-auto' src={crypto?.image} alt="" />
            <h3 className='text-white text-lg'>{crypto?.symbol} 
            <span>
          {crypto?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {crypto?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
             </h3>
            <p className='text-white'> ₹ {crypto?.current_price}</p>
        </div>
    );
};

export default TrendingCoin;