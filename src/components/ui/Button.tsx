import "./button.css";
export default function Button({label, onClick}: {label: string, onClick: () => void}) {
    return(
        <button onClick={onClick} className="custom-button">
            {label}
        </button>
    )
}