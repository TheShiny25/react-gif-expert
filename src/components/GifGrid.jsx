
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './Gifitem';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    //console.log({ isLoading });
    /*const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);*/
    console.log(isLoading);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading 
                ?(<h2>Cargando...</h2>)
                : null
            }
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }

            </div>

        </>
    )
}
