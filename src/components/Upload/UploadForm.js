import "./UploadForm.css";
import NewUploadForm from "./NewUploadForm";

const UploadForm = (props) => {
  return (
    <div className="new-upload">
      <NewUploadForm setRefresh={props.setRefresh} refresh={props.refresh}/>
    </div>
  );
};
export default UploadForm;
