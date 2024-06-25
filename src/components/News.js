import React, { Component } from "react";
import Loading from "./Loading";
import NewsTiles from "./NewsTiles";
import PropTypes from "prop-types";
export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    catogory: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      artcles: [],
      page: 1,
      totalResults: 20,
      loading: false,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogory}&apiKey=aaf19c11acca4f37afa14f37657423b0`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let pdata = await data.json();
    console.log(pdata);
    this.setState({
      artcles: pdata.articles,
      loading: false,
    });
  }

  updateData = async () => {};

  handleNext = async () => {
    if (!(Math.ceil(this.state.totalResults / 10) <= this.state.page)) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.catogory
      }&apiKey=aaf19c11acca4f37afa14f37657423b0&page=${
        this.state.page + 1
      }&pageSize=9`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let pdata = await data.json();
      this.setState({
        artcles: pdata.articles,
        page: this.state.page + 1,
        loading: false,
      });
    } else {
    }
  };
  handlePrev = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.catogory
    }&apiKey=aaf19c11acca4f37afa14f37657423b0&page=${
      this.state.page - 1
    }&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({
      artcles: pdata.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Breaking News</h2>
        {this.state.loading && <Loading />}
        <div className="row text-center">
          {this.state.artcles.map((elem) => {
            return (
              <div className="col-md-4" key={elem.url}>
                <NewsTiles
                  title={elem.title}
                  description={elem.description}
                  url={elem.url}
                  urlToImage={elem.urlToImage}
                  time={new Date(elem.publishedAt).toLocaleString()}
                  source={elem.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-warning"
            onClick={this.handlePrev}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalResults / 10) <= this.state.page
            }
            type="button"
            className="btn btn-warning"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
