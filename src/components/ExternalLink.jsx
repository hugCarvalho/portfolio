export const ExternalLink = ({link, text}) => {
  return <a
    style={{textDecoration: "none"}}
    target="_blank"
    rel="noopener noreferrer"
    href={link}
  >
    {text}
  </a>
}
