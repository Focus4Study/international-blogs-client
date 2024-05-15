import { useContext, useEffect, useState } from "react";
import WishlistCard from "./WishlistCard";
import { AuthContext } from "../../context/AuthProvider";


const Wishlist = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    const [wish, setWish] = useState([])
    console.log(wish);
    useEffect(() => {
        fetch(`http://localhost:5000/wishlist/${email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setWish(data))
    }, [email])
    return (
        <div>
            <h2>This is wishlist page</h2>
            {
                wish.map(oneWish => <WishlistCard key={oneWish._id} oneWish={oneWish}></WishlistCard>)
            }
        </div>
    );
};

export default Wishlist;