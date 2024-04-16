import { GifItem } from "./index";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {
                isLoading && (<h2>Cargando...</h2>)
                
            }


            <div className="card-grid">
                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}