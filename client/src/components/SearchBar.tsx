import * as React from 'react';

import { MdSearch } from 'react-icons/lib/md';
import styled from 'styled-components';
import { Button, Input } from './styles';

const SearchForm = styled.form`
  display: flex;
  align-items: stretch;
`;

const Search = Input.extend`
  margin-bottom: 0px;
  width: 200px;
`;

const SearchButton = Button.extend`height: auto;`;

export default class SearchBar extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = { searchText: '' };
    this.handleSearch = this.handleSearch.bind(this);
    this.submit = this.submit.bind(this);
  }

  public handleSearch(e: React.ChangeEvent<any>) {
    this.setState({ searchText: e.target.value });
  }

  public submit(e: React.FormEvent<any>) {
    e.preventDefault();
    // Do something here to search for streamer
  }

  public render() {
    return (
      <div>
        <SearchForm onSubmit={this.submit}>
          <Search
            type="text"
            name="search"
            placeholder="Search"
            onChange={this.handleSearch}
          />
          <SearchButton type="submit">
            <MdSearch size={24} />
          </SearchButton>
        </SearchForm>
      </div>
    );
  }
}
