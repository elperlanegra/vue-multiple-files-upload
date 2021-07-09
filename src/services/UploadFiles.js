// upload(file): POST form data with a callback for tracking upload progress
// getFiles(): GET list of Files’ information

import http from '../http-common';

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append('file', file);

    return http.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get('/files');
  }
}

export default new UploadFilesService();

// – First we import Axios as http from http-common.js.

// – FormData is a data structure that can be used to store key-value pairs. 
// We use it to build an object which corresponds to an HTML form with append() method.

// – We pass onUploadProgress to exposes progress events. 
// This progress event are expensive (change detection for each event), 
// so you should only use when you want to monitor it.

// – We call the post() & get() method of Axios to send an HTTP POST & Get 
// request to the File Upload server.




