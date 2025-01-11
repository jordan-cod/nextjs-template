import styles from "./primary-button.module.css";

type PrimaryButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
};

export default function PrimaryButton({
    children,
    onClick,
    disabled
}: PrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={styles.primaryButton}
        >
            {children}
        </button>
    );
}
