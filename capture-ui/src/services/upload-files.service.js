import http from "../http-common";

class UploadFilesService {
  upload(file,page, onUploadProgress) {
    let formData = new FormData();

    formData.append("uploadFile", file);

    return http.post("/uploadAndPrepare/" + page, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  executeRules(transactionalId,application, workflow, rules, onUploadProgress) {
    let formData = new FormData();

    let url = "/executeRules/" + transactionalId + "/" + application + "/"+workflow +"/"+rules+"/xml"
    console.log(url)

    return http.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();
