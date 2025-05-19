import { css } from "lit";

export const styles = css`
   * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: Arial;
    }

    .header {
        text-align: center;
        padding: 32px;
    }

    .row {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE10 */
        flex-wrap: wrap;
        padding: 0 4px;
    }

    /* Create four equal columns that sits next to each other */
    .column {
        -ms-flex: 25%; /* IE10 */
        flex: 25%;
        max-width: 50%;
        padding: 0 4px;
    }

    .column img {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
    }

    .column .image-container {
        flex: 1;
        position: relative;
    }

    .image-container {
      position: relative;
      width: 100%;
    }

    img {
      width: 100%;
      display: block;
    }

    .text-blocks {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .text-container {
      background: white;
      color: black;
      padding: 0.75rem 1.25rem;
      border-radius: 6px;
      font-size: 1rem;
      text-align: center;
      min-width: 200px;
    }
    
    .red {
        color: red;
    }
    
    .buttonStyle {
        padding: 10px;
        margin-top: 100px;
        height: 50px;
        background-color: #E10000;
        color: #FFFFFF;
        font-weight: 500;
        font-size:16px;
    }
    `
;