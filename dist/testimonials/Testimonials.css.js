import { css } from "lit";
export const styles = css `
    .card-container {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
    .card {
        max-width: 400px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        font-family: Arial, sans-serif;
    }

    .profile {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 0.75rem;
        position:relative;
        top: -50px;
        left: -30px;
    }

    .profile-info {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .name {
        position: relative;
        left: -50px;
        font-size: 1rem;
    }

    .stars {
        color: #FFD700; /* gold */
        font-size: 0.9rem;
        white-space: nowrap;
    }

    .quote {
        font-style: italic;
        color: #555;
        margin: 0;
    }

    .centered-text {
        display: flex;
        margin-bottom: 50px;
        justify-content: center;  /* Horizontal center */
        align-items: center;      /* Vertical center */
    }

    .container {
        padding: 10px;
        background: #F9F9F9;
    }
`;
//# sourceMappingURL=Testimonials.css.js.map