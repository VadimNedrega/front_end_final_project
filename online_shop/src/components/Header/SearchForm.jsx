import React, {useState} from 'react';


export function SearchForm() {
    const [search, setSearch] = useState("");
//    console.log('SearchForm   ', {search}.search);
    const searchMessage = search ? <p>You entered: {search}</p> : null; // Simulate usage
    return (
        <form className="header__search_form">
            <div className="header__search_form__row">
                <div className="header__search_form__col">
                    <input
                        type="text"
                        className="header__search_form__form_control"
                        placeholder="Пошук"
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>
                <div className="header__search_form__col">
                    <button type="submit" className="header__btn header__btn_common header__btn_primary">
                        Підтвердити
                    </button>
                </div>
            </div>
            {searchMessage}
        </form>
    );
}
