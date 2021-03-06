import { useEffect, useState } from 'react';
import Header from './components/Header';
import { Box } from '@material-ui/core';
import { fetchData } from './service/api';
import Characters  from './components/Characters';
import Pagination from './components/Pagination';

import './App.css';

const App = () => {
  const [text, setText] = useState("")
  const [data, setData] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(text)
      setData(result.data)
      console.log(result);
    }
    getData();
  }, [text]);

  const getText = (text) => {
    setText(text);
    console.log(text);
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <Box>
      <Header getText={getText} />
      <Characters data={currentPosts} />
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
 <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
</div>
    </Box>
  );
}

export default App;
