import { Link } from "react-router-dom";

export default function ButtonQ({text, onClick, exit, goto}) {
    return (
        exit ? (
            <Link to="/" className={`btn-q ${exit ? 'exit-btn-q' : ''}`} onClick={onClick}>
                {text}
            </Link>
        ) : (
            <a href={`#${goto}`} className={`btn-q ${exit ? 'exit-btn-q' : ''}`} onClick={onClick}>
                {text}
            </a>
        )
    );
}