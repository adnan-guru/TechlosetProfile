import React from 'react';
import { style } from './style.js'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Myprofile from '../../modules/myprofile';
import Paystuff from '../../modules/paystuff';
import Leave from'../../modules/leave';
import Social from '../../modules/social';
import Agreement from '../../modules/agreement';
import Document from '../../modules/document';
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newVal) => {
    setValue(newVal);
  };
  return (
    <div >
      <div style={style.main}>
        <Tabs
        indicatorColor="primary"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab style={style.heading2} label="Profile" {...a11yProps(0)} />
          <Tab style={style.heading2} label="Paystuff"  {...a11yProps(1)} />
          <Tab style={style.heading2} label="Leaves" {...a11yProps(2)} />
          <Tab style={style.heading2} label="Document" {...a11yProps(3)} />
          <Tab style={style.heading2} label="Agrement" {...a11yProps(4)} />
          <Tab style={style.heading2} label="Social" {...a11yProps(5)} />
          <Tab style={style.heading2} label="Education" {...a11yProps(6)} />
        </Tabs>
      </div>
      <Grid container>
        <Grid item md={12} xs={12}>
          <TabPanel value={value} index={0}>
            <Myprofile />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Paystuff />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Leave />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Document />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Agreement />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Social />
          </TabPanel>
          <TabPanel value={value} index={6}>
            code Receive
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}