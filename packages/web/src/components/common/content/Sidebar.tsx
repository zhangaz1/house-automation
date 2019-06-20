import * as React from 'react'
import {
  EuiNavDrawer,
  EuiNavDrawerGroup,
  EuiHorizontalRule,
  EuiImage,
  EuiI18n
} from '@elastic/eui'
import { navigate } from '@reach/router'

const Sidebar = () => {

  const publicLinks = [
    {
      label: 'Home',
      onClick: () => navigate('/dashboard'),
      iconType: 'dashboardApp',
    },
    {
      label: 'Cômodos',
      onClick: () => navigate('/rooms'),
      iconType: 'spacesApp',
    },
  ];

  const adminLinks = [
    {
      label: 'Usuários',
      onClick: () => navigate('/users'),
      iconType: 'usersRolesApp',
    },
    {
      label: 'Placas',
      onClick: () => navigate('/boards'),
      iconType: 'managementApp',
    },
    {
      label: 'Dispositivos',
      onClick: () => navigate('/boardIos'),
      iconType: 'graphApp',
    },
  ];

  return (
    <EuiNavDrawer translations={{ 'euiNavDrawer.sideNavCollapse': 'Fechar Menu'}}>
      <EuiNavDrawerGroup listItems={publicLinks} />
      <EuiHorizontalRule margin="none" />
      <EuiNavDrawerGroup listItems={adminLinks} />
    </EuiNavDrawer>
  );
}

export default Sidebar;