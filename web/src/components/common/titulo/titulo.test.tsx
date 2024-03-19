import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Titulo } from '.'
 
test('Titulo', () => {
  render(<Titulo />)
  expect(screen.getByRole('heading', { level: 1, name: 'Blume Capel Model' })).toBeDefined()
})