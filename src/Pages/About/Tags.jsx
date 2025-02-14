import styled from "styled-components"
import { SKILL_CATEGORIES } from "../../config/Skills"

const TagsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
  margin-bottom: 12px;
`
const getColor = (cat) => {
  if (SKILL_CATEGORIES.all === cat) return "#4b8516"
  if (SKILL_CATEGORIES.backend === cat) return "#a97430"
  if (SKILL_CATEGORIES.testing === cat) return "#0f6bbb"
  if (SKILL_CATEGORIES.styling === cat) return "#723c3c"
  return "#43617b"
}

const Tag = styled.span`
  letter-spacing: 1px;
  background-color: ${({cat})=> getColor(cat)};
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 99px;
  color: #d1d1d1;
  margin-right: 4px;
  margin-bottom: 7px;
  font-size: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Tags = ({skills}) => {
  return (
    <TagsSection>
      {
        skills.map((skill, i)=> {
          const [name, group] = skill
          console.log("SKIL", skill)
          return <Tag cat={group} key={i}>{name}</Tag>
        })
      }
    </TagsSection>
  )
}
