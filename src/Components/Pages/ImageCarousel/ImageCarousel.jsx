import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TrendingCoins } from '../../../Utilities/Api';
import axios from 'axios';
import TrendingCoin from './TrendingCoin/TrendingCoin';

const ImageCarousel = () => {

    const [trending, setTrending] = useState([])
    
    const currency = 'INR';
    const fetchTrending = async()=>{
        const {data} = await axios.get(TrendingCoins(currency));
        setTrending(data)
    }

    useEffect(()=>{
        fetchTrending();
    },[currency])


    return (
        <div 
        style={{backgroundImage:'url(https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg?w=900&t=st=1680553077~exp=1680553677~hmac=a42ac7556f288a54bc1adc456e40f379a3c589fed74ba9063389fe75485e75b4)'}}
        className='p-5 bg-no-repeat bg-cover'
        >
            <Carousel
            responsive={responsiveForImage}
            autoPlaySpeed={3000}
            autoPlay={true}
            rewind={true}
            >
                {
                    images.map(img=><ImageSection key={img.id} img={img.imageUrl} /> )
                }
            </Carousel>

            <section className='my-10 text-center space-y-1'>
                <h1 className='text-7xl font-extrabold text-yellow-400 uppercase'>Crypto <span className='text-white' >Dekho</span></h1>
                <p className='text-slate-300'>Keep a Close Eye on the Cryptocurrency Markets with Our Real-Time Watch.</p>
            </section>

            <Carousel
            responsive={responsive}
            autoPlaySpeed={3000}
            autoPlay={true}
            rewind={true}
            >
                {
                    trending.map(crypto=><TrendingCoin key={crypto.id} crypto={crypto} />)
                }
            </Carousel>

        </div>
    );
};


const ImageSection = ({img})=>{
    return(
        <div className='flex justify-center w-full'>
            <img title='Crypto Dekho Banner' className='h-[20rem] w-full' src={img} alt="Crypto Dekho" />
        </div>
    )
}



const images = [
    {
        id: 1,
        imageUrl: 'https://i.ibb.co/NWzk12h/Shop-New-Products-Website-Banner-Brown-White-Tan.png'

    },
    {
        id: 2,
        imageUrl: 'https://i.ibb.co/Y2tsGBx/Shop-New-Products-Website-Banner-Brown-White-Tan-1.png'

    },
    {
        id: 3,
        imageUrl: 'https://i.ibb.co/TYYXGT1/Shop-New-Products-Website-Banner-Brown-White-Tan-2.png'

    },
]

const responsiveForImage = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default ImageCarousel;