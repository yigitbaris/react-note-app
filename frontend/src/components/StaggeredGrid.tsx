import { Container, Grid, Box } from '@mui/material'

const items = [
  { id: 1, height: 200 },
  { id: 2, height: 150 },
  { id: 3, height: 250 },
  { id: 4, height: 100 },
  { id: 5, height: 300 },
  { id: 6, height: 180 },
]

const StaggeredGrid = () => {
  return (
    <Container>
      <Grid container spacing={2} className='w-full'>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box
              className='bg-blue-500 rounded p-4'
              style={{ height: item.height }}
            >
              Item {item.id}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default StaggeredGrid
