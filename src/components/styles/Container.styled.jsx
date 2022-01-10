import styled from 'styled-components'

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`

/*
// import trick: CSS as source

import styled from 'styled-components'
import rawCSS from './styling.rcss'

const fetchCSS = async () => {
  const res = await fetch(rawCSS);
  const data = await res.text();
  return data;
}

const cssData = await fetchCSS()

export const Container = styled.div`${cssData}`
*/
