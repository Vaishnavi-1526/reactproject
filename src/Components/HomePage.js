import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPage, nextPage, prevPage, goToFirstPage, goToLastPage } from '../Redux/imagesSlice';

function HomePage (){
    const dispatch = useDispatch();
    const { images, currentPage, itemsPerPage } = useSelector((state) => state.images);

    // Calculate indices for the current page
    const indexOfLastImage = currentPage * itemsPerPage;
    const indexOfFirstImage = indexOfLastImage - itemsPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    // Pagination Control Handlers
    const handlePrevPage = () => dispatch(prevPage());
    const handleNextPage = () => dispatch(nextPage());
    const handleFirstPage = () => dispatch(goToFirstPage());
    const handleLastPage = () => dispatch(goToLastPage());

    return (
            <div className="image-grid">
                {currentImages.map((image) => {
                        return(<Link to={`/description/${image.id}`} key={image.id}>
                            <img src={image.src} alt={`Plant ${image.id}`}/>
                        </Link>);
                        
                }   
                )}
            <div className="pagination" style={{textAlign:"end",backgroundColor:"blue",display:"flex",justifyContent:"flex-end",width:"100%",margin:"auto"}}>
                <button onClick={handleFirstPage}>
                    First
                </button>
                <button onClick={handlePrevPage}>
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button onClick={handleNextPage}>
                    Next
                </button>
                <button onClick={handleLastPage}>
                    Last
                </button>
            </div>
        </div>
    );
}

export default HomePage;