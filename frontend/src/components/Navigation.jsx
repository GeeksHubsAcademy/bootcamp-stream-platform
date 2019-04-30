import React from 'react';

import { connect } from 'react-redux';
import { Link } from '@reach/router';

import './Navigation.scss'

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';




      const Navigation = (props) => {

        const styles = {
          customWidth: {
          width: 200,
    }   
  }
    return(
      <nav className="navigation">

     <div className="logo">
     logo

      <div>

        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
        <br />
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Custom width" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
  
      </div>
      </div>
  
    <div className="user">

      {
        props.user
          ? (
          <div className="logged">
            <div className="avatar">avatar</div>
            <nav className="menu">
              <Link to='movies/top_rated'>top rated</Link>

              { props.user.role === 'admin' && <Link to='/admin'>admin</Link> }
              <Link to='Login'>popular</Link>
            </nav>
          </div>)
          : <Link to="/login">login</Link>
      }



    </div>
    
  </nav>
    )
     
    
    }
  
    
export default connect(state => ({ user: state.user }))(Navigation);

