export default function Property({name, price, rating}){

    return (
        <div className="Property">
            <h2>{name}</h2>
            <h3>${price} per night</h3>
            <h4>{rating}👍</h4>
        </div>
    )

}