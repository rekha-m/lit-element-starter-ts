import { css } from "lit";
export const styles = css `
    .product-row {
        display: flex;
        flex-direction: row;
        gap: 1rem; /* optional spacing between cards */
        overflow-x: auto; /* enables horizontal scrolling if needed */
        padding: 1rem 0;
    }

    .product {
        width: 300px;
        border-radius: 8px;
        text-align: center;
        flex-shrink: 0; /* prevents items from shrinking in overflow */
    }

    .product img {
        width: 100%;
        height: auto;
    }

    .product-name {
        padding: 0.5rem;
    }

    .price-tag {
        padding: 0.5rem;
        font-size: 1rem;
        color: red;
    }
    
    .container {
        padding: 10px;
    }
    
    .centered-text {
        display: flex;
        margin-bottom: 10px;
        justify-content: center;  /* Horizontal center */
        align-items: center;      /* Vertical center */
    }

    .centered-text::before,
    .centered-text::after {
        content: "";
        flex: 1;
        border-bottom: 1px solid #ccc;
    }

    .centered-text::before {
        margin-right: 1rem;
    }

    .centered-text::after {
        margin-left: 1rem;
    }
`;
//# sourceMappingURL=LatestCollections.css.js.map