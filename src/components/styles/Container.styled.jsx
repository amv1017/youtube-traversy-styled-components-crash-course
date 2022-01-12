import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 0 20px;
  width: 1000px;
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
