import { css } from "lit";

export const styles = css`
    .form-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 25px;
        max-width: 600px;
        margin: auto;
        border: 1px solid #333333;
    }

    .row {
      display: flex;
      gap: 1rem;
    }

    .row > input {
      flex: 1;
    }

    input {
      padding: 0.5rem;
      font-size: 14px;
      color: #888888;
      border: 1px solid #888888;
    }

    input::selection {
        border:  1px solid ##333333; /* background when text is selected */
        color: black;        /* text color when selected */
    }

    .heading {
        margin-bottom: 20px;
        font-size:24px;
        color: #333333;
    }

    .submit-button {
        height: 40px;
        background-color: #333333;
        color: white;
        font-size:16px;
        width: 240px;
        align-self: end;
        margin-bottom:15px;
        margin-top:10px;
    }
`