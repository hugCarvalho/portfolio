export const Emoji = ({ children, ariaLabel, title, style = {color: "black"} }) => {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      title={title}
      style={style}
    >
      {children}
    </div>
  );
}
