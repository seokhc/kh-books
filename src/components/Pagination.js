import react from 'react';

const Pagination = (props) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number)=>{
          return(
            <li key={number} className="page-item">
              <a onClick={()=>{props.paginate(number)}} href="#" className="page-link">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;