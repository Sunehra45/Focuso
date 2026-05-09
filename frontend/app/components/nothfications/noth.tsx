 import { enqueueSnackbar } from "notistack";
 
 const sessionSaved = () => {
    enqueueSnackbar('Session Saved successfully!', {
      variant: 'success',
    });
};
 const sessionFailed = () => {
    enqueueSnackbar(`could'nt save session. `, {
      variant: 'error',
    });
};

 const authSuccess = () => {
    enqueueSnackbar('Logged In successfully!', {
      variant: 'success',
    });
};

const authFailed =(errorMessage:string)=>{
  enqueueSnackbar(errorMessage, {
    variant: 'error',
  });
}

 const profileImageSuccess = () => {
    enqueueSnackbar('Profile Image Uploaded Successfully!', {
      variant: 'success',
    });
};

 const profileImageError = () => {
    enqueueSnackbar('Could not upload profile. Try in a while!', {
      variant: 'error',
    });
};
 const profileImageWarning = () => {
    enqueueSnackbar('Only jpeg and png file type is allowed', {
      variant: 'warning',
    });
};


const logoutFailed =()=>{
  enqueueSnackbar('Failed to logout.Try again in a while.', {
    variant: 'error',
  });
}

export {
sessionSaved,
authSuccess,
authFailed,
profileImageSuccess,
profileImageError,
profileImageWarning,
logoutFailed,
sessionFailed
}