///posts?_page=7&_limit=20
import request from '../../api/agent';

export const getArticlesInRangeAsync = async(from, to) => {
  const data = request
    .get(`/posts?_page=${from}&_limit=${to}`)
    .catch(error => {
      throw error;
    })
    return data;
}