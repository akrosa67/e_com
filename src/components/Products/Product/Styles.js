import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    //  maxWidth: 345,
    maxWidth: '100%',
    height:'fitContent'  
  },
  media: {
    height:'100%',
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));