import * as React from 'react';

import { MdSearch } from 'react-icons/lib/md';
import { Button, Input } from './styles';

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
        <form onSubmit={this.submit}>
          <Input
            type="text"
            name="search"
            placeholder="Search"
            onChange={this.handleSearch}
          />
          <Button type="submit">
            <MdSearch size={24} />
          </Button>
        </form>
      </div>
    );
  }
}
