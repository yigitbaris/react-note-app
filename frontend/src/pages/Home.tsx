import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import NoteCard from '../components/NoteCard'
import NewNoteCard from '../components/NewNoteCard'

const notes = [
  { id: 1, title: 'Note 1', content: 'Content of note 1' },
  { id: 2, title: 'Note 2', content: 'Content of note 2' },
  {
    id: 3,
    title: 'Note 3',
    content:
      'Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3',
  },
  {
    id: 4,
    title: 'Note 3',
    content:
      'Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3',
  },
  {
    id: 5,
    title: 'Note 3',
    content:
      'Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3Content of note 3',
  },
]

const Home = () => {
  return (
    <div className='h-[93vh] bg-slate-600 p-4'>
      <Container maxWidth='lg' className='flex-1'>
        <Grid container spacing={5}>
          {notes.map((note) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={note.id}>
              <NoteCard title={note.title} content={note.content} />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <NewNoteCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home
