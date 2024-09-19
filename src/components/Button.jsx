export default function Button({btnClass, text, onClick}){
    return(<>
    <button className={`btn ${btnClass} btn-lg`} onClick={onClick} >{text}
        </button> </>)
}