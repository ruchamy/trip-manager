import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SuccessPage.module.css";

export default function SuccessPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const confettiDuration = 3000;
        const redirectDelay = 4000;

        const end = Date.now() + confettiDuration;

        const interval = setInterval(() => {
            if (Date.now() > end) {
                clearInterval(interval);
                return;
            }
            createConfetti();
        }, 150);

        const timeout = setTimeout(() => {
            navigate("/list/my-students");
        }, redirectDelay);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigate]);

    const createConfetti = () => {
        const confetti = document.createElement("div");
        confetti.className = styles.confetti;

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            ["#14b8a6", "#f59e0b", "#29e9b9", "#383838"][
            Math.floor(Math.random() * 4)
            ];

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.icon}>👍</div>

                <h1 className={styles.title}>נרשמת בהצלחה!</h1>
            </div>
        </div>
    );
}