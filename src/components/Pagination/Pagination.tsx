import { useEffect, useState } from "react";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { changePage } from "../../store/slices/moviesSlices";
import { changePageThunk } from "../../store/slices/sliceThunks";
import st from "./Pagination.module.css"

const Pagination = () => {
    const dispatch = useAppDispatch();
    const {totalPages} = useAppSelector((state => state.moviesData))
    const [startPage, setStartPage] = useState<number>(1);
    const [activeIndex, setActiveIndex] = useState<number>(0); 
    const currentPage = startPage + activeIndex;

    const handleClick = (index: number) => {
        setActiveIndex(index);
        dispatch(changePage(startPage + index));
    };
    
    const changeNextPage = () => {
        if (startPage + activeIndex < totalPages) {
            if (activeIndex < 4) {
                setActiveIndex(prev => prev + 1);
                dispatch(changePage(startPage + activeIndex + 1));
            } else if (startPage + 5 <= totalPages) {
                setStartPage(prev => prev + 1);
                dispatch(changePage(startPage + 5));
            }
        }
    };

    const changePrevPage = () => {
        if (startPage + activeIndex > 1) {
            if (activeIndex > 0) {
                setActiveIndex(prev => prev - 1);
                dispatch(changePage(startPage + activeIndex - 1));
            } else if (startPage > 1) {
                setStartPage(prev => prev - 1);
                dispatch(changePage(startPage - 1));
            }
        }
    };

    useEffect(() => {
        dispatch(changePageThunk(currentPage));
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);


    return (
        <div className={st.buttonsDiv}>
            <button onClick={changePrevPage} className={st.arrow}> <HiMiniArrowSmallLeft/> </button>
            {
                [...Array(5)].map((_, ind) => {
                    const pageNumber = startPage + ind;
                    if (pageNumber > totalPages) return null;

                    return (
                        <button 
                            key={ind} 
                            onClick={() => handleClick(ind)} 
                            className={ind === activeIndex ? st.activePage : ""}
                        >
                            {pageNumber}
                        </button>
                    );
                })
            }
            <button onClick={changeNextPage} className={st.arrow}> <HiMiniArrowSmallRight/> </button>
        </div>
    )
}

export default Pagination