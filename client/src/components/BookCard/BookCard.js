import React, { Component } from 'react';
import './BookCard.css';
import ModalBS from '../Modal/Modal';


class BookCard extends Component {
  render() {
    return (
        <div>
      <div className="card-box" onClick={this.props.openModal} isOpen={this.props.isOpen} >
      <img src={this.props.url} alt={`${this.props.title} image`} />
      <p id="strong">{this.props.title}</p>
      <p>{this.props.author}</p>
      <p id="tag">{this.props.type}</p>
      <ModalBS title={this.props.title}/>
      </div>
      </div>
    );
  }
}

export default BookCard;
