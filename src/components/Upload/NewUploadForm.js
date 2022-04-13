import React, { Component } from "react";
import {postFile} from "../../api/requests";
import "./NewUploadForm.css";

class NewUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      file: []
    };
    this.onChangeFileName.bind(this);
    this.onChangeFile.bind(this);
    this.fileRef = React.createRef();
  }
  onChangeFileName = e => {
    this.setState({ fileName: e.target.value });
  };
  onChangeFile = e => {
    this.setState({ file: e.target.files[0] });
  };
  handleUpload = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("fileName", this.state.fileName);
    formData.append("file", this.state.file);
    await postFile(formData);
    this.setState({ fileName: "" });
    this.fileRef.current.value = "";
    this.props.setRefresh(!this.props.refresh)
  };
  render() {
    return (
      <form onSubmit={this.handleUpload}>
        <div className="mb-3">
          <label className="form-label">Nom du fichier</label>
          <input
            type="text"
            name="fileName"
            className="form-control"
            value={this.state.fileName}
            placeholder="nom du fichier"
            onChange={this.onChangeFileName}
          />
          <label className="form-label">Importer un fichier video</label>
          <input
            className="form-control"
            type="file"
            name="file"
            ref={this.fileRef}
            onChange={this.onChangeFile}
          />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Upload
        </button>
      </form>
    );
  }
}
export default NewUploadForm;
