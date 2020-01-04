import React, { Component } from "react";
import { storage } from "../../firebase";

class UploaderImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({
        image
      }));
    }
  };

  handleClick = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress
        const progress = Math.random(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState(() => ({ progress: progress }));
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState(() => ({ url: url }));
          });
      }
    );
  };
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h2>Uploading Image</h2>

            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={this.handleChange}
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose file
              </label>
            </div>
            <br />
            <br />
            <br />
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${this.state.progress}%` }}
                aria-valuenow={4}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                25%
              </div>
            </div>

            <br />
            <button onClick={this.handleClick} className="btn btn-primary">
              Carregar agora
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src={this.state.url || "http://via.placeholder.com/20x20"}
            alt="Upload imgae"
            className="card-img"
          />
          <div className="card-body"></div>
        </div>
      </div>
    );
  }
}

export default UploaderImage;
