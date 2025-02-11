import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';



const Breadcrumb = () => {
  const { pathname } = useLocation();
  const route = pathname?.split('/')[2]
  const navigate = useNavigate()
  function handleClick(event) {
    event.preventDefault();
    navigate('/admin/dasboard')
  }
  return (
    <div role="presentation" className='cursor-pointer' onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to='/admin/dasboard'>
          Dasboard
        </Link>
        {/* <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link> */}
        <Typography sx={{ color: 'text.primary' }}>{route}</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb
