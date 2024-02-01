import React, {useState} from 'react';


export function SearchForm() {
    const [search, setSearch] = useState("");
    console.log('SearchForm   ', {search}.search);
    return (
        <form className="form-inline">
            <div className="row">
                <div className="col-xs-auto">
                    <input
                        type="text"
                        className="form-control mr-sm-2"
                        placeholder="Пошук"
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>
                <div className="col-xs-auto">
                    <button type="submit" className="btn btn-common btn-primary">
                        Підтвердити
                    </button>
                </div>
            </div>
        </form>
    );
}
