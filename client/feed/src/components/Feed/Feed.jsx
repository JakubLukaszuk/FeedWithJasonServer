import React, {useEffect, useState} from 'react';
import {getArticlesInRangeAsync} from '../../data/providers/articleProvider';

const Feed = () => {
    const [articlesList, setArticlesList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [lastItemFetchedIndex, setLastItemFetchedIndex] = useState(0);

    useEffect(() => {
        let unmounted = false;
        if(!unmounted)
        {
            const articles = getArticlesInRangeAsync(1,10);
            articles.then(a=>console.log(a));
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


    const getArticelsInRangeWithErrorHandling= (from, too)=> {

    }

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
      }

    return (
        <div>
            XDD
        </div>
    )
}

export default Feed
