import "../../../styles/Ui/LogSignButton.css";

const LogSignButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <button className="button">{children}</button>
    </div>
  )
}

export default LogSignButton
