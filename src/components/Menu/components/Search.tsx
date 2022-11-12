import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 425px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.borderBase};
    overflow: hidden;
    border-radius: 2px;
    @media (max-width: 620px) {
        max-width:  250px;
    }

    input {
        width: 80%;
        padding: 4px 6px;
        border: 0;
        outline: 0;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
    }

    button {
        flex: 1;
        width: 40px;
        height: 40px;
        border: 0;
        background-color: ${({ theme }) => theme.backgroundLevel2};
        border-left: 1px solid ${({ theme }) => theme.borderBase};
        @media (min-width: 600px) {
            width: 64px;
        }
    }
`;

const Search = ({ filterValue, setFilterValue }) => {
    return (
        <StyledSearch>
            <input type="text" placeholder="Buscar..." autoCorrect="false" onChange={e => {
                setFilterValue(e.target.value);
            }} value={filterValue} />
            <button>
                🔎
            </button>
        </StyledSearch>
    );
}

export default Search;