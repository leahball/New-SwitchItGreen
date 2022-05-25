import * as React from 'react'
import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import defaultColors, { ColorOptions } from './colors'

interface Theme {
  theme?: {
    colors: {
      [key: string]: {
        [key: string]: string
      }
    }
  }
}

const PaletteContainer = styled.div<Theme>`
  padding: 20px;
  background-color: ${({ theme }) => `${theme.colors.silver.highlight}`};
`

const StyledDiv = styled.div<Theme>`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  box-shadow: ${({ theme }) => `3px 3px ${theme.colors.silver.highlight}`};
  border: ${({ theme }) => `1px solid ${theme.colors.black.base}`}; ;
`

const StyledSpan = styled.h6`
  font-size: 14px;
  margin-left: 8px;
  &:first-letter {
    text-transform: capitalize;
  }
`

const StyledColorHeader = styled.h3`
  font-size: 20px;
  &:first-letter {
    text-transform: capitalize;
  }
`

const PaletterWrapper = styled.div`
  display: inline-grid;
  gap: 1rem;
  justify-items: center;
  margin: 1rem 0;
`

interface ColorPaletteProps {
  colorOption: string
  colorCode: string
}

const ColorPalette = ({ colorOption, colorCode }: ColorPaletteProps) => (
  <div>
    <StyledDiv color={colorCode} />
    <StyledSpan>{colorOption}</StyledSpan>
  </div>
)

export default {
  title: 'Assets/Colors',
  component: ColorPalette,
  parameters: {
    componentSubtitle: 'For showcasing all available colors.',
    docs: {
      description: {
        component:
          'This components is providing information about available colors and its varients. We have injected them inside the theme provider so those are easily available for use.',
      },
    },
    controls: {
      sort: 'alpha',
    },
  },
} as ComponentMeta<typeof ColorPalette>

export const ColorUsage: ComponentStory<typeof ColorPalette> = () => {
  return (
    <PaletteContainer>
      {Object.keys(defaultColors).map(el => {
        const colors = defaultColors[el]
        return (
          <div key={el}>
            <StyledColorHeader>{el}</StyledColorHeader>
            <PaletterWrapper style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
              {Object.keys(colors).map((colorOption, i) => {
                const colorCode = colors[colorOption as ColorOptions] as string
                return <ColorPalette key={i} colorOption={colorOption} colorCode={colorCode} />
              })}
            </PaletterWrapper>
          </div>
        )
      })}
    </PaletteContainer>
  )
}
