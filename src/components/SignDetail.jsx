import React from "react";
import axios from "axios";
import { useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";

function SignDetail() {

    const { signId } = useParams()

    const [ sign, setSign] = useState(null)

    useEffect(() => {
        getSignData()
    }, [])

    const getSignData = async() => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/signs/${signId}`)
        console.log(response.data)
        setSign(response.data)
        
        } catch (error) {
            console.log(error)
        }
    }

    if (!sign) return <h3 className="loading">Loading ...</h3>
    
    return (

        <div className="signDetailPage">


 <h4>{sign.name}</h4>
                <img src={sign.imgUrl} style={{width:"200px"}}/>
                <p>Date Start: {sign.dateStart}</p>
                <p>Date End: {sign.dateEnd}</p>
                <p>Duality: {sign.duality}</p>
                <p>Triplicity: {sign.triplicityId}</p>
                <p>Ruling Planet: {sign.rulingPlanet}</p>
                <p>Motto: {sign.motto}</p>
                <p>Polarity: {sign.polarity}</p>
                <p>Description: {sign.description}</p>
</div>


    )

}

export default SignDetail