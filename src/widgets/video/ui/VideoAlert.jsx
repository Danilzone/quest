
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { Button } from '../../../shared';
export default function VideoAlert() {
    return (

        <div className="video">

            <iframe
                width="1440"
                height="820"
                src="https://rutube.ru/play/embed/ed58b2df00904f264567a50892c29255/?p=ZTl9VxpP_DbDfCllybPh3Q"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                webkitAllowFullScreen
                mozallowfullscreen
                allowFullScreen

            ></iframe>

            <Button
                to="/" 
                text="Вернуться назад"
                color="none"
                borderColor="orange"
                textColor="orange"
                mt20
            />

        </div>
    

    )
}

