import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Content from './components/Content';
import Photos from './components/Photos';
import Footer from './components/Footer';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Exp from './Exp-Items';
import Proj from './Proj-Items';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));




function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Experience" {...a11yProps(1)} />
          <Tab label="Projects" {...a11yProps(2)} />
          <Tab label="Photography" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home expHandler={() => setValue(1)} photoHandler={() => setValue(3)}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Content items={Exp}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Content items={Proj}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Photos/>
      </TabPanel>
      <Footer />
    </div>
  );
}

export default App;
