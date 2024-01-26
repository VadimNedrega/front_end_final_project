import React from 'react';

function SearchForm() {
    return (
        <form className="form-inline">
            <div className="row">
                <div className="col-xs-auto">
                    <input
                        type="text"
                        className="form-control mr-sm-2"
                        placeholder="Search"
                    />
                </div>
                <div className="col-xs-auto">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;