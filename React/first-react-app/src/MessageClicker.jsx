
export default function MessageClicker({message, buttonText}){

    return(
        <div className="MessageClicker">
            <button onClick={()=> alert(message)}>{buttonText}</button>
        </div>
    )

}