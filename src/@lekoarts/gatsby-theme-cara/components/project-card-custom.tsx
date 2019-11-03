/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ProjectCardCustomProps = {
  link: string
  readMoreLink: string
  title: string
  subTitle: string
  date: string
  children: React.ReactNode
  bg: string
}

const ProjectCardCustom = ({
  link,
  readMoreLink,
  title,
  subTitle,
  date,
  children,
  bg
}: ProjectCardCustomProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div
      sx={{
        textDecoration: `none`,
        color: `white`,
        letterSpacing: `wide`,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
  
    <div
      sx={{
        pt: 1,
        fontSize: [1],
        fontWeight: `small`,
      }}
    >
      {date} | {subTitle}
    </div>

    <div
      sx={{
        opacity: 0.75,
        textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
          pt: 4,
      }}
    >
      {children}
      {readMoreLink &&
        <div>
          <a
            sx={{
              textDecoration: `none`,
              color: `primary`,
            }}
            href={readMoreLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Read more
          </a>
        </div>
      }
    </div>

  </a>
)

export default ProjectCardCustom
