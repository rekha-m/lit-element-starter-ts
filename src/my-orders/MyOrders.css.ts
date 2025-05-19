import { css } from "lit";

export const styles = css`
    .row {
        display: flex;
        gap: 35px;
    }
    
    /* Create four equal columns that sits next to each other */
    .column {
        -ms-flex: 25%; /* IE10 */
        flex: 25%;
        max-width: 50%;
        padding: 0 4px;
    }
    
    .description {
        font-size:14px;
        color: #777777;
    }

    .name {
        font-size:16px;
        font-weight:600;
        color: #333333;
        margin-top: 10px;
    }

    .line {
        height: 1px;
        background-color: #DDDDDD;
        width: 100%;
    }
`