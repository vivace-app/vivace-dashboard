import type { AppProps } from 'next/app'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

function MyApp({ Component, pageProps }: AppProps) {
  const listMenu = [
    {icon: <WorkspacePremiumRoundedIcon />, name: 'ライセンス'},
    {icon: <LibraryMusicRoundedIcon />, name: '楽曲一覧'},
    {icon: <GroupRoundedIcon />, name: 'ユーザー一覧'},
    {icon: <GradeRoundedIcon />, name: 'スコア一覧'}
  ];

  return <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Vivace-dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['ダッシュボード'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {listMenu.map((value, key) => (
                <ListItem key={key} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {value.icon}
                    </ListItemIcon>
                    <ListItemText primary={value.name} />
                  </ListItemButton>
                </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Box>
  </>
}

export default MyApp
