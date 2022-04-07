import './NewUploadForm.css'
const NewUploadForm = () => {
    return (
        <form>
            <div class="mb-3">
                <label for="formFile" class="form-label">Importer un fichier video</label>
                <input class="form-control" type="file" id="formFile" />
                <label for="formFile" class="form-label">Importer un fichier video</label>
                <input class="form-control" type="file" id="formFile" />
            </div>
            <button type="button" class="btn btn-outline-success">Upload</button>
        </form>
    )
}
export default NewUploadForm;