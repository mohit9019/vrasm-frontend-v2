import {FaStar} from 'react-icons/fa';
function RatedStars(props){
    const ratings =  0;
    const unrate= 5 ;
    console.log(ratings, unrate)
    return(
        <>
                    {[...Array(ratings)].map(()=>{
                        return(
                            <FaStar color="rgb(248, 215, 31)" />
                        );
                    })}
                    {[...Array(unrate)].map(()=>{
                        return(
                            <FaStar color="rgb(207, 206, 206)" />
                        );
                    })}
        </>
    );
}
export default RatedStars;