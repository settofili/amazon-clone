import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return  (
        <div className="home">
            <div className="home__container">
            <img 
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" alt="" />
            
            <div className="home__row">
            <Product title="The lean startup"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            rating={3}
            />
             <Product title="The lean startup"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
            rating={3}
            />
            </div>

            <div className="home__row">
            <Product title="The lean startup"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={3}
            />
             <Product title="The lean startup"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
            rating={3}
            />
             <Product title="The lean startup"
            price={199.99}
            image="https://m.media-amazon.com/images/I/41CejTO1rjS._AC_SY200_.jpg"
            rating={3}
            />
            </div>

            <div className="home__row">
            <Product title="The lean startup"
            price={199.99}
            image="https://m.media-amazon.com/images/I/41MUBAPIW7L._AC_SY200_.jpg"
            rating={3}
            />
            </div>

            </div>
        </div>
    );
}

export default Home
