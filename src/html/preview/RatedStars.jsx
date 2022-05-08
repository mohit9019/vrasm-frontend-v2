import {FaStar} from 'react-icons/fa';
function RatedStars(props){
    console.log(props);
    const ratings = props.rating;
    const unrate= 5 - (props.rating ? props.rating : 0);
    console.log(unrate);
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