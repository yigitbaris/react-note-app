import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

interface NoteCardProps {
  title: string
  content: string
}

const NoteCard = ({ title, content }: NoteCardProps) => {
  return (
    <Card className='relative group h-72'>
      <CardContent className='relative overflow-hidden max-h-[90%] transition-all duration-300 ease-in-out group-hover:max-h-full group-hover:overflow-visible'>
        <Typography variant='h4' component='div'>
          {title}
        </Typography>
        <Typography
          variant='h6'
          color='text.secondary'
          className='bg-slate-500 overflow-hidden text-pretty'
        >
          {content}
        </Typography>
      </CardContent>
      <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
        <IconButton aria-label='edit' size='large' className='mr-2'>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='delete' size='large'>
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
  )
}

export default NoteCard
