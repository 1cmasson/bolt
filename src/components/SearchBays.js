
import React from 'react';

function SearchBays(props){
    return (
        <div className="search-appointments row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchApts"
              type="text"
              className="form-control"
              aria-label="Search Bay"
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button 
                  className={
                    'sort-by dropdown-item'+
                    (props.orderBy === 'lastServiced' ? 'active' : '')
                  } 
                  onClick={ e => props.changeOrder('lastServiced', props.orderDirection)}
                  href="#"
                  >

                  Last Serviced
                </button>
                <button 
                  className={
                    'sort-by dropdown-item' +
                    (props.orderBy === 'time' ? 'active' : '')
                  }
                  onClick={ e => props.changeOrder('time', props.orderDirection)}
                  href="#"
                >
                  Time
                </button>
                <div role="separator" className="dropdown-divider" />
                <button 
                  className={
                    'sort-by dropdown-item' +
                    (props.orderDirection === 'asc' ? 'active' : '')
                  }
                  onClick={ e => props.changeOrder(props.orderBy, 'asc')}
                  href="#"
                >

                  Asc
                </button>
                <button
                  className={
                    'sort-by dropdown-item' +
                    (props.orderDirection === 'des' ? 'active' : '')
                  }
                  onClick={ e => props.changeOrder(props.orderBy, 'des')}
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>        
    )
}

export default SearchBays;