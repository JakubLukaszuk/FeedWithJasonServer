import React, {useEffect, useState} from 'react';
import {getArticlesInRangeAsync} from '../../data/providers/articleProvider';
import {getErrorMessage} from '../../utils/error/error';
import ArticleOverview from '../ArticleOverview/ArticleOverview';
import {Spinner, CardColumns, Card} from 'react-bootstrap';

const Feed = () => {
    const amoutArticelsToFetch = 5;
    const [articlesList, setArticlesList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [lastItemFetchedIndex, setLastItemFetchedIndex] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        let unmounted = false;
        fetchArticelsInRangeWithErrorHandling(0, amoutArticelsToFetch*2, unmounted);
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll); unmounted = true;}
      }, []);


      useEffect(() => {
        let unmounted = false;
        if (!isFetching)
        {
            return;
        }
        fetchArticelsInRangeWithErrorHandling(lastItemFetchedIndex, amoutArticelsToFetch, unmounted);
        return () => { unmounted = true;}
      }, [isFetching]);

    const fetchArticelsInRangeWithErrorHandling= (from, to, unmounted)=> {
        console.log(from+", "+to);
        const articlesData = getArticlesInRangeAsync(from,to)
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
                        const notSortedArticels = [...articlesList, ...articles];
                        setArticlesList(notSortedArticels);
                        setLastItemFetchedIndex(lastItemFetchedIndex+1);
                        setIsFetching(false);
                    }
                }
            })
        }, 2000);
    }

    const handleScroll = () => {
        if (((Math.round(window.innerHeight + document.documentElement.scrollTop)+5)) <= document.documentElement.offsetHeight || isFetching)
        {
            return;
        }
        setIsFetching(true);
      }

    return (
        <CardColumns>
            {articlesList.map(function(article, index){
                const {date, excerpt, thumb, title, url} = article;
                return (<ArticleOverview key={index} date={date} excerpt={excerpt} thumb={thumb} title={title} url={url}/>)
            })}
            {isFetching? <Card border="dark" style={{ width: '21rem', height: '34rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <span style={{display: 'flex', justifyContent: 'center'}}><Spinner animation="border" variant="primary"/> Ładowanie...</span>
                </Card> : null}
            {error ? getErrorMessage(error): null}
        </CardColumns>
    )
}

export default Feed
