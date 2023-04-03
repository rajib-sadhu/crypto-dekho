import React from 'react';

const TrendingCoin = ({crypto}) => {
    console.log(crypto);
    // let profit = crypto?.price_change_percentage_24h >= 0;
    return (
        <div>
            <img src={crypto?.image} alt="" />
            <h3>{crypto?.name} 
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
            <p>{crypto?.current_price}</p>
        </div>
    );
};

export default TrendingCoin;