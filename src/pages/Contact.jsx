import { Box, Container } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <section className="py-12 xl:py-24 h-full bg-pink-100">
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        {/* text */}
        <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
          <div className="tex-sm uppercase font-semibold mb-4 text-black tracking-[4px]">
            Web Developer
          </div>
          <h1 className="h1 mb-2">Hola, me llamo Kevin Pardo</h1>
          <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            Programador Analista
          </p>
          {/* buttons */}
        </div>
        {/* img */}
        <div className="hidden xl:flex relative">image</div>
      </Box>
    </Container>
  </section>
  )
}

export default Contact