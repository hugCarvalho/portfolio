import styled from "styled-components"

const TagsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
  margin-bottom: 12px;
`
const Tag = styled.span`
  letter-spacing: 1px;
  background-color: #43617b;
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
          return <Tag key={i}>{skill}</Tag>
        })
      }
    </TagsSection>
  )
}
