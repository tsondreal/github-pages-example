import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useCustomEventListener } from 'react-custom-events';
import * as CustomEventConstants from '../components/CustomEventConstants';

export default function PictureModal({imageName}:{imageName:string}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      useCustomEventListener(CustomEventConstants.PICTURE_MODAL_EVENT, data => {
        console.log("PictureModal - useCustomEventListener - " + data);
        handleOpen();
    });

    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          disableEnforceFocus
        >
          <Box sx={style}>
            <img src={imageName}   />
          </Box>
        </Modal>
      </div>
    );
  }

  /*
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          disableEnforceFocus
        >
          <Box sx={style}>
            <img src={imageName}   />
          </Box>
        </Modal>
      </div>
  */