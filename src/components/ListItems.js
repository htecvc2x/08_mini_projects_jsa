import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";

class ListItems extends Component {
  state = {};

  updateFilter = searchTerm => {};

  render() {
    const { title, items, packed, 
        onItemRemoved, onItemToggled} = this.props;
    const elements = items.filter((item) => item.packed == packed).map((item) => {
    return (
        <Item item={item}
            onItemRemoved={onItemRemoved}
            onItemToggled={onItemToggled}/>
    )
    });
    return (
      <section>
        <h3 className="mb-3">{title}</h3>
        <Filter filter={""} onChange={this.updateFilter} />
        <ul className="mb-3 p-0">
            {elements}
        </ul>
      </section>
    );
  }
}

export default ListItems;
