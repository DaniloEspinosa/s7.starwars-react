import "../../../styles/Ui/Button.css";

interface Props {
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
}

const Button: React.FC<Props> = ({
    onClick,
    disabled = false,
    loading = false,
    children,
}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        aria-busy={loading}
        className="button"
        style={{
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.7 : 1,
        }}
    >
        {loading ? <span className="spinner" /> : children}
    </button>
);

export default Button;