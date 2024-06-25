import React, { Component } from "react";

export class NewTiles extends Component {
  render() {
    let { title, description, urlToImage, url, time, source } = this.props;
    return (
      <div className="row m-2">
        <div className="card">
          <span
            class="position-absolute top-0 start-0 badge rounded-pill bg-danger"
            style={{transform: 'translate(-40%,-50%)!important'}}>
            {source}
          </span>
          <img src={urlToImage} className="card-img-top mt-2" alt="..." />
          <div className="card-body">
            <p className="card-text">
              <small className="text-muted">{time}</small>
            </p>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target="_blank" rel="noopener" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTiles;
