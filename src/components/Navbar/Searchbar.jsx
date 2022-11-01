import React from 'react';
import styled from 'styled-components';
import { Search } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
import FlexBox from 'components/Common/FlexBox';

const SearchBar = styled(Search)`
  .ui.input > input {
    width: 42rem;
    height: 3rem;
    border: none;
    background-color: #f2f2f2;
  }
`;

const BellIcon = styled(Icon)`
  margin: 0.5rem 0 0 1.2rem !important;
  width: 2rem;
  color: #898989;
`;

const Searchbar = () => (
  <FlexBox margin="2rem 0 0 3rem">
    <SearchBar size="huge" showNoResults={false} />
    <BellIcon name="bell outline" size="big" />
  </FlexBox>
);
export default Searchbar;
