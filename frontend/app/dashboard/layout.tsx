'use client'
import Sidebar from "../ui/sidebar";
import { ReactNode } from "react";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store from "../features/store";
import { MaterialDesignContent } from 'notistack'
import { styled } from '@mui/material/styles';
import type { CustomContentProps } from 'notistack';
import {persistor} from '../features/store'
import { PersistGate } from "redux-persist/integration/react";


const StyledMaterialDesignContent = styled(MaterialDesignContent)<CustomContentProps>(() =>
 (
 
  {
  minWidth: '320px',
  maxWidth: '500px',
  minHeight: '60px',
  padding: '16px 20px',
  marginTop: '20px',
  borderRadius: '12px',
  fontSize: '14px',
  
  '&.notistack-MuiContent-success': {
    backgroundColor: '#2D7738',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#970C0C',
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: '#E9D502',
  },
}));

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}   anchorOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}
   Components={{
    success: StyledMaterialDesignContent,
    error: StyledMaterialDesignContent,
  }}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <div className="flex h-auto">
      <Sidebar />
      <main className="w-screen h-screen flex items-center justify-center ">
        {children}
      </main>
    </div>
      </PersistGate>
    </Provider>
    </SnackbarProvider>
  );
}
