export const ExternalLink = ({link, text, style}) => {

  return <a
    style={{textDecoration: "none", ...style}}
    target="_blank"
    rel="noopener noreferrer"
    href={link}
  >
    {text}
  </a>
}
