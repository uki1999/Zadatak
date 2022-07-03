import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Index = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;




    const getUsers = async () => {
        setLoading(true);
        const response = await axios.get("https://api.github.com/gists/public?per_page=30");
        const FinalData = await response.data;
        setUsers(FinalData)
        setLoading(false);
        console.log(FinalData)
    }
    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <div className='page' loading={loading}>
                    <div className="card_item" key={user}>
                        <div className="card_inner">
                            <img src={user.owner.avatar_url} alt="" />
                            <div className="userName">{user.files.xxx}</div>
                            <div className="userUrl">{user.url}</div>
                        </div>
                    </div>   
                 </div>
            );
        });
        const pageCount = Math.ceil(users.length / usersPerPage);

        const changePage = ({ selected }) => {
        setPageNumber(selected);
        };


    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
      }, [pagesVisited]);
   
    return (
  
            <div className="container">
                            <li className="pagination">
                            {displayUsers} 
                                <ReactPaginate 
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"pagination"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"active"}
                                    subContainerClassName={'pages pagination'} /* as this work same as bootstrap class */
                                    
                                />
                                </li>
                                </div>
                        
                        )
    }
                    

export default Index;

