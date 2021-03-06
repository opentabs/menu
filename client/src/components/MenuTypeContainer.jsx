import React from 'react';
import MenuItem from './MenuItem.jsx';

const MenuTypeContainer = ({itemsType, items, lastType}) => {
  let key = 0;
  const menuItems = items.map(item => {
    key++;
    return <MenuItem key={key} item={item}/>;
  });

  const styles = {
    headerDiv: {
      margin: 0,
      marginBottom: '16px',
    },
    header: {
      fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      margin: 0,
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
      padding: 0,
      display: 'block',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: '0px',
      marginInlineEnd: '0px',
    },
    container: {
      fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      columnCount: 2,
      columnGap: '32px',
      paddingBottom: '45px',
    },
    mainContainer: {
      fontFamily: 'Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      borderBottom: lastType ? '0' : '1px solid #d8d9db',
    }
  }

  return (
    <div style={styles.mainContainer}>
      <div style={styles.headerDiv}>
        <h3 className="menuTypeHeader" style={styles.header}>{itemsType}</h3>
      </div>
      <div style={styles.container}>
        {menuItems}
      </div>
    </div>
  );
}

export default MenuTypeContainer;