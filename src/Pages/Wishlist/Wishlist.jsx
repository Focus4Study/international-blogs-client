import { useContext, useEffect, useState } from "react";
import WishlistCard from "./WishlistCard";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";


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


    const handleDelete = id => {

        const confirm = Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you would like to remove this item?',
            icon: 'error',
            confirmButtonText: 'Yes, I am'
        })

        if (confirm) {
            fetch(`http://localhost:5000/wishlist/id/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted',
                            text: 'You have removed this blog form wishlist',
                            icon: 'info',
                            confirmButtonText: 'Ok'
                        })
                    }
                    const remaining = wish.filter(w => w._id !== id)
                    setWish(remaining)
                })
        }
    }


    return (
        <div>
            <h2>This is wishlist page</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-y-7 lg:gap-x-14">
            {
                wish.map(oneWish => <WishlistCard key={oneWish._id} oneWish={oneWish} handleDelete={handleDelete}></WishlistCard>)
            }
            </div>
        </div>
    );
};

export default Wishlist;