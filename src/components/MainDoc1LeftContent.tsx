import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


/*
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
*/

function MainDoc1LeftContent() {
  return (

              <div className="maindoc1leftcontent">

                    <h1>Under Construction</h1>
                    {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
              </div>

  );
}

export default MainDoc1LeftContent;

