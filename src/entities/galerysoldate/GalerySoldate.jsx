



export default function GalerySoldate({img, name, description}) {

    return(

        <div className="gallery-soldate">
            
            <div className="avatar">
                <img src={require(`../../shared/assets/${img}.jpg`)} alt="avatr"/>
            </div>

            <div className="description">

                <div className="name">
                    {name}
                </div>

                <div className="text">
                    {description}
                </div>

            </div>

        </div>

    );

}