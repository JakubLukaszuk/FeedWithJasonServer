import React, {useEffect, useState} from 'react';
import {getArticlesInRangeAsync} from '../../data/providers/articleProvider';
import {getErrorMessage} from '../../utils/error/error';

const Feed = () => {
    const amoutArticelsToFetch = 5;
    const [articlesList, setArticlesList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [lastItemFetchedIndex, setLastItemFetchedIndex] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        let unmounted = false;
        fetchArticelsInRangeWithErrorHandling(0, amoutArticelsToFetch*2, unmounted);
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll); unmounted = true;}
      }, []);


      useEffect(() => {
        let unmounted = false;
        if (!isFetching) return;
        fetchArticelsInRangeWithErrorHandling(lastItemFetchedIndex, lastItemFetchedIndex+amoutArticelsToFetch, unmounted);
        return () => { unmounted = true;}
      }, [isFetching]);

    const fetchArticelsInRangeWithErrorHandling= (from, too, unmounted)=> {
        const articlesData = getArticlesInRangeAsync(from,too)
        .catch(error =>{
            if(!unmounted)
            {
                setError(error);
                setIsFetching(false);
            }
          })
          setTimeout(() => {
            articlesData.then(articles => {
                if(!unmounted)
                {
                    if(!error && articles)
                    {
                        console.log(articles);
                        setArticlesList(prevState => ([...prevState, ...articles]));
                        setLastItemFetchedIndex(too);
                    }
                }
            })
        }, 1500);
    }


    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
      }

    return (
        <div>
            {articlesList.map(function(article, index){
                return (<li key={index}>{article.title}</li>)
            })}
            {error ? getErrorMessage(error): null}
        </div>
    )
}

export default Feed
