import React, { useEffect, useState } from "react";
import Card from "../Card";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";

function Data() {
    const [codingData, setCodingData] = useState([]);
    const [limit, setLimit] = useState(20);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetch(`https://api.sampleapis.com/codingresources/codingResources`)
          .then((res) => res.json())
          .then((data) => {
            const limitedItems = data.slice(0, limit);
            setCodingData(limitedItems);
          })
          .catch((err) => console.log(err));
      }, [limit]);
      

    const fetchMoreData = () => {
        setTimeout(() => {
          const newLimit = limit + 20;
          setLimit(newLimit);
          fetch(`https://api.sampleapis.com/codingresources/codingResources`)
            .then((res) => res.json())
            .then((data) => {
              const limitedItems = data.slice(0, newLimit);
              setItems(limitedItems);
              data.length - items.length > 0
                ? setHasMore(true)
                : setHasMore(false);
            })
            .catch((err) => console.log(err));
        }, 1200);
    };

    const breakpoints = {
        default :4,
        768:2,
        640:1
    }
      


    return (
        <>
            <section className="bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <div className="p-4 max-w-screen-xl mx-auto">
                    <p className="text-5xl text-white my-5 font-bold">InfiniteScrolling</p>
                    <hr className="border-solid border-2 my-5 rounded-md" />
                    <InfiniteScroll
                        dataLength={codingData.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<Loader/>}
                      
                    >
                        <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                    
                            {codingData.map((item, index) => (
                                <Card key={index} data={item} />
                            ))}
                        </Masonry>
                    </InfiniteScroll>
                  
                </div>
            </section>
        </>
    );
}

export default Data;
