import { css } from "lit";
export const styles = css `
    .banner {
        height: 300px;
        background-image: url('../src/images/subscribe_background.png'); 
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: Arial, sans-serif;
        text-align: center;
        gap: 0.5rem;
    }
        
    .line1 {
        font-size: 24px;
        font-weight: 600;
    }

    .line2 {
        font-size: 20px;
        font-weight: 400;
    }

        .form-container {
        display: flex;
        margin-top: 10px;
        gap: 0.5rem;
        align-items: center;
    }

    input[type="text"] {
        padding: 0.5rem;
        width: 360px;
        font-size: 1rem;
        flex: 1;
    }

    button {
        padding: 0.5rem 1rem;
        font-size: 14px;
        width: 125px;
        height:40px;
        cursor: pointer;
        background-color: #E10000;
        color: white;
        border: none;
    }
    
    .locate {
        width:160px;
        height:40px;
        background-color: #222222;
    }

    .icon-text {
        display: flex;
        align-items: center;
        width:160px;
        height:40px;
        position: relative;
        top: 65px;
        left: 300px;
        color: #DDDDDD;
        background-color: #222222;
    }

    .icon {
        width: 20px;
        padding:10px;
        height: 20px;
        fill: #E0E0E0;
    }

    .label {
        font-size: 16px;
        font-weight: 500;
        padding: 10px;
        font-color: #DDDDDD
    }    

`;
//# sourceMappingURL=Subscribe.css.js.map