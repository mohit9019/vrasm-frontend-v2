import {FaStar} from 'react-icons/fa';
function RatedStars(){
    const ratings=3 ,unrate=5-ratings;
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