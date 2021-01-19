import React, { useState , useEffect} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from '../../actions/productData';
import './styles.scss';

const DashboardContainer = withRouter((props) => {
    const dispatch = useDispatch();
    const productData = useSelector(state => state.productData)
    const [data, setData] = useState([]);
    useEffect(async () => {
        const result = await axios(
            'https://meijerdigital.azurewebsites.net/api/interview',
        );        
        setData(result.data);
        dispatch(setProductData(result.data));
    }, []);
    const displayData = productData.data && productData.data.map((obj)=> {
        return (
                <ProductCard key={obj.code} image={obj.image} price={obj.price} name={obj.name} data={obj}/>
        )
    })

    return (
        <div className="dashboard-container">
            <div class="wrapper">
            {displayData}
            </div>
        </div>
    )});

  export default DashboardContainer